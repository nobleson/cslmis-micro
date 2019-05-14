<template>
  <div class="animated fadeIn">
        <component @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import JobApplicationView from '~/components/jobapplication/JobApplicationView.vue'
import JobApplicationDetail from '~/components/jobapplication/JobApplicationDetail.vue'
import NewJobApplication from '~/components/jobapplication/NewJobApplication.vue'
export default {
  components: {
    JobApplicationView,
    JobApplicationDetail,
    NewJobApplication
  },
  data() {
    return {
      currentComponent: 'JobApplicationView'
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
