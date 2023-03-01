export default {
  target: 'static', // default is 'server'
  head: { // Global page headers: https://go.nuxtjs.dev/config-head
    title: "Sport Betting",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "",
      },
      {
        name: "format-detection",
        content: "telephone=no",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
    ],
  },

  css: [
    "~/assets/css/index.css",
    // "~/assets/css/index.scss",
    // "~/assets/css/variables/variables.scss",
  ],

  plugins: [
    { src: "@/plugins/api.js",},
    { src: "@/plugins/device.server.js",},
    { src: '@/plugins/splide.js', mode: 'client'},
    { src: '~plugins/v-calendar.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"],
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"],
          },
        ],
      },
    ],
    '@nuxtjs/style-resources',
    "nuxt-i18n",
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    'bootstrap-vue/nuxt',
    '@nuxtjs/toast',
  ],
  toast: {
    position: 'top-center',
    duration: 3000,
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },
  styleResources: {
    scss: ['~/assets/css/variables/*.scss']
  },
  i18n: {
    locales: [
      { code: "de", name: "Deutsch", imgUrl: "de.png",},
      { code: "en", name: "English", imgUrl: "en.png",},
      { code: "es", name: "Español", imgUrl: "es.png",},
      { code: "fi", name: "Filipino", imgUrl: "fi.png",},
      { code: "fr", name: "Français", imgUrl: "fr.png",},
      { code: "po", name: "Português", imgUrl: "po.png",},
      { code: "py", name: "Русский", imgUrl: "py.png",},
      { code: "tu", name: "Türkçe", imgUrl: "tu.png",},
    ],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        de: require('./locales/de.json'),
        en: require('./locales/en.json'),
        es: require('./locales/es.json'),
        fi: require('./locales/fi.json'),
        fr: require('./locales/fr.json'),
        po: require('./locales/po.json'),
        py: require('./locales/py.json'),
        tu: require('./locales/tu.json'),
      }
    },
  },
  server: {
      port: 4500,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },
};
