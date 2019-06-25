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
            <b-alert v-if="successState" show variant="success">Job Advert created successfully</b-alert>
           <b-alert v-if="errorState" show variant="danger">Job Advert  Fail to Create. Try again</b-alert>         
            <h2 class="h2-responsive"><strong>New Job Advert Form</strong></h2>
            <p class="pb-4">Create Job Advert</p>
            <!--Body-->
            <form>
              <mdb-input label="Job Title"  v-model="jobAdvertForm.jobTitle" />
              <mdb-input label="Job Description"   v-model="jobAdvertForm.jobDescription"/>
              <p>Job Requirement<p/>
              <wysiwyg v-model="jobAdvertForm.jobRequirement" />

              <b-form>
                <b-form-group label="Job Advert Start" >
                <date-picker  v-model="jobAdvertForm.adsStartDate" ></date-picker>
                </b-form-group>
              </b-form>
              <b-form>
                <b-form-group label="Job Advert End" >
                <date-picker  v-model="jobAdvertForm.deadLineDate" ></date-picker>
                </b-form-group>
              </b-form>
              <mdb-input label="Job Status"  v-model="jobAdvertForm.jobStatus"/>
              <p>{{adsDuration}}</p>
              <mdb-input label="Job Location"  v-model="jobAdvertForm.jobLocation"/>
              <p>Job Qualification<p/>
              <wysiwyg v-model="jobAdvertForm.jobQualification"/>
              <mdb-input label="Subscription Id"  v-model="jobAdvertForm.subscriptionId"/>
              
              
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
  <FlashMessage></FlashMessage>
  </div>
</template>
<script>
//import  uuidv4 from 'uuid/v4';
import datepicker from 'vue-bootstrap-datetimepicker'
import { mdbEdgeHeader, mdbContainer, mdbRow, mdbCol, mdbCardBody,mdbCard,  mdbInput, mdbBtn,mdbIcon } from 'mdbvue';
import {mapGetters, mapActions,mapState,mapMutations} from 'vuex'
 const focus = {
    inserted(el) {
      el.focus()
    },
  }

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
      datepicker,
     },
    data() {
      return {
            successIcon: `${require('~/assets/images/success.svg')}`,
            warningIcon: `${require('~/assets/images/light-bulb.svg')}`,
            errorIcon: `${require('~/assets/images/warning.svg')}`,
            infoIcon: `${require('~/assets/images/information.svg')}`,
            doveIcon: `${require('~/assets/images/dove.svg')}`,
        jobAdvertForm: {
                _id: '',//companyid
                jobTitle: '', 
                jobDescription: '',
                jobRequirement: '',
                adsStartDate: '',
                deadLineDate: '',
                jobStatus: '',
                jobLocation: '',
                subcriptionId: '',
                jobQualification: '',
                textEditor:'' 
            },
            duration: null,
            image: null,
            resultURL: '',
            formReset: false,
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
        ...mapGetters({successState: 'jobadvert/getSuccessState',errorState: 'jobadvert/getErrorState'}),
        adsDuration(){
          var days = "";
          return days
        }

    }, 
    methods: {
      ...mapActions({registerJobAdverts: 'jobadvert/registerJobAdverts'}),

      create() { 
     if(!this.jobAdvertForm.jobTitle) {
        this.$bvModal.msgBoxOk('Job Title is required.')
        return false;
      } 
       else if(!this.jobAdvertForm.jobDescription) {
        this.$bvModal.msgBoxOk('Job Description is required.')
        return false;
      }
      else if(!this.jobAdvertForm.jobRequirement) {
        this.$bvModal.msgBoxOk('Job Requirement is required.')
        return false;
      }
    else if(!this.jobAdvertForm.adsStartDate) {
        this.$bvModal.msgBoxOk('Advert Start Date is required.')
        return false;
    }
     else if(!this.jobAdvertForm.deadLineDate) {
        this.$bvModal.msgBoxOk('End Date is required.')
        return false;
     }
    else if(!this.jobAdvertForm.jobStatus) {
        this.$bvModal.msgBoxOk('Job Status required.')
        return false;
    }
     else if(!this.jobAdvertForm.jobLocation) {
        this.$bvModal.msgBoxOk('Job Location is required.')
        return false;
    }
      else if(!this.jobAdvertForm.jobQualification) {
        this.$bvModal.msgBoxOk('Job Qualification is required.')
        return false;
     }
     else if(!this.jobAdvertForm.subscriptionId) {
        this.$bvModal.msgBoxOk('Subscription Id is required.')
        return false;
     } 
   else{
         this.formReset = !this.formReset
          this.flashMessage.success({title: 'GOT IT', message: 'Your advert is submitted successfully',icon: successIcon});
         //this.flashMessage.error({title: 'Error Message Title', message: 'Oh, you broke my heart! Shame on you!',icon: true});
        //jobAdvertForm._id = localStorage.getItem('companyId')
        console.log("Form Data"+JSON.stringify(this.jobAdvertForm))
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
          this.resultURL = this.licensingProfileForm.fullname = this.licensingProfileForm.middleName = this.licensingProfileForm.accronym = this.licensingProfileForm.telephoneNumber = this.licensingProfileForm.websiteAddress = this.licensingProfileForm.contactAddress = this.licensingProfileForm.emailAddress =  this.licensingProfileForm.city = this.logo =  this.licensingProfileForm.postalCode =  this.licensingProfileForm.missionStatment = '';         
          this.formReset = !this.formReset  
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