import { createAction } from 'redux-act';

export const creatingReceipt = createAction('Creating a receipt');
export const createdReceipt = createAction('Successfully created a receipt');

export const fetchingReceipt = createAction('Fetching a receipt');
export const fetchedReceipt = createAction('Successfully fetched a receipt');
