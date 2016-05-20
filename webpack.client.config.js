const PATH = __dirname;
const path = require('path');
const webpack = require('webpack');
const DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = {

	// Context of the app
	context: PATH,

	devtool: 'source-map',

	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8888',
		'webpack/hot/only-dev-server',
		'./src/client',
	],

	output: {
		path: `${PATH}/hot`,
		publicPath: 'http://0.0.0.0:8888/',
		filename: 'bundle.client.js',
	},

	// Instructions to how resolve the modules
	resolve: {
		root: `${PATH}/src/app`,
		extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.css'],
		fallback: path.join(__dirname, 'node_modules'),
		alias: {
			env: path.join(PATH, 'env'),
		},
	},

	plugins: [
		new DotenvPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],

	postcss: [
		require('postcss-modules-values'),
		require('postcss-nested'),
		require('autoprefixer'),
	],

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'],
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader',
			},
			{
				test: /\.json$/,
				loader: 'json-loader',
			},
			{
				test: /\.html$/,
				loader: 'html',
			},
		],
	},
};
