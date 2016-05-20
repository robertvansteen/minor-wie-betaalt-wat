import Group from 'Models/Group';
import { createReducer } from 'redux-act';
import * as actions from 'Actions/GroupActions';

const initialState = {
	group: new Group(),
	groups: [],
};

export default createReducer({

	/**
	 * Invoked when a single group is fetched.
	 *
	 * @param  {Object} state
	 * @param  {Object} payload
	 * @return {Object}
	 */
	[actions.fetchedGroup]: (state, payload) => {
		return {
			...state,
			group: new Group(payload),
		};
	},

	/**
	 * Invoked when the groups are fetched.
	 * @param  {Object} state
	 * @param  {Object} payload
	 * @return {Object}
	 */
	[actions.fetchedGroups]: (state, payload) => {
		return {
			...state,
			groups: payload.map(group => new Group(group)),
		};
	},

}, initialState);
