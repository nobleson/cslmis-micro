<template>
  <div>
        <b-row>
            <b-col align-self="end"  class="pb-3 pl-auto" cols="12">
          
                <b-button @click="$emit('changeComponent','NewArtisan')" class="">Create New</b-button>
             <hr>
            </b-col>
            <hr>
         <b-col v-for="(arti,i) in artisans" :key="i" cols="2">

            
           <b-button @click="$emit('changeComponent','ArtisanProfile')">Manage</b-button>
           
            <b-card
            title="Artisan Workshop"
            img-src="/img/logo-symbol.png"
            img-alt="Artisan Logo"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
            
          >
          </b-card>
             
        
            
         </b-col>
          
        </b-row>
      
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        artisans: []
      }
    }
  }
</script>
<style <style lang="scss" scoped>

</style>
