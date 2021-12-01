import React, { Component } from "react";
import './App.css';

// Components
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from './components/NavBar/NavBar';
import ItemCountContainer from "./components/ItemCountContainer/ItemCountContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <ItemCountContainer/>
        <ItemListContainer />
        <ItemDetailContainer/>
        <Header />
      </>
    );
  }
}

export default App;