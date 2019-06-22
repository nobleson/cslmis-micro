<template>
  <div class="animated fadeIn">
        <component :artiData="currentArtiData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import ArtisanProfile from '~/components/artisan/ArtisanProfile.vue'
import ArtisansListView from '~/components/artisan/ArtisansListView.vue'
import BatchArtisans from '~/components/artisan/BatchArtisans.vue'
import NewArtisan from '~/components/artisan/NewArtisan.vue'
export default {
  components: {
    ArtisanProfile,
    ArtisansListView,
    BatchArtisans,
    NewArtisan
  },
  data() {
    return {
      currentComponent: 'ArtisansListView',
      currentArtiData: null
    }
  },
  methods: {
    changeCurrentComponent(event) {
      this.currentArtiData = event.data;
      console.log(event.data)
      this.currentComponent = event.component;
    }
  }
}
</script>
<style <style lang="scss" scoped>

</style>
