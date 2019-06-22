<template>
 <div class="animated fadeIn">
  <section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header style="background-color: #2BBBAD"/>

    <!-- Card Container -->
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none">
         <b-link @click="$emit('changeComponent',{component: 'LicensingBodyView', id: null})"  href="#" class="card-link text-white"><mdb-icon icon="arrow-left" size="lg" class="text-white" />  View All Licensing Bodies</b-link>
         <mdb-card class="weather-card">
          <mdb-card-body  class="pb-3">
            <b-alert v-if="successState" show variant="success">Licensing body created successfully</b-alert>
           <b-alert v-if="errorState" show variant="danger">Licensing body  Fail to Create. Try again</b-alert>         
            <h2 class="h2-responsive"><strong>New Licensing Body Form</strong></h2>
            <p class="pb-4">Create Licensing Body Profile</p>
            <!--Body-->
            <form>
              <mdb-input label="Full Name"  v-model="licensingProfileForm.fullname" />
              <mdb-input label="Accronym"   v-model="licensingProfileForm.accronym"/>
              <mdb-input label="Telephone Number"  v-model="licensingProfileForm.telephoneNumber"/>
              <mdb-input label="Email Address"  v-model="licensingProfileForm.emailAddress"/>
              <mdb-input label="Website"  v-model="licensingProfileForm.websiteAddress"/>
              <mdb-input label="Contact Address"  v-model="licensingProfileForm.contactAddress"/>
              <mdb-input label="City"  v-model="licensingProfileForm.city"/>
              <mdb-input label="Postal Code"  v-model="licensingProfileForm.postalCode"/>
              <mdb-input label="Mission Statement"  v-model="licensingProfileForm.missionStatment"/>
              
                <b-card class="mt-3">
                <h4>Profile Photo</h4>
                <div>
                  <mdb-btn color="default" @click="onPickFile">Upload Image<mdb-icon icon="image" class="ml-1"/></mdb-btn>
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

              <div class="text-xs-left">
                <mdb-btn color="primary" @click.native.prevent="create()" :disabled='licensingProfileFormReset'>Submit
                  <b-spinner small v-if="licensingProfileFormReset === true"></b-spinner>
                  <span class="sr-only" v-if="licensingProfileFormReset === true">Wait...</span>
                </mdb-btn>
              </div>
            </form>
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
import { mdbEdgeHeader, mdbContainer, mdbRow, mdbCol, mdbCardBody,mdbCard, mdbInput, mdbBtn,mdbIcon } from 'mdbvue';
import {mapGetters, mapActions,mapState,mapMutations} from 'vuex'
 const focus = {
    inserted(el) {
      el.focus()
    },
  }
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
   directives: { focus },
   components: {
      mdbEdgeHeader,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbCardBody,
      mdbInput,
      mdbBtn,
      mdbIcon,
      mdbCard,
      datepicker
     },
    data() {
      return {
        licensingProfileForm: {
                fullname: '',
                accronym: '',
                telephoneNumber: '',
                emailAddress: '',
                websiteAddress: '',
                contactAddress: '',
                city: '',
                logo: '',
                postalCode: '',
                missionStatment: '',
                dateRegistered: null
            },
            image: null,
            resultURL: '',
            licensingProfileFormReset: false,
            spinner: '0'        
          }
    },
/*     ...mapMutations({
       setlicensingProfileFormReset: 'companylicensingProfileFormReset/set'
      }), */
      mounted(){
          
          /* ...mapState({
            successAlert: state => state.company.regsuccess,
            errorAlert: state => state.company.regerror,
            licensingProfileFormState: state => state.company.companylicensingProfileFormReset,
            nameReq: state => state.company.companyNameMsg,
            emailReq: state => state.company.companyEmailMsg
          }),
         */
      },
    computed: {
        ...mapGetters({licensingProfileFormState: 'licensingbody/getFormState',successState: 'licensingbody/getSuccessState',errorState: 'licensingbody/getErrorState'}),

    }, 
    methods: {
      ...mapActions({registerLicensingBody: 'licensingbody/registerLicensingBody'}),

      create() { 
      if(!this.licensingProfileForm.fullname) {
        this.$bvModal.msgBoxOk('Organization name is required.')
        return false;
      }
      else if(!this.licensingProfileForm.accronym) {
        this.$bvModal.msgBoxOk('Organization telephone number is required.')
        return false;
      }
    else if(!this.licensingProfileForm.emailAddress) {
        this.$bvModal.msgBoxOk('Email address is required.')
        return false;
    }
    else if(!this.licensingProfileForm.contactAddress) {
        this.$bvModal.msgBoxOk('Contact address required.')
        return false;
    }
     else if(!this.licensingProfileForm.city) {
        this.$bvModal.msgBoxOk('City is required.')
        return false;
    }
     else if(!this.licensingProfileForm.missionStatment) {
        this.$bvModal.msgBoxOk('Mission statement is required.')
        return false;
     }
    else if(this.image == null) {
        this.$bvModal.msgBoxOk('Logo is required. Use avatar instead.')
        return false;
      }else{
        this.licensingProfileFormReset = !this.licensingProfileFormReset
          let uuid = uuidv4();
          let logoURL = ''
          let filename = this.image.name || ''
          
          const metadata = { contentType: this.image.type };
          let ext = filename.slice(filename.lastIndexOf('.'))
          const task = firebase.app().storage().ref('profile/'+uuid+"."+ext).put(this.image, metadata);
          task.then(snapshot => snapshot.ref.getDownloadURL()).then(url => this.saveProfile(url))
         .catch(console.error).finally(reset => this.resetForm());
      }

      },
     resetForm(){
          this.resultURL = this.licensingProfileForm.fullname = this.licensingProfileForm.middleName = this.licensingProfileForm.accronym = this.licensingProfileForm.telephoneNumber = this.licensingProfileForm.websiteAddress = this.licensingProfileForm.contactAddress = this.licensingProfileForm.emailAddress =  this.licensingProfileForm.city = this.logo =  this.licensingProfileForm.postalCode =  this.licensingProfileForm.missionStatment = '';         
          this.licensingProfileFormReset = !this.licensingProfileFormReset        
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
       saveProfile(url) {
         let date = new Date()
         this.licensingProfileForm.dateRegistered = date
         this.licensingProfileForm.logo = url
         console.log('Photo URL:'+this.licensingProfileForm.logo);  
         console.log('licensingProfileForm:'+JSON.stringify(this.licensingProfileForm))
          return this.registerLicensingBody(this.licensingProfileForm).then(e => { 
            console.log('Licensing Body Registered Successfully'); 
          }); 
      }
    }
  }

</script>
<style scoped>
  small {
    font-weight: 300;
  }
</style>