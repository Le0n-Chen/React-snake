const path = require('path');
var webpack=require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');




// webpack.config.js 文件配置


module.exports = {

	entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.join(__dirname,'app/index.js')],


	output: {

		path: path.join(__dirname,'/dist/'),
		filename: '[name].js',
        publicPath:'/'

	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + "/index.tpl.html"
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	mode:'production',
	performance: { hints: false },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:"babel-loader",
                query:{
                    presets:['react','es2015']
                }
            },
            {
                test:/\.css$/,
                loader:"style!css"
            },
            {
                test:/\.less/,
                loader:'style-loader!css-loader!less-loader'
            }
        ]
    }

}
