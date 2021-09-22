import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {
    Orders,
    Notifications,
    Users,
 
} from './adminPages/index';


const Routes =()=>{

    return(

        <Switch>
            <Route path="/adminDashboard/orders" component={Orders} />
            <Route path="/adminDashboard/notifications" component={Notifications} />
            <Route path="/adminDashboard/users" component={Users} />
        </Switch>
        
    )
}

export default Routes