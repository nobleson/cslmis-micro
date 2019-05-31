<template>
 <div class="animated fadeIn">
     <b-button @click="$emit('changeComponent', 'ArtisansListView')">Back</b-button>
  <hr>
  <b-row class="justify-content-center" >
  </b-row>
<b-row class="justify-content-center">
  <b-col md="8">
  <div class="form-wizard"  color="red">
    <form-wizard @on-complete="onComplete"
                       :start-index="0"
<<<<<<< HEAD
                       color="blue">
     <tab-content title="Personal Details"
                  icon="icon-user">
          <b-alert v-if="successState" show variant="success">Artisan personal data saved successfully</b-alert>
           <b-alert v-if="errorState" show variant="danger">Artisan personal data failed to save. Try again</b-alert>    
       <div>
    <b-form v-if="show">
=======
                       color="#3E4095">
     <tab-content title="Personal details"
                  icon="icon-user">
       <div class="form-wizard" style="width:800px; margin:0 auto;" color="red">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

     
>>>>>>> 5dd587c6647464ea3f38bf0e2e576cc8ec43c1e0

      <b-form-group id="input-group-2" label="Surname:" label-for="input-2">
        <b-form-input
          id="surname"
          v-model="personaForm.surname"
          required
          placeholder="Enter Surname"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Middle Name:" label-for="input-2">
        <b-form-input
          id="middleName"
          v-model="personaForm.middleName"
          required
          placeholder="Middle name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Other name:" label-for="input-2">
        <b-form-input
          id="otherName"
          v-model="personaForm.otherName"
          required
          placeholder="Enter other name"                                                                                                                                                       
        ></b-form-input>
      </b-form-group>


            <b-form-group id="input-group-2" label="Date of Birth:" label-for="input-2">
              <date-picker v-model="personaForm.dateOfBirth" :config="{format: 'DD/MM/YYYY'}"></date-picker>

      </b-form-group>

       <b-form-group id="input-group-3" label="Gender" label-for="input-3">
        <b-form-select
          id="gender"
          v-model="personaForm.gender"
          :options="gender"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Place Of Birth:" label-for="input-2">
        <b-form-input
          id="palceofbirth"
          v-model="personaForm.palceofbirth"
          required
          placeholder="Enter Place Of Birth"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Permanent Address:" label-for="input-2">
        <b-form-input
          id="permanentaddress"
          v-model="personaForm.permanentaddress"
          required
          placeholder="Enter Permanentaddress"
        ></b-form-input>
      </b-form-group>


      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="email"
          v-model="personaForm.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
     <b-form-group id="input-group-3" label="State Of Origin" label-for="input-3">
        <b-form-select
          id="state_origin"
          @change="changedValue"
          v-model="personaForm.state_origin"
          :options="stateoforign"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Local Government:" label-for="input-2">
                <b-form-select 
                id="local_government"
                v-model="personaForm.local_government"
                required
                >
                <option disabled value="">[ Select Local Government ]</option>
                <option v-for="item in localgovernment" v-bind:key ="item.id" :value="item">{{item}}</option>
                </b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nationality" label-for="input-2">
        <b-form-input
          id="nationality"
          v-model="personaForm.nationality"
          required
          placeholder="Enter Nationality"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-card class="mt-3">
        <div>
            <button>
              <clipper-upload v-model="imgURL">upload image</clipper-upload>
            </button>
            <button @click="getResult">clip image</button>
            <clipper-basic class="my-clipper" ref="clipper" :src="imgURL">
                <div class="placeholder" slot="placeholder">No image</div>
            </clipper-basic>
            <div>
                <div>result:</div>
                <img class="result" :src="resultURL" alt="">
            </div>
        </div>
        </b-card>
        <b-card class="mt-3" title="Asrtisan Passport" sub-title="Upload Photo">
          <b-card-text>

            <img v-bind:src="imagePreview" v-show="showPreview" id="imagePreview"/>

          </b-card-text>

          <button v-on:click="submitFile()">Submit</button>
            <label>
              <input type="file" id="file" ref="file" accept="image/*" v-on:change="handleFileUpload()"/>
            </label>
        </b-card>
      </b-form-group>


      <b-button type="submit" variant="primary" @click="savePersona">Submit</b-button>
      <b-button type="reset" variant="danger" @click="onReset">Reset</b-button>
    </b-form>

    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ personaForm }}</pre>
    </b-card>
    
  </div>
     </tab-content>
     <tab-content title="Artisan NVQ Center"
                  icon="icon-pencil">
        <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      

      <b-form-group id="input-group-2" label="Center Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="centerForm.center_name"
          required
          placeholder="Enter Center Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Center Number:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="centerForm.center_number"
          required
          placeholder="Enter Center Number"
        ></b-form-input>
      </b-form-group>

<b-form-group id="input-group-2" label="Candidate Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="centerForm.candidate_name"
          required
          placeholder="Enter Candidate Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Candidate Trade:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.candidate_trade"
          required
          placeholder="Enter Candidate Trade"
        ></b-form-input>
      </b-form-group>


      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    
  </div>
     </tab-content>
     <tab-content title="Apprentiship Center"
                  icon="icon-pencil">
   <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-2" label="Artsan ID:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.artsanid"
          required
          placeholder="Enter ID"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Apprentiship Place:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.apprentiship_place"
          required
          placeholder="Enter Apprentiship Place"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Apprentiship Year:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.apprentiship_year"
          required
          placeholder="Enter Apprentiship Year"
        ></b-form-input>
      </b-form-group>

<b-form-group id="input-group-2" label="Master Full Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.master_full_name"
          required
          placeholder="Enter Master Full Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Master Phone Number:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.master_phone_number"
          required
          placeholder="Enter Master Phone Number"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Apprentiship Completion Status:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.apprentiship_completion_status"
          required
          placeholder="Enter Apprentiship Completion Status"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Reason for Leaving:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.reason_for_leaving"
          required
          placeholder="Enter Reason for Leaving"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Certificate Testimonial:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.certificate_testimonia"
          required
          placeholder="Enter Certificate Testimonial"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Reason for not Issued:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.reason_for_not_issued"
          required
          placeholder="Enter Reason_for_not_Issued"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Trade Learnt:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.trade_learnt"
          required
          placeholder="Enter Trade Learnt"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Record Date:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.record_date"
          required
          placeholder="Enter Record Date"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    
  </div>
     </tab-content>
     <tab-content title="Artsan Education"
                  icon="icon-pencil">
      <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-2" label="Artsan ID:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.artsanid"
          required
          placeholder="Enter ID"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="School Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.school_name"
          required
          placeholder="Enter School Name"
        ></b-form-input>
      </b-form-group>

<b-form-group id="input-group-2" label="Year Start:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.year_start"
          required
          placeholder="Enter Year Start"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Year End:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.year_end"
          required
          placeholder="Enter Year End"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Qualification Earned:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.qualification_earned"
          required
          placeholder="Enter Qualification Earned"
        ></b-form-input>
      </b-form-group>


      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    
  </div>
     
     </tab-content>
     <tab-content title="Artisan Employment History"
                  icon="icon-pencil">
       <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-2" label="Artsan ID:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.artsanid"
          required
          placeholder="Enter ID"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="trade:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.trade"
          required
          placeholder="Enter Trade"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Years Practice:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.years_practice"
          required
          placeholder="Enter Years  Practice"
        ></b-form-input>
      </b-form-group>

<b-form-group id="input-group-2" label="Employment Companies:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.employment_companies"
          required
          placeholder="Enter Employment Companies"
        ></b-form-input>
      </b-form-group>


      <b-form-group id="input-group-2" label="Years of Employment:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.years_of_employment"
          required
          placeholder="Enter Years of Employment"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Job Roles:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.job_roles"
          required
          placeholder="Enter Job Roles"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Superviors Phone Numbers:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.superviors_phone_numbers"
          required
          placeholder="Enter Superviors Phone Numbers"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Current Work Project:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.current_work_project"
          required
          placeholder="Enter Current Work Project"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Site Address:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.site_address"
          required
          placeholder="Enter Site Address"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Current Employment Status:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.current_employment_status"
          required
          placeholder="Enter Current Employment Status"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Record Date:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.record_date"
          required
          placeholder="Enter Record Date"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    
  </div>
    </tab-content>
 </form-wizard>
  </div>
  </b-col>
  </b-row>
  </div>
</template>

<script> 
import datepicker from 'vue-date-picker'
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
import { clipperBasic } from 'vuejs-clipper'
  export default {
    
    name: 'new-artisan',
     components: {
      datepicker,
      clipperBasic
     },
    data() {

      return {
        employmentForm: {
          trade: '',
          yearsPractice: '',
          employmentCompanies: '',
          yearsOfEmployment: '',
          jobRoles: '',
          superviorsPhone_numbers: '',
          currentWorkProject: '',
          siteAddress: '',
          currentEmploymentStatus: '',
          recordDate: '',
          artisanId: ''
        },
        educationForm: {
          schoolName: '',
          yearStart: '',
          yearEnd: '',
          qualificationEarned: '',
          artisanId: ''
        },
        apprentishipForm: {
          apprentishipPlace: '',
          apprentishipYear: '',
          masterFullName: '',
          masterPhoneNumber: '',
          apprentishipCompletionStatus: '',
          reasonForLeaving: '',
          certificateTestimonial: '',
          reasonForNotIssued: '',
          tradeLearnt: '',
          recordDate: '',
          artisanId: ''
        },
        centerForm: {
          centerName: '',
          centerNumber: '',
          candidateNumber: '',
          candidateTrade: '',
          artisanId: ''
        },
        personaForm: {
          surname: '',
          middleName: '',
          otherName: '',
          dateOfBirth: '',
          gender: '',
          placeOfBirth: '',
          permanentAddress: '',
          phoneNumber: '',
          emailAddress: '',
          state_origin: null,
          local_government: '',
          nationality: '',
          photo: ''
        },
        imgURL: '',
        resultURL: '',
        form: {

        },
        stateoforign: [{ text: 'Select One', value: null },
'Abia', 
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
        show: true,
        showPreview: false,
        imagePreview: '',
        file: '',
      }
    },
    watch: {
        defaultImage: function(value) {
            if (value) {
              console.log(value);
              // do whatever you want with image value,(upload ..)
            }
        }
    },
    computed: {
        ...mapGetters({successState: 'artisan/getSuccessState',errorState: 'artisan/getErrorState',localgovernment: 'artisan/getLocalGovernment'}),
    },
    methods: {
      ...mapActions({addPersona: 'artisan/addPersona',fetchLocalGovernment: 'artisan/loadLocalGovernment'}),
      getResult: function () {
          const canvas = this.$refs.clipper.clip();//call component's clip method
          this.resultURL = canvas.toDataURL("image/jpg", 1);//canvas->image
      },
      savePersona() { 
        //let artisan = JSON.stringify(this.personaForm);
        this.addPersona(this.personaForm).then(e => { 
          console.log('Artisan Added Successfully'); 
          this.onReset();
        });  
      },
      onSubmit() {
       // alert(JSON.stringify(this.personaForm))
      },
      onReset() {
          this.personaForm.surname = '',
          this.personaForm.middleName ='',
          this.personaForm.otherName = '',
          this.personaForm.dateOfBirth ='',
          this.personaForm.gender ='',
          this.personaForm.placeOfBirth = '',
          this.personaForm.permanentAddress = '',
          this.personaForm.phoneNumber =  '',
          this.personaForm.emailAddress = '',
          this.personaForm.state_origin = null,
          this.personaForm.local_government = '',
          this.personaForm.nationality =  '',
          this.personaForm.photo = ''

        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
     onComplete: function(){
          alert('Yay. Done!');
     },
     changedValue(){
        this.fetchLocalGovernment(this.personaForm.state_origin).then(e => { 
          console.log('Local government fetched'); 
        });            
     },
    submitFile(){
        /*
                Initialize the form data
            */
            let formData = new FormData();

            /*
                Add the form data we need to submit
            */
            formData.append('file', this.file);

        /*
          Make the request to the POST /single-file URL
        */
            axios.post( '/single-file',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
      },

      /*
        Handles a change on the file upload
      */
      handleFileUpload(){
        /*
          Set the local file variable to what the user has selected.
        */
        this.file = this.$refs.file.files[0];

        /*
          Initialize a File Reader object
        */
        let reader  = new FileReader();

        /*
          Add an event listener to the reader that when the file
          has been loaded, we flag the show preview as true and set the
          image to be what was read from the reader.
        */
        reader.addEventListener("load", function () {
          this.showPreview = true;
          this.imagePreview = reader.result;
          console.log("Base64:"+reader.result);            

        }.bind(this), false);

        /*
          Check to see if the file is not empty.
        */
        if( this.file ){
          /*
            Ensure the file is an image file.
          */
          if ( /\.(jpe?g|png|gif)$/i.test( this.file.name ) ) {
            /*
              Fire the readAsDataURL method which will read the file in and
              upon completion fire a 'load' event which we will listen to and
              display the image in the preview.
            */
            reader.readAsDataURL( this.file );
         // var base64 = this.getBase64Image(document.getElementById("imagePreview"));
          }
        }
      },
      getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
      }

    }
     
}

</script>
<style scoped>
    .my-clipper {
        width: 100%;
        max-width: 700px;
    }

    .placeholder {
        text-align: center;
        padding: 20px;
        background-color: lightgray;
    }
</style>
