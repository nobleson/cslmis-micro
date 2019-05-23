<template>
<div class="main">
    <b-navbar class="navbar-expand-lg navbar-dark bg-dark static-top" toggleable="lg" type="dark" variant="info">
        <div class="container">
        <b-navbar-brand href="#">CSLMIS COMPANIES</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
           <b-nav-item href="#"></b-nav-item>
                <mdb-btn color="secondary" >Home</mdb-btn>
            </b-navbar-nav>
        </b-collapse>
        </div>
    </b-navbar>

<div class="code">
           
<div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="10" sm="8">
              <mdb-card class="border border-0 border-dark">
              <mdb-card-body class="border border-0 border-dark">
                <h1>Application Form</h1>
                <p class="">Compulsory fields are marked with asteriks <span class="asteriks">*</span></p>
                <form>
                    <mdb-input label="Company Name" v-model="form.companyName" size="lg" aria-required="*"/>
                    <mdb-input label=" Company Acronym" v-model="form.companyAcronym" />
                    <mdb-input label="Company Nationality" v-model="form.companyNationality" />
                    <mdb-input label="Company Status" v-model="form.companyStatus" />
                    <mdb-input label="Company Website" v-model="form.companyWebsite" />
                    <mdb-input label="Company Address" v-model="form.companyAddress" />
                    <mdb-input label="Company Telephone" v-model="form.companyTelephone" />
                    <mdb-input label="Company Email" v-model="form.companyEmail" />
                    <mdb-input label="Company Founded" v-model="form.companyNumber" />
                    <mdb-input label="Company Activities" v-model="form.companyFounded" />
                    <mdb-input label="Company State" v-model="form.companyActivities" />
                    <b-form-group id="input-group-2 " label="Date Applied" label-for="inputs">
                          <date-picker v-model="form.dateApplied" :config="{format: 'DD/MM/YYYY'}"></date-picker>
                    </b-form-group>
                  <mdb-btn color="secondary" type="button" @click="submitApplication">Submit</mdb-btn>
              </form>         
            
             </mdb-card-body>
             </mdb-card>
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

 import { mdbInput } from 'mdbvue';
import { mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn } from 'mdbvue';
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
import datepicker from 'vue-date-picker'
import { clipperBasic } from 'vuejs-clipper'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
export default {
   name: 'Register',
  layout: "auth",
  components: {
      datepicker,
      clipperBasic,
			mdbCard,
			mdbCardBody,
      mdbBtn,
       mdbInput
      
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
          companyFounded:'',
          companyActivities:'',
          companyState:'',
          dateApplied:''          
        },
       
        companyState: [{ text: 'Select One', value: null },'Abia', 
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
      ...mapActions({apply: 'company/sendApplication'}),
      submitApplication(){
       
          this.apply(this.form).then(e => { 
              console.log('Application Submitted Successfully'); 
        }); 
       }
      },
      logIn() {
      this.authenticateUser(this.user).then(e => {
        this.$router.push('/cslmis/dashboard');
      });
    },
      register() {

        this.$router.push('/cslmis/login');

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

