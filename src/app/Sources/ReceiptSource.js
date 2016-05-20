import api from 'Core/Api';
import * as receiptActions from 'Actions/ReceiptActions';

const RECEIPT_ENDPOINT = '/receipt';

export function createReceipt(data) {
	receiptActions.creatingReceipt();

	return api.request(RECEIPT_ENDPOINT, {
		method: 'POST',
		body: { ...data },
	})
		.then(response => response.json())
		.then(response => receiptActions.createdReceipt(response));
}

export function fetchReceipt(id) {
	receiptActions.fetchingReceipt();

	return api.request(`${RECEIPT_ENDPOINT}/${id}`)
		.then(response => response.json())
		.then(response => receiptActions.fetchedReceipt(response));
}
