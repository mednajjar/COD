import React from 'react'
import {useParams} from 'react-router-dom';

const EditProduct = () => {
    const {id} = useParams();
    return (
        <div>
            <h3>modifier le produit {id}</h3>
        </div>
    )
}

export default EditProduct
