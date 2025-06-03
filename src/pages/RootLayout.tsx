import { Link, Outlet, useParams } from "react-router-dom";
import { useActiveCart } from "../hooks/carts/useActiveCart";

export default function RootLayout() {
  const { userId } = useParams();
  const { cart } = useActiveCart();

  let cartQuantity = 0;
  for (let index = 0; index < cart.length; index++) {
    const element = cart[index];
    if (element.userId === Number(userId)) {
      cartQuantity += element.quantity;
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">Riachucoder</h1>
        <nav className="bg-gray-800 text-white p-4 w-full">
          <ul className="flex space-x-4">
            <li>
              <Link to={`/${userId}/products`} className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link to={`/${userId}/cart`} className="hover:underline">
                Cart: {cartQuantity}
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow p-4">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white text-center p-4 w-full">
        <p className="text-sm">
          © {new Date().getFullYear()} Riachucoder. All rights reserved.
        </p>
      </footer>
    </div>
  );
}