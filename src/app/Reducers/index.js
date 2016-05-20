import authReducer from 'Reducers/AuthReducer';
import groupReducer from 'Reducers/GroupReducer';
import { reducer as formReducer } from 'redux-form';
import receiptReducer from 'Reducers/ReceiptReducer';

export default {
	form: formReducer,
	auth: authReducer,
	group: groupReducer,
	receipt: receiptReducer,
};
