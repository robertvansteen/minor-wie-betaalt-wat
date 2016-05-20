import { createAction } from 'redux-act';

export const authenticating = createAction('Authenticating the user');
export const authenticated = createAction('Authenticated the user');

export const fetchingUser = createAction('Fetching the authenticated user');
export const fetchedUser = createAction('Fetched the authenticated user');
