import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Vendeur from './pages/vendeur/Vendeur';
import Livreur from './pages/Livreur';
import Contact from './pages/Contact';
import Packs from './pages/Packs';
import Login from './auth/Login';
import Register from './auth/Register';
import LivreurDash from './dashboard/livreur/LivreurDash';
import VendeurDash from './dashboard/vendeur/VendeurDash';
import ClientDash from './dashboard/client/ClientDash';
import AdminDash from './dashboard/admin/AdminDash';
import Product from './pages/ProductId';
import Cart from './pages/cart/Cart'
import Checkout from './pages/checkout/Checkout';
import Offre from './pages/Offre';
import Store from './pages/Store';
import Categories from './pages/Categories';
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
            <Route path='/clientDashboard' component={ClientDash} />
            <Route path='/adminDashboard' component={AdminDash} />
            <Route path='/product/:id' component={Product} />
            <Route path='/cart' component={Cart} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/offre' component={Offre} />
            <Route path='/store' component={Store} />
            <Route path='/category/:category' component={Categories} />
        </Switch>
    )
}

export default Routes
