import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _6ef7645c = () => import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */).then(m => m.default || m)
const _6111f220 = () => import('../pages/grazie-newsletter.vue' /* webpackChunkName: "pages/grazie-newsletter" */).then(m => m.default || m)
const _3823034b = () => import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */).then(m => m.default || m)
const _09d24726 = () => import('../pages/grazie.vue' /* webpackChunkName: "pages/grazie" */).then(m => m.default || m)
const _366c6203 = () => import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */).then(m => m.default || m)
const _016f0548 = () => import('../pages/landing/_slug.vue' /* webpackChunkName: "pages/landing/_slug" */).then(m => m.default || m)
const _25f5e29c = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/privacy",
			component: _6ef7645c,
			name: "privacy"
		},
		{
			path: "/grazie-newsletter",
			component: _6111f220,
			name: "grazie-newsletter"
		},
		{
			path: "/blog",
			component: _3823034b,
			name: "blog"
		},
		{
			path: "/grazie",
			component: _09d24726,
			name: "grazie"
		},
		{
			path: "/blog/:slug",
			component: _366c6203,
			name: "blog-slug"
		},
		{
			path: "/landing/:slug?",
			component: _016f0548,
			name: "landing-slug"
		},
		{
			path: "/",
			component: _25f5e29c,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
