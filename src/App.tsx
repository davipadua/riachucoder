import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ProductsContextProvider } from "./contexts/ProductsContext";
import { UsersContextProvider } from "./contexts/UsersContext";
import { CartsContextProvider } from "./contexts/CartsContext";
import { ActiveCartProvider } from "./contexts/ActiveCartContext";

export default function App() {
  return (
    <UsersContextProvider>
      <ProductsContextProvider>
        <CartsContextProvider>
          <ActiveCartProvider>
            <RouterProvider router={router} />
          </ActiveCartProvider>
        </CartsContextProvider>
      </ProductsContextProvider>
    </UsersContextProvider>
  );
}