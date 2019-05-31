<template>
    <div class="animated fadeIn">
    <b-card header-tag="header">
      <div  slot="header">
        <div><b-button @click="$emit('changeComponent', 'CompanyListView')">Back</b-button></div>
      </div>
      <b-card-body>
        <b-row>
          <div class=""> Forms</div> 
          
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
}
</script>
