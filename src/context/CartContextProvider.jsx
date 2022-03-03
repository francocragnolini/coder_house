import { useReducer } from "react";
import { CartContext } from "./CartContext";

// DEFAULT STATE
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// REDUCER FUNCTION
const cartReducer = (state, action) => {
  // ADD AN ITEM TO ITEMS STATE
  if (action.type === "ADD") {
    // updates the total amount
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // checking for the item in the array it return an index
    const indexItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    //this is the item: could be an obj or null
    const existingItem = state.items[indexItem];

    if (existingItem) {
      // if the item already exists to update amount and avoid duplication
      // updating the item
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };

      // updating the array (items)
      const updatedItems = [...state.items];
      updatedItems[indexItem] = updatedItem;

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

      // in case the item does not exists in the array
    } else {
      // to update the array
      const updatedArray = state.items.concat(action.item);
      return {
        items: updatedArray,
        totalAmount: updatedTotalAmount,
      };
    }
  }

  // REMOVE ITEM FROM ITEMS
  if (action.type === "REMOVE") {
    // find index by id
    const itemIndex = state.items.findIndex((item) => item.id === action.id);

    // get the  object or null
    const item = state.items[itemIndex];

    // updates the totalAmount
    const updatedTotalAmount = state.totalAmount - item.price;

    // if exists removes item by id and returns a new array and the total amount updated
    let updatedItems;
    if (item.amount === 1) {
      updatedItems = [...state.items].filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...item, amount: item.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  //
  if (action.type === "CLEAR") {
    // find index by id
    const itemIndex = state.items.findIndex((item) => item.id === action.id);

    // get the  object or null
    const item = state.items[itemIndex];
    if (item) {
      const updatedTotalAmount = state.totalAmount - item.price * item.amount;
      const updatedItems = [...state.items].filter(
        (item) => item.id !== action.id
      );
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
  }
  if (action.type === "CLEARCART") {
    return defaultCartState;
  }
  return defaultCartState;
};

const CartContextProvider = (props) => {
  // USE-REDUCER
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    dispatch({
      type: "ADD",
      item: item,
    });
  };

  const removeItemHandler = (id) => {
    dispatch({
      type: "REMOVE",
      id: id,
    });
  };

  const clearItemHandler = (id) => {
    dispatch({ type: "CLEAR", id: id });
  };

  const clearCartHandler = () => {
    dispatch({ type: "CLEARCART" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    // clear: clearCartHandler,
    clearItem: clearItemHandler,
    clearCart: clearCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
