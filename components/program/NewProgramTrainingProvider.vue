
<template>
 <div class="animated fadeIn">
    <vue-up></vue-up>    
  <FlashMessage></FlashMessage>
  <section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header style="background-color: #2BBBAD"/>

    <!-- Card Container -->
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none">
         <b-link @click="$emit('changeComponent',{component: 'ProgramView', id: null})"  href="#" class="card-link text-white"><mdb-icon icon="arrow-left" size="lg" class="text-white" />  View All Development Programs</b-link>
         <mdb-card class="weather-card">
          <mdb-card-body  class="pb-3">
            <h2 class="h2-responsive"><strong>New Training Provider Form</strong></h2>
              <p class="pb-4">Add Provider for the Program</p>     
                        <div>
                            <form>
                                <b-form-group id="input-group-2" label="Training Provider:" label-for="input-2">
                                            <b-form-select 
                                            id="trainingProvider"
                                            v-model="selected"
                                            @change="getData"
                                            required
                                            >
                                            <option disabled value="">[ Select Training Provider ]</option>
                                            <option v-for="item in trainingProviders" v-bind:key ="item.id" v-bind:value="{ id: item._id, name: item.fullLegalName}">{{item.fullLegalName}}</option>
                                            </b-form-select>
                                </b-form-group>
                               <mdb-btn color="primary" @click.native.prevent="create()" :disabled='formReset'>Submit
                                <b-spinner small v-if="formReset === true"></b-spinner>
                                <span class="sr-only" v-if="formReset === true">Wait...</span>
                                </mdb-btn>
                            </form> 
                        </div>
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
      mdbCard,
      mdbInput,
      mdbBtn,
      mdbIcon,
   },
   props: ['programData'],
    data() {
      return {
          form: {
            _id:'',
            programTrainingProviders: [],
          },
          provider: {
            id: '',
            name: '',
            dateRegistered: ''
          },
          selected: '',
          formReset: false,
          alreadyExist: false
          
      }
    },
    mounted(){
        this.loadTrainingProviders();
    },
    computed: {
        ...mapGetters({trainingProviders: 'program/getTraininProviders',successState: 'program/getSuccessState',errorState: 'program/getErrorState',programProviderList: 'program/getProgramProvider'})
    }, 
    methods: {
      ...mapActions({init: 'program/initProgramProvider',registerTradeProgramProviders: 'program/register',updateProgramProviderData: 'program/updateProgramProviders',loadProviders: 'program/loadTrainingProviders',loadProgramDetails: 'program/loadProgramDetails'}),

      create() { 

     if(!this.selected) {
        this.$bvModal.msgBoxOk('Training Provider not selected.')
        return false;
      }else{
         this.formReset = !this.formReset 
         this.addProgramProvider()
      } 
      },
      getData(){
          this.alreadyExist = false
          var date = new Date()    
          this.provider.id = this.selected.id
          this.provider.name = this.selected.name
          this.provider.dateRegistered = date

      },
       addProgramProvider(){
         this.init().then(status => this.checkStatus(status));
       },
       checkStatus(status){
         if(status == 0){
           this.processPostForm()

         }else{
           let self = this
           this.loadProgramDetails(this.programData._id).then(function (e){
            console.log("process:"+self.programProviderList.programTrainingProviders)           
            for(var i = 0; i < self.programProviderList.programTrainingProviders.length; i++){
                  var objProvider = self.programProviderList.programTrainingProviders[i]
                  if(objProvider.id == self.selected.id){
                    self.alreadyExist = true
                  }
                }
                self.processPutForm()
           })

            //console.log("process put form")
         }
       },
       processPostForm(){
         let self = this;
         return new Promise(
           function(resolve , reject){
              self.form._id = self.programData._id
              self.form.programTrainingProviders.push(self.provider)
              resolve(self.form)           
         }).then(form =>self.registerTradeProgramProviders(form)).then(e => self.resetForm(e)).catch(function (error){});;
       },
       processPutForm(){
         let self = this;
         return new Promise(
           function(resolve , reject){

            if(self.alreadyExist){
              self.formReset = !self.formReset 
              self.$bvModal.msgBoxOk('Training Provider selected already exist on this program.')
            }else{
              self.form._id = self.programData._id
             // self.form.programTrainingProviders = self.programProviderList.programTrainingProviders
             for(var i = 0; i < self.programProviderList.programTrainingProviders.length; i++){
                  var objProvider = self.programProviderList.programTrainingProviders[i]
                  self.form.programTrainingProviders.push(objProvider) 
                } 

              self.form.programTrainingProviders.push(self.provider)
              resolve(self.form)    
            }       
         }).then(form =>self.updateProgramProviderData(form)).then(e => self.resetForm(e)).catch(function (error){});;
       },

      loadTrainingProviders(){
        this.loadProviders().then((ev) => {})
      },
     resetForm(status){
          this.formReset = !this.formReset   
          console.log("status:"+status)
         if(status == 'success'){
            this.showSuccessMsg();
            this.selected = ''
          }
          else if(status == 'error'){
            this.showErrorMsg();
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
