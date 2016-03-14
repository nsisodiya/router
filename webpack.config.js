module.exports = {
	entry: {
		"ReactRouter": "./src/index.js",
		"example": "./example/example.js"
	},
	output: {
		path: "dist",
		filename: "[name].js",
		libraryTarget: 'umd',
		library: "[name]"
	},
	externals: {
		"@nsisodiya/router": {
			commonjs: '@nsisodiya/router',
			commonjs2: '@nsisodiya/router',
			amd: 'ReactRouter',
			root: 'ReactRouter'
		}
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel",
				query: {
					presets: ['es2015']
				}
			}
		]
	}
};