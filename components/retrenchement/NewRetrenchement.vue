<template>
 <div class="animated fadeIn">
<section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header style="background-color: #ff9100"/>

    <!-- Card Container -->
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none">
         <b-link @click="$emit('changeComponent',{component: 'LicensingBodyView', id: null})"  href="#" class="card-link text-white"><mdb-icon icon="arrow-left" size="lg" class="text-white" />  View All Licensing Bodies</b-link>
         <mdb-card class="weather-card">
          <mdb-card-body  class="pb-3">
            <b-alert v-if="successState" show variant="success">Retrenchement created successfully</b-alert>
           <b-alert v-if="errorState" show variant="danger">Retrenchement  Fail to Create. Try again</b-alert>         
            <h2 class="h2-responsive"><strong>New Retrenchement Form</strong></h2>
            <p class="pb-4">Create Retrenchement Profile</p>
            <!--Body-->
            <form>
              <mdb-input label="Retrenchment"  v-model="retrenchementForm.retrenchement" />
              <mdb-input label="Total Retrenched"   v-model="retrenchementForm.totalRetrenched"/>
              <mdb-input label="Total Certified"  v-model="retrenchementForm.totalCertified"/>
              <mdb-input label="Total Licensed"  v-model="retrenchementForm.totalLicensed"/>
              <mdb-input label="Year"  v-model="retrenchementForm.year"/>
              <mdb-input label="Month"  v-model="retrenchementForm.month"/>
            

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
//import  uuidv4 from 'uuid/v4';
import datepicker from 'vue-date-picker'
import { mdbEdgeHeader, mdbContainer, mdbRow, mdbCol, mdbCardBody,mdbCard, mdbInput, mdbBtn,mdbIcon } from 'mdbvue';
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
      datepicker
     },
    data() {
      return {
        retrenchementForm: {
                _id: '',//company id
                retrenchement: '',
                totalRetrenched: '',
                totalCertified: '',
                totalLicensed: '',
                year: '',
                month: '',
               
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
      if(!this.retrenchementForm.retrenchement) {
        this.$bvModal.msgBoxOk('Retrenchement is required.')
        return false;
      }
      else if(!this.retrenchementForm.totalRetrenched) {
        this.$bvModal.msgBoxOk('Total Number Retrenched is required.')
        return false;
      }
    else if(!this.retrenchementForm.totalCertified) {
        this.$bvModal.msgBoxOk('Total Number Certified is required.')
        return false;
    }
    else if(!this.retrenchementForm.totalLicensed) {
        this.$bvModal.msgBoxOk('Total Number Licensed required.')
        return false;
    }
     else if(!this.retrenchementForm.year) {
        this.$bvModal.msgBoxOk('Year is required.')
        return false;
    }
     else if(!this.retrenchementForm.month) {
        this.$bvModal.msgBoxOk('Month is required.')
        return false;
     }
   
   else{
     jobAdvertForm._id = localStorage.getItem('companyId')
        console.log(JSON.stringify('jobAvertForm'))
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