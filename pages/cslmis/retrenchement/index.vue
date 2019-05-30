<template>
  <div class="animated fadeIn">
        <component @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import RetrenchementView from '~/components/retrenchement/RetrenchementView.vue'
import RetrenchementDetail from '~/components/retrenchement/RetrenchementDetail.vue'
import NewRetrenchement from '~/components/retrenchement/NewRetrenchement.vue'
export default {
  components: {
    RetrenchementView,
    RetrenchementDetail,
    NewRetrenchement
  },
  data() {
    return {
      currentComponent: 'RetrenchementView'
    }
  },
  methods: {
    changeCurrentComponent(newComponent) {
      this.currentComponent = newComponent;
    }
  }
}
</script>
<style <style lang="scss" scoped>

</style>
