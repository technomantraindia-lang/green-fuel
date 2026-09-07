import { createContext, useContext, useState, useEffect, useMemo } from 'react'
import { CATALOGUE_PRODUCTS } from '../data/shopData'
import { wishlistAPI } from '../services/apiService'

const WishlistContext = createContext()

export function WishlistProvider({ children }) {
  // Initialize wishlist from localStorage or empty array
  const [wishlistIds, setWishlistIds] = useState(() => {
    try {
      const saved = localStorage.getItem('greenfuel_wishlist')
      return saved ? JSON.parse(saved) : []
    } catch (e) {
      return []
    }
  })

  // Sync with Laravel Backend API on initial mount if auth token is present
  useEffect(() => {
    const syncWithLaravelBackend = async () => {
      const token = localStorage.getItem('greenfuel_auth_token')
      if (token) {
        const response = await wishlistAPI.getWishlist()
        if (response && response.data) {
          // Format expected from Laravel API: response.data = ['prod-1', 'prod-4'] or [{ product_id: 'prod-1' }]
          const backendIds = Array.isArray(response.data)
            ? response.data.map(item => typeof item === 'object' ? item.product_id || item.id : item)
            : []
          if (backendIds.length > 0) {
            setWishlistIds(backendIds)
          }
        }
      }
    }
    syncWithLaravelBackend()
  }, [])

  // Persist wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('greenfuel_wishlist', JSON.stringify(wishlistIds))
    } catch (e) {
      console.error('Failed to save wishlist to localStorage:', e)
    }
  }, [wishlistIds])

  // Toggle wishlist item (Optimistic local update + Async Laravel API call)
  const toggleWishlist = async (productId) => {
    setWishlistIds((prev) => {
      const isCurrentlyFavorited = prev.includes(productId)
      const updated = isCurrentlyFavorited
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]

      // Async sync with Laravel Backend
      const token = localStorage.getItem('greenfuel_auth_token')
      if (token) {
        wishlistAPI.toggleWishlist(productId).catch((err) => {
          console.warn('[Laravel API] Wishlist sync failed, relying on local state.', err)
        })
      }

      return updated
    })
  }

  const addToWishlist = async (productId) => {
    setWishlistIds((prev) => {
      if (prev.includes(productId)) return prev
      const updated = [...prev, productId]
      
      const token = localStorage.getItem('greenfuel_auth_token')
      if (token) {
        wishlistAPI.addToWishlist(productId).catch(err => {
          console.warn('[Laravel API] Add wishlist failed:', err)
        })
      }

      return updated
    })
  }

  const removeFromWishlist = async (productId) => {
    setWishlistIds((prev) => {
      const updated = prev.filter((id) => id !== productId)

      const token = localStorage.getItem('greenfuel_auth_token')
      if (token) {
        wishlistAPI.removeFromWishlist(productId).catch(err => {
          console.warn('[Laravel API] Remove wishlist failed:', err)
        })
      }

      return updated
    })
  }

  const isInWishlist = (productId) => {
    return wishlistIds.includes(productId)
  }

  // Get full product objects of wishlisted items
  const wishlistProducts = useMemo(() => {
    return CATALOGUE_PRODUCTS.filter((p) => wishlistIds.includes(p.id))
  }, [wishlistIds])

  const wishlistCount = wishlistIds.length

  return (
    <WishlistContext.Provider
      value={{
        wishlistIds,
        wishlistProducts,
        wishlistCount,
        toggleWishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return context
}
