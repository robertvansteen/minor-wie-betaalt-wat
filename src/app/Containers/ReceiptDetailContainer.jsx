import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { fetchReceipt } from 'Sources/ReceiptSource';

class ReceiptDetailContainer extends Component {

	/**
	 * Validates the props used by the component.
	 *
	 * @type {Object}
	 */
	static propTypes = {
		params: PropTypes.object.isRequired,
		receipt: PropTypes.object.isRequired,
	}

	/**
	 * Invoked once, only on the client (not on the server), immediately
	 * after the initial rendering occurs.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		fetchReceipt(this.props.params.id);
	}

	/**
	 * Fetch the data that is required for the component.
	 *
	 * @param  {Object} state
	 * @param  {Object} params
	 * @return {void}
	 */
	static fetchData(state, params) {
		return fetchReceipt(params.id);
	}

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		if (!this.props.receipt.id) {
			return <div>Loading</div>;
		}

		return (
			<div>
				<h1>Receipt</h1>
				<h4>{this.props.receipt.name}</h4>
			</div>
		);
	}
}

export default connect(state => ({ ...state.receipt }))(ReceiptDetailContainer);
