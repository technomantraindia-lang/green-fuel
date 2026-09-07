// API Service Configuration for Laravel REST Backend
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api'

/**
 * Generic Fetch Wrapper for Laravel Backend API
 */
async function fetchAPI(endpoint, options = {}) {
  const token = localStorage.getItem('greenfuel_auth_token')
  
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    })

    if (!response.ok) {
      throw new Error(`API Error ${response.status}: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.warn(`[Laravel API] Request to ${endpoint} failed. Using local fallback.`, error)
    return null
  }
}

// Wishlist Endpoints for Laravel API Integration
export const wishlistAPI = {
  // GET /api/wishlist - Fetch user wishlist from Laravel backend
  getWishlist: async () => {
    return await fetchAPI('/wishlist', { method: 'GET' })
  },

  // POST /api/wishlist/toggle - Toggle product in wishlist
  toggleWishlist: async (productId) => {
    return await fetchAPI('/wishlist/toggle', {
      method: 'POST',
      body: JSON.stringify({ product_id: productId }),
    })
  },

  // POST /api/wishlist/add - Add product to wishlist
  addToWishlist: async (productId) => {
    return await fetchAPI('/wishlist/add', {
      method: 'POST',
      body: JSON.stringify({ product_id: productId }),
    })
  },

  // DELETE /api/wishlist/:id - Remove product from wishlist
  removeFromWishlist: async (productId) => {
    return await fetchAPI(`/wishlist/${productId}`, {
      method: 'DELETE',
    })
  }
}

export default {
  fetchAPI,
  wishlistAPI
}
