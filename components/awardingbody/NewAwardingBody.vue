
<template>
 <div class="animated fadeIn">
  <section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header style="background-color: #2BBBAD"/>

    <!-- Card Container -->
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none">
         <b-link @click="$emit('changeComponent',{component: 'AwardingBodyView', id: null})"  href="#" class="card-link text-white"><mdb-icon icon="arrow-left" size="lg" class="text-white" />  View All Awarding Bodies</b-link>
         <mdb-card class="weather-card">
          <mdb-card-body  class="pb-3">
            <b-alert v-if="successState" show variant="success">Awarding body created Successfully</b-alert>
           <b-alert v-if="errorState" show variant="danger">Awarding body  Fail to Create. Try again</b-alert>         
            <h2 class="h2-responsive"><strong>New Awarding Body Form</strong></h2>
            <p class="pb-4">Create Awarding Body Profile</p>
            <!--Body-->
            <form>
              <mdb-input label="Full Name"  v-model="form.fullname" />
              <mdb-input label="Accronym"   v-model="form.accronym"/>
              <mdb-input label="Telephone Number"  v-model="form.telephoneNumber"/>
              <mdb-input label="Email Address"  v-model="form.emailAddress"/>
              <mdb-input label="Website"  v-model="form.websiteAddress"/>
              <mdb-input label="Contact Address"  v-model="form.contactAddress"/>
              <mdb-input label="City"  v-model="form.city"/>
              <mdb-input label="Postal Code"  v-model="form.postalCode"/>
              <mdb-input label="Mission Statement"  v-model="form.missionStatment"/>
              
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
                <mdb-btn color="primary" @click.native.prevent="create()" :disabled='formReset'>Submit
                  <b-spinner small v-if="formReset === true"></b-spinner>
                  <span class="sr-only" v-if="formReset === true">Wait...</span>
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
      mdbCard,
      mdbInput,
      mdbBtn,
      mdbIcon,
      datepicker
     },
    data() {
      return {
        form: {
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
            formReset: false        
          }
    },
/*     ...mapMutations({
       setFormReset: 'companyFormReset/set'
      }), */
      mounted(){
          
          /* ...mapState({
            successAlert: state => state.company.regsuccess,
            errorAlert: state => state.company.regerror,
            formState: state => state.company.companyFormReset,
            nameReq: state => state.company.companyNameMsg,
            emailReq: state => state.company.companyEmailMsg
          }),
         */
      },
    computed: {
        ...mapGetters({formState: 'assesors/getFormState',successState: 'assesors/getSuccessState',errorState: 'assesors/getErrorState'}),

    }, 
    methods: {
      ...mapActions({registerAardingBody: 'awardingbody/registerAardingBody'}),

      create() { 
      if(!this.form.fullname) {
        this.$bvModal.msgBoxOk('Organization name is required.')
        return false;
      }
      else if(!this.form.accronym) {
        this.$bvModal.msgBoxOk('Organization telephone number is required.')
        return false;
      }
    else if(!this.form.emailAddress) {
        this.$bvModal.msgBoxOk('Email address is required.')
        return false;
    }
    else if(!this.form.contactAddress) {
        this.$bvModal.msgBoxOk('Contact address required.')
        return false;
    }
     else if(!this.form.city) {
        this.$bvModal.msgBoxOk('City is required.')
        return false;
    }
     else if(!this.form.missionStatment) {
        this.$bvModal.msgBoxOk('Mission statement is required.')
        return false;
     }
    else if(this.image == null) {
        this.$bvModal.msgBoxOk('Logo is required. Use avatar instead.')
        return false;
      }else{        
        this.formReset = !this.formReset
          let uuid = uuidv4();
          let logoURL = ''
          let filename = this.image.name
          const metadata = { contentType: this.image.type };
          let ext = filename.slice(filename.lastIndexOf('.'))
          const task = firebase.app().storage().ref('profile/'+uuid+"."+ext).put(this.image, metadata);
          task.then(snapshot => snapshot.ref.getDownloadURL()).then(url => this.saveProfile(url))
         .catch(console.error).finally(reset => this.resetForm());
      }

      },
      resetForm(){
          this.resultURL = this.form.fullname = this.form.middleName = this.form.accronym = this.form.telephoneNumber = this.form.websiteAddress = this.form.contactAddress = this.form.emailAddress =  this.form.city = this.logo =  this.form.postalCode =  this.form.missionStatment = '';         
          this.formReset = !this.formReset    
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
         this.form.dateRegistered = date
         this.form.logo = url
         console.log('Photo URL:'+this.form.logo)
          this.registerAardingBody(this.form).then(e => { 
            console.log('Awarding Body Registered Successfully'); 
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