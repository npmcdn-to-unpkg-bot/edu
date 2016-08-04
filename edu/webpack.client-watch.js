var webpack = require("webpack");
var config = require("./webpack.client.js");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var hostname = process.env.HOSTNAME || "localhost";

config.cache = true;
config.debug = true;
config.devtool = "eval-sourcemap";

config.entry.unshift(
	"webpack-dev-server/client?http://" + hostname + ":8080",
	"webpack/hot/only-dev-server"
);

config.output.publicPath = "http://" + hostname + ":8080/dist/";
config.output.hotUpdateMainFilename = "update/[hash]/update.json";
config.output.hotUpdateChunkFilename = "update/[hash]/[id].update.js";

config.plugins = [
	new webpack.DefinePlugin({isBrowser: true}),
	new webpack.HotModuleReplacementPlugin(),
	new ExtractTextPlugin("style.css")
];

config.module.preLoaders.push({test: /\.jsx?$/, loaders: ['eslint-loader']});
config.module.postLoaders.push({test: /\.js$/, loaders: ["react-hot"], exclude: /node_modules/});

config.devServer = {
	publicPath:  "http://" + hostname + ":8080/dist/",
	contentBase: "./static",
	hot:         true,
	inline:      true,
	lazy:        false,
	quiet:       true,
	noInfo:      false,
	headers:     {"Access-Control-Allow-Origin": "*"},
	stats:       {colors: true},
	host:        hostname
};

module.exports = config;
