module.exports = {
  assetPrefix: './',
  basePath: '/suque',
  trailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/contato': { page: '/contato' }
    }
  }
}
