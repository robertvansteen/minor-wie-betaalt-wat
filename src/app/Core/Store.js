import reducers from 'Reducers';
import thunk from 'redux-thunk';
import { assignAll } from 'redux-act';
import { combineReducers } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { createStore as _createStore, applyMiddleware, compose } from 'redux';

import * as authActions from 'Actions/AuthActions';
import * as groupActions from 'Actions/GroupActions';
import * as receiptActions from 'Actions/ReceiptActions';

/**
 * Reference to the store.
 *
 * @type {Object}
 */
let store = null;

/**
 * Check if the environement is a browser and has the dev tools extension.
 *
 * @return {Boolean}
 */
function hasDevToolsExtension() {
	return (
		typeof window === 'object'
		&& typeof window.devToolsExtension !== 'undefined'
	);
}

/**
 * Store factory.
 *
 * @param  {Object} history
 * @param  {Object} initialState
 * @return {Object}
 */
export function createStore(history, initialState = {}) {
	// Set up router middleware
	const reduxRouterMiddleware = routerMiddleware(history);

	// Set up store
	store = _createStore(
		combineReducers({
			routing: routerReducer,
			...reducers,
		}),
		initialState,
		compose(
			applyMiddleware(reduxRouterMiddleware, thunk),
			hasDevToolsExtension() ? window.devToolsExtension() : f => f,
		)
	);

	assignAll(authActions, store);
	assignAll(groupActions, store);
	assignAll(receiptActions, store);

	return store;
}

/**
 * Returns a reference to the store.
 *
 * @return {Object}
 */
export function getStore() {
	return store;
}

/**
 * Get the state of the store.
 *
 * @return {Object}
 */
export function getState() {
	return store.getState();
}
