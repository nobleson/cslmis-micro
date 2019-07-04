import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _3490d4ce = () => interopDefault(import('..\\pages\\Dashboard\\index.vue' /* webpackChunkName: "pages_Dashboard_index" */))
const _13f63a64 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages_register_index" */))
const _e4ccadfe = () => interopDefault(import('..\\pages\\cslmis\\apprentiship\\index.vue' /* webpackChunkName: "pages_cslmis_apprentiship_index" */))
const _27bea1f1 = () => interopDefault(import('..\\pages\\cslmis\\aprCenters\\index.vue' /* webpackChunkName: "pages_cslmis_aprCenters_index" */))
const _49c43ab4 = () => interopDefault(import('..\\pages\\cslmis\\Dashboard\\index.vue' /* webpackChunkName: "pages_cslmis_Dashboard_index" */))
const _691afbdd = () => interopDefault(import('..\\pages\\cslmis\\devProgram\\index.vue' /* webpackChunkName: "pages_cslmis_devProgram_index" */))
const _2c8742cb = () => interopDefault(import('..\\pages\\cslmis\\facilities\\index.vue' /* webpackChunkName: "pages_cslmis_facilities_index" */))
const _2689299f = () => interopDefault(import('..\\pages\\cslmis\\login\\index.vue' /* webpackChunkName: "pages_cslmis_login_index" */))
const _15dc4338 = () => interopDefault(import('..\\pages\\cslmis\\report\\index.vue' /* webpackChunkName: "pages_cslmis_report_index" */))
const _1eaed2c1 = () => interopDefault(import('..\\pages\\cslmis\\trainees\\index.vue' /* webpackChunkName: "pages_cslmis_trainees_index" */))
const _3b56274e = () => interopDefault(import('..\\pages\\cslmis\\trainers\\index.vue' /* webpackChunkName: "pages_cslmis_trainers_index" */))
const _8afe3eb2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
      component: _3490d4ce,
      name: "Dashboard"
    }, {
      path: "/register",
      component: _13f63a64,
      name: "register"
    }, {
      path: "/cslmis/apprentiship",
      component: _e4ccadfe,
      name: "cslmis-apprentiship"
    }, {
      path: "/cslmis/aprCenters",
      component: _27bea1f1,
      name: "cslmis-aprCenters"
    }, {
      path: "/cslmis/Dashboard",
      component: _49c43ab4,
      name: "cslmis-Dashboard"
    }, {
      path: "/cslmis/devProgram",
      component: _691afbdd,
      name: "cslmis-devProgram"
    }, {
      path: "/cslmis/facilities",
      component: _2c8742cb,
      name: "cslmis-facilities"
    }, {
      path: "/cslmis/login",
      component: _2689299f,
      name: "cslmis-login"
    }, {
      path: "/cslmis/report",
      component: _15dc4338,
      name: "cslmis-report"
    }, {
      path: "/cslmis/trainees",
      component: _1eaed2c1,
      name: "cslmis-trainees"
    }, {
      path: "/cslmis/trainers",
      component: _3b56274e,
      name: "cslmis-trainers"
    }, {
      path: "/",
      component: _8afe3eb2,
      name: "index"
    }],

    fallback: false
  })
}
