// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css',
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
