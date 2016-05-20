import getRoutes from 'routes';
import ReactDOM from 'react-dom';
import { createStore } from 'Core/Store';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const initialState = window.__INITIAL_STATE__;

const store = createStore(browserHistory, initialState);
syncHistoryWithStore(browserHistory, store);

document.querySelector('html').classList.add('js');

// Render the application
ReactDOM.render(
	getRoutes(store),
	document.getElementById('app')
);
