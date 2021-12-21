module.exports = (config) => {
  config.module.rules.push({
    test: /\.jsx?$/,
    loader: 'babel-loader',
    options: {
      presets: ['@babel/env', '@babel/preset-react']
    }
  })
  config.resolve.extensions.push('.jsx')

  return config
}