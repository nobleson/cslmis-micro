<template>
 <div class="animated fadeIn">
    <FlashMessage></FlashMessage> 
  <section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header  style="background-color: #2BBBAD"/>

    <!-- Card Container -->
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none">
         <b-link @click="$emit('changeComponent',{component: 'AssesorView', id: null})"  href="#" class="card-link text-white"><mdb-icon icon="arrow-left" size="lg" class="text-white" />  View All Assesors</b-link>
         <mdb-card class="weather-card">
          <mdb-card-body  class="pb-3">
  
            <h2 class="h2-responsive"><strong>New Assesor Form</strong></h2>
            <p class="pb-4">Create Assesor Profile</p>
            <!--Body-->
            <form>
              <h5 class="h5-responsive">Bio Data</h5>
              <mdb-input label="Surname"  v-model="form.surname" />
              <mdb-input label="Middle Name"   v-model="form.middleName"/>
              <mdb-input label="Other Name"  v-model="form.otherName"/>
              <b-form-select 
                id="gender"
                v-model="form.gender"
                required
                >
                <option disabled value="">[ Select Gender ]</option>
                <option  value="Male">Male</option>
                <option  value="Female">Female</option>
                </b-form-select>

                <b-form-group id="input-group-2" label="Date of Birth:" label-for="input-2">
                    <date-picker v-model="form.dateOfBirth" :config="{format: 'DD/MM/YYYY'}"></date-picker>
                </b-form-group>
              <mdb-input label="Phone Number"  v-model="form.phoneNumber"/>
              <h5 class="h5-responsive">Contact Info</h5>
              <mdb-input label="Email Address"  v-model="form.emailAddress" />
              <mdb-input label="Contact Address"  v-model="form.contactAddress"/>
                <b-form-group id="input-group-3" label="State Of Origin" label-for="input-3">
                <b-form-select
                v-model="form.state"
                required
                @change="changedValue"
                    >
                <option disabled value="" selected>[ Select State ]</option>
                <option value="Abia">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="Akwa Ibom">Akwa Ibom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno</option>
                <option value="Cross River">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Enugu">Enugu</option>
                <option value="Edo">Edo</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Gombe">Gombe</option>
                <option value="Imo">Imo</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Katsina">Katsina</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Kogi">Kogi</option>
                <option value="Kwara">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="Nasarawa">Nasarawa</option>
                <option value="Niger">Niger</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
                <option value="Plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Taraba">Taraba</option>
                <option value="Yobe">Yobe</option>
                <option value="Zamfara">Zamfara</option>
                <option value="FCT">FCT</option>
                </b-form-select>
               </b-form-group>
                <b-form-group id="input-group-2" label="Local Government:" label-for="input-2">
                            <b-form-select 
                            id="localGovernment"
                            v-model="form.localGovernment"
                            required
                            >
                            <option disabled value="">[ Select Local Government ]</option>
                            <option v-for="item in processLocalGovernments" v-bind:key ="item.id" :value="item">{{item}}</option>
                            </b-form-select>
                </b-form-group>
              <mdb-input label="City"  v-model="form.city"/>
              <h5 class="h5-responsive">Other Details</h5>
              <mdb-input label="Registration Number"  v-model="form.registrationNumber"/>
              <p class="my-2"><small>A valid registration number</small></p>

              <mdb-input label="Nationality"  v-model="form.nationality"/>

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
  </div>
</template>
<script>
import * as firebase from 'firebase/app'
import 'firebase/storage'
import  uuidv4 from 'uuid/v4';
import datepicker from 'vue-date-picker'
import { mdbEdgeHeader, mdbContainer, mdbRow, mdbCol, mdbCardBody, mdbInput, mdbBtn,mdbCard,mdbIcon } from 'mdbvue';
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
      mdbCard,
      mdbIcon,
      datepicker
     },
    data() {
      return {
        form: {
                surname: '',
                middleName: '',
                otherName: '',
                dateOfBirth: '',
                gender: '',
                phoneNumber: '',
                emailAddress: '',
                contactAddress: '',
                city: '',    
                localGovernment: '',
                state: '',
                nationality: '',
                photo: '',
                registrationNumber: '',
                dateRegistered: ''
        },
        image: null,
        resultURL: '',
        formReset: false        
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
        ...mapGetters({formState: 'assesors/getFormState',successState: 'assesors/getSuccessState',errorState: 'assesors/getErrorState',localGovernment: 'assesors/getLocalGovernment',firebaseURL:'assesors/getFirebaseURL'}),
        getLogoURL(){
          return this.logoUrl;
        },
        processLocalGovernments: function(){
          let json = JSON.parse(JSON.stringify(this.localGovernment));
          console.log("Json:"+json);
           return  json;
          },
    }, 
    methods: {
      ...mapActions({fetchLocalGovernment: 'assesors/loadLocalGovernment', registerAssesor: 'assesors/registerAssesor',saveURL: 'assesors/saveURL'}),

      create() { 
      if(!this.form.surname) {
        this.$bvModal.msgBoxOk('Surname required.')
        return false;
      }
      else if(!this.form.middleName) {
        this.$bvModal.msgBoxOk('Middle name required.')
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
     else if(!this.form.phoneNumber) {
        this.$bvModal.msgBoxOk('Phone number required.')
        return false;
    }
     else if(!this.form.registrationNumber) {
        this.$bvModal.msgBoxOk('Registration number required.')
        return false;
      }else{
          this.formReset = !this.formReset
          let uuid = uuidv4();
          let logoURL = ''
          let filename = this.image.name
          const metadata = { contentType: this.image.type };
          let ext = filename.slice(filename.lastIndexOf('.'))
          const task = firebase.app().storage().ref('profile/'+uuid+"."+ext).put(this.image, metadata);
          task.then(snapshot => snapshot.ref.getDownloadURL()).then(url => this.saveProfile(url));
      }

      },
      resetForm(){
          this.formReset = !this.formReset    
          this.watchSuccessState();
          this.watchErrorState();
      },
      watchSuccessState(){
          if(this.successState){
            this.flashMessage.success({title: 'GOT IT', message: 'Assessment body created successfully',icon: true});
            this.resultURL = this.form.surname = this.form.middleName =  this.form.otherName =  this.form.dateOfBirth =  this.form.gender =  this.form.phoneNumber =  this.form.emailAddress =  this.form.city =  this.form.localGovernment =  this.form.state =   this.form.nationality =   this.form.registrationNumber =  '';         

          }
        },
        watchErrorState(){ 
          if(this.errorState){
            this.flashMessage.error({title: 'Oops!: ', message: 'Assessment body  fail to create. Try again',icon: true});
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
       saveProfile(url) {
         let date = new Date()
         this.form.dateRegistered = date
         this.form.photo = url
         console.log('Photo URL:'+this.form.photo);  
          this.registerAssesor(this.form).then(e => this.resetForm());
      }, 
     changedValue(){
        this.fetchLocalGovernment(this.form.state).then(e => { 
          console.log('Local government fetched'); 
        });            
     },
    }
  }

</script>
<style scoped>
  small {
    font-weight: 300;
  }
</style>