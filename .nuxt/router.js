import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _3d4eb622 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */))
const _8f3beece = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages_register_index" */))
const _2b3f94e4 = () => interopDefault(import('..\\pages\\cslmis\\admin\\index.vue' /* webpackChunkName: "pages_cslmis_admin_index" */))
const _40fafc08 = () => interopDefault(import('..\\pages\\cslmis\\artisans\\index.vue' /* webpackChunkName: "pages_cslmis_artisans_index" */))
const _42c8a960 = () => interopDefault(import('..\\pages\\cslmis\\assesors\\index.vue' /* webpackChunkName: "pages_cslmis_assesors_index" */))
const _4e84467d = () => interopDefault(import('..\\pages\\cslmis\\assessmentbody\\index.vue' /* webpackChunkName: "pages_cslmis_assessmentbody_index" */))
const _311df03a = () => interopDefault(import('..\\pages\\cslmis\\awardingbody\\index.vue' /* webpackChunkName: "pages_cslmis_awardingbody_index" */))
const _3c3b27d5 = () => interopDefault(import('..\\pages\\cslmis\\centers\\index.vue' /* webpackChunkName: "pages_cslmis_centers_index" */))
const _7a04ea58 = () => interopDefault(import('..\\pages\\cslmis\\companies\\index.vue' /* webpackChunkName: "pages_cslmis_companies_index" */))
const _466699ba = () => interopDefault(import('..\\pages\\cslmis\\dashboard.vue' /* webpackChunkName: "pages_cslmis_dashboard" */))
const _3b818f1e = () => interopDefault(import('..\\pages\\cslmis\\facility\\index.vue' /* webpackChunkName: "pages_cslmis_facility_index" */))
const _4201c99a = () => interopDefault(import('..\\pages\\cslmis\\licensingbody\\index.vue' /* webpackChunkName: "pages_cslmis_licensingbody_index" */))
const _1517504f = () => interopDefault(import('..\\pages\\cslmis\\program\\index.vue' /* webpackChunkName: "pages_cslmis_program_index" */))
const _dc0ed832 = () => interopDefault(import('..\\pages\\cslmis\\regulatorybody\\index.vue' /* webpackChunkName: "pages_cslmis_regulatorybody_index" */))
const _4edf77af = () => interopDefault(import('..\\pages\\cslmis\\trade\\index.vue' /* webpackChunkName: "pages_cslmis_trade_index" */))
const _8dfa8714 = () => interopDefault(import('..\\pages\\cslmis\\user\\index.vue' /* webpackChunkName: "pages_cslmis_user_index" */))
const _55e4d70b = () => interopDefault(import('..\\pages\\pages\\Page404.vue' /* webpackChunkName: "pages_pages_Page404" */))
const _eada9770 = () => interopDefault(import('..\\pages\\pages\\Page500.vue' /* webpackChunkName: "pages_pages_Page500" */))
const _3a19fd1c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
      component: _3d4eb622,
      name: "login"
    }, {
      path: "/register",
      component: _8f3beece,
      name: "register"
    }, {
      path: "/cslmis/admin",
      component: _2b3f94e4,
      name: "cslmis-admin"
    }, {
      path: "/cslmis/artisans",
      component: _40fafc08,
      name: "cslmis-artisans"
    }, {
      path: "/cslmis/assesors",
      component: _42c8a960,
      name: "cslmis-assesors"
    }, {
      path: "/cslmis/assessmentbody",
      component: _4e84467d,
      name: "cslmis-assessmentbody"
    }, {
      path: "/cslmis/awardingbody",
      component: _311df03a,
      name: "cslmis-awardingbody"
    }, {
      path: "/cslmis/centers",
      component: _3c3b27d5,
      name: "cslmis-centers"
    }, {
      path: "/cslmis/companies",
      component: _7a04ea58,
      name: "cslmis-companies"
    }, {
      path: "/cslmis/dashboard",
      component: _466699ba,
      name: "cslmis-dashboard"
    }, {
      path: "/cslmis/facility",
      component: _3b818f1e,
      name: "cslmis-facility"
    }, {
      path: "/cslmis/licensingbody",
      component: _4201c99a,
      name: "cslmis-licensingbody"
    }, {
      path: "/cslmis/program",
      component: _1517504f,
      name: "cslmis-program"
    }, {
      path: "/cslmis/regulatorybody",
      component: _dc0ed832,
      name: "cslmis-regulatorybody"
    }, {
      path: "/cslmis/trade",
      component: _4edf77af,
      name: "cslmis-trade"
    }, {
      path: "/cslmis/user",
      component: _8dfa8714,
      name: "cslmis-user"
    }, {
      path: "/pages/Page404",
      component: _55e4d70b,
      name: "pages-Page404"
    }, {
      path: "/pages/Page500",
      component: _eada9770,
      name: "pages-Page500"
    }, {
      path: "/",
      component: _3a19fd1c,
      name: "index"
    }],

    fallback: false
  })
}
