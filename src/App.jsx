import { useState } from 'react'
import MainItems from './components/mainItems'
import ItemProducts from './components/items'
import Store from './components/store'
import ShoppingCart from './components/shoppingCart'

const App = () => {
  const [cart, setCart] = useState([]);

  const addCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Produce Store</h1>
      <MainItems ItemProducts={ItemProducts} addCart={addCart} />
      <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;