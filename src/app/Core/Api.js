import { getState } from 'Core/Store';
import { stringify } from 'query-string';
import { createClient } from 'fetch-plus';

const client = createClient(process.env.API_ENDPOINT);

client.addMiddleware(
		(req) => {
			const request = req;
			request.options.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

			return request;
		}
);

client.addMiddleware(
	(req) => {
		const request = req;

		if (!request.options.body) return request;

		request.options.body = stringify(req.options.body);

		return request;
	}
);


client.addMiddleware(
	(req) => {
		const request = req;
		const auth = getState().auth;

		if (auth.token) {
			request.options.headers.Authorization = `Bearer ${auth.token}`;
		}

		return request;
	}
);

export default client;
