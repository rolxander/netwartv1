import './css/estilos.scss';
import React from 'react';
import {render} from 'react-dom';
import Hello_World from '../src/components/helloworld.js';
const mensaje = {mensaje : "hola mundo"};
render(<Hello_World mensaje={mensaje} title="jaja"/>, document.getElementById("root"));