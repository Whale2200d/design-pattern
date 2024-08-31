const path = require("path");
module.exports = {
	mode: "development",
	// entry: "./src/iterator/index.ts",
	// entry: "./src/strategy/index.ts",
	// entry: "./src/template/index.ts",
	// entry: "./src/adapter/index.ts",
	// entry: "./src/bridge/index.ts",
	// entry: "./src/decorator/index.ts",
	entry: "./src/singleton/index.ts",
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.tsx$/,
				use: "ts-loader",
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	}
};
