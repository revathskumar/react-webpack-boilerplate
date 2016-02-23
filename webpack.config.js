module.exports = {
  entry: {
    index: './js/index.jsx'
  },
  output: {
    filename: 'public/js/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
};
