import { productSchema } from "../schemas/productSchema";


export const productsService = {
  async getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    const result = productSchema.array().safeParse(data);

    if (!result.success) {
      throw new Error("Failed to fetch products");
    }
    return result.data
  },

  async getProductById(id: number) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    const result = productSchema.safeParse(data);
    
    if (!result.success) {
      throw new Error("Failed to fetch product");
    }
    return result.data;
  }
}