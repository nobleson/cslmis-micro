<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="navbar-brand" to="#">
        <div>C-LMIS | Admin</div>
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg" />

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item  href="#">Profile</b-dropdown-item>
          <b-dropdown-item @click="logout" href="#">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </AppHeader>
    <div class="app-body">
      <AppSidebar :navItems="nav" style="background-color: #00695c"></AppSidebar>
      <main class="main">
        <Breadcrumb :list="list" style="background-color: #2BBBAD; color: #ffffff;"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <TheFooter>
      <!--footer-->
      <div>
        <a href="https://admin.cslmis.gov.ng">CSLMIS</a>
        <span class="ml-1">&copy; 2019 Admin Portal.</span>
      </div>
      <div class="ml-auto">
        <span class="mr-1">Powered by</span>
        <a href="https://corbon.gov.ng">CORBON </a>
      </div>
    </TheFooter>
  </div>
</template>

<script>
    import nav from '@/_nav'
    import { Header as AppHeader, SidebarToggler, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
    import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt'
    import AppSidebar from '~/components/Sidebar/Sidebar.vue'
    import {mapGetters, mapActions} from 'vuex'

    export default {
        middleware: [
          'check-auth',
           'auth'
           ],
        name: 'full',
        components: {
            AsideToggler,
            AppHeader,
            AppSidebar,
            AppAside,
            TheFooter,
            Breadcrumb,
            DefaultHeaderDropdownAccnt,
            SidebarForm,
            SidebarFooter,
            SidebarToggler,
            SidebarHeader,
            SidebarNav,
            SidebarMinimizer
        },
        data () {
            return {
                nav: nav.items
            }
        },
        computed: {
            name () {
                return this.$route.name
            },
            list () {
                return this.$route.matched.filter((route) => route.name || route.meta.label )
            }
        },
        methods: {
          ...mapActions({logoutUser: 'authentication/signOut'}),
          logout() { 
            this.logoutUser().then(e => { 
              this.$router.push('/');
            });
          }
        }

    }
</script>

<style>

</style>
