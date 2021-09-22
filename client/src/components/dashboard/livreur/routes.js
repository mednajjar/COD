import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {
    Orders,
    Notifications,
 
} from './livreurPages/index';


const Routes =()=>{

    return(

        <Switch>
            <Route path="/livreurDashboard/orders" component={Orders} />
            <Route path="/livreurDashboard/notifications" component={Notifications} />
        </Switch>
        
    )
}

export default Routes