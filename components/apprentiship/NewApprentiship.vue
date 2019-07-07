<template>
 <div class="animated fadeIn">
  <section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header style="background-color: #00c851"/>

    <!-- Card Container -->
            <mdb-container free-bird>
            <mdb-row>
            <mdb-col md="8" lg="7" class="mx-auto float-none">
            <b-link @click="$emit('changeComponent',{component: 'ApprentishipView', id: null})"  href="#" class="card-link text-white"><mdb-icon icon="arrow-left" size="lg" class="text-white" />  View All Apprentiship</b-link>
            <mdb-card class="weather-card">
            <mdb-card-body  class="pb-3">
            <b-alert v-if="successState" show variant="success">Apprentice created successfully</b-alert>
            <b-alert v-if="errorState" show variant="danger">Apprentice  Fail to Create. Try again</b-alert>         
            <h2 class="h2-responsive"><strong>New Apprentice Form</strong></h2>
            <p class="pb-4">Create Apprentice</p>
            <!--Body-->
            <form>
              <mdb-input label="Apprentice Id Number"  v-model="apprentishipForm.idNumber" />
              <mdb-input label="First Name"  v-model="apprentishipForm.firstName" />
              <mdb-input label="Middle Name"   v-model="apprentishipForm.middleName"/>
              <mdb-input label="Last Name"  v-model="apprentishipForm.lastName" />
              <mdb-input label="Gender"  v-model="apprentishipForm.gender"/>
              <mdb-input label="Trade"  v-model="apprentishipForm.trade"/>
              <mdb-input label="Supervisor Name"  v-model="apprentishipForm.supervisorName"/>
              <mdb-input label="Phone Number"   v-model="apprentishipForm.phoneNumber"/>
              <mdb-input label="E-mail Address"   v-model="apprentishipForm.emailAddress"/>

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
                <mdb-btn color="primary" @click.native.prevent="create()" :disabled='apprentishipFormReset'>Submit
                  <b-spinner small v-if="apprentishipFormReset === true"></b-spinner>
                  <span class="sr-only" v-if="apprentishipFormReset === true">Wait...</span>
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
//import  uuidv4 from 'uuid/v4';
import datepicker from 'vue-date-picker'
import { mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter,  mdbListGroup, mdbListGroupItem, mdbBadge,  mdbEdgeHeader, mdbContainer, mdbRow, mdbCol, mdbCardBody,mdbCard,  mdbInput, mdbBtn,mdbIcon } from 'mdbvue';
import {mapGetters, mapActions,mapState,mapMutations} from 'vuex'

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
    data() {
      return {
        login: false,
        apprentishipForm: {
              idNumber:'',
              firstName:'',
              middleName:'',
              lastName:'',
              gender:'',
              trade:'',
              supervisorName:'',
              phoneNumber:'',
              emailAddress:'',
              residentialAddress:'',
              dateRegistered:'',
            },
             form:{
              _id: '',
              apprentishipList: []
            },
           
            resultURL: '',
            apprentishipFormReset: false,
            spinner: '0',
          
                
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
        ...mapGetters({successState: 'apprentiship/getSuccessState',errorState: 'apprentiship/getErrorState'})

    },
    methods: {
      ...mapActions({registerApprentiship: 'apprentiship/registerApprentiship'}),
      
     
       
         
      create() { 
     if(!this.apprentishipForm.idNumber) {
        this.$bvModal.msgBoxOk('First Name is required.')
        return false;
      }
      else if(!this.apprentishipForm.firstName) {
        this.$bvModal.msgBoxOk('First Name is required.')
        return false;
      } 
       else if(!this.apprentishipForm.middleName) {
        this.$bvModal.msgBoxOk('Middle Name is required.')
        return false;
      }
      else if(!this.apprentishipForm.lastName) {
        this.$bvModal.msgBoxOk('Last Name is required.')
        return false;
      }
      else if(!this.apprentishipForm.gender) {
        this.$bvModal.msgBoxOk('Gender is required.')
        return false;
    }
    else if(!this.apprentishipForm.trade) {
        this.$bvModal.msgBoxOk('Apprentice is required.')
        return false;
    }
    else if(!this.apprentishipForm.supervisorName) {
        this.$bvModal.msgBoxOk('Suppervisor Name is required.')
        return false;
    }
    else if(!this.apprentishipForm.phoneNumber) {
        this.$bvModal.msgBoxOk('Highest Qualification is required.')
        return false;
    }
    else if(!this.apprentishipForm.emailAddress) {
        this.$bvModal.msgBoxOk('E-mail address is required.')
        return false;
     } 
    else if(!this.apprentishipForm.residentialAddress) {
        this.$bvModal.msgBoxOk('Residential Address is required.')
        return false;
     }

   else{
          this.apprentishipFormReset = !this.apprentishipFormReset
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
          this.apprentishipForm.idNumber = this.apprentishipForm.firstName = this.apprentishipForm.middleName = this.apprentishipForm.lastName = this.apprentishipForm.gender =  
          this.apprentishipForm.trade = this.apprentishipForm.supervisorName =  this.apprentishipForm.phoneNumber =  
          this.apprentishipForm.emailAddress = this.apprentishipForm.residentialAddress =  this.resultURL ='';       
          this.apprentishipFormReset = !this.apprentishipFormReset 

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
         this.apprentishipForm.dateRegistered = date
         this.apprentishipForm.photo = url
         console.log('Photo URL:'+this.apprentishipForm.photo);  
         this.form._id = localStorage.getItem('centerId')
         this.form.apprentishipList.push(this.apprentishipForm) 
         return this.registerApprentice(this.form).then(e => this.resetForm(e));  
      }
    }
  }

</script>
<style scoped>
  small {
    font-weight: 300;
  }
</style>