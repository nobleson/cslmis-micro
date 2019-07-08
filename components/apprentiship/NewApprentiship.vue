<template>
 <div class="animated fadeIn">
  <section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header style="background-color: #00c851"/>

    <!-- Card Container -->
            <mdb-container free-bird>
            <mdb-row>
            <mdb-col md="8" lg="7" class="mx-auto float-none">
            <b-link @click="$emit('changeComponent',{component: 'ApprentishipView', id: null})"  href="#" class="card-link text-white"><mdb-icon icon="arrow-left" size="lg" class="text-white" />  View All Apprentiship</b-link>
            <mdb-card class="weather-card">
            <mdb-card-body  class="pb-3">
            <b-alert v-if="successState" show variant="success">Apprentice created successfully</b-alert>
            <b-alert v-if="errorState" show variant="danger">Apprentice  Fail to Create. Try again</b-alert>         
            <h2 class="h2-responsive"><strong>New Apprentice Form</strong></h2>
            <p class="pb-4">Create Apprentice</p>
            <!--Body-->
            <form>
              <mdb-input label="Apprentice Id Number"  v-model="apprenticeForm.idNumber" />
              <mdb-input label="First Name"  v-model="apprenticeForm.firstName" />
              <mdb-input label="Middle Name"   v-model="apprenticeForm.middleName"/>
              <mdb-input label="Last Name"  v-model="apprenticeForm.lastName" />
              <mdb-input label="Gender"  v-model="apprenticeForm.gender"/>
              <mdb-input label="Trade"  v-model="apprenticeForm.trade"/>
              <mdb-input label="Supervisor Name"  v-model="apprenticeForm.supervisorName"/>
              <mdb-input label="Phone Number"   v-model="apprenticeForm.phoneNumber"/>
              <mdb-input label="E-mail Address"   v-model="apprenticeForm.emailAddress"/>
              <mdb-input label="Residential Address"   v-model="apprenticeForm.residentialAddress"/>

               <div class="text-xs-left">
                <mdb-btn color="primary" @click.native.prevent="create()" :disabled='apprenticeFormReset'>Submit
                  <b-spinner small v-if="apprenticeFormReset === true"></b-spinner>
                  <span class="sr-only" v-if="apprenticeFormReset === true">Wait...</span>
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
        login: false,
        apprenticeForm: {
              idNumber:'',
              firstName:'',
              middleName:'',
              lastName:'',
              gender:'',
              trade:'',
              supervisorName:'',
              phoneNumber:'',
              emailAddress:'',
              residentialAddress:'',
              dateRegistered:'',
            },
              form:{
              _id: '',
              apprenticeList: []
            },
            apprenticeFormReset: false,
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
        ...mapGetters({successState: 'apprentice/getSuccessState',errorState: 'apprentice/getErrorState'})

    },
    methods: {
      ...mapActions({registerApprentice: 'apprentice/registerApprentice'}),
      
      create() { 
     if(!this.apprenticeForm.idNumber) {
        this.$bvModal.msgBoxOk('First Name is required.')
        return false;
      }
      else if(!this.apprenticeForm.firstName) {
        this.$bvModal.msgBoxOk('First Name is required.')
        return false;
      } 
       else if(!this.apprenticeForm.middleName) {
        this.$bvModal.msgBoxOk('Middle Name is required.')
        return false;
      }
      else if(!this.apprenticeForm.lastName) {
        this.$bvModal.msgBoxOk('Last Name is required.')
        return false;
      }
      else if(!this.apprenticeForm.gender) {
        this.$bvModal.msgBoxOk('Gender is required.')
        return false;
    }
    else if(!this.apprenticeForm.trade) {
        this.$bvModal.msgBoxOk('Apprentice is required.')
        return false;
    }
    else if(!this.apprenticeForm.supervisorName) {
        this.$bvModal.msgBoxOk('Suppervisor Name is required.')
        return false;
    }
    else if(!this.apprenticeForm.phoneNumber) {
        this.$bvModal.msgBoxOk('Highest Qualification is required.')
        return false;
    }
    else if(!this.apprenticeForm.emailAddress) {
        this.$bvModal.msgBoxOk('E-mail address is required.')
        return false;
     } 
    else if(!this.apprenticeForm.residentialAddress) {
        this.$bvModal.msgBoxOk('Residential Address is required.')
        return false;
     }

   else{
         this.apprenticeFormReset = !this.apprenticeFormReset
         let date = new Date()
         this.apprenticeForm.dateRegistered = date 
         this.form._id = localStorage.getItem('centerId')
         this.form. apprenticeList.push(this.apprenticeForm) 
         return this.registerApprentice(this.form).then(e => this.resetForm(e));
         
      }

      },
    resetForm(status){
          if(status == 'success'){
          this.showSuccessMsg()
          this.apprenticeForm.idNumber = this.apprenticeForm.firstName = this.apprenticeForm.middleName = this.apprenticeForm.lastName = this.apprenticeForm.gender =  
          this.apprenticeForm.trade = this.apprenticeForm.supervisorName =  this.apprenticeForm.phoneNumber =  
          this.apprenticeForm.emailAddress = this.apprenticeForm.residentialAddress =  this.resultURL ='';       
          this.apprenticeFormReset = !this.apprenticeFormReset 

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
      },
    
    }
  }

</script>
<style scoped>
  small {
    font-weight: 300;
  }
</style>