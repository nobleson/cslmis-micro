<template>
 <div class="animated fadeIn">
  <section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header style="background-color: #2BBBAD"/>

    <!-- Card Container -->
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none">
         <b-link @click="$emit('changeComponent',{component: 'CenterListView', id: null})"  href="#" class="card-link text-white"><mdb-icon icon="arrow-left" size="lg" class="text-white" />  View All Training Providers</b-link>
          <b-alert v-if="successState" show variant="success">Training Provider Registered Successfully</b-alert>
           <b-alert v-if="errorState" show variant="danger">Training Provider  Failed to Create. Try again</b-alert>                       
                <b-card title="New Training Provider">
                    <b-card-text>
                        <div>
                            <b-form>
                            <b-form-group
                                label="Provider Name:"
                                label-for="providername"
                                description="The full name of training provider"
                            >
                                <b-form-input
                                id="providername"
                                v-model="form.name"
                                type="text"
                                v-focus
                                placeholder="Enter training provider"
                                ></b-form-input>
                            </b-form-group>


                            <b-form-group
                                label="Provider email address:"
                                label-for="provideremil"
                            >
                                <b-form-input
                                id="provideremil"
                                v-model="form.email"
                                type="email"
                                required
                                placeholder="Enter provider email"
                                ></b-form-input>
                            </b-form-group>
                            <b-button @click="create"  type="button" variant="primary"  :disabled='providerFormReset'>Submit
                                <b-spinner small v-if="providerFormReset === true"></b-spinner>
                                <span class="sr-only" v-if="providerFormReset === true">Wait...</span>                                
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
            email: null,
            name: null
            },
            items: [{
            value: ''
            }],
            image: null,
            resultURL: '',
            providerFormReset: false,
            spinner: '0'        
          }
    },
    computed: {
        ...mapGetters({formState: 'provider/getFormState',successState: 'provider/getSuccessState',errorState: 'provider/getErrorState'})
    }, 
    methods: {
      ...mapActions({registerProvider: 'provider/registerProvider',toggleFormState: 'provider/toggleFormState'}),
      validEmail:function(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
      },
      create() { 
      if(!this.form.name) {
        this.$bvModal.msgBoxOk('Name required.')
        return false;
      }
      else if(!this.form.email) {
        this.$bvModal.msgBoxOk('Email required.')
        return false;

            } else if(!this.validEmail(this.form.email)) {
                this.$bvModal.msgBoxOk('Valid email required.')
            }else{ 
                this.providerFormReset = !this.providerFormReset        
                this.registerProvider(this.form).then(e => { 
                console.log('Training Provider Registered Successfully'); 
                }).catch(error => this.toggleFormState()).finally(reset => this.resetForm());
            }
     },
     resetForm(){
          this.form.name = this.form.email = '';
          this.providerFormReset = !this.providerFormReset        
      }
    }
  }

</script>
<style scoped>
  small {
    font-weight: 300;
  }
</style>