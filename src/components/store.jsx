//productItem
// list of each item with its price and a button to add
//add button onclick will add item to shopping cart
import React from "react";

const Store = ({ product, addCart }) => {
  return (
    <div>
      <span>
        {product.name} ${product.price}
      </span>
      <button onClick={() => addCart(product)}>+</button>
    </div>
  );
};

export default Store;
