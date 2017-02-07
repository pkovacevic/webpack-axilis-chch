module.exports = {
    entry: "./public/js/index.js",
    output: {
        path: "./public/js",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.css/,
            loaders: ['style-loader', 'css-loader']
        },
        {
            test: /\.svg/,
            loaders: ['url-loader']
        },
        {
            test: /\.js/,
            loader: 'babel-loader',
            query:{
                presets: ['es2015']
            }
        }]
    }
}