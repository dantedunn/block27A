//cart
//a list of items in shopping cart with a button to remove
// button will remove item from cart onClick
//total line will show total amount of prices

import React from "react"

const ShoppingCart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quanity, 0)

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>empty basket</p>
      ) : (
        cart.map(item => (
          <div key={item.id}>
            {item.name} ${item.price} x {item.quanity} = ${(item.price * item.quanity)}
            <button onClick={() => removeFromCart(item.id)}>X</button>
          </div>
        ))
      )}
      <h2>Total Cart: ${total}</h2>
    </div>
  )
}
export default ShoppingCart;
