<template>
 <div class="animated fadeIn">
  <vue-up></vue-up> 
  <section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header  style="background-color: #2BBBAD"/>

    <!-- Card Container -->
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none">
         <b-link @click="$emit('changeComponent',{component: 'ArtisansListView', id: null})"  href="#" class="card-link text-white"><mdb-icon icon="arrow-left" size="lg" class="text-white" />  View All Artisans</b-link>
         <mdb-card class="weather-card">
          <mdb-card-body class="pb-3">
          <h2 class="h2-responsive"><strong>New Artisan Form</strong></h2>
          <div class="form-wizard"  color="red">
              <div>
            <b-form>        
            <mdb-card class="border border-0">
              <mdb-card-body>
                <mdb-card-title tag="h5">Bio Data</mdb-card-title>
                <mdb-input label="First Name" v-model="personaForm.firstName" size="lg" required/> 
                <mdb-input label="Middle Name" v-model="personaForm.middleName" size="lg" required/> 
                <mdb-input label="Last Name" v-model="personaForm.lastName" size="lg" required/> 

                <b-form-group id="input-group-2" label="Date of Birth:" label-for="input-2">
                <date-picker v-model="personaForm.dateOfBirth" :config="{format: 'DD/MM/YYYY'}"></date-picker>
              </b-form-group>
              <b-form-select 
                id="gender"
                v-model="personaForm.gender"
                required
                >
                <option disabled value="">[ Select Gender ]</option>
                <option  value="Male">Male</option>
                <option  value="Female">Female</option>
                </b-form-select>

              </mdb-card-body>
            </mdb-card>
            <mdb-card class="border border-0">
              <mdb-card-body>
                <mdb-card-title tag="h5">Any physical disabilty?</mdb-card-title>
                <mdb-input label="Disability Type if any" v-model="personaForm.disabilityType" size="lg" required/> 
              </mdb-card-body>
            </mdb-card>
            <mdb-card class="border border-0">
              <mdb-card-body>
                <mdb-card-title tag="h5">Personal Contact</mdb-card-title>
                <mdb-input label="Enter phone number" v-model="personaForm.phoneNumber" size="lg" required/> 
                <mdb-input label="Enter email" v-model="personaForm.emailAddress" size="lg" required/> 
                <mdb-input label="Permanent Address" v-model="personaForm.contactAddress" size="lg" required/> 
                <mdb-input label="City of Residence" v-model="personaForm.cityOfResidence" size="lg" required/> 
                <b-form-group id="input-group-3" label="State Of Residence" label-for="input-3">
                <b-form-select
                v-model="personaForm.stateOfResidence"
                required
                    >
                <option disabled value="" selected>[ Select State ]</option>
                <option value="Abia">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="Akwa Ibom">Akwa Ibom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno</option>
                <option value="Cross River">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Enugu">Enugu</option>
                <option value="Edo">Edo</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Gombe">Gombe</option>
                <option value="Imo">Imo</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Katsina">Katsina</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Kogi">Kogi</option>
                <option value="Kwara">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="Nasarawa">Nasarawa</option>
                <option value="Niger">Niger</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
                <option value="Plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Taraba">Taraba</option>
                <option value="Yobe">Yobe</option>
                <option value="Zamfara">Zamfara</option>
                <option value="FCT">FCT</option>
                </b-form-select>
               </b-form-group>
              </mdb-card-body>
            </mdb-card>
            <mdb-card class="border border-0">
              <mdb-card-body>
                <mdb-card-title tag="h5">Origin Info</mdb-card-title>
                <b-form-group id="input-group-3" label="State Of Origin" label-for="input-3">
                <b-form-select
                v-model="personaForm.stateOrigin"
                required
                @change="changedValue"
                    >
                <option disabled value="" selected>[ Select State ]</option>
                <option value="Abia">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="Akwa Ibom">Akwa Ibom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno</option>
                <option value="Cross River">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Enugu">Enugu</option>
                <option value="Edo">Edo</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Gombe">Gombe</option>
                <option value="Imo">Imo</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Katsina">Katsina</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Kogi">Kogi</option>
                <option value="Kwara">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="Nasarawa">Nasarawa</option>
                <option value="Niger">Niger</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
                <option value="Plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Taraba">Taraba</option>
                <option value="Yobe">Yobe</option>
                <option value="Zamfara">Zamfara</option>
                <option value="FCT">FCT</option>
                </b-form-select>
               </b-form-group>

              <b-form-group id="input-group-2" label="Local Government of Origin:" label-for="input-2">
                        <b-form-select 
                        id="localGovernmentOrigin"
                        v-model="personaForm.localGovernmentOrigin"
                        required
                        >
                        <option disabled value="">[ Select Local Government ]</option>
                        <option v-for="item in localgovernment" v-bind:key ="item.id" :value="item">{{item}}</option>
                        </b-form-select>
              </b-form-group>

              <mdb-input label="Enter Nationality" v-model="personaForm.nationality" size="lg" required/> 

              </mdb-card-body>
            </mdb-card>
            <mdb-card class="border border-0">
              <mdb-card-body>
                <mdb-card-title tag="h5">Skills Info</mdb-card-title>
              <b-form-select 
                id="trade"
                v-model="personaForm.trade"
                required
                >
                <option disabled value="">[ Select Trade ]</option>
                <option  value="Automobile">Automobile</option>
                <option  value="Electrical Installation">Electrical Installation</option>
                <option  value="Paintiing and Decoration">Paintiing and Decoration</option>
                <option  value="Welding and Fabrication">Welding and Fabrication</option>
                <option  value="Carpentry and Joinery">Carpentry and Joinery</option>
                <option  value="Masonry">Masonry</option>
                <option  value="Plumbing and Pipefitting">Plumbing and Pipefitting</option>
                </b-form-select>

                  <b-form-group id="input-group-2" label="Center of Graduation:" label-for="input-2">
                              <b-form-select 
                              id="trainingProvider"
                              v-model="personaForm.centerOfGraduation"
                              required
                              >
                              <option disabled value="">[ Select Center of Graduation ]</option>
                              <option v-for="provider in trainingProviders" v-bind:key ="provider.id" :value="provider.fullLegalName">{{provider.fullLegalName}}</option>
                              </b-form-select>
                  </b-form-group>
                <mdb-input label="Unique Learner's Number" v-model="personaForm.uniqueLearnersNumber" size="lg" required/> 

              <b-form-select 
                id="gender"
                v-model="personaForm.competencyLevel"
                required
                >
                <option disabled value="">[ Select Compentency Level ]</option>
                <option  value="NSQ LEVEL 1">NSQ LEVEL 1</option>
                <option  value="NSQ LEVEL 2">NSQ LEVEL 2</option>
                <option  value="NSQ LEVEL 3">NSQ LEVEL 3</option>
                <option  value="NSQ LEVEL 4">NSQ LEVEL 4</option>
                <option  value="NSQ LEVEL 5">NSQ LEVEL 5</option>
                <option  value="NSQ LEVEL 6">NSQ LEVEL 6</option>
                </b-form-select>
              </mdb-card-body>
            </mdb-card>

                <b-card class="mt-3">
                <div>
                  <button @click="onPickFile" type="button">Upload Passport</button>
                  <input 
                  type="file" 
                  style="display: none" 
                  ref="fileInput"
                  accept="image/*"
                  @change="onFilePicked"/>
                </div>
                <div>
                  <img :src="resultURL" height="150"/>
                </div>
                </b-card>
                <b-button type="button" variant="primary"  @click="create()"  :disabled='formReset'>Submit
                    <b-spinner small v-if="formReset === true"></b-spinner>
                    <span class="sr-only" v-if="formReset === true">Wait...</span>
                </b-button>
                <b-button type="reset" variant="danger" @click="onReset">Reset</b-button>
            </b-form>
          </div>
          </div>
          </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <!-- /.Card Container -->
  </section>
  </div>
</template>
<script> 
import * as firebase from 'firebase/app'
import 'firebase/storage'
import  uuidv4 from 'uuid/v4';
import datepicker from 'vue-date-picker'
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
import { clipperBasic } from 'vuejs-clipper'
import { mdbEdgeHeader, mdbContainer, mdbRow, mdbCol, mdbCardBody, mdbInput, mdbBtn,mdbCard,mdbIcon,mdbCardGroup,mdbCardText,mdbCardTitle } from 'mdbvue';
import { URL } from 'url';
const firebaseConfig = {
    apiKey: "AIzaSyA73Wdeedk01ZoL-oWX08r5UxWing28knM",
    authDomain: "cslmis-admin.firebaseapp.com",
    databaseURL: "https://cslmis-admin.firebaseio.com",
    projectId: "cslmis-admin",
    storageBucket: "gs://cslmis-admin-bucket",
    messagingSenderId: "263391859932",
    appId: "1:263391859932:web:4a6a7871600a3acd"
  };
  
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : '' 

  export default {
    
    name: 'new-artisan',
     components: {
       mdbRow,
       mdbCol,
       mdbCardBody,
       mdbEdgeHeader,
       mdbContainer,
      datepicker,
      clipperBasic,
      mdbCard,
      mdbBtn,
      mdbIcon,
      mdbCardBody,
      mdbCardGroup,
      mdbCardTitle,
      mdbCardText,
      mdbInput    
     },
    data() {

      return {
        options: [
          { value: 'Electrical Installation', text: 'Electrical Installation' },
          { value: 'Painting and Decoration', text: 'Painting and Decoration' },
          { value: 'Welding and Fabrication', text: 'Welding and Fabrication' },
          { value: 'Carpentry and Joinery', text: 'Carpentry and Joinery'},
          { value: 'Masonary', text: 'Masonary' },
          { value: 'Plumbing and Pipefiting', text: 'Plumbing and Pipefiting' }
        ],
        personaForm: {
          firstName: '',
          middleName: '',
          lastName: '',
          gender: '',
          dateOfBirth: '',
          disabilityType: '',
          phoneNumber: '',
          emailAddress: '',
          contactAddress: '',
          cityOfResidence: '',
          stateOfResidence: '',
          centerOfGraduation: '',
          trade: '',
          uniqueLearnersNumber: '',
          competencyLevel: '',
          stateOrigin: '',
          localGovernmentOrigin: '',
          dateRegistered: '',
          nationality: '',
          photo: ''
        },
        image: null,
        resultURL: '',
        formReset: false     
        }
      },
     mounted(){
        this.loadTrainingProviders();
    },
    computed: {
        ...mapGetters({trainingProviders: 'program/getTraininProviders',successState: 'artisan/getSuccessState',errorState: 'artisan/getErrorState',localgovernment: 'artisan/getLocalGovernment',personaId: 'artisan/getArtisanId'}),
     },
    methods: {
      ...mapActions({registerArtisan: 'artisan/registerArtisan',fetchLocalGovernment: 'artisan/loadLocalGovernment',loadProviders: 'program/loadTrainingProviders'}),

    create() { 
      
      if(!this.personaForm.firstName) {
        this.$bvModal.msgBoxOk('First name is required.')
        return false;
      }
      else if(!this.personaForm.lastName) {
        this.$bvModal.msgBoxOk('Last name is required.')
        return false;
      }
    else if(!this.personaForm.gender) {
        this.$bvModal.msgBoxOk('Gender is required.')
        return false;
    }
    else if(!this.personaForm.dateOfBirth) {
        this.$bvModal.msgBoxOk('Date of birth is required.')
        return false;
    }
     else if(!this.personaForm.phoneNumber) {
        this.$bvModal.msgBoxOk('Phone number is required.')
        return false;
    }
     else if(!this.personaForm.emailAddress) {
        this.$bvModal.msgBoxOk('Email address is required.')
        return false;
    }
     else if(!this.personaForm.contactAddress) {
        this.$bvModal.msgBoxOk('Contact address is required.')
        return false;
    }else if(!this.personaForm.cityOfResidence) {
        this.$bvModal.msgBoxOk('City / Town of residence is required.')
        return false;
    }else if(!this.personaForm.stateOfResidence) {
        this.$bvModal.msgBoxOk('State of residence is required.')
        return false;
    }else if(!this.personaForm.trade) {
        this.$bvModal.msgBoxOk('Trade is required.')
        return false;
    }else if(!this.personaForm.centerOfGraduation) {
        this.$bvModal.msgBoxOk('Center of graduation is required.')
        return false;
    }else if(!this.personaForm.uniqueLearnersNumber) {
        this.$bvModal.msgBoxOk('Unique Learners number is required.')
        return false;
    }else if(!this.personaForm.competencyLevel) {
        this.$bvModal.msgBoxOk('Compentency Level is required.')
        return false;
    }else if(!this.personaForm.stateOrigin) {
        this.$bvModal.msgBoxOk('State of Origin is required.')
        return false;
    }else if(!this.personaForm.localGovernmentOrigin) {
        this.$bvModal.msgBoxOk('Local Government of origin required.')
        return false;
    }else if(!this.personaForm.nationality) {
        this.$bvModal.msgBoxOk('Nationality is required.')
        return false;
    }else if(!this.image == null) {
        this.$bvModal.msgBoxOk('Passport is required.')
        return false;
        }else{
            this.formReset = !this.formReset
            let uuid = uuidv4();
            let logoURL = ''
            let filename = this.image.name
            const metadata = { contentType: this.image.type };
            let ext = filename.slice(filename.lastIndexOf('.'))
            const task = firebase.app().storage().ref('profile/'+uuid+"."+ext).put(this.image, metadata);
            task.then(snapshot => snapshot.ref.getDownloadURL()).then(url => this.savePersona(url));

        }
 
      },
      onReset(){

          this.personaForm.firstName ='';
          this.personaForm.middleName ='';
          this.personaForm.lastName ='';
          this.personaForm.gender ='';
          this.personaForm.dateOfBirth ='';
          this.personaForm.disabilityType ='';
          this.personaForm.phoneNumber ='';
          this.personaForm.emailAddress ='';
          this.personaForm.contactAddress ='';
          this.personaForm.cityOfResidence ='';
          this.personaForm.stateOfResidence ='';
          this.personaForm.centerOfGraduation ='';
          this.personaForm.trade ='';
          this.personaForm.uniqueLearnersNumber ='';
          this.personaForm.competencyLevel ='';
          this.personaForm.stateOrigin ='';
          this.personaForm.localGovernmentOrigin ='';
          this.personaForm.dateRegistered ='';
          this.personaForm.photo ='';
          
          if(this.formReset){
            this.formReset = !this.formReset
          }
      },
      resetForm(){
        this.onReset()
        if(this.successState){
              this.showSuccessState();
          }
          if(this.errorState){
            this.showErrorState()
          }
      },
      loadTrainingProviders(){
        this.loadProviders().then((ev) => {})
      },
      showSuccessState(){
        this.$popup({
          message         : "GOT IT done!",
          backgroundColor : 'rgba(0, 0, 0, 0.7)',
          color           : '#00c853'
        })
        .then(() => {
          console.log('finished')
        })
      },
      showErrorState(){
        this.$popup({
          message         : "Oops! error occur",
          backgroundColor : 'rgba(244, 67, 54, 0.7)',
          color           : '#d50000'
        })
        .then(() => {
          console.log('finished')
        })
      },
      onPickFile(){
        this.$refs.fileInput.click()
      },
      onFilePicked(event){
        
        let files = event.target.files
        if(files[0].size / 1000  > 50){
          this.$bvModal.msgBoxOk('Selected file is too large. Try 50KB file size or less')
        }else{
        let filename = files[0].name;
        if(filename.lastIndexOf('.') <= 0){
          alert('please enter a valid file')
        }
        const fileReader =  new FileReader()
        fileReader.addEventListener('load',() =>{
          this.resultURL = fileReader.result
        })
        fileReader.readAsDataURL(files[0])
        this.image = files[0]
        }
      },
      savePersona(url) { 
         let date = new Date()
         this.personaForm.dateRegistered = date
         this.personaForm.photo = url
         this.personaForm.phoneNumber = "+234"+this.personaForm.phoneNumber.replace(/^0+/, '');
         console.log('Photo URL:'+this.personaForm.photo);  
        this.registerArtisan(this.personaForm).then(e => this.resetForm());
      },
       addWorkItem() {
        this.employmentForm.workExpirience.push({
          companyName: this.employmentForm.workExpirience.companyName,
          dateStart: this.employmentForm.workExpirience.dateStart,
          dateEnd: this.employmentForm.workExpirience.dateEnd,
          jobRole: this.employmentForm.workExpirience.jobRole,
          supervisorName: this.employmentForm.workExpirience.supervisorName,
          supervisorPhoneNumber: this.employmentForm.workExpirience.supervisorPhoneNumber
        });
      },
       addEducationItem() {
        this.educationForm.education.push({
          schoolName: this.educationForm.education.schoolName,
          yearStart: this.educationForm.education.yearStart,
          yearEnd: this.educationForm.education.yearEnd,
          qualificationEarned: this.educationForm.education.qualificationEarned
        });
      },
      addApptItem() {
        this.apprentishipForm.apprentiship.push({
          apprentishipPlace: this.apprentishipForm.apprentiship.apprentishipPlace,
          apprentishipYear: this.apprentishipForm.apprentiship.apprentishipYear,
          masterPhoneNumber: this.apprentishipForm.apprentiship.masterPhoneNumber,
          masterFullName: this.apprentishipForm.apprentiship.masterFullName
        });
      },
      removeEducation(index) {
        //you can warn the user before remove the education qualification
        this.educationForm.education.splice(index,1)
      },
      removeApprentiship(index) {
        //you can warn the user before remove the education qualification
        this.apprentishipForm.apprentiship.splice(index,1)
      },
     changedValue(){
        this.fetchLocalGovernment(this.personaForm.stateOrigin).then(e => { 
          console.log('Local government fetched'); 
        });            
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
