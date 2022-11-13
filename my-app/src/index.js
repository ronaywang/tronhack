import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';


var Airtable = require('airtable');
//create a new Airtable object in React 
new Airtable({apiKey:'keyxzSqtv90yqr7gE'}).base('apph6SWu1kSHfUsey');
//base endpoint to call with each request
axios.defaults.baseURL =   'https://api.airtable.com/v0/apph6SWu1kSHfUsey/data/';
//content type to send with all POST requests 
axios.defaults.headers.post['Content-Type'] = 'application/json';
//authenticate to the base with the API key 
axios.defaults.headers['Authorization'] = 'Bearer keyxzSqtv90yqr7gE';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
