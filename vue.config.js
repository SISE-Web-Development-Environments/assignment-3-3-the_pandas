module.exports = {
  configureWebpack: {
    devtool: "source-map"
  },
  devServer: { 
    proxy: {
    '/api': { target :"https://panda-recipes.herokuapp.com",
      ws: true,
      changeOrigin: true
    }
  }
  }
};

