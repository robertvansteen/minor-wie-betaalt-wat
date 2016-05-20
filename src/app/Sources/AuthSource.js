import api from 'Core/Api';
import * as authActions from 'Actions/AuthActions';

const USER_ENDPOINT = '/user';
const AUTH_ENDPOINT = '/auth/local';

export function authenticate(identifier, password) {
	authActions.authenticating();

	return api.request(AUTH_ENDPOINT, {
		method: 'POST',
		body: { identifier, password },
	})
		.then(response => response.json())
		.then(response => authActions.authenticated(response));
}

export function fetchUser(id) {
	authActions.fetchingUser();

	return api.request(`${USER_ENDPOINT}/${id}`)
		.then(response => response.json())
		.then(response => authActions.fetchedUser(response));
}
