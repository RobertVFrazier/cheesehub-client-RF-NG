import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Cheeses from './components/cheese-list';
console.log(Cheeses);

const cheeses=[
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue"
];
ReactDOM.render((
    <Cheeses cheeses={cheeses} />
), document.getElementById('root'));
registerServiceWorker();
