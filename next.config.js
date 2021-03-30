module.exports = {
  assetPrefix: './',
  // basePath: '/suque',
  // trailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/contato': { page: '/contato' },
      '/producoes': { page: '/producoes' },
      '/roteiro': { page: '/roteiro' },
      '/sobre' : { page: '/sobre' }
    }
  }
}
