require('dotenv').config();
import routesPath from './router/paths';
import trLocale from './locales/tr';
import enLocale from './locales/en';

export default {
  head: {
    title: 'Title',
    titleTemplate: '%s | Name',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  loading: {
    color: '#973cfd',
    height: '3px',
    duration: 1000,
    throttle: 0,
  },

  pageTransition: 'slide-bottom',

  router: {
    linkActiveClass: null,
    linkExactActiveClass: null,
    linkPrefetchedClass: null,
  },

  css: [
    '~/assets/scss/style.scss',
    'node_modules/lite-youtube-embed/src/lite-yt-embed.css',
  ],

  plugins: [
    { src: '~/plugins/vue-mq', },
    { src: '~/plugins/vuelidate', },
    { src: '~/plugins/aos', mode: 'client', },
    { src: '~/plugins/vue-tippy', mode: 'client', },
    { src: '~/plugins/vue-ripple', mode: 'client', },
    { src: '~/plugins/vue-carousel', mode: 'client', },
    { src: "~/plugins/v-click-outside", mode: 'client', },
    { src: '~/plugins/lite-youtube-embed', mode: 'client', },
  ],

  components: {
    dirs: [
      '~/components',
      {
        path: '~/components/data/',
        prefix: 'data',
      },
      {
        path: '~/components/theme/',
        prefix: 't',
      },
      {
        path: '~/components/placeolders/',
        prefix: 'ph',
      },
    ],
  },

  buildModules: [
    '@nuxtjs/svg',
    '@nuxtjs/dotenv',
    '@nuxtjs/color-mode',
    '@nuxtjs/style-resources',
  ],

  dotenv: {

  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorMode',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'color-mode',
  },

  styleResources: {
    scss: [
      '~/assets/scss/resources.scss',
    ],
  },

  modules: [
     '@nuxtjs/amp',
     '@nuxt/image',
     '@nuxtjs/pwa',
     'nuxt-helmet',
     'nuxt-leaflet',
     '@nuxtjs/i18n',
     '@nuxtjs/sentry',
     'vue-toastification/nuxt',
  ],

  amp: {
    css: '~/assets/scss/amp.scss',
    origin: 'http://localhost:3000',
  },

  i18n: {
    locales: [
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.js' },
      { code: 'tr', name: 'Turkish', iso: 'tr-TR', file: 'tr.js' },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        tr: trLocale,
        en: enLocale,
      },
      dateTimeFormats: {        
        tr: {
          long: { year: 'numeric', month: 'long', day: 'numeric' },
        },
        en: {
          long: { year: 'numeric', month: 'long', day: 'numeric' },
        },
      },
    },
    parsePages: false,
    pages: routesPath,
    detectBrowserLanguage: false,
    seo: false,
  },

  image: {
    // presets: {
      // avatar: {
      //   modifiers: {
      //     format: 'webp',
      //     width: 50,
      //     height: 50,
      //   },
      // },
    // },
    // domains: [
    //   'images.unsplash.com',
    // ],
    // alias: {
    //   unsplash: 'https://images.unsplash.com',
    // },
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  helmet: {
    // frameguard: false,
  },

  sentry: {
    dsn: '',
    config: {

    },
  },

  toast: {
    timeout: 2000,
    closeOnClick: true,
  },

  server: {
    port: 3000,
  },

  build: {

  },

};
