import { Link, useParams } from "react-router-dom";
import { useProducts } from "../hooks/products/useProduts";
import { useActiveCart } from "../hooks/carts/useActiveCart";
import { useCarts } from "../hooks/carts/useCarts";
import CartItem from "../components/CartItem";

export default function Cart() {

  const { userId } = useParams()
  const { cart, clearUserCart } = useActiveCart()
  const { carts, finishCart } = useCarts()
  const { products } = useProducts()

  let localCart = []
  for (let index = 0; index < cart.length; index++) {
    if (cart[index].userId === Number(userId)) {
      localCart.push(cart[index]);
    }
  }

  let finalCart = []
  let total = 0
  for (let index = 0; index < localCart.length; index++) {
    const element = localCart[index];
    const product = products.find(product => product.id === element.productId);
    if (product) {
      finalCart.push({
        ...product,
        quantity: element.quantity
      });
      total += product.price * element.quantity;
    }
  }

  const handleCheckout = (event: React.FormEvent) => {
    event.preventDefault()
    if (finalCart.length === 0) {
      alert("Your cart is empty. Please add products before checking out.");
      return;
    }

    finishCart(finalCart.map(item => ({
      userId: Number(userId),
      productId: item.id,
      quantity: item.quantity
    })), Number(userId));

    clearUserCart(Number(userId));
    alert("Checkout successful! Your cart has been cleared.");
  }

  console.log("verificação dos carrinhos", carts);

  return (
    <div>
      <h1>Cart</h1>
      <p>This is the cart page.</p>
      <div>
        {finalCart.length > 0 ? (
          <>
            <div>
              {finalCart.map(product => (
                <CartItem
                  key={product.id}
                  product={product}
                  userId={Number(userId)}
                />
              ))}
              <div>
                <h2 className="text-xl font-semibold">Total: ${total}</h2>
                <form onSubmit={handleCheckout} className="mt-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Checkout</button>
                </form>
              </div>
              <Link to={`/${userId}/products`} className="inline-block mt-4 text-blue-500 hover:underline">
                Back to Products
              </Link>

            </div>
          </>
        ) : (
          <>
            <p>No products in cart.</p>
            <Link to={`/${userId}/products`} className="inline-block mt-4 text-blue-500 hover:underline">
              Back to Products
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

