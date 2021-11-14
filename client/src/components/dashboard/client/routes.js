import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Orders from './clientPages/Orders';


const Routes =()=>{
    const { isAuthenticated, role } = useSelector(state => state.authentification)
    return(

        <Switch>
            <ClientRoute path="/clientDashboard/orders" auth={isAuthenticated} role={role} component={Orders} />
        </Switch>
        
    )
}

const ClientRoute = ({ path, component: Component, role, auth, ...rest }) => {

    return (

        <Route
            {...rest}
            render={(props) => {
                if (auth && role === 'client') {

                    return (<Component />)
                } else {

                    return (<Redirect to={{pathname: "/login", state: { clientPath: path }}} />)
                }
            }}

        />

    );
};

export default Routes