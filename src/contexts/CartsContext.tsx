import { createContext, useEffect, useState } from "react";
import type { Cart } from "../schemas/cartSchema";
import type { CartItem } from "../entities/Cart";
import { cartService } from "../services/cartService";


export interface CartContextData {
  carts: Cart[];
  finishCart: (finishedCart: CartItem[], userId: number) => void;
}

export const CartsContext = createContext<CartContextData>({
  carts: [],
  finishCart: () => {}
});

interface CartsContextProviderProps {
  children: React.ReactNode;
}


export const CartsContextProvider: React.FC<CartsContextProviderProps> = ({ children }) => {

  const [carts, setCarts] = useState<Cart[]>([]);

  useEffect(() => {
      cartService.getCarts()
        .then(setCarts)
        .catch(err => console.error("Erro ao buscar carrinhos:", err));
    }, []);

    const finishCart = (finishedCart: CartItem[], userId: number) => {
      const id = Math.max(...carts.map(cart => cart.id)) + 1; // Generate a new ID

    
      const newCart: Cart = {
        id,
        userId: userId,
        date: new Date().toISOString(),
        products: finishedCart.map(item => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
      };
      setCarts(prevCarts => [...prevCarts, newCart]);
      cartService.createCart(newCart)
        .then(() => {
          console.log("Carrinho adicionado com sucesso");
        })
        .catch(err => {
          console.error("Erro ao adicionar carrinho:", err);
        });
      
    }

  return (
    <CartsContext.Provider value={{ carts, finishCart }}>
      {children}
    </CartsContext.Provider>
  );
};