import { userSchema } from "../schemas/userSchema";

export const userService = {
  async getUsers() {
      const response = await fetch("https://fakestoreapi.com/users");
      const data = await response.json();
      const result = userSchema.array().safeParse(data);
      if (!result.success) {
        throw new Error("Failed to fetch users");
      }
      return result.data;
    },
}