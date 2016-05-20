const dotenv = require('dotenv');
const webpack = require('webpack');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = {
	client: require('./webpack.client.config.js'),
	server: require('./webpack.server.config.js'),
};
const server = express();
const compiler = webpack(config.server);

// Load env file
dotenv.load();

let bundleValid = false;

// Set up the compiler
compiler.plugin('compile', () => {
	if (bundleValid) {
		bundleValid = false;
		delete require.cache[require.resolve('./build/bundle.server.js')];
	}

	console.log('Bundling...');
});

compiler.plugin('done', (stats) => {
	console.log('Bundling completed!');
	console.log(stats.toString({
		colors: true,
		chunks: false,
		children: false,
	}));
	console.log('');

	bundleValid = true;
});

compiler.watch({}, (error) => {
	if (error) {
		console.log('Something went wrong while building the server bundle.');
		console.log(error);
	}
});

// Set up the regular server
server.use(express.static('build'));
server.use(express.static('public'));
server.use(cookieParser());
server.use(bodyParser.urlencoded({ extended: false }));

server.use((request, response) => {
	let app;

	if (!bundleValid) {
		return response.status(400).end('Bundle not valid');
	}

	app = require('./build/bundle.server.js');

	return app.default(request, response);
});

console.log('Listening at localhost on port 8080');
server.listen('8080');
