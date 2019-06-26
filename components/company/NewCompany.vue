<template>
 <div class="animated fadeIn">
  <FlashMessage></FlashMessage>
  <section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header style="background-color: #2BBBAD"/>

    <!-- Card Container -->
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none">
         <b-link @click="$emit('changeComponent',{component: 'CompanyListView', id: null})"  href="#" class="card-link text-white"><mdb-icon icon="arrow-left" size="lg" class="text-white" />  View All Companies</b-link>                      
                <b-card title="New Construction Company">
                    <b-card-text>
                        <div>
                            <b-form>
                            <b-form-group
                                label="Company Name:"
                                label-for="companyname"
                                description="The full name of the company"
                            >
                                <b-form-input
                                id="companyname"
                                v-model="form.companyName"
                                type="text"
                                v-focus
                                placeholder="Enter company"
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group
                                label="Company Accronym:"
                                label-for="companyaccronym"
                                description="The short name of the company"
                            >
                                <b-form-input
                                id="companyaccronym"
                                v-model="form.companyAcronym"
                                type="text"
                                v-focus
                                placeholder="Enter accronym / display name"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                label="Compay Email Address:"
                                label-for="companyemail"
                            >
                                <b-form-input
                                id="companyemail"
                                v-model="form.companyEmail"
                                type="email"
                                required
                                placeholder="Enter company email"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                label="Company Phone Number:"
                                label-for="phonenumber"
                            >
                                <b-form-input
                                id="phonenumber"
                                v-model="form.companyTelephone"
                                type="number"
                                required
                                placeholder="Enter company phone number"
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group
                                label="Company Address:"
                                label-for="address"
                            >
                                <b-form-input
                                id="phonenumber"
                                v-model="form.companyAddress"
                                type="text"
                                required
                                placeholder="Enter Company Address"
                                ></b-form-input>
                            </b-form-group>
                              <b-card class="mt-3">
                              <h4>Profile Photo </h4>
                              <div>
                                <mdb-btn type="button" color="default" @click="onPickFile">Upload Company Logo<mdb-icon icon="image" class="ml-1"/></mdb-btn>
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

                            <b-button @click="create"  type="button" variant="primary"  :disabled='companyFormReset'>Submit
                                <b-spinner small v-if="companyFormReset === true"></b-spinner>
                                <span class="sr-only" v-if="companyFormReset === true">Wait...</span>                                
                            </b-button>
                            </b-form>                         
                        </div>
                    </b-card-text>
                </b-card>
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
import { mdbEdgeHeader, mdbContainer, mdbRow, mdbCol, mdbCardBody,mdbCard, mdbInput, mdbBtn,mdbIcon } from 'mdbvue';
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
      mdbIcon,
      mdbCard,
      datepicker
     },
    data() {
      return {
            form: {
            companyName: null,
            companyAcronym: null,
            companyAddress: null,
            companyEmail: null,
            companyTelephone: null, 
            dateRegistered: null,
            logo: ''
            },
            items: [{
            value: ''
            }],
            image: null,
            resultURL: '',
            photoURL: '',
            companyFormReset: false,
            spinner: '0'        
          }
    },
   computed: {
        ...mapGetters({formState: 'company/getFormState',successState: 'company/getSuccessState',errorState: 'company/getErrorState'})
    }, 
    methods: {
      ...mapActions({registerCompany: 'company/registerCompany'}),
      validEmail:function(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
      },
      create() { 

      if(!this.form.companyName) {
        this.$bvModal.msgBoxOk('Company name required.')
        return false;
      }
      else if(!this.form.companyEmail) {
        this.$bvModal.msgBoxOk('Company email required.')
        return false;

      } else if(!this.form.companyTelephone) {
        this.$bvModal.msgBoxOk('Company phone number is required.')
        
      } else if(!this.form.companyAddress) {
        this.$bvModal.msgBoxOk('Company address is required.')

      }else{
        this.companyFormReset = !this.companyFormReset
          let uuid = uuidv4();
          let logoURL = ''
          let filename = this.image.name || ''
          
          const metadata = { contentType: this.image.type };
          let ext = filename.slice(filename.lastIndexOf('.'))
          const task = firebase.app().storage().ref('profile/'+uuid+"."+ext).put(this.image, metadata);
          task.then(snapshot => snapshot.ref.getDownloadURL()).then(url => this.saveProfile(url))
         .catch(console.error);
       } 
      },
     resetForm(){
          this.companyFormReset = !this.companyFormReset    
          this.watchSuccessState();
          this.watchErrorState();
          
      },
      watchSuccessState(){
          if(this.successState){
            this.flashMessage.success({title: 'GOT IT', message: 'Company Registered Successfully',icon: true});
            this.form.companyName = this.form.companyAcronym = this.form.companyAddress = this.form.companyEmail = this.form.companyTelephone = '';

          }
        },
        watchErrorState(){ 
          if(this.errorState){
            this.flashMessage.error({title: 'Oops!: ', message: 'Company Failed to Create. Try again',icon: true}); 
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
         this.form.logo = url
         this.form.dateRegistered = date
         this.form.companyTelephone = "+234"+this.form.companyTelephone.replace(/^0+/, '');
         console.log('Photo URL:'+url);  
         console.log('Company form:'+JSON.stringify(this.form))
          return this.registerCompany(this.form).then(e => this.resetForm()); 
      }

    }
  }

</script>
<style scoped>
  small {
    font-weight: 300;
  }
</style>