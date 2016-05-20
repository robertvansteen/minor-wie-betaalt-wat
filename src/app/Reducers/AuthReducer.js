import cookie from 'cookies-js';
import { createReducer } from 'redux-act';
import * as actions from 'Actions/AuthActions';

const initialState = {
	user: {},
	token: null,
	userId: null,
};

export default createReducer({
	/**
	 * Invoked when the user is authenticated.
	 * @param  {Object} state
	 * @param  {Object} payload
	 * @return {Object}
	 */
	[actions.authenticated]: (state, payload) => {
		cookie.set('token', payload.jwt);
		cookie.set('user_id', payload.user.id);

		return {
			...state,
			token: payload.jwt,
			user: payload.user,
			userId: payload.user.id,
		};
	},

	/**
	 * Invoked when the user is fetched.
	 *
	 * @param  {Object} state
	 * @param  {Object} payload
	 * @return {Object}
	 */
	[actions.fetchedUser]: (state, payload) => {
		return {
			...state,
			user: payload,
		};
	},
}, initialState);
