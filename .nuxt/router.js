import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _c755a586 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */))
const _ec4814ea = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages_register_index" */))
const _9be4219c = () => interopDefault(import('..\\pages\\cslmis\\admin\\index.vue' /* webpackChunkName: "pages_cslmis_admin_index" */))
const _6f0c520c = () => interopDefault(import('..\\pages\\cslmis\\artisans\\index.vue' /* webpackChunkName: "pages_cslmis_artisans_index" */))
const _6b70f75c = () => interopDefault(import('..\\pages\\cslmis\\assesors\\index.vue' /* webpackChunkName: "pages_cslmis_assesors_index" */))
const _60c8b822 = () => interopDefault(import('..\\pages\\cslmis\\assessmentbody\\index.vue' /* webpackChunkName: "pages_cslmis_assessmentbody_index" */))
const _521bfba8 = () => interopDefault(import('..\\pages\\cslmis\\awardingbody\\index.vue' /* webpackChunkName: "pages_cslmis_awardingbody_index" */))
const _48dc26a3 = () => interopDefault(import('..\\pages\\cslmis\\centers\\index.vue' /* webpackChunkName: "pages_cslmis_centers_index" */))
const _3b3d24b4 = () => interopDefault(import('..\\pages\\cslmis\\companies\\index.vue' /* webpackChunkName: "pages_cslmis_companies_index" */))
const _377f2b95 = () => interopDefault(import('..\\pages\\cslmis\\dashboard.vue' /* webpackChunkName: "pages_cslmis_dashboard" */))
const _79ff2be0 = () => interopDefault(import('..\\pages\\cslmis\\facility\\index.vue' /* webpackChunkName: "pages_cslmis_facility_index" */))
const _18a570fe = () => interopDefault(import('..\\pages\\cslmis\\licensingbody\\index.vue' /* webpackChunkName: "pages_cslmis_licensingbody_index" */))
const _21b84f1d = () => interopDefault(import('..\\pages\\cslmis\\program\\index.vue' /* webpackChunkName: "pages_cslmis_program_index" */))
const _130ff159 = () => interopDefault(import('..\\pages\\cslmis\\regulatorybody\\index.vue' /* webpackChunkName: "pages_cslmis_regulatorybody_index" */))
const _54a45c06 = () => interopDefault(import('..\\pages\\cslmis\\trade\\index.vue' /* webpackChunkName: "pages_cslmis_trade_index" */))
const _30f8e068 = () => interopDefault(import('..\\pages\\cslmis\\user\\index.vue' /* webpackChunkName: "pages_cslmis_user_index" */))
const _43e083d9 = () => interopDefault(import('..\\pages\\pages\\Page404.vue' /* webpackChunkName: "pages_pages_Page404" */))
const _788e6116 = () => interopDefault(import('..\\pages\\pages\\Page500.vue' /* webpackChunkName: "pages_pages_Page500" */))
const _fc0fdee4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
      component: _c755a586,
      name: "login"
    }, {
      path: "/register",
      component: _ec4814ea,
      name: "register"
    }, {
      path: "/cslmis/admin",
      component: _9be4219c,
      name: "cslmis-admin"
    }, {
      path: "/cslmis/artisans",
      component: _6f0c520c,
      name: "cslmis-artisans"
    }, {
      path: "/cslmis/assesors",
      component: _6b70f75c,
      name: "cslmis-assesors"
    }, {
      path: "/cslmis/assessmentbody",
      component: _60c8b822,
      name: "cslmis-assessmentbody"
    }, {
      path: "/cslmis/awardingbody",
      component: _521bfba8,
      name: "cslmis-awardingbody"
    }, {
      path: "/cslmis/centers",
      component: _48dc26a3,
      name: "cslmis-centers"
    }, {
      path: "/cslmis/companies",
      component: _3b3d24b4,
      name: "cslmis-companies"
    }, {
      path: "/cslmis/dashboard",
      component: _377f2b95,
      name: "cslmis-dashboard"
    }, {
      path: "/cslmis/facility",
      component: _79ff2be0,
      name: "cslmis-facility"
    }, {
      path: "/cslmis/licensingbody",
      component: _18a570fe,
      name: "cslmis-licensingbody"
    }, {
      path: "/cslmis/program",
      component: _21b84f1d,
      name: "cslmis-program"
    }, {
      path: "/cslmis/regulatorybody",
      component: _130ff159,
      name: "cslmis-regulatorybody"
    }, {
      path: "/cslmis/trade",
      component: _54a45c06,
      name: "cslmis-trade"
    }, {
      path: "/cslmis/user",
      component: _30f8e068,
      name: "cslmis-user"
    }, {
      path: "/pages/Page404",
      component: _43e083d9,
      name: "pages-Page404"
    }, {
      path: "/pages/Page500",
      component: _788e6116,
      name: "pages-Page500"
    }, {
      path: "/",
      component: _fc0fdee4,
      name: "index"
    }],

    fallback: false
  })
}
