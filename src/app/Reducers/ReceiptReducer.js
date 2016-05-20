import { createReducer } from 'redux-act';
import * as actions from 'Actions/ReceiptActions';

const initialState = {
	receipt: {},
	creatingStatus: 'idle',
};

export default createReducer({

	/**
	 * Invoked when a receipt is being created.
	 *
	 * @param  {Object} state
	 * @return {Object}
	 */
	[actions.creatingReceipt]: (state) => ({ ...state, creatingStatus: 'busy' }),

	/**
	 * Invoked when a recept is created.
	 *
	 * @param  {Object} state
	 * @param  {Object} payload
	 * @return {Object}
	 */
	[actions.createdReceipt]: (state, payload) => (
		{ ...state, creatingStatus: 'done', receipt: payload }
	),

	[actions.fetchedReceipt]: (state, payload) => (
		{ ...state, receipt: payload }
	),

}, initialState);
