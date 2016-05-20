import { Link } from 'react-router';
import React, { Component, PropTypes } from 'react';

class GroupDetail extends Component {

	/**
	 * Validates the props used by the component.
	 *
	 * @type {Object}
	 */
	static propTypes = {
		auth: PropTypes.object,
		group: PropTypes.object,
	}

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		const { group, auth } = this.props;
		const contributors = group.contributors.filter(c => c.id !== auth.user.id);

		if (!group.id) {
			return null;
		}

		return (
			<div>
				<h1>{group.name}</h1>
				<ul>
					{contributors.map(c =>
						<li key={c.id}>
							{c.username} -
							€{group.getBalance(auth.user, c)}
						</li>
					)}
				</ul>
				<div>
					<Link to={`/group/${group.id}/add`}>Add receipt</Link>
				</div>
			</div>
		);
	}
}

export default GroupDetail;
