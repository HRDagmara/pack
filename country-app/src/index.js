import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools';
import routes from './routes';

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}>
                <div>
                    <h1>Inicjalizacja projektu</h1>
                    <DevTools />
                </div> 
        </Router>
    </Provider>,
    document.getElementById('root')
);