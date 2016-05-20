import api from 'Core/Api';
import * as groupActions from 'Actions/GroupActions';

const GROUP_ENDPOINT = '/group';

export function fetchGroups() {
	groupActions.fetchingGroups();

	return api.request(GROUP_ENDPOINT)
		.then(response => response.json())
		.then(response => groupActions.fetchedGroups(response));
}

export function fetchGroup(id) {
	groupActions.fetchingGroup();

	return api.request(`${GROUP_ENDPOINT}/${id}`)
		.then(response => response.json())
		.then(response => groupActions.fetchedGroup(response));
}
