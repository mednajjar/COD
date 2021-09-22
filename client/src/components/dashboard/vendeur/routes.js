import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {
    Store,
    Shipping,
    EditProduct,
    AddProduct
} from './vendeurPages/index';


const Routes =()=>{

    return(

        <Switch>
            <Route path="/vendeurDashboard/myStore" component={Store} />
            <Route path="/vendeurDashboard/shipping" component={Shipping} />
            <Route path="/vendeurDashboard/editProduct/:id" component={EditProduct} />
            <Route path="/vendeurDashboard/addProduct" component={AddProduct} />
        </Switch>
        
    )
}

export default Routes