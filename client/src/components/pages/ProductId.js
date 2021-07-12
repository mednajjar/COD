import React from 'react'
import {useParams} from 'react-router-dom'
const ProductId = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>product page id number {id}</h1>
        </div>
    )
}

export default ProductId
