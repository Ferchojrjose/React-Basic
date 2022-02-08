import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp'
import './index.css';


const divRoot = document.querySelector('#root'); //Llamar el div Root en el html

ReactDOM.render(<CounterApp value ={5} />, divRoot);