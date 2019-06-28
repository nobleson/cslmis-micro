<template>
 <div class="animated fadeIn">
  <section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header style="background-color: #ff4444"/>

    <!-- Card Container -->
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none">
         <b-link @click="$emit('changeComponent',{component: 'TrainersView', id: null})"  href="#" class="card-link text-white"><mdb-icon icon="arrow-left" size="lg" class="text-white" />  View All Trainers </b-link>
         <mdb-card class="weather-card">
          <mdb-card-body  class="pb-3">
            <b-alert v-if="successState" show variant="success">Trainers  created successfully</b-alert>
           <b-alert v-if="errorState" show variant="danger">Trainers  Fail to Create. Try again</b-alert>         
            <h2 class="h2-responsive"><strong>New Trainers Form</strong></h2>
            <p class="pb-4">Create Trainers </p>
            <!--Body-->
            <form>
              <mdb-input label="Job Title"  v-model="jobAdvertForm.jobTitle" />
              <mdb-input label="Job Description"   v-model="jobAdvertForm.jobDescription"/>
              <p>Message<p/>
              <wysiwyg v-model="jobAdvertForm.jobRequirement" placeholder="Write details about your adverts..." />
              <hr/>
              <div>
                <b-card title="Duration" sub-title="Start and End Date">
                  <b-card-text>
                    <date-picker v-model="jobAdvertForm.adsStartDate" :config="{format: 'MM/DD/YYYY'}" placeholder="Start date"></date-picker>
                     <br/>
                    <date-picker v-model="jobAdvertForm.deadLineDate" :config="{format: 'MM/DD/YYYY'}" placeholder="End date"></date-picker>
                  </b-card-text>
                  <div class="text-center">
                      <mdb-list-group>
                        <mdb-list-group-item >Advert Days <h5><mdb-badge  color="primary" pill >{{duration}}</mdb-badge></h5>
                        </mdb-list-group-item>
                        <mdb-list-group-item>Billing<h5><mdb-badge color="danger" pill> <b>&#x20A6;</b> {{price}} </mdb-badge></h5>
                        </mdb-list-group-item>
                      </mdb-list-group>
                  </div>
                  <hr/>
                   <b-button variant="outline-primary" @click="adsDuration()">Checkout Days</b-button>
               
                      <b-button id="show-btn" @click="$bvModal.show('bv-modal-example') " variant="success">Checkout <i class="fas fa-cart-plus ml-1"></i></b-button>

                      <b-modal id="bv-modal-example" hide-footer>
                        <template slot="modal-title">
                          Payment Getway
                        </template>
                        <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      </div>
                        <p class="my-4">Loading...</p>
                
                        <hr/>
                        
                      </b-modal>
                </b-card>
              </div>
              <hr/>
              <div>
                <b-card title="Payment History" sub-title="Advert Payment History">
                  <b-card-text>
                  </b-card-text>
                </b-card>
              </div>
               <div class="text-xs-left">
                <mdb-btn color="primary" @click.native.prevent="create()" :disabled='jobAdvertFormReset'>Submit
                  <b-spinner small v-if="jobAdvertFormReset === true"></b-spinner>
                  <span class="sr-only" v-if="jobAdvertFormReset === true">Wait...</span>
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
           
        jobAdvertForm: {
                _id: '',//companyid
                jobTitle: '', 
                jobDescription:'',
                jobRequirement:  '',
                adsStartDate: null,
                deadLineDate: null,
                //jobStatus: '',
                //jobLocation: '',
                //subcriptionId: '',
                //jobQualification: '',
              
            },
            duration: null,
            price:null,
            image: null,
            resultURL: '',
            jobAdvertFormReset: false,
            spinner: '0',
            modal: false
                
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
        ...mapGetters({successState: 'facilities/getSuccessState',errorState: 'facilities/getErrorState'})

    }, 
    methods: {
      ...mapActions({registerFacilities: 'facilities/registerFacilities'}),
        adsDuration(){
          if(Date.parse(this.jobAdvertForm.adsStartDate) < Date.parse(this.jobAdvertForm.deadLineDate )){
              this.duration =  Math.round((Date.parse(this.jobAdvertForm.deadLineDate ) - Date.parse(this.jobAdvertForm.adsStartDate))/(1000*60*60*24));
          }else{
             this.$bvModal.msgBoxOk('The start date is higher than the end')
            
          }
           if(Date.parse(this.jobAdvertForm.adsStartDate) < Date.parse(this.jobAdvertForm.deadLineDate )){
              this.price =  Math.round((Date.parse(this.jobAdvertForm.deadLineDate ) - Date.parse(this.jobAdvertForm.adsStartDate))/(1000*60*60*24)*(200));
          }
        },
       
         
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

   else{
         this.jobAdvertFormReset = !this.jobAdvertFormReset
          this.flashMessage.success({title: 'GOT IT', message: 'Your advert is submitted successfully',});
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
          this.jobAdvertForm.jobTitle = this.jobAdvertForm.jobDescription = this.jobAdvertForm.jobRequirement = this.jobAdvertForm.adsStartDate =  this.jobAdvertForm.deadLineDate = '';         
          this.jobAdvertFormReset = !this.jobAdvertFormReset  
          this.watchSuccessState();   
          this.watchErrorState();   
      },
      watchSuccessState(){
        if(this.successState){
          this.flashMessage.success({title: 'GOT IT', message: 'Your advert is submitted successfully',});
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