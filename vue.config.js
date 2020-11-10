const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'styles': path.resolve(__dirname, 'src/ui/assets/styles/'),
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/ui/assets/styles/base/tokens.base.scss";
          @import "@/ui/assets/styles/utilities/mixins.utilities.scss";
        `
      }
    }
  }
}
