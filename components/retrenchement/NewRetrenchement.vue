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
              
               <b-card title="Retrenchement" sub-title="Details">
                  <b-card-text>
                    <mdb-input label="Retrenchement tittle"   v-model="retrenchementForm.retrenchementTittle"/>
                    <mdb-input label="Total number of retrenched staff"   v-model="retrenchementForm.totalRetrenchedStaffs"/>
                    <mdb-input label="Total number of certified Artisans"  v-model="retrenchementForm.totalArtisansCertified"/>
                    <mdb-input label="Total number of Licensed Artisans"  v-model="retrenchementForm.totalArtisansLicensed"/>
                </b-card-text>
                </b-card>
                 <b-card title="Retrenchement Period" sub-title="Year and Month of Retrenchement">
                  <b-card-text>
                    <b-form-group id="input-group-3"  placeholder="[ Select Month ]" label="Select Year" label-for="input-3">
            <select
            class="custom-select custom-select-md"
            v-model="retrenchementForm.year"
            required
            >
              <option value="Null" selected>[ Select Year ]</option>
              <option value="1">2019</option>
              <option value="2">2018</option>
              <option value="3">2017</option>
              <option value="4">2016</option>
              <option value="5">2015</option>
              <option value="6">2014</option>
              <option value="7">2013</option>
              <option value="8">2012</option>
              <option value="9">2011</option>
              <option value="10">2010</option>
              <option value="11">2009</option>
              <option value="12">2008</option>
              <option value="13">2007</option>
              <option value="14">2006</option>
              <option value="15">2005</option>
              <option value="16">2004</option>
              <option value="17">2003</option>
              <option value="18">2002</option>
              <option value="19">2001</option>
              <option value="20">2000</option>
              <option value="21">1999</option>
              <option value="22">1998</option>
              <option value="23">1997</option>
              <option value="24">1996</option>
              <option value="25">1995</option>
              <option value="26">1994</option>
              <option value="27">1993</option>
            </select>
          </b-form-group>
                    
          <b-form-group id="input-group-3"   placeholder="[ Select Month ]" label="Select Month" label-for="input-3">
            <select
            class="custom-select custom-select-md"
            v-model="retrenchementForm.month"
            required
            >
              <option value="Null" selected>[ Select Year ]</option>
              <option value="1">January</option>
              <option value="2">Febuary</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">Novermber</option>
              <option value="12">December</option>
            </select>
          </b-form-group>
                    </b-card-text>
               </b-card>
                              
            <mdb-input type="textarea" v-model="retrenchementForm.textArea" id="exampleInput" label="Reason for retrenchement if any..." icon="pencil-alt"  />

              <div class="text-xs-left">
                <mdb-btn color="primary" @click.native.prevent="create()" :disabled='retrenchementFormReset'>Submit
                  <b-spinner small v-if="retrenchementFormReset === true"></b-spinner>
                  <span class="sr-only" v-if="retrenchementFormReset === true">Wait...</span>
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
import { mdbEdgeHeader, mdbContainer, mdbRow, mdbCol, mdbCardBody,mdbCard, mdbSelect, mdbInput, mdbBtn,mdbIcon } from 'mdbvue';
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
      mdbSelect,
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
                retrenchementTittle: '',
                totalRetrenchedStaffs: '',
                totalArtisansCertified: '',
                totalArtisansLicensed: '',
                textArea:'',
                year: '',
                month: '',
                  
      
               
            },
            image: null,
            resultURL: '',
            retrenchementFormReset: false,
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
        ...mapGetters({retrenchementFormState: 'retrenchement/getFormState',successState: 'retrenchement/getSuccessState',errorState: 'retrenchement/getErrorState'}),

    }, 
    methods: {
      ...mapActions({registerRetrenchment: 'retrenchement/registerRetrenchment'}),

      getSelectValue(value, text) {
        console.log(value);
      },

      create() { 
      if(!this.retrenchementForm.totalRetrenchedTittle) {
        this.$bvModal.msgBoxOk('Retrenchement is required.')
        return false;
      }
      else if(!this.retrenchementForm.totalRetrenchedStaffs) {
        this.$bvModal.msgBoxOk('Total Number Retrenched is required.')
        return false;
      }
    else if(!this.retrenchementForm.totalArtisansCertified) {
        this.$bvModal.msgBoxOk('Total Number Certified is required.')
        return false;
    }
    else if(!this.retrenchementForm.totalArtisansLicensed) {
        this.$bvModal.msgBoxOk('Total Number Licensed required.')
        return false;
    }
     else if(!this.retrenchementForm.textArea) {
        this.$bvModal.msgBoxOk('Year is required.')
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
        this.retrenchementFormReset = !this.retrenchementFormReset
        console.log(JSON.stringify(this.retrenchementForm))
    /*    this.licensingProfileFormReset = !this.licensingProfileFormReset
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
          this.retrenchementForm.retrenchementTittle = this.retrenchementForm.totalRetrenchedStaffs = this.retrenchementForm.totalArtisansCertified = this.retrenchementForm.totalArtisansLicensed =  this.retrenchementForm.textArea = '';         
          this.retrenchementFormReset = !this.retrenchementFormReset  
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