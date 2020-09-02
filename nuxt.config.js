import siteInfo from './assets/data/general';

export default {
  /* Server to serve over wifi */
  /*   server: {
      port: 8000, //default 3000
      host: '0.0.0.0'
    }, */
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: siteInfo.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        // TODO 
        content: 'Tristan Mayo es un programador front-end...'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: './logo-favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['assets/scss/main.scss', 'assets/fontawesome-free-5.12.0-web/css/all.min.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    //!THIS IS WHERE I WANT TO ADD TRUE WHEN MORE PAGES
    extractCSS: false,
    extend(config, ctx) { }
  },
  styleResources: {
    scss: ['./assets/scss/_variables.scss', './assets/scss/_mixins.scss']
  }
}
