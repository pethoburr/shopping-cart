import React , { useState }from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './components/about.js';
import Shop from './components/shop.js';
import Contact from './components/contact.js';
import Home from './components/home.js';
import './stylesheets/App.css';

function App() {
  const [itemCount, setItemCount] = React.useState(0);
  const [cart, setCart ] = useState([]);

  const decrement = (tag) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].price === tag) {
        return setItemCount(Math.max(itemCount - 1, 0));
      }
    }
  }

  const increment = () => {
    setItemCount(itemCount + 1);
  }

  const remove = (tag) => {
    for (let i = 0; i < cart.length; i++) {
      if(cart[i].price === tag) {
        if (cart[i].quantity ===  1) {
          for (let j = 0; j < cart.length; j++) {
            if (cart[j] === cart[i]) {
              let newArr = cart.slice(j);
          let updated = cart.filter((ting) => ting !== newArr[0]);
          return setCart(updated);
            }
          }
          
      } else {
        return cart[i].quantity--;
      }
    }
  }
}

  const add = (bike, tag) => {
    if (cart.length === 0) {
      return setCart([{ name: bike, price: tag, quantity: 1 }]);
    } else {
      for (let i = 0; i < cart.length; i++) {
        if(cart[i].price === tag) {
          return cart[i].quantity++;
        } 
      }
      const inThere = cart.includes(tag);
      if (!inThere) {
        return setCart([...cart, { name: bike, price: tag, quantity: 1 }]);
      } 
    }
  }

  return (
    <HashRouter>
    <div className="App">
      <Routes>
      <Route path='/' Component={Home} />
      <Route path='/about' element={<About counter={itemCount} />} />
      <Route path='/shop' element={<Shop counter={itemCount} bag={cart} plus={increment} minus={decrement} update={add} cut={remove} />} />
      <Route path='/contact' element={<Contact counter={itemCount} bag={cart} plus={increment} minus={decrement} update={add} cut={remove} />} />
      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
