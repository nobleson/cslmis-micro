<template>
  <div class="animated fadeIn">
    <b-card header-tag="header">
      <div slot="header">
       <b-button @click="$emit('changeComponent','CreateCompany')" class="">Create New</b-button>
      </div>
      <b-card-body>
        <b-row>
          <div></div>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>

  export default {
    name: 'companies',
    
  }
  

</script>
