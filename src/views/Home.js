import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import Slider from '../components/Slider/Slider'

const Home = () => {
    return (
        <>
            <Slider/>
            <ItemListContainer categoryId="allCategories" />
        </>
    )
}

export default Home
