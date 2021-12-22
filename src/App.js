import React, { Component } from "react";

//Styles
import './App.css';

// Components
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from "./components/Cart/Cart"

// Views
import Home from "./views/Home"
import Category from "./views/Category"

// React Router
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

// Context
import { CartProvider } from "./context/CartContext";

// Firebase

import { db } from './firebase/firebaseConfig';

class App extends Component {
  render() {
    return (
      <CartProvider>
        <Router>
          <NavBar />
            <Routes>
              <Route path='/' element={<Home/>} ></Route>
              <Route exact path='/category/:categoryId' element={<Category />} ></Route>
              <Route exact path='/item/:id' element={<ItemDetailContainer />} ></Route>
              <Route path='/cart' element={<Cart/>} ></Route>
            </Routes>
        </Router>
      </CartProvider>
    );
  }
}

export default App;