<template>
 <div class="animated fadeIn">
  <section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header style="background-color: #ff9100"/>

    <!-- Card Container -->
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none">
         <b-link @click="$emit('changeComponent',{component: 'LicensingBodyView', id: null})"  href="#" class="card-link text-white"><mdb-icon icon="arrow-left" size="lg" class="text-white" />  View All Job Advert</b-link>
         <mdb-card class="weather-card">
          <mdb-card-body  class="pb-3">
            <b-alert v-if="successState" show variant="success">Job Application created successfully</b-alert>
           <b-alert v-if="errorState" show variant="danger">Job Applicationt  Fail to Create. Try again</b-alert>         
            <h2 class="h2-responsive"><strong>New Job Application Form</strong></h2>
            <p class="pb-4">Create Job Application</p>
            <!--Body-->
            <form>
              <mdb-input label="Job Identification number"  v-model="jobApplicationForm.jobId" />
              <mdb-input label="Artisan Identification number"   v-model="jobApplicationForm.artisansId"/>
              
              <hr/>
              <div>
                <b-card title="Date Applied" >
                  <b-card-text>
                    <date-picker v-model="jobApplicationForm.dateApplied" :config="{format: 'MM/DD/YYYY'}" placeholder="Start date"></date-picker>
                  </b-card-text>   
                </b-card>
              </div>
              <hr/>
              <div>
               
               <div class="text-xs-left">
                <mdb-btn color="primary" @click.native.prevent="create()" :disabled='newJobApplicationFormReset'>Submit
                  <b-spinner small v-if="newJobApplicationFormReset === true"></b-spinner>
                  <span class="sr-only" v-if="newJobApplicationFormReset === true">Wait...</span>
                </mdb-btn>
              </div>
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
            successIcon: `${require('~/assets/images/success.svg')}`,
            warningIcon: `${require('~/assets/images/light-bulb.svg')}`,
            errorIcon: `${require('~/assets/images/warning.svg')}`,
            infoIcon: `${require('~/assets/images/information.svg')}`,
            doveIcon: `${require('~/assets/images/dove.svg')}`,
        jobApplicationForm: {
                _id: '',//companyid
                jobId: '',
                artisansId:'',
                dateApplied:'',

                
              
            },
            newJobApplicationFormReset: false,
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
        ...mapGetters({successState: 'newJobApplication/getSuccessState',errorState: 'newJobApplication/getErrorState'})

    }, 
    methods: {
      ...mapActions({registerNewJobApplication: 'newJobApplication/registerNewJobApplication'}),  
      create() { 
     if(!this.jobApplicationForm.jobId) {
        this.$bvModal.msgBoxOk('Job identification is required.')
        return false;
      } 
       else if(!this.jobApplicationForm.artisansId) {
        this.$bvModal.msgBoxOk('Artisan identification is required.')
        return false;
      }
      else if(!this.jobApplicationForm.dateApplied) {
        this.$bvModal.msgBoxOk('Date applied is required.')
        return false;
      }
   
  
   else{
         this.newJobApplicationFormReset = !this.newJobApplicationFormReset
          this.flashMessage.success({title: 'GOT IT', message: 'Your advert is submitted successfully',icon: successIcon});
         //this.flashMessage.error({title: 'Error Message Title', message: 'Oh, you broke my heart! Shame on you!',icon: true});
        //jobAdvertForm._id = localStorage.getItem('companyId')
        console.log("Form Data"+JSON.stringify(this.jobApplicationForm))
/*         this.licensingProfileFormReset = !this.licensingProfileFormReset
          let uuid = uuidv4();
          let logoURL = ''
          let filename = this.image.name || ''
          const metadata = { contentType: this.image.type };
          let ext = filename.slice(filename.lastIndexOf('.'))
          const task = firebase.app().storage().ref('profile/'+uuid+"."+ext).put(this.image, metadata);
          task.then(snapshot => snapshot.ref.getDownloadURL()).then(url => this.saveProfile(url))
         .catch(console.error).finally(reset => this.resetForm()); */
      }

      },
     resetForm(){
          this.jobApplicationForm.jobId = this.jobApplicationForm.artisansId = this.jobApplicationForm.dateApplied = '';         
          this.newJobApplicationFormReset = !this.newJobApplicationFormReset  
          this.watchSuccessState();   
          this.watchErrorState();   
      },
      watchSuccessState(){
        if(this.successState){
          this.flashMessage.success({title: 'GOT IT', message: 'Your advert is submitted successfully',icon: successIcon});
        }
      },
      watchErrorState(){
          this.flashMessage.error({title: 'Oops!', message: 'Your advert fail to  submit. Try again',icon: true});
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