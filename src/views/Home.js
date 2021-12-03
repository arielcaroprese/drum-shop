import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <ItemListContainer categoryId="MLA1144" />
            <ItemListContainer categoryId="MLA1051" />
            <ItemListContainer categoryId="MLA1648" />
        </>
    )
}

export default Home
