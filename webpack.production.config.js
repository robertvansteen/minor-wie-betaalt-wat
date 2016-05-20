const PATH = __dirname;
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

	// Context of the app
	context: PATH,

	entry: './src/client',

	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.client.js',
		publicPath: '/',
		hash: true,
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
		new ExtractTextPlugin('main.css'),
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
				loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-0'],
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(
					'style-loader',
					`css-loader?modules&importLoaders=1
					&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader`
				),
			},
		],
	},
};
