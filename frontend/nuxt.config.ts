// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-aos',
    'vue3-carousel-nuxt',
    '@nuxt/image',
  ],
  plugins: [
    './plugins/bootstrap.client.ts',
    './plugins/plugins.client.ts'
  ],

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    '@vuepic/vue-datepicker/dist/main.css',
    'sweetalert2/dist/sweetalert2.min.css',
    'vue3-easy-data-table/dist/style.css',
    // '@marcoschulte/vue3-progress/style',
    'animate.css',
    'vue3-carousel/carousel.css',
    // 'vue-tel-input/vue-tel-input.css',
    'vue-select/dist/vue-select.css',
    '~/layouts/styles/custom.css'
  ],
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