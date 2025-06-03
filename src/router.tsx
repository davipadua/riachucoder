import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ShowProduct from "./pages/ShowProduct";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/:userId",
    element: <RootLayout />,
    children: [
      { path: "products", element: <Home /> },
      { path: "products/:id", element: <ShowProduct /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

export default router;