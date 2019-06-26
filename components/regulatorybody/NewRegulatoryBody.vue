<template>
 <div class="animated fadeIn">
   <FlashMessage></FlashMessage>    
  <section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header style="background-color: #2BBBAD"/>

    <!-- Card Container -->
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none">
         <b-link @click="$emit('changeComponent',{component: 'RegulatoryBodyView', id: null})"  href="#" class="card-link text-white"> <mdb-icon icon="arrow-left" size="lg" class="text-white" />  View All Regulatory Bodies</b-link>
         <mdb-card class="weather-card">
          <mdb-card-body  class="pb-3">    
            <h2 class="h2-responsive"><strong>New Regulatory Body Form</strong></h2>
            <p class="pb-4">Create Regulatory Body Profile</p>
            <!--Body-->
            <form>
              <mdb-input label="Full Name"  v-model="profileForm.fullname" />
              <mdb-input label="Accronym"   v-model="profileForm.accronym"/>
              <mdb-input label="Telephone Number"  v-model="profileForm.telephoneNumber"/>
              <mdb-input label="Email Address"  v-model="profileForm.emailAddress"/>
              <mdb-input label="Website"  v-model="profileForm.websiteAddress"/>
              <mdb-input label="Contact Address"  v-model="profileForm.contactAddress"/>
              <mdb-input label="City"  v-model="profileForm.city"/>
              <mdb-input label="Postal Code"  v-model="profileForm.postalCode"/>
              <mdb-input label="Mission Statement"  v-model="profileForm.missionStatment"/>
              
                <b-card class="mt-3">
                <h4>Profile Photo</h4>
                <div>
                  <mdb-btn color="default" type="button" @click="onPickFile">Upload Image<mdb-icon icon="image" class="ml-1"/></mdb-btn>
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
                <mdb-btn color="primary" size="lg" class="text-white" @click.native.prevent="create()" :disabled='profileFormReset'>Submit
                  <b-spinner small v-if="profileFormReset === true"></b-spinner>
                  <span class="sr-only" v-if="profileFormReset === true">Wait...</span>
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
import { mdbEdgeHeader, mdbContainer, mdbRow, mdbCol,mdbCard, mdbCardBody, mdbInput, mdbBtn, mdbIcon } from 'mdbvue';
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
      mdbCard,
      mdbCardBody,
      mdbInput,
      mdbIcon,
      mdbBtn,
      datepicker
     },
    data() {
      return {
        profileForm: {
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
            profileFormReset: false        
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
        ...mapGetters({licensingProfileFormState: 'regulatorybody/getFormState',successState: 'regulatorybody/getSuccessState',errorState: 'regulatorybody/getErrorState'}),

    }, 
    methods: {
      ...mapActions({registerRegulatoryBody: 'regulatorybody/registerRegulatoryBody'}),

      create() { 
      if(!this.profileForm.fullname) {
        this.$bvModal.msgBoxOk('Organization name is required.')
        return false;
      }
      else if(!this.profileForm.accronym) {
        this.$bvModal.msgBoxOk('Organization telephone number is required.')
        return false;
      }
    else if(!this.profileForm.telephoneNumber) {
        this.$bvModal.msgBoxOk('Telephone number is required.')
        return false;
    }
    else if(!this.profileForm.emailAddress) {
        this.$bvModal.msgBoxOk('Email address is required.')
        return false;
    }
    else if(!this.profileForm.contactAddress) {
        this.$bvModal.msgBoxOk('Contact address required.')
        return false;
    }
     else if(!this.profileForm.city) {
        this.$bvModal.msgBoxOk('City is required.')
        return false;
    }
     else if(!this.profileForm.missionStatment) {
        this.$bvModal.msgBoxOk('Mission statement is required.')
        return false;
     }
    else if(this.image == null) {
        this.$bvModal.msgBoxOk('Logo is required. Use avatar instead.')
        return false;
      }else{
        this.profileFormReset = !this.profileFormReset
          let uuid = uuidv4();
          let logoURL = ''
          let filename = this.image.name || ''
          
          const metadata = { contentType: this.image.type };
          let ext = filename.slice(filename.lastIndexOf('.'))
          const task = firebase.app().storage().ref('profile/'+uuid+"."+ext).put(this.image, metadata);
          task.then(snapshot => snapshot.ref.getDownloadURL()).then(url => this.saveProfile(url))
         .catch(console.error);
      }

      },
      resetForm(){
          this.profileFormReset = !this.profileFormReset        
          this.watchSuccessState();
          this.watchErrorState();
      },
      watchSuccessState(){
          if(this.successState){
            this.flashMessage.success({title: 'GOT IT', message: 'Regulatory body registered successfully',icon: true});
            this.resultURL = this.profileForm.fullname = this.profileForm.accronym = this.profileForm.telephoneNumber = this.profileForm.emailAddress = this.profileForm.contactAddress = this.profileForm.city = this.logo =  this.profileForm.postalCode =  this.profileForm.missionStatment = '';         
          }
        },
        watchErrorState(){ 
          if(this.errorState){
            this.flashMessage.error({title: 'Oops!: ', message: 'Regulatory body  fail to register. Try again',icon: true});
          }
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
         this.profileForm.dateRegistered = date
         this.profileForm.logo = url
          return this.registerRegulatoryBody(this.profileForm).then(e =>this.resetForm()); 
      }
    }
  }

</script>
<style scoped>
  small {
    font-weight: 300;
  }
</style>