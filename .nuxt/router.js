import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _8d9fe3fa = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */))
const _6cef1705 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages_register_index" */))
const _6378de74 = () => interopDefault(import('..\\pages\\cslmis\\artisans\\index.vue' /* webpackChunkName: "pages_cslmis_artisans_index" */))
const _3afd702e = () => interopDefault(import('..\\pages\\cslmis\\centers\\index.vue' /* webpackChunkName: "pages_cslmis_centers_index" */))
<<<<<<< HEAD
const _b1795528 = () => interopDefault(import('..\\pages\\cslmis\\companies\\index.vue' /* webpackChunkName: "pages_cslmis_companies_index" */))
const _bb6052e2 = () => interopDefault(import('..\\pages\\cslmis\\dashboard.vue' /* webpackChunkName: "pages_cslmis_dashboard" */))
const _5dff718a = () => interopDefault(import('..\\pages\\cslmis\\facility\\index.vue' /* webpackChunkName: "pages_cslmis_facility_index" */))
const _d4f369c2 = () => interopDefault(import('..\\pages\\pages\\Page404.vue' /* webpackChunkName: "pages_pages_Page404" */))
const _6b97af48 = () => interopDefault(import('..\\pages\\pages\\Page500.vue' /* webpackChunkName: "pages_pages_Page500" */))
const _38f640d5 = () => interopDefault(import('..\\pages\\cslmis\\companies\\Companies.vue' /* webpackChunkName: "pages_cslmis_companies_Companies" */))
=======
const _5dff718a = () => interopDefault(import('..\\pages\\cslmis\\facility\\index.vue' /* webpackChunkName: "pages_cslmis_facility_index" */))
const _3e2b9094 = () => interopDefault(import('..\\pages\\cslmis\\jobadvert\\index.vue' /* webpackChunkName: "pages_cslmis_jobadvert_index" */))
const _4302b67a = () => interopDefault(import('..\\pages\\cslmis\\jobapplication\\index.vue' /* webpackChunkName: "pages_cslmis_jobapplication_index" */))
const _f3305b94 = () => interopDefault(import('..\\pages\\cslmis\\labourstatistic\\index.vue' /* webpackChunkName: "pages_cslmis_labourstatistic_index" */))
const _3cedb4c3 = () => interopDefault(import('..\\pages\\cslmis\\retrenchement\\index.vue' /* webpackChunkName: "pages_cslmis_retrenchement_index" */))
const _d4f369c2 = () => interopDefault(import('..\\pages\\pages\\Page404.vue' /* webpackChunkName: "pages_pages_Page404" */))
const _6b97af48 = () => interopDefault(import('..\\pages\\pages\\Page500.vue' /* webpackChunkName: "pages_pages_Page500" */))
const _42c515ff = () => interopDefault(import('..\\pages\\cslmis\\centers\\training-center.vue' /* webpackChunkName: "pages_cslmis_centers_training-center" */))
>>>>>>> 5dd587c6647464ea3f38bf0e2e576cc8ec43c1e0
const _fcb3145a = () => interopDefault(import('..\\pages\\cslmis\\trades\\Trades.vue' /* webpackChunkName: "pages_cslmis_trades_Trades" */))
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
      path: "/login",
      component: _8d9fe3fa,
      name: "login"
    }, {
      path: "/register",
      component: _6cef1705,
      name: "register"
    }, {
      path: "/cslmis/artisans",
      component: _6378de74,
      name: "cslmis-artisans"
    }, {
      path: "/cslmis/centers",
      component: _3afd702e,
      name: "cslmis-centers"
    }, {
<<<<<<< HEAD
      path: "/cslmis/companies",
      component: _b1795528,
      name: "cslmis-companies"
    }, {
      path: "/cslmis/dashboard",
      component: _bb6052e2,
      name: "cslmis-dashboard"
    }, {
=======
>>>>>>> 5dd587c6647464ea3f38bf0e2e576cc8ec43c1e0
      path: "/cslmis/facility",
      component: _5dff718a,
      name: "cslmis-facility"
    }, {
      path: "/cslmis/jobadvert",
      component: _3e2b9094,
      name: "cslmis-jobadvert"
    }, {
      path: "/cslmis/jobapplication",
      component: _4302b67a,
      name: "cslmis-jobapplication"
    }, {
      path: "/cslmis/labourstatistic",
      component: _f3305b94,
      name: "cslmis-labourstatistic"
    }, {
      path: "/cslmis/retrenchement",
      component: _3cedb4c3,
      name: "cslmis-retrenchement"
    }, {
      path: "/pages/Page404",
      component: _d4f369c2,
      name: "pages-Page404"
    }, {
      path: "/pages/Page500",
      component: _6b97af48,
      name: "pages-Page500"
    }, {
<<<<<<< HEAD
      path: "/cslmis/companies/Companies",
      component: _38f640d5,
      name: "cslmis-companies-Companies"
=======
      path: "/cslmis/centers/training-center",
      component: _42c515ff,
      name: "cslmis-centers-training-center"
>>>>>>> 5dd587c6647464ea3f38bf0e2e576cc8ec43c1e0
    }, {
      path: "/cslmis/trades/Trades",
      component: _fcb3145a,
      name: "cslmis-trades-Trades"
    }, {
      path: "/",
      component: _97f43af0,
      name: "index"
    }],

    fallback: false
  })
}
