<template>
 <div class="animated fadeIn">
  <section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header style="background-color: #00c851"/>

    <!-- Card Container -->
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none">
         <b-link @click="$emit('changeComponent',{component: 'FacilitiesView', id: null})"  href="#" class="card-link text-white"><mdb-icon icon="arrow-left" size="lg" class="text-white" />  View All Facilities</b-link>
         <mdb-card class="weather-card">
          <mdb-card-body  class="pb-3">
            <b-alert v-if="successState" show variant="success">Facilities created successfully</b-alert>
           <b-alert v-if="errorState" show variant="danger">Facilities  Fail to Create. Try again</b-alert>         
            <h2 class="h2-responsive"><strong>New Facilities Form</strong></h2>
            <p class="pb-4">Create Facilities</p>
            <!--Body-->
            <form>
              <p>Class Rooms<p/>
              <wysiwyg v-model="facilitiesForm.classRooms" placeholder="Write details about your Class Rooms..." />
              <hr/>
              <p>Mansonory Facilities<p/>
              <wysiwyg v-model="facilitiesForm.mansonoryFacilities" placeholder="Write details about your Masonory Facilities..." />
              <hr/>
              <p>Carpentary Facilities<p/>
              <wysiwyg v-model="facilitiesForm.carpentaryFacilities" placeholder="Write details about your Carpentary Facilities..." />
              <hr/>
              <p>Other Facility<p/>
              <wysiwyg v-model="facilitiesForm.otherFacility" placeholder="Write details about your Other Facility..." />
              <hr/>
              <p>Survey Equipment<p/>
              <wysiwyg v-model="facilitiesForm.surveyEquipment" placeholder="Write details about your Survey Equipment..." />
              <hr/>
                  
               <div class="text-xs-left">
                <mdb-btn color="primary" @click.native.prevent="create()" :disabled='facilitiesFormReset'>Submit
                  <b-spinner small v-if="facilitiesFormReset === true"></b-spinner>
                  <span class="sr-only" v-if="facilitiesFormReset === true">Wait...</span>
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
import  uuidv4 from 'uuid/v4';
import datepicker from 'vue-date-picker'
import { mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter,  mdbListGroup, mdbListGroupItem, mdbBadge,  mdbEdgeHeader, mdbContainer, mdbRow, mdbCol, mdbCardBody,mdbCard,  mdbInput, mdbBtn,mdbIcon } from 'mdbvue';
import {mapGetters, mapActions,mapState,mapMutations} from 'vuex'
import * as firebase from 'firebase/app'
import 'firebase/storage'

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
    directives: { focus },
    data() {
      return {
        login: false,
           
        facilitiesForm: {
                classRooms:'',
                mansonoryFacilities:'',
                carpentaryFacilities:'',
                otherFacility:'',
                surveyEquipment:'',
                dateRegistered:'',
                          
            },
            form:{
              _id: '',
              facilityList: []
            },
            facilitiesFormReset: false,
            spinner: '0',
             
          }
    },
    computed: {
        ...mapGetters({successState: 'facilities/getSuccessState',errorState: 'facilities/getErrorState'})

    }, 
    methods: {
      ...mapActions({registerFacilities: 'facilities/registerFacilities'}),

                
      create() { 
     if(!this.facilitiesForm.classRooms) {
        this.$bvModal.msgBoxOk('Class rooms is required.')
        return false;
      }
      else if(!this.facilitiesForm.mansonoryFacilities) {
        this.$bvModal.msgBoxOk('Mansonory Facilities is required.')
        return false;
      } 
       else if(!this.facilitiesForm.carpentaryFacilities) {
        this.$bvModal.msgBoxOk('Carpentary Facilities is required.')
        return false;
      }
      else if(!this.facilitiesForm.otherFacility) {
        this.$bvModal.msgBoxOk('Other Facility is required.')
        return false;
      }
    else if(!this.facilitiesForm.surveyEquipment) {
        this.$bvModal.msgBoxOk('Survey Equipment is required.')
        return false;
    }
        
   else{
         let date = new Date()
         this.facilitiesForm.dateRegistered = date
         this.form._id = localStorage.getItem('centerId')
         console.log("Form Data"+JSON.stringify(this.facilitiesForm))
         this.form.facilityList.push(this.facilitiesForm) 
         return this.registerFacilities(this.form).then(e => this.resetForm(e));  
      }

      },

     resetForm(status){
          if(status == 'success'){
            this.showSuccessMsg()
            this.facilitiesForm.classRooms = this.facilitiesForm.mansonoryFacilities = this.facilitiesForm.carpentaryFacilities = this.facilitiesForm.otherFacility = this.facilitiesForm.surveyEquipment =   
            this.facilitiesForm.dateRegistered = "",
            this.facilitiesFormReset = !this.facilitiesFormReset 

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
      }
    }
  }

</script>
<style scoped>
  small {
    font-weight: 300;
  }
</style>