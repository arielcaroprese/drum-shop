import React, { Component } from "react";
import './App.css';

// Components
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <ItemListContainer greeting="Hola mundo!" />
        <Header />
      </>
    );
  }
}

export default App;