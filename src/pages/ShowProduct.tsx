import { Link, useParams } from "react-router-dom";
import { useProduct } from "../hooks/products/useProductById";
import { useUsers } from "../hooks/users/useUsers";
import { useActiveCart } from "../hooks/carts/useActiveCart";
import PleaseMakeLogin from "../components/PleaseLogin";


export default function ShowProduct() { 
  const { id, userId } = useParams()
  const { users } = useUsers();
  const { addToCart } = useActiveCart();

    
  const validadeUser = users.find((user) => user.id === Number(userId));
  const findItem = useProduct(Number(id));

  
  if (!findItem) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link
          to={`/${userId}/products`}
          className="inline-block px-4 py-2"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const quantity = (form.quantity as HTMLInputElement).value;
    addToCart(Number(userId), findItem.id, Number(quantity));
    alert("Product added to cart successfully!");
  }

  return (
    <>
      {!validadeUser ? (
        <PleaseMakeLogin/>
      ) : (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">{findItem.title}</h1>
          <img src={findItem.image} alt={findItem.title} className="w-80 object-cover mb-4" />
          <p className="text-gray-600 mb-4">${findItem.price}</p>
          <p className="text-gray-500 mb-6">{findItem.description}</p>
          <form onSubmit={handleAddToCart} className="flex flex-col gap-4">
            <label className="block mb-4">
              <span className="text-gray-700">Quantity</span>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="mt-1 block w-20 border border-gray-300 p-2 rounded"
                name="quantity"
                id="quantity"
              />
            </label>
            <button
              type="submit"
              className="bg-blue-500 w-30 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Add to Cart
            </button>

          </form>
          <div>
            <Link
            to={`/${userId}/products`}
            className="inline-block px-4 py-2"
          >
            Back to Products
          </Link>
          
          </div>
        </div>
      )}
    </>
  );

}