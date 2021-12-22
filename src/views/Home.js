import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <ItemListContainer categoryId="baterias-acusticas" />
            <ItemListContainer categoryId="baterias-electronicas" />
            <ItemListContainer categoryId="percusion" />
        </>
    )
}

export default Home
