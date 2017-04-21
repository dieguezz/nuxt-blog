module.exports = {
  build: {
    filenames: {
      vendor: 'vendor.[hash].js',
      app: 'app.[chunkhash].js'
    },
    loaders:[
      {
        test: /\.svg$/,
        include: /assets\/svg/,
        loader: 'svg-sprite-loader?' + JSON.stringify({
          name: '[name]',
          prefixize: false
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        exclude: /assets\/svg/,
        options: {
          limit: 1000, // 1K limit
          name: 'img/[name].[hash:8].[ext]'
        }
      }
    ],
    plugins: [],
    postcss: [],
    vendor: ['axios'],
  },
  cache: {
    max: 1000,
    maxAge: 900000
  },
  css: [{src: '~assets/css/main.styl', lang: 'stylus'}],
  dev: (process.env.NODE_ENV !== 'production'),
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  head: {
    titleTemplate: '%s - Vue blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },
  loading: false,
  performance: {
    gzip: true,
    prefetch: true
  },
  plugins: ['~plugins/svg-sprite-loader', '~plugins/i18n'],
  rootDir: process.cwd(),
  router: {
    base: '/',
    mode: 'history',
    middleware: ['i18n']
  },
  transition: {
    name: 'fade',
  },
};
