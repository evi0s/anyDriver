const path = require('path');

module.exports = {
    entry: './dist/index.js',
    output: {
        path: path.resolve(__dirname, 'dist_webpack'),
        filename: 'anyDriver.bundle.js',
        library: 'anyDriver',
        libraryTarget: "umd"
    }
};
