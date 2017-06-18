const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./build/webpack.config.dev.js')

const app = express()
const compiler = webpack(webpackConfig)

const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
  hot: true,
  stats: {
    colors: true,
    chunks: false
  }
})
app.use(webpackHotMiddleware(compiler, {
  log:console.log,
  noInfo: true,
}))
app.use(devMiddleware)


const port = process.env.PORT || 3000
app.get('*', (req, res) => {
  const htmlBuffer = devMiddleware.fileSystem.readFileSync(`${webpackConfig.output.path}/index.html`)

  res.send(htmlBuffer.toString())
})

module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})

console.log(module.hot)

if (module.hot) {
  module.hot.accept();
}