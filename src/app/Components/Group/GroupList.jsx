import { Link } from 'react-router';
import React, { Component, PropTypes } from 'react';

class GroupList extends Component {

	/**
	 * Validates the props used by the component.
	 *
	 * @type {Object}
	 */
	static propTypes = {
		groups: PropTypes.array.isRequired,
	}

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		return (
			<div>
				{this.props.groups.map(group =>
					<Link to={`/group/${group.id}`} key={group.id}>
						{group.name}
					</Link>
				)}
			</div>
		);
	}
}

export default GroupList;
