const { resolve } = require('path');

module.exports = env => {
  return {
    context: resolve(__dirname, 'src'),
    entry: './js/main.js',
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, 'dist'),
      pathinfo: !env.prod,
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
        { test: /\.jsx?$/, loader: 'babel', exclude: /(node_modules|bower_components)/ },
        { test: /\.css$/, loader: 'style!css' },
        { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      ],
    },
  }
};
