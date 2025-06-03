import { ActiveCartContext } from './../../contexts/ActiveCartContext';
import { useContext } from "react";

export const useActiveCart = () => {
  return useContext(ActiveCartContext);
}