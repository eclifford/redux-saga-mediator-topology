const path = require('path');

module.exports = {
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: __dirname + '/dist',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src')
        ]
      }
    ]
  }
}
