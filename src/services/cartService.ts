import { cartSchema } from "../schemas/cartSchema";

export const cartService = {

  async getCarts() {
    const response = await fetch("https://fakestoreapi.com/carts");
    const data = await response.json();
    const result = cartSchema.array().safeParse(data);
    if (!result.success) {
      throw new Error("Failed to fetch carts");
    }
    return result.data;
  },

  async createCart(cart: { userId: number; products: { productId: number; quantity: number }[] }) {
    const response = await fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    });
    const data = await response.json();
    const result = cartSchema.safeParse(data);
    if (!result.success) {
      throw new Error("Failed to create cart");
    }
    return result.data;
  },
}
