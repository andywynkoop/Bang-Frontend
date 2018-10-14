module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: require('path').resolve(__dirname, "dist"),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  }
}
