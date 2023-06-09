const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		app: './src/index.tsx'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.min.js'
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			app: path.resolve(__dirname, 'src/app/'), // Add aliases for your directories
			entities: path.resolve(__dirname, 'src/entitiesC/'),
			features: path.resolve(__dirname, 'src/features/'),
			pages: path.resolve(__dirname, 'src/pages/'),
			shared: path.resolve(__dirname, 'src/shared/'),
			widgets: path.resolve(__dirname, 'src/widgets/')
		}
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.module\.scss$/,
				use: [
					MiniCssExtractPlugin.loader, // Extract CSS into separate file
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[local]__[hash:base64:5]' // Customize the generated CSS class names
							}
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.scss$/, // Match regular SCSS files
				exclude: /\.module\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
				type: 'asset/resource'
			},
			{
				test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
				type: 'asset'
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin({
				minimizerOptions: {
					preset: [
						"default",
						{
							discardComments: { removeAll: true },
						},
					],
				},
			}),
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html', // Path to your source index.html file
			filename: 'index.html', // Output filename in the dist directory
		}),
		new MiniCssExtractPlugin({
			filename: 'app.min.css' // Define the name for the extracted CSS file
		})
	],

	devServer: {
		contentBase: './public',
		hot: true,
	},
};