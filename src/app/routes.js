import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from 'Containers/App';
import LoginContainer from 'Containers/LoginContainer';
import CreateReceipt from 'Containers/CreateReceiptContainer';
import ReceiptDetail from 'Containers/ReceiptDetailContainer';
import GroupListContainer from 'Containers/GroupListContainer';
import GroupDetailContainer from 'Containers/GroupDetailContainer';

export default function getRoutes(store) {
	return (
		<Provider store={store}>
			<Router history={browserHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={GroupListContainer} />
					<Route path="/login" component={LoginContainer} />
					<Route path="/group/:id">
						<Route path="add" component={CreateReceipt} />
						<IndexRoute component={GroupDetailContainer} />
					</Route>
					<Route path="/receipt/:id" component={ReceiptDetail} />
				</Route>
			</Router>
		</Provider>
	);
}
