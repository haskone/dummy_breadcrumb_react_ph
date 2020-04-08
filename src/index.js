import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'


const initState = {
    crumbs: [{ name: 'home', type: 'dir'}],
    content: []
};

const store = createStore(rootReducer, initState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
