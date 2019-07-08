<template>
 <div class="animated fadeIn">
  <section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header style="background-color: #00c851"/>

    <!-- Card Container -->
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none">
         <b-link @click="$emit('changeComponent',{component: 'AprCenterView', id: null})"  href="#" class="card-link text-white"><mdb-icon icon="arrow-left" size="lg" class="text-white" />  View All Apprentiship Centers</b-link>
         <mdb-card class="weather-card">
          <mdb-card-body  class="pb-3">
            <b-alert v-if="successState" show variant="success">Apprentiship Center created successfully</b-alert>
           <b-alert v-if="errorState" show variant="danger">Apprentiship Center  Fail to Create. Try again</b-alert>         
            <h2 class="h2-responsive"><strong>New Apprentiship Center Form</strong></h2>
            <p class="pb-4">Create Apprentiship Center</p>
            <!--Body-->
            <form>              
              <mdb-input label="Apprentiship Center ID Number"  v-model="aprCenterForm.IdNumber" />
              <mdb-input label="Apprentiship Center Name"  v-model="aprCenterForm.aprCenterName" />
              <mdb-input label="Phone Number"   v-model="aprCenterForm.phoneNumber"/>
              <mdb-input label="Contact Address"  v-model="aprCenterForm.contactAddress" />
              <mdb-input label="Local Government Area" v-model="aprCenterForm.lgArea"/>
              <mdb-input label="State"  v-model="aprCenterForm.state"/>
              <mdb-input label="Trade"   v-model="aprCenterForm.trade"/>

             <div class="text-xs-left">
                <mdb-btn color="primary" @click.native.prevent="create()" :disabled='aprCenterFormReset'>Submit
                  <b-spinner small v-if="aprCenterFormReset === true"></b-spinner>
                  <span class="sr-only" v-if="aprCenterFormReset === true">Wait...</span>
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
     
        aprCenterForm: {
                IdNumber: '',//centerid
                aprCenterName:'',
                phoneNumber:'',
                contactAddress:'',
                lgArea:'',
                state:'',
                trade:'',
                dateRegistered:''
                
              
            },
            form:{
              _id: '',
              apprentishipCenterList:[]
            },
            aprCenterFormReset: false,
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
        ...mapGetters({successState: 'aprcenters/getSuccessState',errorState: 'aprcenters/getErrorState'})

    }, 
    methods: {
      ...mapActions({registerAprCenter: 'aprcenters/registerAprCenter'}),
      
      create() { 
     if(!this.aprCenterForm.aprCenterName) {
        this.$bvModal.msgBoxOk('Apprentiship Center Name is required.')
        return false;
      } 
       else if(!this.aprCenterForm.phoneNumber) {
        this.$bvModal.msgBoxOk('Phone Number is required.')
        return false;
      }
       else if(!this.aprCenterForm.contactAddress) {
        this.$bvModal.msgBoxOk('Contact Address is required.')
        return false;
      }
      else if(!this.aprCenterForm.lgArea) {
        this.$bvModal.msgBoxOk('L.G.A is required.')
        return false;
     }
    else if(!this.aprCenterForm.state) {
        this.$bvModal.msgBoxOk('State is required.')
        return false;
    }
     else if(!this.aprCenterForm.trade) {
        this.$bvModal.msgBoxOk('Trade is required.')
        return false;
     }
    else{
            
          this.aprCenterFormReset= !this.aprCenterFormReset
          let date = new Date()
          this.aprCenterForm.dateRegistered = date
          this.form._id = localStorage.getItem('centerId')
          this.form.apprentishipCenterList.push(this.aprCenterForm) 
            return this.registerAprCenter(this.form).then(e => resetForm(e)); 
        }

      },

     resetForm(status){ 
          if(status == 'success'){
          this.showSuccessMsg()
          this.aprCenterForm.aprCenterName = this.aprCenterForm.contactAddress = this.aprCenterForm.phoneNumber = 
          this.aprCenterForm.state =  this.aprCenterForm.trade = this.aprCenterForm.lgArea = '';         
          this.aprCenterFormReset = !this.aprCenterFormReset 
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