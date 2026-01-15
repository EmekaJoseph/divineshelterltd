// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-aos',
    'vue3-carousel-nuxt',
    '@nuxt/image',
  ],

  plugins: [
    './plugins/bootstrap.client.ts',
    './plugins/plugins.client.ts'
  ],

  build: {
    transpile: ['@vuepic/vue-datepicker']
  },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    '@vuepic/vue-datepicker/dist/main.css',
    'sweetalert2/dist/sweetalert2.min.css',
    'vue3-easy-data-table/dist/style.css',
    'animate.css',
    'vue3-carousel/carousel.css',
    // 'vue-tel-input/vue-tel-input.css',
    'vue-select/dist/vue-select.css',
    '~/layouts/styles/custom.css'
  ],

  routeRules: {
    // '/account/**': { ssr: false },

    '/_nuxt/**': {
      headers: { 'Cache-Control': 'public, max-age=31536000, immutable' }
    },
    '/_assets/**': {
      headers: { 'Cache-Control': 'public, max-age=31536000, immutable' }
    },
    '/_ipx/**': {
      headers: { 'Cache-Control': 'public, max-age=31536000, immutable' }
    },
    '/images/**': {
      headers: { 'Cache-Control': 'public, max-age=31536000, immutable' }
    },
    '**/*.ico': {
      headers: { 'Cache-Control': 'public, max-age=31536000, immutable' }
    }
  },

  nitro: {
    prerender: {
      crawlLinks: false,
    }
  },

  app: {
    buildAssetsDir: '/_assets/',
    head: {
      title: 'DIVINE SHELTER LTD',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // Open Graph meta tags
        { property: 'og:title', content: 'Divine Shelter Ltd' },
        { property: 'og:description', content: 'Divine Shelter Ltd: A professional construction and building materials firm. We deliver durable, cost-efficient projects using innovative Hydraform brick technology and provide expert training. Your trusted partner for quality construction from start to finish.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://divineshelterltd.com/' },
        { property: 'og:image', content: 'https://divineshelterltd.com/android-chrome-512x512.png' },
        { property: 'og:keywords', content: 'Building construction services, Building materials supply, Hydraform bricks and alternative building systems, Project Management, Training, ' },

        // Twitter meta tags
        // { name: 'twitter:card', content: 'summary_large_image' },
        // { name: 'twitter:title', content: 'Divine Shelter Ltd' },
        // { property: 'twitter:description', content: 'Divine Shelter Ltd: A professional construction and building materials firm. We deliver durable, cost-efficient projects using innovative Hydraform brick technology and provide expert training. Your trusted partner for quality construction from start to finish.' },
        // { name: 'twitter:image', content: 'https://divineshelterltd.com/android-chrome-512x512.png' },

        // Fallback description for search engines
        { name: 'description', content: 'Professional construction firm & materials supplier. We build durable, cost-efficient structures using Hydraform brick technology and offer expert training. Get a quote for your project or material needs today.' }
      ]
    }
  },

})



/*
- npm install animate.css --save
- npm i bootstrap@5.3.8
- npm i bootstrap-icons
- npx nuxi@latest module add pinia
- npm install -S vue-sweetalert2
- npm install aos --save
- npm install vue3-easy-data-table
- npm install @vuepic/vue-datepicker
- npm i -D @vueuse/nuxt @vueuse/core
- npx nuxi@latest module add aos
- npm i axios
- npx nuxi@latest module add vue3-carousel-nuxt
- npm install maska
- npm install vue-select@beta
- npx nuxt module add image
- npm i --save-dev @types/node

*/