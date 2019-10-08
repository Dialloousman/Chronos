const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './app/index.jsx', 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
     module: {
     rules: [
                { test: /\.(jsx)$/, use: 'babel-loader'},
                { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
                { test: /\.(png|jp(e*)g|svg)$/, use: 'url-loader' }
            ]
    },
    mode: 'development',
    plugins: [
        new HtmlwebpackPlugin({
            template: 'app/index.html'
        })
    ]
}
