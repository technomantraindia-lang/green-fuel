import { createContext, useContext, useState, useEffect, useMemo } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  // Initialize cart from localStorage or empty array
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('greenfuel_cart')
      return saved ? JSON.parse(saved) : []
    } catch (e) {
      return []
    }
  })

  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false)

  // Persist cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('greenfuel_cart', JSON.stringify(cartItems))
    } catch (e) {
      console.error('Failed to save cart to localStorage:', e)
    }
  }, [cartItems])

  // Add product to cart
  const addToCart = (product, quantityToAdd = 1, openDrawer = true) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id)
      if (existingIndex > -1) {
        const updated = [...prev]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantityToAdd
        }
        return updated
      } else {
        return [...prev, { product, quantity: quantityToAdd }]
      }
    })

    if (openDrawer) {
      setIsCartDrawerOpen(true)
    }
  }

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId))
  }

  // Update item quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  // Clear entire cart
  const clearCart = () => {
    setCartItems([])
  }

  // Compute total item count
  const totalItems = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0)
  }, [cartItems])

  // Compute cart subtotal
  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
  }, [cartItems])

  const formattedSubtotal = useMemo(() => {
    return `₹${subtotal.toLocaleString('en-IN')}`
  }, [subtotal])

  const openCartDrawer = () => setIsCartDrawerOpen(true)
  const closeCartDrawer = () => setIsCartDrawerOpen(false)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalItems,
        subtotal,
        formattedSubtotal,
        isCartDrawerOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        openCartDrawer,
        closeCartDrawer,
        setIsCartDrawerOpen
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
