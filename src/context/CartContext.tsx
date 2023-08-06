import React, { createContext, useState, useEffect } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextValue {
  cartItems: CartItem[];
  totalPrice: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  increaseQuantity: (itemId: number) => void;
  decreaseQuantity: (itemId: number) => void;
}

export const CartContext = createContext<CartContextValue>({
  cartItems: [],
  totalPrice: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    // Calculate the total price whenever the cart items change
    const newTotalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id,
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = cartItems.map((cartItem, index) =>
        index === existingItemIndex
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const increaseQuantity = (itemId: number) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === itemId
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (itemId: number) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === itemId
        ? { ...cartItem, quantity: Math.max(0, cartItem.quantity - 1) }
        : cartItem,
    );
    setCartItems(updatedCartItems.filter((item) => item.quantity > 0));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalPrice,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
