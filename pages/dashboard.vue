<template>
  <div class="animated fadeIn">
    <b-card header-tag="header">
      <div slot="header">
        <i class="icon-drop"></i> Welcome to the dashboard
      </div>
      <b-card-body>
        <b-row>
          <div>something</div>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapState} from 'vuex'
  export default {
    name: 'dashboard',
    layout:'default'
  }
</script>
