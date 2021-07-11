import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Vendeur from './pages/Vendeur';
import Livreur from './pages/Livreur';
import Contact from './pages/Contact';
import Packs from './pages/Packs';
import Login from './auth/Login';
import Register from './auth/Register';
import LivreurDash from './dashboard/livreur/LivreurDash';
import VendeurDash from './dashboard/vendeur/VendeurDash';
import CustomerDash from './dashboard/customer/CustomerDash'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/vendeur' component={Vendeur} />
            <Route path='/livreur' component={Livreur} />
            <Route path='/contact' component={Contact} />
            <Route path='/packs' component={Packs} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/vendeurDashboard' component={VendeurDash} />
            <Route path='/livreurDashboard' component={LivreurDash} />
            <Route path='/customerDashboard' component={CustomerDash} />
            
            
        </Switch>
    )
}

export default Routes