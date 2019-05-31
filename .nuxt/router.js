import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _66428bed = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */))
const _07d9d8db = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages_register_index" */))
const _05712b6c = () => interopDefault(import('..\\pages\\cslmis\\artisans\\index.vue' /* webpackChunkName: "pages_cslmis_artisans_index" */))
const _b5322d5a = () => interopDefault(import('..\\pages\\cslmis\\centers\\index.vue' /* webpackChunkName: "pages_cslmis_centers_index" */))
const _47464456 = () => interopDefault(import('..\\pages\\cslmis\\companies\\index.vue' /* webpackChunkName: "pages_cslmis_companies_index" */))
const _2d917ae5 = () => interopDefault(import('..\\pages\\cslmis\\dashboard.vue' /* webpackChunkName: "pages_cslmis_dashboard" */))
const _10640540 = () => interopDefault(import('..\\pages\\cslmis\\facility\\index.vue' /* webpackChunkName: "pages_cslmis_facility_index" */))
const _47f0f689 = () => interopDefault(import('..\\pages\\pages\\Page404.vue' /* webpackChunkName: "pages_pages_Page404" */))
const _7c9ed3c6 = () => interopDefault(import('..\\pages\\pages\\Page500.vue' /* webpackChunkName: "pages_pages_Page500" */))
const _2eb3aabf = () => interopDefault(import('..\\pages\\cslmis\\companies\\Companies.vue' /* webpackChunkName: "pages_cslmis_companies_Companies" */))
const _448c173d = () => interopDefault(import('..\\pages\\cslmis\\trades\\Trades.vue' /* webpackChunkName: "pages_cslmis_trades_Trades" */))
const _bfea5044 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
      component: _66428bed,
      name: "login"
    }, {
      path: "/register",
      component: _07d9d8db,
      name: "register"
    }, {
      path: "/cslmis/artisans",
      component: _05712b6c,
      name: "cslmis-artisans"
    }, {
      path: "/cslmis/centers",
      component: _b5322d5a,
      name: "cslmis-centers"
    }, {
      path: "/cslmis/companies",
      component: _47464456,
      name: "cslmis-companies"
    }, {
      path: "/cslmis/dashboard",
      component: _2d917ae5,
      name: "cslmis-dashboard"
    }, {
      path: "/cslmis/facility",
      component: _10640540,
      name: "cslmis-facility"
    }, {
      path: "/pages/Page404",
      component: _47f0f689,
      name: "pages-Page404"
    }, {
      path: "/pages/Page500",
      component: _7c9ed3c6,
      name: "pages-Page500"
    }, {
      path: "/cslmis/companies/Companies",
      component: _2eb3aabf,
      name: "cslmis-companies-Companies"
    }, {
      path: "/cslmis/trades/Trades",
      component: _448c173d,
      name: "cslmis-trades-Trades"
    }, {
      path: "/",
      component: _bfea5044,
      name: "index"
    }],

    fallback: false
  })
}
