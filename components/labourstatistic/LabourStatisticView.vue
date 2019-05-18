<template>
<div class="container">
  <mdb-card class="card-body">
    <mdb-card-title>Artisans</mdb-card-title>
    <mdb-card-sub-title>Total Number of Artisans</mdb-card-sub-title> 
    <div class="flex-row"> 
  <mdb-collapse :toggleTag="['a', 'icon']" :togglers="1" :ToggleClass="['btn btn-primary']">
  <div>
    <mdb-input label="Large input" size="lg" />
    <mdb-input label="Large input" size="lg" />
    <mdb-input label="Large input" size="lg" />
    <mdb-input label="Large input" size="lg" />
    
  </div>
     <mdb-btn color="info" >Save Changes</mdb-btn>
    </mdb-collapse>
    </div>
    <mdb-card-footer  class="text mt-4"><center>21,400</center></mdb-card-footer>
  </mdb-card>
</div>
</template>
<script>
import { mdbBtn } from 'mdbvue';
import { mdbInput } from 'mdbvue';
import { mdbCard, mdbCardBody, mdbCardTitle, mdbCardText, mdbMask, mdbCardHeader, mdbCardFooter } from 'mdbvue';
import { mdbCollapse, mdbContainer } from 'mdbvue';
  export default {
    name: 'Panels',
    components: {
      mdbCard,
      mdbCardTitle,
      mdbCardText,
      mdbCollapse,
      mdbMask,
      mdbContainer,
      mdbCardFooter,
      mdbInput,
      mdbBtn
    }
  }
</script>