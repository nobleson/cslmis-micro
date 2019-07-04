<template>
 <div class="animated fadeIn">
  <section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header style="background-color: #00c851"/>

    <!-- Card Container -->
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none">
         <b-link @click="$emit('changeComponent',{component: 'TraineesView', id: null})"  href="#" class="card-link text-white"><mdb-icon icon="arrow-left" size="lg" class="text-white" />  View All Trainees</b-link>
         <mdb-card class="weather-card">
          <mdb-card-body  class="pb-3">
            <b-alert v-if="successState" show variant="success">Trainee created successfully</b-alert>
           <b-alert v-if="errorState" show variant="danger">Trainee  Fail to Create. Try again</b-alert>         
            <h2 class="h2-responsive"><strong>New Trainee Form</strong></h2>
            <p class="pb-4">Create Trainee</p>
            <!--Body-->
            <form>
              <mdb-input label="First Name"  v-model="traineeForm.firstName" />
              <mdb-input label="Middle Name"   v-model="traineeForm.middleName"/>
              <mdb-input label="Last Name"  v-model="traineeForm.lastName" />
              <mdb-input label="Residential Address"   v-model="traineeForm.residentialAddress"/>
              <mdb-input label="Residential Local Govrnment Area"  v-model="traineeForm.residetialLgArea" />
              <mdb-input label="State of Residence"   v-model="traineeForm.stateOfResidence"/>
              <date-picker v-model="traineeForm.dateOfBirth" :config="{format: 'MM/DD/YYYY'}" placeholder="Date of Birth"></date-picker>
              <mdb-input label="Phone Number"   v-model="traineeForm.phoneNumber"/>
              <mdb-input label="Alternative Phone Number"  v-model="traineeForm.alternativePhoneNumber" />
              <mdb-input label="E-mail Address"   v-model="traineeForm.emailAddress"/>
              <mdb-input label="Bank Name"  v-model="traineeForm.bankName" />
              <mdb-input label="Account Number"   v-model="traineeForm.accountNumber"/>
              <mdb-input label="BVN Number"  v-model="traineeForm.bvnNumber" />
              <mdb-input label="Center Name"   v-model="traineeForm.centerName"/>
              <mdb-input label="Center Address"  v-model="traineeForm.centerAddress" />
              <mdb-input label="Local Government Area"   v-model="traineeForm.lgArea"/>
              <mdb-input label="State"  v-model="traineeForm.state"/>
              <mdb-input label="Trade"   v-model="traineeForm.trade"/>
              <mdb-input label="Disability Type"   v-model="traineeForm.disabilityType"/>
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
                <mdb-btn color="primary" @click.native.prevent="create()" :disabled='traineeFormReset'>Submit
                  <b-spinner small v-if="traineeFormReset === true"></b-spinner>
                  <span class="sr-only" v-if="traineeFormReset === true">Wait...</span>
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
           
        traineeForm: {
                _id: '',//TraineeId
                firstName: '',
                middleName: '',
                lastName: '',
                residentialAddress: '',
                residetialLgArea: '',
                stateOfResidence: '',
                dateOfBirth: '',
                phoneNumber: '',
                alternativePhoneNumber: '',
                emailAddress: '',
                bankName:'',
                accountNumber: '',
                bvnNumber: '',
                centerName: '',
                centerAddress: '',
                lgArea: '',
                state: '',
                trade: '',
                disabilityType: '',
                photo: '',
                dateRegistered: null
                          
            },
           
            price:null,
            image: null,
            resultURL: '',
            traineeFormReset: false,
            spinner: '0',
            
                
          }
    },
    computed: {
        ...mapGetters({successState: 'trainee/getSuccessState',errorState: 'trainee/getErrorState'})

    }, 
    methods: {
      ...mapActions({registerTrainee: 'trainee/registerTrainee'}),
         

      create() { 
     if(!this.traineeForm.firstName) {
        this.$bvModal.msgBoxOk('First Name is required.')
        return false;
      } 
       else if(!this.traineeForm.middleName) {
        this.$bvModal.msgBoxOk('Middle Name is required.')
        return false;
      }
      else if(!this.traineeForm.lastName) {
        this.$bvModal.msgBoxOk('Last Name is required.')
        return false;
      }
    else if(!this.traineeForm.residentialAddress) {
        this.$bvModal.msgBoxOk('Residential Address is required.')
        return false;
    }
     else if(!this.traineeForm.residetialLgArea) {
        this.$bvModal.msgBoxOk('Residential L.G.A is required.')
        return false;
     } else if(!this.traineeForm.stateOfResidence) {
        this.$bvModal.msgBoxOk('State of residence is required.')
        return false;
      }
    else if(!this.traineeForm.dateOfBirth) {
        this.$bvModal.msgBoxOk('Date of birth of is required.')
        return false;
    }
     else if(!this.traineeForm.phoneNumber) {
        this.$bvModal.msgBoxOk('Phone number is required.')
        return false;
     }

      else if(!this.traineeForm.alternativePhoneNumber) {
        this.$bvModal.msgBoxOk('Alternative Phone number is required.')
        return false;
    }
     else if(!this.traineeForm.emailAddress) {
        this.$bvModal.msgBoxOk('E-mail address is required.')
        return false;
     } else if(!this.traineeForm.bankName) {
        this.$bvModal.msgBoxOk('Bank name is required.')
        return false;
      }
    else if(!this.traineeForm.accountNumber) {
        this.$bvModal.msgBoxOk('Account number is required.')
        return false;
    }
     else if(!this.traineeForm.bvnNumber) {
        this.$bvModal.msgBoxOk('BVN number is required.')
        return false;
     }
       else if(!this.traineeForm.centerName) {
        this.$bvModal.msgBoxOk('Center name is required.')
        return false;
    }
     else if(!this.traineeForm.centerAddress) {
        this.$bvModal.msgBoxOk('Center address is required.')
        return false;
     } else if(!this.traineeForm.lgArea) {
        this.$bvModal.msgBoxOk('Trainee L.G.A is required.')
        return false;
      }
    else if(!this.traineeForm.state) {
        this.$bvModal.msgBoxOk('Trainee state is required.')
        return false;
    }
     else if(!this.traineeForm.trade) {
        this.$bvModal.msgBoxOk('Trainee trade is required.')
        return false;
     }
     else if(!this.traineeForm.disabilityType) {
        this.$bvModal.msgBoxOk('Disability type if any is required.')
        return false;
      }

     

   else{
         this.traineeFormReset = !this.traineeFormReset
          this.traineeForm._id = localStorage.getItem('centerId')
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
          this.traineeForm.firstName = this.traineeForm.middleName = this.traineeForm.lastName = this.traineeForm.residentialAddress =  this.traineeForm.residetialLgArea =  
          this.traineeForm.stateOfResidence =  this.traineeForm.dateOfBirth =  this.traineeForm.phoneNumber =  this.traineeForm.alternativePhoneNumber = this.traineeForm.emailAddress = 
          this.traineeForm.bankName = this.traineeForm.accountNumber = this.traineeForm.bvnNumber = this.traineeForm.centerName = this.traineeForm.centerAddress =
          this.traineeForm.lgArea =  this.traineeForm.state =  this.traineeForm.trade =  this.traineeForm.disabilityType =  this.traineeForm.photo = this.traineeForm.dateRegistered ='';         
          this.traineeFormReset = !this.traineeFormReset 

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
         this.traineeForm.dateRegistered = date
         this.traineeForm.photo = url
         console.log('Photo URL:'+this.traineeForm.photo);  
         console.log('traineeForm:'+JSON.stringify(this.traineeForm))
          return this.registerTrainee(this.traineeForm).then(e => resetForm(e));  
      }
    }
  }

</script>
<style scoped>
  small {
    font-weight: 300;
  }
</style>