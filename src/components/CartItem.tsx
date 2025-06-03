// components/CartItem.tsx
import React from "react";
import type { Product } from "../schemas/productSchema";
import { useActiveCart } from "../hooks/carts/useActiveCart";

type CartItemProps = {
  product: Product & { quantity: number };
  userId: number;
};

const CartItem: React.FC<CartItemProps> = ({ product, userId }) => {
  const { removeItemFromCart } = useActiveCart();

  const handleDelete = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const productId = (form.productId as HTMLInputElement).value;

    removeItemFromCart(Number(userId), Number(productId));
    alert(`${product.title} removed from cart.`);
  };

  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow m-4">
      <img
        className="w-20 h-20 object-cover rounded-md mr-4"
        src={product.image}
        alt={product.title}
      />
      
      {/* Item Details */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
        <p className="text-sm text-gray-600">Price: ${product.price.toFixed(2)}</p>
        <p className="text-sm text-gray-600">Quantity: {product.quantity}</p>
        <p className="text-sm font-medium text-gray-800">
          Subtotal: ${(product.price * product.quantity).toFixed(2)}
        </p>
      </div>

      {/* Remove Form */}
      <form onSubmit={handleDelete} className="ml-4">
        <input type="hidden" name="productId" value={product.id} />
        <button
          type="submit"
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
        >
          Remove
        </button>
      </form>
    </div>
  );
};

export default CartItem;