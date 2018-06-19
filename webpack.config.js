const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/view/car/car.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    }
};