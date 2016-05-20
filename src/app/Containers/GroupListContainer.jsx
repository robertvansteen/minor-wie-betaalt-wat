import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchGroups } from 'Sources/GroupSource';
import GroupList from 'Components/Group/GroupList';

class GroupListContainer extends Component {

	/**
	 * Invoked once, only on the client (not on the server), immediately
	 * after the initial rendering occurs.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		fetchGroups();
	}

	/**
	 * Fetch the data that is required for the component.
	 *
	 * @return {void}
	 */
	static fetchData() {
		return fetchGroups();
	}

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		return (
			<GroupList {...this.props}/>
		);
	}
}

export default connect(
	state => ({ ...state.group })
)(GroupListContainer);
