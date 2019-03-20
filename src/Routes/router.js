import React from 'react';
import {Route,Switch} from 'react-router-dom';
import App from '../components/App.js';
import Home from '../components/Home';
import Error404 from '../components/Error404';
import Products from '../components/Products';
import { Link } from 'react-router-dom';
const AppRoutes = () => 
<App>
    <Link to="/">Inicio</Link>|
    <Link to="/products" >Products</Link>|
    <Link to="/contactos" >Products</Link>
    
    <Switch>
        <Route   exact path="/" component={Home}/>
        <Route   exact path="/home" component={Home}/>
        <Route   exact path="/products" component={Products}/>
        <Route   component = {Error404}/>
    </Switch>
</App>

export default AppRoutes;
