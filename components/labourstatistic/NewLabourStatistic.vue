<template>
 <div class="animated fadeIn">
  <section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header style="background-color: #ff9100"/>

    <!-- Card Container -->
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none">
         <b-link @click="$emit('changeComponent',{component: 'LicensingBodyView', id: null})"  href="#" class="card-link text-white"><mdb-icon icon="arrow-left" size="lg" class="text-white" />  View All Labour Statistic</b-link>
         <mdb-card class="weather-card">
          <mdb-card-body  class="pb-3">
            <b-alert v-if="successState" show variant="success">Labour Statistic</b-alert>
           <b-alert v-if="errorState" show variant="danger">Labour Statistic  Fail to Create. Try again</b-alert>         
            <h2 class="h2-responsive"><strong>New Labour Statistic Form</strong></h2>
            <p class="pb-4">Create Labour Statistic</p>
            <!--Body-->
            <form>
              <b-card title="Labour Statistics">
                <b-card-text>
                  <mdb-input label="Labour Statistic "  v-model="labourStatisticForm.labourStatistic" />
                  <mdb-input label="Total number of Artisans"   v-model="labourStatisticForm.totalNumberArtisan"/>
                  <mdb-input label="Total number of certified Artisans"  v-model="labourStatisticForm.totalCertifiedArtisan"/>
                  <mdb-input label="Total number of licensed Artisans"  v-model="labourStatisticForm.totalLicensedArtisan"/>
                  <mdb-input label="Casual staff"  v-model="labourStatisticForm.casualStaff"/>
                  <mdb-input label="Permanent staff"  v-model="labourStatisticForm.permanentStaff"/>
                  <mdb-input label="Month"  v-model="labourStatisticForm.month"/>
                </b-card-text>
              </b-card>
              
              <div class="text-xs-left">
                <mdb-btn color="primary" @click.native.prevent="create()" :disabled='labourStatisticFormReset'>Submit
                  <b-spinner small v-if="labourStatisticFormReset === true"></b-spinner>
                  <span class="sr-only" v-if="labourStatisticFormReset === true">Wait...</span>
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
        labourStatisticForm: {
                _id: '',//company Id
                labourStatistic: '',
                totalNumberArtisan: '',
                totalCertifiedArtisan: '',
                totalLicensedArtisan: '',
                casualStaff: '',
                permanentStaff: '',
                month: '',
            },
            image: null,
            resultURL: '',
            labourStatisticFormReset: false,
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
         ...mapGetters({successState: 'labourstatistic/getSuccessState',errorState: 'labourstatistic/getErrorState'})


    }, 
    methods: {
      ...mapActions({registerLabourStatistic: 'labourstatistic/registerLabourStatistic'}),

      create() { 
      if(!this.labourStatisticForm.labourStatistic) {
        this.$bvModal.msgBoxOk('Labour Statistic is required.')
        return false;
      }
      else if(!this.labourStatisticForm.totalNumberArtisan) {
        this.$bvModal.msgBoxOk('Total number of Artisan is required.')
        return false;
      }
      else if(!this.labourStatisticForm.totalCertifiedArtisan) {
          this.$bvModal.msgBoxOk('Total number of certified Artisan is required.')
          return false;
      }
      else if(!this.labourStatisticForm.totalLicensedArtisan) {
          this.$bvModal.msgBoxOk('Total number of licensed Artisan is required.')
          return false;
      }
      else if(!this.labourStatisticForm.casualStaff) {
          this.$bvModal.msgBoxOk(' Number of casual staff is required.')
          return false;
      }
      else if(!this.labourStatisticForm.permanentStaff) {
          this.$bvModal.msgBoxOk('Number of permanent is required.')
          return false;
      }
      else if(!this.labourStatisticForm.month) {
          this.$bvModal.msgBoxOk('Month is required.')
          return false;
      }
    else{
          this.labourStatisticFormReset =!this.labourStatisticFormReset
          console.log("Form Data"+JSON.stringify(this.labourStatisticForm))

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
          this.labourStatisticForm.labourStatistic = this.labourStatisticForm.totalNumberArtisan = this.labourStatisticForm.totalLicensedArtisan = this.labourStatisticForm.casualStaff = this.labourStatisticForm.permanentStaff = this.labourStatisticForm.month = '';         
          this.labourStatisticFormReset = !this.labourStatisticForm
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