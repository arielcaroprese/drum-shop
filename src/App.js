import React, { Component } from "react";
import './App.css';

// Components
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <ItemDetailContainer/>
        <ItemListContainer />
        <Header />
      </>
    );
  }
}

export default App;