import { createContext } from "react";

export const CartContext = createContext({
  user: {},
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  clear: () => {},
  clearCart: () => {},
});
