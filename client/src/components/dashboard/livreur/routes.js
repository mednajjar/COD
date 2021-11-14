import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    Orders,
    Notifications,
 
} from './livreurPages/index';


const Routes =()=>{
    const { isAuthenticated, role } = useSelector(state => state.authentification)
    return(

        <Switch>
            <LivreurRoute path="/livreurDashboard/orders" auth={isAuthenticated} role={role} component={Orders} />
            <LivreurRoute path="/livreurDashboard/notifications" auth={isAuthenticated} role={role} component={Notifications} />
        </Switch>
        
    )
}

const LivreurRoute = ({ path, component: Component, role, auth, ...rest }) => {

    return (

        <Route
            {...rest}
            render={(props) => {
                if (auth && role === 'livreur') {

                    return (<Component />)
                } else {

                    return (<Redirect to={{pathname: "/login", state: { livreurPath: path }}} />)
                }
            }}

        />

    );
};

export default Routes