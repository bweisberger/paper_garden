import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { observe } from './components/GardenContainer';

const root = document.getElementById('root')

observe(plantPosition =>
    ReactDOM.render(<App plantPosition={plantPosition}/>, root),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
