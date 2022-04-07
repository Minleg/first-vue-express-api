// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
// above code existed from default

// connect vue to express server, where to connect to
module.exports = { // configures vue developer server, it tells the vue developer server that if any API request are made 
  devServer: { // by the Vue Client, they need to be send to this particular address 
    proxy: 'http://127.0.0.1:3000' // address of your Express server
  }
}

