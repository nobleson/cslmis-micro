<template>
 <div class="animated fadeIn">
  <section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header style="background-color: #00c851"/>

    <!-- Card Container -->
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none">
         <b-link @click="$emit('changeComponent',{component: 'TrainersView', id: null})"  href="#" class="card-link text-white"><mdb-icon icon="arrow-left" size="lg" class="text-white" />  View All Trainers</b-link>
         <mdb-card class="weather-card">
          <mdb-card-body  class="pb-3">
            <b-alert v-if="successState" show variant="success">Trainer created successfully</b-alert>
           <b-alert v-if="errorState" show variant="danger">Trainer  Fail to Create. Try again</b-alert>         
            <h2 class="h2-responsive"><strong>New Trainer Form</strong></h2>
            <p class="pb-4">Create Trainer</p>
            <!--Body-->
            <form>
              <mdb-input label="Trainer Id Number"  v-model="trainerForm.idNumber" />
              <mdb-input label="First Name"  v-model="trainerForm.firstName" />
              <mdb-input label="Middle Name"   v-model="trainerForm.middleName"/>
              <mdb-input label="Last Name"  v-model="trainerForm.lastName" />
              <mdb-input label="Gender"  v-model="trainerForm.gender"/>
              <mdb-input label="Trade Specialisation"  v-model="trainerForm.tradeSpecilisation" />
              <mdb-input label="Highest Qualification"   v-model="trainerForm.highestQualification"/>
              <mdb-input label="Residential Address"   v-model="trainerForm.residentialAddress"/>
              <mdb-input label="E-mail Address"   v-model="trainerForm.emailAddress"/>
              <mdb-input label="Phone Number"   v-model="trainerForm.phoneNumber"/>
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
                <mdb-btn color="primary" @click.native.prevent="create()" :disabled='trainerFormReset'>Submit
                  <b-spinner small v-if="trainerFormReset === true"></b-spinner>
                  <span class="sr-only" v-if="trainerFormReset === true">Wait...</span>
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
  <FlashMessage></FlashMessage>
  </div>
</template>
<script>
import  uuidv4 from 'uuid/v4';
import datepicker from 'vue-date-picker'
import { mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter,  mdbListGroup, mdbListGroupItem, mdbBadge,  mdbEdgeHeader, mdbContainer, mdbRow, mdbCol, mdbCardBody,mdbCard,  mdbInput, mdbBtn,mdbIcon } from 'mdbvue';
import {mapGetters, mapActions,mapState,mapMutations} from 'vuex'
import * as firebase from 'firebase/app'
import 'firebase/storage'

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
      datepicker,
      mdbListGroup,
      mdbListGroupItem,
      mdbBadge,
      mdbModal,
      mdbModalHeader,
      mdbModalTitle,
      mdbModalBody,
      mdbModalFooter,
     },
    directives: { focus },
    data() {
      return {
        login: false,
           
        trainerForm: {
                idNumber: '',//TrainerId
                firstName: '',
                middleName: '',
                lastName: '',
                gender: '',
                tradeSpecilisation: '',
                highestQualification: '',
                residentialAddress: '',
                emailAddress: '',
                phoneNumber: '',
                photo: null,
                dateRegistered: null,

            },
            form:{
              _id: '',
              trainerList: []
            },
            resultURL: '',
            trainerFormReset: false,
            spinner: '0',
            
                
          }
    },
    computed: {
        ...mapGetters({successState: 'trainer/getSuccessState',errorState: 'trainer/getErrorState'})

    }, 
    methods: {
      ...mapActions({registerTrainer: 'trainer/registerTrainer'}),
         

      create() { 
     if(!this.trainerForm.idNumber) {
        this.$bvModal.msgBoxOk('First Name is required.')
        return false;
      }
      else if(!this.trainerForm.firstName) {
        this.$bvModal.msgBoxOk('First Name is required.')
        return false;
      } 
       else if(!this.trainerForm.middleName) {
        this.$bvModal.msgBoxOk('Middle Name is required.')
        return false;
      }
      else if(!this.trainerForm.lastName) {
        this.$bvModal.msgBoxOk('Last Name is required.')
        return false;
      }
      else if(!this.trainerForm.gender) {
        this.$bvModal.msgBoxOk('Gender is required.')
        return false;
    }
    else if(!this.trainerForm.tradeSpecilisation) {
        this.$bvModal.msgBoxOk('Residential Address is required.')
        return false;
    }
    else if(!this.trainerForm.residentialAddress) {
        this.$bvModal.msgBoxOk('Residential Address is required.')
        return false;
    }
    else if(!this.trainerForm.highestQualification) {
        this.$bvModal.msgBoxOk('Highest Qualification is required.')
        return false;
    }
    else if(!this.trainerForm.emailAddress) {
        this.$bvModal.msgBoxOk('E-mail address is required.')
        return false;
     } 
    else if(!this.trainerForm.phoneNumber) {
        this.$bvModal.msgBoxOk('Phone number is required.')
        return false;
     }       

   else{
          this.trainerFormReset = !this.trainerFormReset
          let uuid = uuidv4();
          let logoURL = ''
          let filename = this.image.name || ''
          const metadata = { contentType: this.image.type };
          let ext = filename.slice(filename.lastIndexOf('.'))
          const task = firebase.app().storage().ref('profile/'+uuid+"."+ext).put(this.image, metadata);
          task.then(snapshot => snapshot.ref.getDownloadURL()).then(url => this.saveProfile(url))
          .catch(function (error){});
      }
      },
     
             
     resetForm(status){
          if(status == 'success'){
          this.showSuccessMsg()
          this.trainerForm.idNumber = this.trainerForm.firstName = this.trainerForm.middleName = this.trainerForm.lastName = this.trainerForm.gender =  
          this.trainerForm.tradeSpecilisation = this.trainerForm.residentialAddress =  this.trainerForm.highestQualification =  this.trainerForm.residentialAddress = 
          this.trainerForm.emailAddress = this.trainerForm.emailAddress = this.trainerForm.phoneNumber =  this.resultURL ='';       
          this.trainerFormReset = !this.trainerFormReset 

          }
          else if(status == 'error'){
            showErrorMsg()
          }
      },
     showSuccessMsg() {
          this.$bvModal.msgBoxOk('Data was submitted successfully', {
          title: 'GOT IT',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        });
      },
      showErrorMsg() {
          this.$bvModal.msgBoxOk('Data fail to submit. Try it again', {
          title: 'Oops! Error Occured',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        });        
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
         this.trainerForm.dateRegistered = date
         this.trainerForm.photo = url
         
         console.log('Photo URL:'+this.trainerForm.photo);  
         this.form._id = localStorage.getItem('centerId')
         this.form.trainerList.push(this.trainerForm) 
         return this.registerTrainer(this.form).then(e => this.resetForm(e));  
      }
    }
  }

</script>
<style scoped>
  small {
    font-weight: 300;
  }
</style>