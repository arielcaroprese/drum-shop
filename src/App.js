import React, { Component } from "react";

//Styles
import './App.css';

// Components
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

// Views
import Home from "./views/Home"
import Category from "./views/Category"

// React Router
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route exact path='/category/:categoryId' element={<Category />} ></Route>
            <Route exact path='/item/:id' element={<ItemDetailContainer />} ></Route>
          </Routes>
      </Router>
    );
  }
}

export default App;