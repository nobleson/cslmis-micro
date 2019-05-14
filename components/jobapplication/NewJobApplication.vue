<template>

    <div class="animated fadeIn">
      <div slot="header">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
        <b-button @click="$emit('changeComponent', 'JobApplicationView')">Back</b-button>
      </div>
     <hr>
     
      <div class="form-wizard" style="width:800px; margin:0 auto;">
      <b-card class="form-wizard" style="width:800px; margin:0 auto;">
        <h2>  Job Application</h2>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-2" label="Job Advert Id:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.jobAdvertId"
          required
          placeholder="Enter Job Advert Id"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Company Id:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.companyId"
          required
          placeholder="Enter Company Id"
        ></b-form-input>
      </b-form-group>


      <b-form-group id="input-group-2" label="Artisan Id:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.artisanId"
          required
          placeholder="Enter artisan Id"
        ></b-form-input>
      
      </b-form-group>
            <b-form-group id="input-group-2" label="Date of Birth:" label-for="input-2">
        <datepicker value="2018-9-5" format="YYYY-M-D" name="date2"></datepicker>
      
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
     </b-card>
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
          email: '',
          name: '',
          stateoforign: null,
          checked: [],
          dateOfBirth: ''
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
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
     
    methods: {
      onComplete: function(){
          alert('Yay. Done!');
       }
      },
     
      }

</script>


