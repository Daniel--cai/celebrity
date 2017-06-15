const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config.js')

const app = express()
const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
}))

app.use(webpackHotMiddleware(compiler, {
  log:console.log
}))
//app.use(express.static(__dirname))
const port = process.env.PORT || 3000
/*
app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, 'index.html'))
})*/

module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})