<template>
<div>
  
    <div class="container">
    <div >
      <mdbCard>
        <mdb-input label="Job Tittle" size="lg" />
        <mdb-input label="Medium input" size="md" />
        <mdb-input label="Small input" size="sm" />
      </mdbCard>
    </div> 
  </div>
  </div>
</template>
<script>

import { mdbInput } from 'mdbvue';
  export default {
    name: "Input",
    components: {
      mdbInput,
      mdbCard
    },
    data() {
      return {
        value: ''
      };
    }
  }
</script>
<style>
.top{
  margin-top:20%;
   margin-top:10%;
}
</style>


