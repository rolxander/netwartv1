import './css/estilos.scss';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as  Router} from 'react-router-dom';
import AppRoutes from '../src/Routes/router.js'
render(
    <Router>
        <AppRoutes />
    </Router>,document.getElementById('root')
);