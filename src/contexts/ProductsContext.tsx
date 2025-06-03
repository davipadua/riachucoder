import React, { createContext, useEffect, useState, type ReactNode } from "react";
import type { Product } from "../schemas/productSchema";
import { productsService } from "../services/productService";


export interface ProductsContextData{
  products: Product[];
}

export const ProductsContext = createContext({} as ProductsContextData);

interface ProductsContextProviderProps {
  children: ReactNode;
}

export const ProductsContextProvider: React.FC<ProductsContextProviderProps> = ({ children }) => {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    productsService.getProducts().then((data) => setProducts(data))
  }, []);


  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}