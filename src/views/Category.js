import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router-dom'

const Category = () => {
    const params = useParams();

    return (
        <div>
            <ItemListContainer categoryId={params.categoryId} />
        </div>
    )
}

export default Category
