import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    Orders,
    Notifications,
    Users,
 
} from './adminPages/index';


const Routes =()=>{
    const { isAuthenticated, role } = useSelector(state => state.authentification)
    console.log({isAuthenticated, role})
    return(

        <Switch>
            <AdminRoute path="/adminDashboard/orders" auth={isAuthenticated} role={role} component={Orders} />
            <AdminRoute path="/adminDashboard/notifications" auth={isAuthenticated} role={role} component={Notifications} />
            <AdminRoute path="/adminDashboard/users" auth={isAuthenticated} role={role} component={Users} />
        </Switch>
        
    )
}

const AdminRoute = ({ path, component: Component, role, auth, ...rest }) => {

    return (

        <Route
            {...rest}
            render={(props) => {
                if (auth && role === 'admin') {

                    return (<Component />)
                } else {

                    return (<Redirect to={{pathname: "/login", state: { adminPath: path }}} />)
                }
            }}

        />

    );
};
export default Routes