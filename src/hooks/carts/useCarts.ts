import { useContext } from "react";
import { CartsContext } from "../../contexts/CartsContext";

export const useCarts = () => {
  return useContext(CartsContext);
}