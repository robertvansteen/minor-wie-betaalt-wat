import { connect } from 'react-redux';
import { fetchGroup } from 'Sources/GroupSource';
import React, { Component, PropTypes } from 'react';
import GroupDetail from 'Components/Group/GroupDetail';

class GroupDetailContainer extends Component {

	/**
	 * Validates the props used by the component.
	 *
	 * @type {Object}
	 */
	static propTypes = {
		params: PropTypes.object.isRequired,
	}

	/**
	 * Invoked once, only on the client (not on the server), immediately
	 * after the initial rendering occurs.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		fetchGroup(this.props.params.id);
	}

	/**
	 * Invoked when a component is receiving new props.
	 * This method is not called for the initial render.
	 *
	 * @param  {Object} nextProps
	 * @return {void}
	 */
	componentWillReceiveProps(nextProps) {
		if (nextProps.params.id !== this.props.params.id) {
			fetchGroup(this.props.params.id);
		}
	}

	/**
	 * Fetch the data that is required for the component.
	 *
	 * @param  {Object} state
	 * @param  {Object} params
	 * @return {void}
	 */
	static fetchData(state, params) {
		return fetchGroup(params.id);
	}

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		return (
			<GroupDetail {...this.props} />
		);
	}
}

export default connect(
	state => ({
		...state.group,
		auth: state.auth,
	})
)(GroupDetailContainer);
