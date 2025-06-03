import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ShowProduct from "./pages/ShowProduct";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Cart from "./pages/Cart";


const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  children: [
    {index: true, element: <LoginPage />},
    {path: "/:userId/products", element: <Home /> },
    {path: "/:userId/products/:id", element: <ShowProduct />},
    {path: "/:userId/cart/", element: <Cart/>}
    
  ] 
}])

export default router;