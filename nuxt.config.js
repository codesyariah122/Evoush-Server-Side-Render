require('dotenv').config()
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/global.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/bootstrap/css/bootstrap.min.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/icofont/icofont.min.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/boxicons/css/boxicons.min.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/venobox/venobox.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/owl.carousel/assets/owl.carousel.min.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/aos/aos.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/style.css'}
    ],
    script: [
      {
        src: '/assets/vendor/jquery/jquery.min.js',
        type: 'text/javascript'
      },
      {
        src: '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
        type: 'text/javascript'
      },
      {
        src: '/assets/vendor/jquery.easing/jquery.easing.min.js',
        type: 'text/javascript'
      },

      {
        src: '/assets/vendor/waypoints/jquery.waypoints.min.js',
        type: 'text/javascript'
      },
      {
        src: '/assets/vendor/counterup/counterup.min.js',
        type: 'text/javascript'
      },
      {
        src: '/assets/vendor/isotope-layout/isotope.pkgd.min.js',
        type: 'text/javascript'
      },
      {
        src: '/assets/vendor/venobox/venobox.min.js',
        type: 'text/javascript'
      },
      {
        src: '/assets/vendor/owl.carousel/owl.carousel.min.js',
        type: 'text/javascript'
      },
      {
        src: '/assets/vendor/typed.js/typed.min.js',
        type: 'text/javascript'
      },
      {
        src: '/assets/vendor/aos/aos.js',
        type: 'text/javascript'
      },
      {
        src: '/assets/js/main.js',
        type: 'text/javascript'
      }
    ]
  },


   pwa: {
      meta: {
        title: 'Evoush::Official',
        author: 'Evoush',
        icon: true
      },
      manifest: {
        name: 'Evoush::Official',
        short_name: 'Evoush',
        start_url: '/',
        lang: 'en',
        display: 'standalone',
        theme_color: '#a2466c',
        background_color: '#f7f0eb',
        icons: [
          {
            "src":"/icon.png",
            "size":"256x256",
            "type":"image/png"
          },
          {
            "src":"/icon_192.png",
            "size":"192x192",
            "type": "image/png"
          },
          {
           "src":"/icon_180.png",
           "size":"180x180",
           "type": "image/png"
          },
          {
           "src":"/icon_152.png",
           "size":"152x152",
           "type": "image/png"
          },
          {
           "src":"/icon_144.png",
           "size":"144x144",
           "type": "image/png"
          },
          {
           "src":"/icon_128.png",
           "size":"128x128",
           "type": "image/png"
          },
          {
           "src":"/icon_64.png",
           "size":"64x64",
           "type": "image/png"
          },
          {
           "src":"/icon_48.png",
           "size":"48x48",
           "type": "image/png"
          }
        ]
      },
    },

   workbox: {
    workboxOptions: {
      skipWaiting: true
    },
    // offline: true,
    // offlineStrategy: 'NetworkFirst',
    // offlinePage: null,
    // offlineAssets: [],
    runtimeCaching: [
      {
        urlPattern: '/assets/vendor/bootstrap/css/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: '/assets/vendor/icofont/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: '/assets/vendor/boxicons/css/.*',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: '/assets/vendor/venobox/.*',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: '/assets/vendor/owl.carousel/assets/.*',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: '/assets/vendor/aos/.*',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: '/assets/css/.*',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: '/assets/vendor/jquery/jquery.min.js',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: '/assets/vendor/jquery.easing/jquery.easing.min.js',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/pages.css', '@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/commerce'},
    {src: '~/plugins/sweetalert2', ssr: false},
    {src: '~/plugins/nuxt-leaflet', mode: 'client', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  body: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/robots',
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxt/content',
    '@nuxtjs/pwa',
    '@nuxtjs/onesignal',
    ['@nuxtjs/google-tag-manager', {id: 'GTM-MGR7PP9'}],
    ['@nuxtjs/google-adsense',
      {id: 'ca-pub-8390872078103831'}
    ],
  ],

  robots: {
    UserAgent: '*',
    Disallow: '/'
  },

  // OneSignal
   oneSignal: {
    init: {
      appId: '15dc915b-fe30-4b1b-b635-63ab40fc8361'
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // content for article fetch
  // markdown content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    },
    // nestedProperties: ['author.name']
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
