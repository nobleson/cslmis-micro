<template>
 <div class="animated fadeIn">
  <FlashMessage></FlashMessage>
  <section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header  style="background-color: #2BBBAD"/>

    <!-- Card Container -->
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none">
         <b-link @click="$emit('changeComponent',{component: 'ArtisansListView', id: null})"  href="#" class="card-link text-white"><mdb-icon icon="arrow-left" size="lg" class="text-white" />  View All Assesors</b-link>
         <mdb-card class="weather-card">
          <mdb-card-body class="pb-3">
          <h2 class="h2-responsive"><strong>New Artisan Form</strong></h2>
          <div class="form-wizard"  color="red">
            <form-wizard @on-complete="onComplete"
                              :start-index="0"
                              color="blue">
            <tab-content title="Personal Details"
                          icon="icon-user">
              <!-- Container for V-Modal dialogs <modals-container/> -->
              <div>
            <b-form v-if="show">        
            <mdb-card class="border border-0">
              <mdb-card-body>
                <mdb-card-title tag="h5">Bio Data</mdb-card-title>
                <mdb-input label="Surname" v-model="personaForm.surname" size="lg" required/> 
                <mdb-input label="Middle Name" v-model="personaForm.middleName" size="lg" required/> 
                <mdb-input label="Other Name" v-model="personaForm.otherName" size="lg" required/> 

                <b-form-group id="input-group-2" label="Date of Birth:" label-for="input-2">
                <date-picker v-model="personaForm.dateOfBirth" :config="{format: 'DD/MM/YYYY'}"></date-picker>
              </b-form-group>

              <b-form-group id="input-group-3" label="Gender" label-for="gender">

              <select class="custom-select custom-select-sm" v-model="personaForm.gender">
                <option  value="null" selected>[ Select Gender ]</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              </b-form-group>

              </mdb-card-body>
            </mdb-card>
            <mdb-card class="border border-0">
              <mdb-card-body>
                <mdb-card-title tag="h5">Any physical disabilty?</mdb-card-title>
                <mdb-input label="Specify if any" v-model="personaForm.disability" size="lg"/> 
              </mdb-card-body>
            </mdb-card>


            <hr>
            <mdb-card class="border border-0">
              <mdb-card-body>
                <mdb-card-title tag="h5">Personal Contact</mdb-card-title>
                <mdb-input label="Place Of Birth" v-model="personaForm.placeOfBirth" size="lg" required/> 
                <mdb-input label="Permanent Address" v-model="personaForm.permanentAddress" size="lg" required/> 
                <mdb-input label="Enter phone number" v-model="personaForm.phoneNumber" size="lg" required/> 
                <mdb-input label="Enter email" v-model="personaForm.emailAddress" size="lg" required/> 
              </mdb-card-body>
            </mdb-card>

            <hr>
            <mdb-card class="border border-0">
              <mdb-card-body>
                <mdb-card-title tag="h5">State/ Province</mdb-card-title>
            <b-form-group id="input-group-3" label="State Of Origin" label-for="input-3">
            <select
            class="custom-select custom-select-md"
            v-model="personaForm.state_origin"
            required
            @change="changedValue"
                >
              <option value="Null" selected>[ Select State ]</option>
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
            </select>
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

              <mdb-input label="Enter Nationality" v-model="personaForm.nationality" size="lg" required/> 

              </mdb-card-body>
            </mdb-card>


              <b-form-group style="display :none">
                <b-card class="mt-3">
                <div>
                    <button type="button" variant="secondary">
                      <clipper-upload v-model="imgURL">upload image</clipper-upload>
                    </button>
                    <clipper-basic class="my-clipper" ref="clipper" :src="imgURL">
                        <div class="placeholder" slot="placeholder">No image</div>
                    </clipper-basic>
                </div>
                </b-card>
              </b-form-group>
              <b-form-group>
                <b-card class="mt-3">
                <div>
                  <button @click="onPickFile" type="button">Upload Image</button>
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
              </b-form-group>

              <b-button type="button" variant="primary" @click="savePersona">Submit</b-button>
              <b-button type="reset" variant="danger" @click="onReset">Reset</b-button>
            </b-form>
            <b-card class="mt-3" header="Form Data Result">
              <pre class="m-0">{{ personaForm }}</pre>
            </b-card>   

          </div>
            </tab-content>
            <tab-content title="Training Provider"
                          icon="icon-pencil">
                <div>
            <b-form v-if="show">
            <mdb-card class="border border-0">
              <mdb-card-body>
                <mdb-card-title tag="h5">Training Center</mdb-card-title>

              <mdb-input label="Center Name" v-model="centerForm.centerName" size="lg" required/> 
              <mdb-input label="Enter Center Number" v-model="centerForm.centerNumber" size="lg" required/> 
              <mdb-input label="Enter Candidate Name" v-model="centerForm.candidateNumber" size="lg" required/> 
              <mdb-input label="Enter Candidate Trade" v-model="centerForm.candidateTrade" size="lg" required/> 

              </mdb-card-body>
            </mdb-card>

              <b-button type="button" variant="primary" @click="saveCenter">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>

            <b-card class="mt-3" header="Form Data Result">
              <pre class="m-0">{{ centerForm }}</pre>
            </b-card>
          </div>
            </tab-content>
            <tab-content title="Apprentiship Center"
                          icon="icon-pencil">
          <div>
            <b-form v-if="show">

            <mdb-card class="border border-0">
                <mdb-card-title tag="h5">Apprentiship Details</mdb-card-title>
            </mdb-card>
          <b-button type="button" variant="success"  @click="addApptItem">Add Place of Apprentiship</b-button>
        <!--added index to track every form with its index.-->
          <mdb-card class="card-body" style="margin-top: 1rem;" v-for="(item, index) in apprentishipForm.apprentiship" v-bind:key="item.id">
            <mdb-card-title>Place of Apprentiship {{index + 1}}
              <button v-if="index != 0" @click="removeApprentiship(index)" type="button" class="close" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
            </mdb-card-title>
        <!--made sure every form is bound to its right form object using the index-->
            <div class="flex-row">
              <mdb-input label="Apprentiship Place" v-model="apprentishipForm.apprentiship[index].apprentishipPlace" size="lg" required/> 
              <mdb-input label="Apprentiship Year" v-model="apprentishipForm.apprentiship[index].apprentishipYear" size="lg" required/> 
              <mdb-input label="Master Full Name" v-model="apprentishipForm.apprentiship[index].masterFullName" size="lg" required/> 
              <mdb-input label="Master Phone Number" v-model="apprentishipForm.apprentiship[index].masterPhoneNumber" size="lg" required/> 
            </div>
          </mdb-card>

            <label  for="completionStatus">Apprentiship Completion Status</label>

            <select class="browser-default custom-select" id="completionStatus"  v-model="apprentishipForm.apprentishipCompletionStatus" title="Apprentiship Completion Status" required>
              <option selected> [ Select Apprentiship Completion Status ]</option>
              <option value="Completed">Completed</option>
              <option value="Partially Completed">Partially completed</option>
              <option value="In Progress">In Progress</option>
              <option value="Abandoned">Abandoned</option>
              <option value="Other">Other</option>
            </select>
            <mdb-input label="Reason for Leaving" v-model="apprentishipForm.reasonForLeaving" size="lg"/> 

            <mdb-card class="border border-0">
              <mdb-card-body>
                <mdb-card-title tag="h5">Testimonial Details</mdb-card-title>
                <mdb-card-text>
                  Where you issued any certificate or testimonial?
            <div>
                  <!-- Group of default radios - option 1 -->
                  <div class="custom-control custom-radio">
                    <input type="radio" class="custom-control-input" v-model="condition" id="defaultGroupExample1" name="groupOfDefaultRadios" value="one" checked>
                    <label class="custom-control-label" for="defaultGroupExample1">No</label>
                  </div>

                  <!-- Group of default radios - option 2 -->
                  <div class="custom-control custom-radio">
                    <input type="radio" class="custom-control-input" v-model="condition" id="defaultGroupExample2" name="groupOfDefaultRadios"  value="two">
                    <label class="custom-control-label" for="defaultGroupExample2">Yes</label>
                  </div>
              </div>
              <mdb-card v-show="condition === 'two'">
                <mdb-card-body>
                  <div class="large-12 medium-12 small-12 cell">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroupFileAddon01">Upload Testimonial</span>
                  </div>
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" id="file" ref="file" accept="image/*" aria-describedby="inputGroupFileAddon01" v-on:change="handleFileUpload()">
                    <label class="custom-file-label" for="file">Choose file</label>
                  </div>
                </div>

                    <img v-bind:src="imagePreview" v-show="showPreview"/>
                    <button v-on:click="submitFile()">Submit</button>
                  </div>

                </mdb-card-body>
              </mdb-card>

                </mdb-card-text>
              <div  v-show="condition === 'one'">
              <mdb-input label="Reason for not Issued" v-model="apprentishipForm.reasonForNotIssued" size="lg"/>     
              </div>
            <label class="custom-control-label" for="defaultGroupExample2">Trade Learnt</label>
            <b-form-select v-model="apprentishipForm.tradeLearnt" :options="options" multiple :select-size="4"></b-form-select>
              </mdb-card-body>
            </mdb-card>

              <b-button type="button" variant="primary" @click="saveApprentiship">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>

            <b-card class="mt-3" header="Form Data Result">
              <pre class="m-0">{{ apprentishipForm }}</pre>
            </b-card>

            </b-form>
            
          </div>
          </tab-content>
        </form-wizard>
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
        employmentForm: {
          _id: '',
          trade: '',
          yearsPractice: '',
          workExpirience: [{
             companyName: '',
             dateStart: '',
             dateEnd: '',
             jobRole: '',
             supervisorName: '',
             supervisorPhoneNumber: ''
          }],
          engagedOnProject: '',
          addressOfProjectSite: '',
          employmentStatus: '',
          superviorsPhone_numbers: '',
          recordDate: ''
        },
        educationForm: {
          _id: '',
          education: [{
          schoolName: '',
          yearStart: '',
          yearEnd: '',
          qualificationEarned: ''
          }]

        },
        apprentishipForm: {
          _id: '',
          apprentiship: [{
          apprentishipPlace: '',
          apprentishipYear: '',
          masterPhoneNumber: '',
          masterFullName: ''
          }],
          apprentishipCompletionStatus: '',
          reasonForLeaving: '',
          certificateTestimonial: '',
          reasonForNotIssued: '',
          tradeLearnt: '',
          recordDate: ''
          },
        centerForm: {
          _id: '',
          centerName: '',
          centerNumber: '',
          candidateNumber: '',
          candidateTrade: ''
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
        image: null,
        testimonialImage: null,
        condition: 'one',
        imgURL: '',
        resultURL: '',
        isImageCliped: false,
        form: {

        },
        stateoforign: [{ selectedOption: '[ Select State ]'},
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
gender: [{ text: '[ Select Gender ]', selectedOption: 'Select Gender', value: null },'Male','Female',],
        show: true,
        showPreview: false,
        imagePreview: '',
        file: '',
      }
    },
    computed: {
        ...mapGetters({successState: 'artisan/getSuccessState',errorState: 'artisan/getErrorState',localgovernment: 'artisan/getLocalGovernment',personaId: 'artisan/getArtisanId'}),
  
     },
    methods: {
      ...mapActions({addPersona: 'artisan/addPersona',fetchLocalGovernment: 'artisan/loadLocalGovernment',addCenter: 'artisan/addCenter',addEmployment: 'artisan/addEmployment',addEducation: 'artisan/addEducation',addApprentiship: 'artisan/addApprentiship'}),
      getResult: function () {
          let imageUrl;
          let uuid = uuidv4();
          const canvas = this.$refs.clipper.clip();//call component's clip method
          this.resultURL = canvas.toDataURL("image/jpg", 1);//canvas->image
          this.isImageCliped = true;

          let filename = this.image.name
          const metadata = { contentType: this.image.type };
          let ext = filename.slice(filename.lastIndexOf('.'))
          const task = firebase.app().storage().ref('profile/'+uuid+"."+ext).put(this.image, metadata);
          task.then(snapshot => snapshot.ref.getDownloadURL())
         .then(function(url){this.personaForm.photo = url; console.log("testimonialImage:"+url)})
         .catch(console.error);

      },
      storePhoto: function () {
          let uuid = uuidv4();
          let filename = this.image.name
          const metadata = { contentType: this.image.type };
          let ext = filename.slice(filename.lastIndexOf('.'))
          const task = firebase.app().storage().ref('profile/'+uuid+"."+ext).put(this.image, metadata);
          task.then(snapshot => snapshot.ref.getDownloadURL())
         .then(function(url){this.personaForm.photo = url; console.log("testimonialImage:"+url)})
         .catch(console.error);

      },

      storeTestimonial: function () {
          let uuid = uuidv4();

          let filename = this.testimonialImage.name
          const metadata = { contentType: this.testimonialImage.type };
          let ext = filename.slice(filename.lastIndexOf('.'))
          const task = firebase.app().storage().ref('profile/'+uuid+"."+ext).put(this.testimonialImage, metadata);
          task.then(snapshot => snapshot.ref.getDownloadURL())
         .then(function(url){this.apprentishipForm.certificateTestimonial = url; console.log("testimonialImage:"+url)}
         )
         .catch(console.error);
      },

      onPickFile(){
        this.$refs.fileInput.click()
      },
      onFilePicked(event){

        let files = event.target.files
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
      },
      savePersona() { 
        this.storePhoto()
        this.addPersona(this.personaForm).then(e => { 
         this.$bvModal.msgBoxOk('Artisan Profile Submited. Click the Next Button to proceed')
        });  
      },
      saveCenter() { 
        console.log('artisan id:'+this.personaId);
        this.centerForm._id = this.personaId
        this.addCenter(this.centerForm).then(e => { 
          this.$bvModal.msgBoxOk('Artisan Profile Center Submited. Click the Next Button to proceed')
        });  
      },
      saveApprentiship() { 
        this.storeTestimonial() 
        this.apprentishipForm._id = this.personaId;
        this.apprentishipForm.recordDate = new Date();
        this.addApprentiship(this.apprentishipForm).then(e => { 
          this.$bvModal.msgBoxOk('Artisan Profile Apprentiship Submited. Click the Next Button to proceed')
        });  
      },
      saveEducation() { 
        this.educationForm._id = this.personaId;
        this.addEducation(this.educationForm).then(e => { 
          this.$bvModal.msgBoxOk('Artisan Profile Education Submited. Click the Next Button to proceed')
        });  
      },
      saveEmployment() { 
        this.employmentForm._id = this.personaId;
        this.employmentForm.recordDate = new Date();
        this.addEmployment(this.employmentForm).then(e => { 
          this.$bvModal.msgBoxOk('Artisan Profile Employment Submited')
        });  
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
            this.testimonialImage = this.file 
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
