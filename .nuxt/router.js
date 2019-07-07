import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _a84b65d0 = () => interopDefault(import('..\\pages\\Dashboard\\index.vue' /* webpackChunkName: "pages_Dashboard_index" */))
const _6cef1705 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages_register_index" */))
const _66e0c7bc = () => interopDefault(import('..\\pages\\cslmis\\apprentiship\\index.vue' /* webpackChunkName: "pages_cslmis_apprentiship_index" */))
const _4fae2d5c = () => interopDefault(import('..\\pages\\cslmis\\aprCenters\\index.vue' /* webpackChunkName: "pages_cslmis_aprCenters_index" */))
const _47330333 = () => interopDefault(import('..\\pages\\cslmis\\Dashboard\\index.vue' /* webpackChunkName: "pages_cslmis_Dashboard_index" */))
const _1985433e = () => interopDefault(import('..\\pages\\cslmis\\devProgram\\index.vue' /* webpackChunkName: "pages_cslmis_devProgram_index" */))
const _461ceba8 = () => interopDefault(import('..\\pages\\cslmis\\facilities\\index.vue' /* webpackChunkName: "pages_cslmis_facilities_index" */))
const _2576099e = () => interopDefault(import('..\\pages\\cslmis\\login\\index.vue' /* webpackChunkName: "pages_cslmis_login_index" */))
const _16e939ce = () => interopDefault(import('..\\pages\\cslmis\\report\\index.vue' /* webpackChunkName: "pages_cslmis_report_index" */))
const _0e157e62 = () => interopDefault(import('..\\pages\\cslmis\\trainees\\index.vue' /* webpackChunkName: "pages_cslmis_trainees_index" */))
const _2abcd2ef = () => interopDefault(import('..\\pages\\cslmis\\trainers\\index.vue' /* webpackChunkName: "pages_cslmis_trainers_index" */))
const _97f43af0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
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

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/Dashboard",
      component: _a84b65d0,
      name: "Dashboard"
    }, {
      path: "/register",
      component: _6cef1705,
      name: "register"
    }, {
      path: "/cslmis/apprentiship",
      component: _66e0c7bc,
      name: "cslmis-apprentiship"
    }, {
      path: "/cslmis/aprCenters",
      component: _4fae2d5c,
      name: "cslmis-aprCenters"
    }, {
      path: "/cslmis/Dashboard",
      component: _47330333,
      name: "cslmis-Dashboard"
    }, {
      path: "/cslmis/devProgram",
      component: _1985433e,
      name: "cslmis-devProgram"
    }, {
      path: "/cslmis/facilities",
      component: _461ceba8,
      name: "cslmis-facilities"
    }, {
      path: "/cslmis/login",
      component: _2576099e,
      name: "cslmis-login"
    }, {
      path: "/cslmis/report",
      component: _16e939ce,
      name: "cslmis-report"
    }, {
      path: "/cslmis/trainees",
      component: _0e157e62,
      name: "cslmis-trainees"
    }, {
      path: "/cslmis/trainers",
      component: _2abcd2ef,
      name: "cslmis-trainers"
    }, {
      path: "/",
      component: _97f43af0,
      name: "index"
    }],

    fallback: false
  })
}
