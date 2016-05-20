import _ from 'lodash';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import React, { Component, PropTypes } from 'react';
import { createReceipt } from 'Sources/ReceiptSource';
import { stopSubmit, initialize, touch } from 'redux-form';
import CreateForm from 'Components/Receipt/CreateReceiptForm';

function redirectToReceipt(id) {
	return push(`/receipt/${id}`);
}

class CreateReceiptContainer extends Component {

	/**
	 * Validates the props used by the component.
	 *
	 * @type {Object}
	 */
	static propTypes = {
		params: PropTypes.object.isRequired,
		onSuccess: PropTypes.func.isRequired,
		receipt: PropTypes.object.isRequired,
		creatingStatus: PropTypes.string.isRequired,
	}

	/**
	 * Invoked when a component is receiving new props.
	 * This method is not called for the initial render.
	 *
	 * @param  {Object} nextProps
	 * @return {void}
	 */
	componentWillReceiveProps(nextProps) {
		if (nextProps.creatingStatus === 'done') {
			this.props.onSuccess(nextProps.receipt.id);
		}
	}

	/**
	 * Invoked when the login form is submitted.
	 *
	 * @param  {Object} data
	 * @return {void}
	 */
	handleSubmit = (data) => {
		createReceipt(data);
	}

	static postData(state, data, dispatch, response) {
		return createReceipt(data)
			.then(x => response.redirect(`/receipt/${x.payload.id}`))
			.catch(err => err.json())
			.then(err => {
				const errors = _.mapValues(
					err.invalidAttributes,
					(v) => v.map(e => e.rule)
				);

				dispatch(initialize('createReceipt', data, ['name']));
				dispatch(touch('createReceipt', ['name']));
				return dispatch(stopSubmit('createReceipt', errors));
			});
	}

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		return (
			<div>
				<h1>Add a receipt</h1>
				<CreateForm
					onSubmit={this.handleSubmit}
					{...this.props}
				/>
			</div>
		);
	}
}


/**
 * Map state to the props.
 *
 * @param  {Object} state
 * @return {Object}
 */
function mapState(state) {
	return { ...state.receipt };
}

/**
 * Map dispatch to the props.
 *
 * @param  {Function} dispatch
 * @return {Object}
 */
function mapDispatch(dispatch) {
	return {
		onSuccess: (groupId, receiptId) => (
			dispatch(redirectToReceipt(groupId, receiptId))
		),
	};
}

export default connect(
	mapState,
	mapDispatch,
)(CreateReceiptContainer);
