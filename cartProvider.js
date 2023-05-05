import cartContext from "./cartContext";
import { useState } from "react";

export default function CartProvider(props) {
  const [items,updateItems]=useState([]);

  const addItemToCartHandler = (item) => {

    updateItems([...items,item]);
    // console.log("after adding to the cart", CartContext.items);
    
  };
  const removeItemFromCartHandler = (id) => {};

  const CartContext = {
    items: items,
    totalAmount:0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <cartContext.Provider value={CartContext}>
      {props.children}
    </cartContext.Provider>
  );
}
