<template>
    <b-row>
            <b-col align-self="end"  class="pb-3 pl-auto" cols="12">
          
                <b-button @click="$emit('changeComponent','NewCenter')" class="">Create New</b-button>
             <hr>
            </b-col>
            <hr>
         <b-col v-for="(center,i) in centers" :key="i" cols="2">
            
           <b-button @click="$emit('changeComponent','CenterDetails')">Manage</b-button>
           
            <b-card
            title="Artisan Workshop"
            img-src="/img/pw.png"
            img-alt="Artisan Logo"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
            
          >
          </b-card>
             
        
            
         </b-col>
          
        </b-row>
</template>
<script>
export default {
    name: 'centerlistview',
        data() {
      return {
        centers: [
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

