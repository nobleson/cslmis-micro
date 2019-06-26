

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'CSLMIS | Admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'package content' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '~/assets/images/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    "~assets/scss/coreui.scss",
    'bootstrap-css-only/css/bootstrap.min.css',
    'mdbvue/build/css/mdb.css',
    'vue-slim-tabs/themes/default.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      "~plugins/bootstrapvue.js",
      "~plugins/googlemap.js",
      {src: '~plugins/leaflet.js', ssr: false}
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-buefy',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  /*
  ** Build configuration
  */
  build: {

    /*
    ** You can extend webpack config here
    */
    extend(ctx) {
      transpile: [
        'mdbvue'
      ]
    }
  }
}
