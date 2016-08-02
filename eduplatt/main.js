/*import React from 'react'
import ReactDOM from 'react-dom'
import "!style!css!sass!./public/scss/estilos.scss"
import {Modulo1, Modulo2, Modulo3, Modulo4, Modulo5, Modulo6, Modulo7 } from './App'*/
var {Grid,Row, Col, Button} = ReactBootstrap;
var {Router, Route, Link, browserHistory, IndexRoute } = ReactRouter;
/*import {Modulo1, Modulo2, Modulo3, Modulo4, Modulo5, Modulo6, Modulo7 } = 'js/app.js';*/
var {Modulo1} = require('js/app.js');
 

ReactDOM.render(<Modulo1 />,document.getElementById('header'));
/*ReactDOM.render(<Modulo2 />,document.getElementById('container'));
ReactDOM.render(<Modulo3 />,document.getElementById('cursos'));
ReactDOM.render(<Modulo4 />,document.getElementById('costos'));
ReactDOM.render(<Modulo5 />,document.getElementById('nosotros'));
ReactDOM.render(<Modulo6 />,document.getElementById('footer'));*/
 