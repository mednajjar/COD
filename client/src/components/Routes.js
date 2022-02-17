import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Vendeur from './pages/vendeur/Vendeur';
import Livreur from './pages/Livreur';
import Contact from './pages/Contact';
import Packs from './pages/Packs';
import Validation from './pages/vendeur/Validation';
import Login from './auth/Login';
import Register from './auth/Register';
import LivreurDash from './dashboard/livreur/LivreurDash';
import VendeurDash from './dashboard/vendeur/VendeurDash';
import ClientDash from './dashboard/client/ClientDash';
import AdminDash from './dashboard/admin/AdminDash';
import Product from './pages/ProductId';
import Cart from './pages/cart/Cart'
import Checkout from './pages/checkout/Checkout';
import CheckoutForm from './layouts/CheckoutForm';
import Offre from './pages/Offre';
import Store from './pages/Store';
import NotValid from './pages/NotValid';
import NotFound from './pages/NotFound'
import Categories from './pages/Categories';
import { useSelector } from 'react-redux';

const Routes = () => {
    const { isAuthenticated, role, valid, pack } = useSelector(state => state.authentification)
    console.log({ isAuthenticated, role, valid, pack })

    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/registerAsVendeur' component={Vendeur} />
            <Route path='/registerAsLivreur' component={Livreur} />
            <Route path='/contact' component={Contact} />
            <VendeurRoute path='/packs' auth={isAuthenticated} role={role} valid={valid} pack={pack} component={Packs} />
            <Route path='/register' component={Register} />
            <CheckRoute path='/checkoutPack' auth={isAuthenticated} role={role} component={CheckoutForm} />
            <AuthRoute path='/login' auth={isAuthenticated} role={role} valid={valid} pack={pack} component={Login} />
            <ValidationRoute path='/validation' auth={isAuthenticated} role={role} valid={valid} component={Validation} />
            <ValidationRoute path='/notValid' auth={isAuthenticated} role={role} valid={valid} component={NotValid} />
            <VendeurRoute path='/vendeurDashboard' auth={isAuthenticated} role={role} valid={valid} pack={pack} component={VendeurDash} />
            <LivreurRoute path='/livreurDashboard' auth={isAuthenticated} role={role} valid={valid} component={LivreurDash} />
            <ClientRoute path='/clientDashboard' auth={isAuthenticated} role={role} component={ClientDash} />
            <AdminRoute path='/adminDashboard' auth={isAuthenticated} role={role} valid={valid} component={AdminDash} />
            <Route path='/product/:id' component={Product} />
            <Route path='/cart' component={Cart} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/offre' component={Offre} />
            <Route path='/store' component={Store} />
            <Route path='/category/:categorie' component={Categories} />
            <Route path='*' component={NotFound} />
        </Switch>
    )
}

const AuthRoute = ({ path, component: Component, role, auth, valid, pack, ...rest }) => {
    const location = useLocation()
    console.log(location)
    return (

        <Route
            {...rest}
            render={() =>
                (auth && role === 'admin') ? <Redirect to={location.state?.adminPath || '/adminDashboard/orders'} /> :
                (auth && role === 'client') ? <Redirect to={location.state?.clientPath || '/clientDashboard/orders'} /> :
                (auth && role === 'vendeur' && valid === true && pack !== null) ? <Redirect to={location.state?.vendeurPath || '/vendeurDashboard/myStore'} /> :
                (auth && role === 'vendeur' && valid === true && pack === null) ? <Route component={Packs} /> :
                (auth && role === 'vendeur' && valid === false) ? <Route component={Validation} /> :
                (auth && role === 'livreur' && valid === false) ? <Route component={NotValid} /> :
                    <Component />
            }
        />
    )
}

const CheckRoute = ({ path, component: Component, role, auth, valid, pack, ...rest }) => {
    const location = useLocation()
    console.log(location)
    return (

        <Route
            {...rest}
            render={() =>
                (auth && role === 'vendeur') ? <Component /> : (<Redirect to={'/login'} />)
                
            }
        />
    )
}

const VendeurRoute = ({ path, component: Component, role, auth, valid, pack, ...rest }) => {
    const location = useLocation()
    console.log(location)
    return (

        <Route
            {...rest}
            render={() =>
                (auth && role === "vendeur" && valid === true) ? (<Component />) :
                    (auth && role === "vendeur" && valid === false) ? (<Route component={Validation} />) :
                    (auth && role === "vendeur" && valid === true && pack === null) ? (<Route component={Packs} />) :
                        (<Redirect to={'/login'} />)
            }
        />
    )
}
const ValidationRoute = ({ path, component: Component, role, auth, valid, ...rest }) => {
    const location = useLocation()
    console.log(location)
    return (

        <Route
            {...rest}
            render={() =>
                    (auth && role === "vendeur" && valid === true) ? <Route component={VendeurDash} /> :
                    (auth && role === "livreur" && valid === true) ? <Route component={LivreurDash} /> :
                    <Component />
            }
        />
    )
}
const LivreurRoute = ({ path, component: Component, role, auth, valid, ...rest }) => {
    const location = useLocation()
    console.log(location)
    return (

        <Route
            {...rest}
            render={() =>
                (auth && role === "livreur" && valid === true) ? (<Component />) :
                    (auth && valid === false) ? (<Redirect to={'/notValid'} />) :
                        (<Redirect to={'/login'} />)
            }
        />
    )
}

const AdminRoute = ({ path, component: Component, role, auth, valid, ...rest }) => {
    const location = useLocation()
    console.log(location)
    return (

        <Route
            {...rest}
            render={() =>
                (auth && role === "admin") ? (<Component />) : (<Redirect to={'/login'} />)
            }
        />
    )
}
const ClientRoute = ({ path, component: Component, role, auth, ...rest }) => {
    const location = useLocation()
    console.log(location)
    return (

        <Route
            {...rest}
            render={() =>
                (auth && role === "client") ? (<Component />) : (<Redirect to={'/login'} />)
            }
        />
    )
}



export default Routes
