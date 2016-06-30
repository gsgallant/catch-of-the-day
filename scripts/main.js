import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import {Router, Route} from 'react-router';
// var Navigation = ReactRouter.Navigation;//mixin
//var History = ReactRouter.History;//mixin //deprecated
import { browserHistory } from 'react-router'

//Firebase setup//this has been moved to App.js because I have moved all components to separate js files.
// var Rebase = require('re-base');
// var base = Rebase.createClass('https://ggcatch-of-the-day.firebaseio.com/');

var Catalyst = require('react-catalyst');
//Import Components

import NotFound from './components/NotFound';
import StorePicker from './components/StorePicker';
import App from './components/App';

/* routes */
var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={StorePicker}/>
    <Route path='/store/:storeId' component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>  

  )
ReactDOM.render(routes,document.querySelector('#main'));