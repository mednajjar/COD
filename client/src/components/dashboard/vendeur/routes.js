import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    Store,
    Shipping,
    EditProduct,
    AddProduct
} from './vendeurPages/index';


const Routes =()=>{
    const { isAuthenticated, role } = useSelector(state => state.authentification)
    console.log({isAuthenticated, role})
    return(

        <Switch>
            <VendeurRoute path="/vendeurDashboard/myStore" auth={isAuthenticated} role={role} component={Store} />
            <VendeurRoute path="/vendeurDashboard/shipping" auth={isAuthenticated} role={role} component={Shipping} />
            <VendeurRoute path="/vendeurDashboard/editProduct/:id" auth={isAuthenticated} role={role} component={EditProduct} />
            <VendeurRoute path="/vendeurDashboard/addProduct" auth={isAuthenticated} role={role} component={AddProduct} />
        </Switch>
        
    )
}

const VendeurRoute = ({ path, component: Component, role, auth, ...rest }) => {

    return (

        <Route
            {...rest}
            render={(props) => {
                if (auth && role === 'vendeur') {

                    return (<Component />)
                } else {

                    return (<Redirect to={{pathname: "/login", state: { vendeurPath: path }}} />)
                }
            }}

        />

    );
};

export default Routes