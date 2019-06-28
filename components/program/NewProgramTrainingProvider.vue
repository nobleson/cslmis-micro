
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
            programTrainingProviders: {
                id: '',
                name: '',
                dateRegistered: ''
            },
          },
          selected: '',
          formReset: false
          
      }
    },
    mounted(){
        this.loadTrainingProviders();
    },
    computed: {
        ...mapGetters({trainingProviders: 'program/getTraininProviders',successState: 'program/getSuccessState',errorState: 'program/getErrorState'})
    }, 
    methods: {
      ...mapActions({registerTradeProgramProviders: 'program/registerTradeProgramProviders',loadProviders: 'program/loadTrainingProviders'}),

      create() { 

     if(!this.selected) {
        this.$bvModal.msgBoxOk('Training Provider not selected.')
        return false;
      }else{
         this.formReset = !this.formReset 
         this.registerTradeProgramProviders(this.form).then(e => this.resetForm()).catch(console.error);
      } 
      },
      showSuccessState(){
        this.$popup({
          message         : "GOT IT done!",
          backgroundColor : 'rgba(0, 0, 0, 0.7)',
          color           : '#00c853'
        })
        .then(() => {
          console.log('finished')
        })
      },
      showErrorState(){
        this.$popup({
          message         : "Oops! error occur",
          backgroundColor : 'rgba(244, 67, 54, 0.7)',
          color           : '#d50000'
        })
        .then(() => {
          console.log('finished')
        })
      },
      getData(){
                var date = new Date()    
                this.form._id = this.programData._id
                this.form.programTrainingProviders.id = this.selected.id
                this.form.programTrainingProviders.name = this.selected.name
                this.form.programTrainingProviders.dateRegistered = date

      },
      loadTrainingProviders(){
        this.loadProviders().then((ev) => {})
      },
      resetForm(){
          if(this.successState){
              this.showSuccessState();
          }
          if(this.errorState){
              this.showErrorState()
          }
          this.formReset = !this.formReset    
          this.selected = ''
      }

    }
  }

</script>
