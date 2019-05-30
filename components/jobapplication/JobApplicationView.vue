<template>
  <div>
        <b-row>
            <b-col align-self="end"  class="pb-3 pl-auto" cols="12">
          
                <b-button @click="$emit('changeComponent','NewJobApplication')" class="">Create New</b-button>
             <hr>
            </b-col>
            <hr>
         <b-col v-for="(arti,i) in artisans" :key="i" cols="2">

            
           <b-button @click="$emit('changeComponent','JobApplicationDetail')">Manage</b-button>
           
            <b-card
            title="Job Available"
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
    name: 'artisans',
    data() {
      return {
        artisans: [
          {
            name: 'my name'
          },
{
            name: 'my name'
          },
{
            name: 'my name'
          },
{
            name: 'my name'
          },
{
            name: 'my name'
          },
{
            name: 'my name'
          },
{
            name: 'my name'
          },
        ]
      }
    }
  }
</script>
<style <style lang="scss" scoped>

</style>
