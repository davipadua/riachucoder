import { useProducts } from "./useProduts";

export function useProduct(id: number) {
  const { products } = useProducts();

  const result = products.find((product) => product.id === id);
  
  return result
}
