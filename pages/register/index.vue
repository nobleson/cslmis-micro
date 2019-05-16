<template>
<div class="main">
    <b-navbar class="navbar-expand-lg navbar-dark bg-dark static-top" toggleable="lg" type="dark" variant="info">
        <div class="container">
        <b-navbar-brand href="#">CSLMIS COMPANIES</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
            
            </b-navbar-nav>
        </b-collapse>
        </div>
    </b-navbar>

<div class="code">
           
<div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="10" sm="8">
          <b-card no-body class="mx-6">
            <b-card-body class="p-6">
            
                <h1>Registeration Form</h1>
                <p class="">Compulsory fields are marked with asteriks <span class="asteriks">*</span></p>
                
                <b-form  v-if="show">

      <b-form-group >
         <label  label-for="companyName">Company Name <span class="asteriks">*</span> </label>
        <b-form-input
          id="companyName"
          v-model="form.companyName"
          required
          placeholder="Enter Company Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <label  label-for="companyAcronym">Company Acronym: <span class="asteriks"></span> </label>
        <b-form-input
          id="companyAcronym"
          v-model="form.companyAcronym"
          placeholder="Enter Company Acronym"
        ></b-form-input>
      </b-form-group>


      <b-form-group>
      <label label-for="companyNationality">Company Nationality: <span class="asteriks">*</span> </label>
        <b-form-input
          id="companyNationality"
          v-model="form.companyNationality"
          required
          placeholder="Enter Company Nationality"
        ></b-form-input>
         </b-form-group>
      
      <b-form-group>
        <label label-for="companyStatus">Company Status:<span class="asteriks">*</span> </label>
        <b-form-input
          id="companyStatus"
          v-model="form.companyStatus"
          placeholder="Enter Company Status"
        ></b-form-input>
      </b-form-group>

      <b-form-group  label="Company Website:" label-for="input-2">
        <b-form-input
          id="companyWebsite"
          v-model="form.companyWebsite"
          placeholder="Enter Company Website"
        ></b-form-input>
      </b-form-group>


      <b-form-group >
      <label  label-for="companyAddress">Company Address:<span class="asteriks">*</span> </label>
        <b-form-input
          id="companyAddress"
          v-model="form.companyAddress"
          required
          placeholder="Enter Company Address"
        ></b-form-input>
      </b-form-group>

      <b-form-group>
      <label  label-for="companyTelephone">Company Telephone:<span class="asteriks">*</span> </label>
        <b-form-input
          id="companyTelephone"
          v-model="form.companyTelephone"
          required
          placeholder="Enter Company Telephone"
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <label label-for="companyEmail">Company Email:<span class="asteriks">*</span> </label>
        <b-form-input
          id="companyEmail"
          v-model="form.companyEmail"
          required
          placeholder="Enter Company Email"
        ></b-form-input>
      </b-form-group>


      <b-form-group>
        <label label-for="companyNumber">Company Number:<span class="asteriks">*</span> </label>
        <b-form-input
          id="companyNumber"
          v-model="form.companyNumber"
          required
          placeholder="Enter Company Number"
        ></b-form-input>
      </b-form-group>
         
         <b-form-group>
            <label label-for="companyFounded">Year Founded:<span class="asteriks">*</span> </label>
        <b-form-input
          id="companyFounded"
          v-model="form.companyFounded"
          required
          placeholder="Enter Year Founded"
        ></b-form-input>
      </b-form-group>

                <b-form-group >
                  <label label-for="companyActivities">Company Activities:<span class="asteriks">*</span> </label>
                  <b-form-input
                    id="companyActivities"
                    v-model="form.companyActivities"
                    required
                    placeholder="Enter Activities"
                  ></b-form-input>
                </b-form-group>


              <b-form-group >
            <label label-for="companyState">Company State:<span class="asteriks">*</span> </label>
                <b-form-input
                  id="companyState"
                  v-model="form.companyState"
                  required
                  placeholder="Enter Company State"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2 " label="Date Regeistered " label-for="inputs">
                  <date-picker v-model="form.dateRegistered" :config="{format: 'DD/MM/YYYY'}"></date-picker>
              </b-form-group>
            
               <b-button type="button" variant="primary" @click="update">Submit</b-button>
              </b-form>
              <b-card class="mt-3" header="Form Data Result">
              <pre class="m-0">{{ form }}</pre>
             </b-card>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>       
</div>
 

<footer id="sticky-footer" class="py-4 bg-dark text-white-50">
    <div class="cont text-center">  
    <small>Copyright &copy; CSLMIS</small>
    </div>
</footer>
</div>
</template>
<script>
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
import datepicker from 'vue-date-picker'
import { clipperBasic } from 'vuejs-clipper'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
export default {
  name: 'Register',
  layout: "empty",
  components: {
      datepicker,
      clipperBasic
     },
    data() {
      return {
        form: {
          _id: "Pg76sjvQ5XWxD8OZ20qyfOOhqP23",
          companyName:'',
          companyAcronym:'',
          companyNationality:'',
          companyStatus:'',
          companyWebsite:'',
          companyAddress:'',
          companyTelephone:'',
          companyEmail:'',
          companyNumber:'',
          companyEmail:'',
          companyFounded:'',
          companyActivities:'',
          companyState:'',
          dateRegistered:''          
        },
        stateoforign: [{ text: 'Select One', value: null },'Abia', 
'Adamawa',
'Akwa Ibom',
'Anambra',
'Bauchi',
'Bayelsa',
'Benue',
'Borno',
'Cross River',
'Delta',
'Ebonyi',
'Enugu',
'Edo',
'Ekiti',
'Gombe',
'Imo',
'Jigawa',
'Kaduna',
'Kano',
'Katsina',
'Kebbi',
'Kogi',
'Kwara',
'Lagos',
'Nasarawa',
'Niger',
'Ogun',
'Ondo',
'Osun',
'Oyo',
'Plateau',
'Rivers',
'Sokoto',
'Taraba',
'Yobe',
'Zamfara',
],
gender: [{ text: 'Select One', value: null },'Male','Female',],
        show: true
      }
    },
   mounted(){
      },
    computed: {
        ...mapGetters({getCompany: 'company/getCompany'})
    }, 
    methods: {
      ...mapActions({updateCompany: 'company/updateCompany'}),
      update(){
       
          this.updateCompany(this.form).then(e => { 
              console.log('Company Update Successfully'); 
        }); 
       }
      },
      logIn() {
      this.authenticateUser(this.user).then(e => {
        this.$router.push('/cslmis/dashboard');
      });
    },
      register() {

        this.$router.push('/cslmis/dashboard');

      },

     
      }

</script>

<style>
.asteriks{
  color:red;
}
.code{
    margin-top: 10%;
}
</style>

