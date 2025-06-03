import { createContext, useState, useEffect } from "react";
import type { CartItem } from "../entities/Cart";


type ActiveCartContextData = {
  cart: CartItem[];
  addToCart: (userId: number, productId: number, quantity: number) => void;
  clearUserCart: (userId: number) => void;
  removeItemFromCart: (userId: number, productId: number) => void;

};

export const ActiveCartContext = createContext<ActiveCartContextData>({
  cart: [],
  addToCart: () => {},
  clearUserCart: () => {},
  removeItemFromCart: () => {},
});

export const ActiveCartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem("activeCart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("activeCart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (userId: number, productId: number, quantity: number) => {
    setCart(prev => {
      const existing = prev.find(
        item => item.productId === productId && item.userId === userId
      );
      if (existing) {
        return prev.map(item =>
          item.productId === productId && item.userId === userId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { userId, productId, quantity }];
    });
  };

  const clearUserCart = (userId: number) => {
    const newCart = cart.filter(item => item.userId !== userId);
    
    setCart(newCart);
    localStorage.removeItem("activeCart");
  };



  const removeItemFromCart = (userId: number, productId: number) => {
    setCart(prev => {
      return prev.filter(item => !(item.productId === productId && item.userId === userId));
    }
  );
  };

  return (
    <ActiveCartContext.Provider value={{ cart, addToCart, clearUserCart, removeItemFromCart }}>
      {children}
    </ActiveCartContext.Provider>
  );
};
