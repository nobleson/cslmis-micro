<template>
 <div class="animated fadeIn">
  <section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header style="background-color: #00c851"/>

    <!-- Card Container -->
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none">
         <b-link @click="$emit('changeComponent',{component: 'ReportView', id: null})"  href="#" class="card-link text-white"><mdb-icon icon="arrow-left" size="lg" class="text-white" />  View All Reports</b-link>
         <mdb-card class="weather-card">
          <mdb-card-body  class="pb-3">
            <b-alert v-if="successState" show variant="success">Report created successfully</b-alert>
           <b-alert v-if="errorState" show variant="danger">Report  Fail to Create. Try again</b-alert>         
            <h2 class="h2-responsive"><strong>New Report Form</strong></h2>
            <p class="pb-4">Create Report</p>
            <!--Body-->
            <form>
              <mdb-input label="Report Title"  v-model="reportForm.reportTitle" />
              <p>Description<p/>
              <wysiwyg v-model="reportForm.description" placeholder="Write details about your Description..." />
              <hr/>
              <p>Document<p/>
              <wysiwyg v-model="reportForm.document" placeholder="Write details about your Documents..." />
              <hr/>
  
               <div class="text-xs-left">
                <mdb-btn color="primary" @click.native.prevent="create()" :disabled='reportFormReset'>Submit
                  <b-spinner small v-if="reportFormReset === true"></b-spinner>
                  <span class="sr-only" v-if="reportFormReset === true">Wait...</span>
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
    directives: { focus },
    data() {
      return {
                 
            reportForm: {
                reportTitle:'',
                description:'',
                document:'',
                dateRegistered:'',
                                        
            },
            form:{
              _id: '',
              reportList: []
            },
            reportFormReset: false,
            spinner: '0',
             
          }
    },
    computed: {
        ...mapGetters({successState: 'report/getSuccessState',errorState: 'report/getErrorState'})

    }, 
    methods: {
      ...mapActions({registerReport: 'report/registerReport'}),

                
      create() { 
     if(!this.reportForm.reportTitle) {
        this.$bvModal.msgBoxOk('Report is required.')
        return false;
      }
       else if(!this.reportForm.document) {
        this.$bvModal.msgBoxOk('Document is required.')
        return false;
      }
      else if(!this.reportForm.description) {
        this.$bvModal.msgBoxOk('Description is required.')
        return false;
      } 
      
        
   else{
         this.reportFormReset = !this.reportFormReset
         let date = new Date()
         this.reportForm.dateRegistered = date  
         this.form._id = localStorage.getItem('centerId')
         this.form.reportList.push(this.reportForm) 
         return this.registerReport(this.form).then(e => this.resetForm(e));
          
      }

      },

     resetForm(status){
          if(status == 'success'){
            this.showSuccessMsg()
            this.reportForm.reportTitle = this.reportForm.description = this.reportForm.document =  
            this.reportForm.dateRegistered = '';         
            this.reportFormReset = !this.reportFormReset 

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