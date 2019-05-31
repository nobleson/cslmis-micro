import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _3cdd41ce = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */))
const _fc6bb3a2 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages_register_index" */))
const _79e1b8c4 = () => interopDefault(import('..\\pages\\cslmis\\artisans\\index.vue' /* webpackChunkName: "pages_cslmis_artisans_index" */))
const _244e9502 = () => interopDefault(import('..\\pages\\cslmis\\centers\\index.vue' /* webpackChunkName: "pages_cslmis_centers_index" */))
const _84d49298 = () => interopDefault(import('..\\pages\\cslmis\\facility\\index.vue' /* webpackChunkName: "pages_cslmis_facility_index" */))
const _741c97cc = () => interopDefault(import('..\\pages\\cslmis\\jobadvert\\index.vue' /* webpackChunkName: "pages_cslmis_jobadvert_index" */))
const _545217b8 = () => interopDefault(import('..\\pages\\cslmis\\jobapplication\\index.vue' /* webpackChunkName: "pages_cslmis_jobapplication_index" */))
const _4e1b49cc = () => interopDefault(import('..\\pages\\cslmis\\labourstatistic\\index.vue' /* webpackChunkName: "pages_cslmis_labourstatistic_index" */))
const _312619d9 = () => interopDefault(import('..\\pages\\cslmis\\retrenchement\\index.vue' /* webpackChunkName: "pages_cslmis_retrenchement_index" */))
const _2ad7aeb5 = () => interopDefault(import('..\\pages\\pages\\Page404.vue' /* webpackChunkName: "pages_pages_Page404" */))
const _5f858bf2 = () => interopDefault(import('..\\pages\\pages\\Page500.vue' /* webpackChunkName: "pages_pages_Page500" */))
const _290dffd6 = () => interopDefault(import('..\\pages\\cslmis\\centers\\training-center.vue' /* webpackChunkName: "pages_cslmis_centers_training-center" */))
const _e604392e = () => interopDefault(import('..\\pages\\cslmis\\trades\\Trades.vue' /* webpackChunkName: "pages_cslmis_trades_Trades" */))
const _a6b0039c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
      path: "/login",
      component: _3cdd41ce,
      name: "login"
    }, {
      path: "/register",
      component: _fc6bb3a2,
      name: "register"
    }, {
      path: "/cslmis/artisans",
      component: _79e1b8c4,
      name: "cslmis-artisans"
    }, {
      path: "/cslmis/centers",
      component: _244e9502,
      name: "cslmis-centers"
    }, {
      path: "/cslmis/facility",
      component: _84d49298,
      name: "cslmis-facility"
    }, {
      path: "/cslmis/jobadvert",
      component: _741c97cc,
      name: "cslmis-jobadvert"
    }, {
      path: "/cslmis/jobapplication",
      component: _545217b8,
      name: "cslmis-jobapplication"
    }, {
      path: "/cslmis/labourstatistic",
      component: _4e1b49cc,
      name: "cslmis-labourstatistic"
    }, {
      path: "/cslmis/retrenchement",
      component: _312619d9,
      name: "cslmis-retrenchement"
    }, {
      path: "/pages/Page404",
      component: _2ad7aeb5,
      name: "pages-Page404"
    }, {
      path: "/pages/Page500",
      component: _5f858bf2,
      name: "pages-Page500"
    }, {
      path: "/cslmis/centers/training-center",
      component: _290dffd6,
      name: "cslmis-centers-training-center"
    }, {
      path: "/cslmis/trades/Trades",
      component: _e604392e,
      name: "cslmis-trades-Trades"
    }, {
      path: "/",
      component: _a6b0039c,
      name: "index"
    }],

    fallback: false
  })
}
