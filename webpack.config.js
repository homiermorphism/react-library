const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
        rules: [
            {
              test: /\.(js)$/,
              exclude: /node_modules/,
              use: {
                    loader: 'babel-loader'
                   }
            }
        ]
    },
    devServer: {
	    contentBase: path.join(__dirname, 'dist'),
	    compress: true,
	    port: 8080,
	    headers: {
		    "Access-Control-Allow-Origin": "*",
		    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    		"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
	    }
    }
};
