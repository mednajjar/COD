import React from 'react';
import {Switch, Route, Redirect, useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    Store,
    Shipping,
    EditProduct,
    AddProduct
} from './vendeurPages/index';


const Routes =()=>{
    const { isAuthenticated, role, valid, pack } = useSelector(state => state.authentification)
    console.log({isAuthenticated, role, valid, pack})
    return(

        <Switch>
            <VendeurRoute path="/vendeurDashboard/myStore" auth={isAuthenticated} role={role} valid={valid} pack={pack} component={Store} />
            <VendeurRoute path="/vendeurDashboard/shipping" auth={isAuthenticated} role={role} valid={valid} pack={pack} component={Shipping} />
            <VendeurRoute path="/vendeurDashboard/editProduct/:id" auth={isAuthenticated} role={role} valid={valid} pack={pack} component={EditProduct} />
            <VendeurRoute path="/vendeurDashboard/addProduct" auth={isAuthenticated} role={role} valid={valid} pack={pack} component={AddProduct} />
        </Switch>
        
    )
}

const VendeurRoute = ({ path, component: Component, role, auth, valid, pack, ...rest }) => {
const location = useLocation()
    return (

        <Route
            {...rest}
            render={(props) => {
                if (auth && role === 'vendeur' && valid === true && pack !== null) {

                    return (<Component />)
                } else {

                    return (<Redirect to={location.state?.vendeurPath || '/vendeurDashboard/myStore'} />)
                }
            }}

        />

    );
};

export default Routes