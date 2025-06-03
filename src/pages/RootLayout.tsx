import { Link, Outlet, useParams } from "react-router-dom";
import { useActiveCart } from "../hooks/carts/useActiveCart";

export default function RootLayout() {

  const { userId } = useParams()
  const { cart } = useActiveCart()

  let cartQuantity = 0
  for (let index = 0; index < cart.length; index++) {
    const element = cart[index];
    if (element.userId === Number(userId)) {
      cartQuantity += element.quantity;
    } 
  }

  return (
    <>
      <header>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Riachucoder</title>
      </header>
      <h1 className="text-2xl font-bold mb-4">Riachucoder</h1>
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to={`/${userId}/products`} className="hover:underline">Products</Link>
          </li>
          <li>
            <Link to={`/${userId}/cart`} className="hover:underline">Cart: {cartQuantity}</Link>
          </li>
          </ul>
      </nav>
      
        <Outlet />
      
      <footer className="bg-gray-800 text-white text-center p-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Riachucoder. All rights reserved.
        </p>
      </footer> 
    
    </>
  );
}