// components/CartItem.tsx
import React from "react";
import type { Product } from "../schemas/productSchema";
import { useActiveCart } from "../hooks/carts/useActiveCart";



type CartItemProps = {
  product: Product & { quantity: number };
  userId: number;
};

const CartItem: React.FC<CartItemProps> = ({ product, userId }) => {

  const { removeItemFromCart } = useActiveCart()

  const handleDelete = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const productId = (form.productId as HTMLInputElement).value;

    removeItemFromCart(Number(userId), Number(productId));
    alert(`${product.title} removed from cart.`);
  }
  
  return (
    <div className="flex items-center border p-4 m-4">
      <img
        className="w-30 object-contain mr-4"
        src={product.image}
        alt={product.title}
      />
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <p>Subtotal: ${product.price * product.quantity}</p>
      </div>
      <form onSubmit={handleDelete} className="flex items-center ml-4">
        <input
          type="hidden"
          name="productId"
          value={product.id}
          className="hidden"
        />
        <button
          type="submit"
          className="ml-auto bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Remove
        </button>
      </form>
    </div>
  );
};

export default CartItem;
