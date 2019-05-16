<template>

    <div class="animated fadeIn">
     <b-button @click="$emit('changeComponent', 'JobApplicationView')">Back</b-button>
     <hr>
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
                    <label  label-for="jobAdvertId">Job Advert Id <span class="asteriks">*</span> </label>
                    <b-form-input
                      id="jobAdvertId"
                      v-model="form.jobAdvertId"
                      required
                      placeholder="Enter Job Advert Id"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group>
                    <label  label-for="companyId">Company Id: <span class="asteriks"></span> </label>
                    <b-form-input
                      id="companyId"
                      v-model="form.companyId"
                      placeholder="Enter Company Id"
                    ></b-form-input>
                  </b-form-group>


                <b-form-group>
                <label label-for="artisanId">Artisan Id: <span class="asteriks">*</span> </label>
                  <b-form-input
                    id="artisanId"
                    v-model="form.artisanId"
                    required
                    placeholder="Enter Artisan Id"
                  ></b-form-input>
                  </b-form-group>
      
                   <b-form-group>
                     <label label-for="dateApplied">Date Applied: <span class="asteriks">*</span> </label>
                        <date-picker v-model="NewjobApplicationForm.dateApplied" :config="{format: 'DD/MM/YYYY'}"></date-picker>
      
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
</template>
<script>

import datepicker from 'vue-date-picker'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
export default {
   name: 'new-artisan',
     components: {
      datepicker 
     },
    data() {
      return {
        form: {
          jobAdvertId:'',
          companyId:'',
          artisanId:'',
          dateApplied:'',          
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
   
     
      }

</script>

<style>
.asteriks{
  color:red;
}
</style>

