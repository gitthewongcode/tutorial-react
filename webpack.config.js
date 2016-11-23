// exports an object, and that object lets you configure what webpack does
module.exports = {
  // #entry: tells webpack where to start processing code
  entry: './public/app.jsx',

  // #output: tells webpack where to output to
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
