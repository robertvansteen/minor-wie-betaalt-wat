import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import React, { Component, PropTypes } from 'react';
import { authenticate } from 'Sources/AuthSource';
import LoginForm from 'Components/Login/LoginForm/LoginForm';

class LoginContainer extends Component {

	/**
	 * Validates the props used by the component.
	 *
	 * @type {Object}
	 */
	static propTypes = {
		auth: PropTypes.object.isRequired,
		onAuth: PropTypes.func.isRequired,
	}

	/**
	 * Invoked when a component is receiving new props.
	 * This method is not called for the initial render.
	 *
	 * @param  {Object} nextProps
	 * @return {void}
	 */
	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.token) {
			this.props.onAuth();
		}
	}

	/**
	 * Invoked when the login form is submitted.
	 *
	 * @param  {Object} data
	 * @return {void}
	 */
	onSubmit = (data) => {
		authenticate(data.email, data.password);
	}

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		return (
			<LoginForm
				onSubmit={this.onSubmit}
				{...this.props}
			/>
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
	return {
		auth: state.auth,
	};
}

/**
 * Map dispatch to the props.
 *
 * @param  {Function} dispatch
 * @return {Object}
 */
function mapDispatch(dispatch) {
	return {
		onAuth: () => dispatch(push('/')),
	};
}

export default connect(
	mapState,
	mapDispatch,
)(LoginContainer);
