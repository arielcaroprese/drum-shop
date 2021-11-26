import React, { Component } from "react";
import './App.css';

// Components
import Header from "./components/Header/Header";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <ItemListContainer greeting="Hola mundo!" />
        <ItemCount stock="5" initial="1"/>
        <Header />
      </>
    );
  }
}

export default App;