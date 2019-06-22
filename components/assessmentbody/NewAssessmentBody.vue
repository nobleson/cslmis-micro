<template>
 <div class="animated fadeIn">
  <section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header style="background-color: #2BBBAD"/>

    <!-- Card Container -->
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none">
         <b-link @click="$emit('changeComponent',{component: 'AssessmentBodyView', id: null})"  href="#" class="card-link text-white"><mdb-icon icon="arrow-left" size="lg" class="text-white" /> View All Assessment Bodies</b-link>
         <mdb-card class="weather-card">
          <mdb-card-body  class="pb-3">
          <b-alert v-if="successState" show variant="success">Assessment body created Successfully</b-alert>
           <b-alert v-if="errorState" show variant="danger">Assessment body  Fail to Create. Try again</b-alert>        
                <b-card title="New Assessment Body">
                    <b-card-text>
                        <div>
                            <form>                            
                                <mdb-input label="Organization Name" v-model="form.fullname" />
                                <mdb-input label="Organization Accronym" v-model="form.accronym" />
                                <mdb-input label="Telephone Number" v-model="form.telephoneNumber" />
                                <mdb-input label="Email Address" v-model="form.emailAddress" />
                                <mdb-input label="Website URL" v-model="form.websiteAddress" />
                                <mdb-input label="Contact Address" v-model="form.contactAddress" />
                                <mdb-input label="City" v-model="form.city" />
                                <mdb-input label="Postal Code" v-model="form.postalCode" />

                                <mdb-input type="textarea" label="Mission Statement" :rows="2" v-model="form.missionStatment" />
                                <b-card class="mt-3">
                                <h4>Organization Logo</h4>
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
                                <mdb-btn  @click="create"  type="button"  color="default" :disabled='formState'>Submit</mdb-btn>
                            </form>                         
                        </div>
                    </b-card-text>
                </b-card>
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
        resultURL: ''
        
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
        ...mapGetters({formState: 'assessment/getFormState',successState: 'assessment/getSuccessState',errorState: 'assessment/getErrorState',logoUrl: 'assessment/getLogoURL'}),
        getLogoURL(){
          return this.logoUrl;
        }
    }, 
    methods: {
      ...mapActions({registerAssessmentBody: 'assessment/registerAssessmentBody',loadURL: 'assessment/loadURL'}),

      create() { 
      if(!this.form.fullname) {
        this.$bvModal.msgBoxOk('Full Name required.')
        return false;
      }
      else if(!this.form.telephoneNumber) {
        this.$bvModal.msgBoxOk('Valid office telephone number required.')
        return false;
      }
    else if(!this.form.emailAddress) {
        this.$bvModal.msgBoxOk('Email Address required.')
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
     else if(!this.form.postalCode) {
        this.$bvModal.msgBoxOk('Postal code required.')
        return false;
    }
     else if(!this.form.missionStatment) {
        this.$bvModal.msgBoxOk('Mission statement required.')
        return false;
      }else{
         this.storeProfilePhoto()  
         let date = new Date()
         this.form.dateRegistered = date
         this.form.logo = localStorage.getItem('logoURL')
        this.registerAssessmentBody(this.form).then(e => { 
          console.log('Assessment Body Created Successfully'); 
          this.form.fullname = this.form.accronym =  this.form.telephoneNumber =  this.form.emailAddress =  this.form.websiteAddress =  this.form.contactAddress =  this.form.city =  this.form.postalCode =  this.form.missionStatment = '';
        });  
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
       storeProfilePhoto: function () {
          let uuid = uuidv4();

          let filename = this.image.name
          const metadata = { contentType: this.image.type };
          let ext = filename.slice(filename.lastIndexOf('.'))
          const task = firebase.app().storage().ref('profile/'+uuid+"."+ext).put(this.image, metadata);
          task.then(snapshot => snapshot.ref.getDownloadURL()).then(url => localStorage.setItem('logoURL', url))
         .catch(console.error);

      } 

    }
  }

</script>
