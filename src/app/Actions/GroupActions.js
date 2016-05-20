import { createAction } from 'redux-act';

export const fetchingGroup = createAction('Fetching a single group');
export const fetchedGroup = createAction('Group successfully fetched');

export const fetchingGroups = createAction('Fetching the groups');
export const fetchedGroups = createAction('Groups successfully fetched');
