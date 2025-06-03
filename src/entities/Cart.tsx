export interface Cart {
  id: number;
  userId: number;
  date: string;
  products: {
    productId: number;
    quantity: number;
  }[];
}

export interface CartItem {
  userId: number;
  productId: number;
  quantity: number;
}