<template>
<div class="main">
    
    <div class="container">

      <b-row class="justify-content-center">
        <b-row md="6" sm="4">
            <div class="mx-4">
                   <b-card>
                     <div class="logo">
                           <center><img src="~/assets/images/new.png" alt="Logo image"></center>
                    </div>
                    <h2><strong>Company Registered</strong></h2>
                    <b-card-text>
                       Your Company account has been created
                    </b-card-text>
                        <b-button href="#" variant="primary" block="">Update Company Profile</b-button>
                    </b-card>
            </div>
        </b-row>
      </b-row>
  </div>                 
</div>      

</template>
<script>
export default {
    layout:'empty',
    data(){
      return {
         
  }
    }  
}
</script>
<style>
.mx-4{
    margin-top: 40%;
}
.logo{
    padding-bottom: 7%;
}
</style>