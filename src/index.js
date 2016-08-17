import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import store, { history } from './store/store';


ReactDOM.render(
    <Provider store={store}>
        <Router 
            history={history} 
            routes={routes} 
        />
    </Provider>,
    document.getElementById('app'));
