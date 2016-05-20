import 'Stylesheets/shared';
import { connect } from 'react-redux';
import { fetchUser } from 'Sources/AuthSource';
import React, { Component, PropTypes } from 'react';

class App extends Component {

	/**
	 * Validates the props used by the component.
	 *
	 * @type {Object}
	 */
	static propTypes = {
		children: PropTypes.node,
		auth: PropTypes.object.isRequired,
	}

	/**
	 * Invoked once, only on the client (not on the server), immediately
	 * after the initial rendering occurs.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		const { auth } = this.props;

		if (auth.token && !auth.user.id) {
			return fetchUser(auth.userId);
		}
	}

	static fetchData(state) {
		const { auth } = state;

		if (auth.token && !auth.user.id) {
			return fetchUser(auth.userId);
		}
	}

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		const { auth, children } = this.props;

		if (auth.token && !auth.user.id) {
			return (
				<div>Loading...</div>
			);
		}

		return (
			<div>
				{children}
			</div>
		);
	}
}

export default connect(
	state => ({ auth: state.auth })
)(App);
