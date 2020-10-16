const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyPlugin(
        [
          { 
            from: './node_modules/ton-client-web-js/tonclient.wasm',
          },
        ],
      ),
    ]
  },
  
}