module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    {src: '~/assets/scss/custom.scss', lang: 'scss'}
  ],
  /*
  ** Router
  */
  router: {
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~plugins/global.js",
    "~plugins/axios",
    {src: "~plugins/slick-slide", ssr: false},
    // {src: "~/plugins/vuex-persist", ssr: false},
    "~/plugins/gmaps",
    "~/plugins/eventBus",
    "~/plugins/spinner",
    "~/plugins/i18n"
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    ['@nuxtjs/axios', {
      baseURL: process.env.NODE_ENV === 'development' ?
        'http://local.dental.com/wp-json/dental' : 'https://dentalesthetics.es/wp-json/dental'
    }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    debug: true,
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
