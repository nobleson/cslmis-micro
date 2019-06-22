
<template>
 <div class="animated fadeIn">
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

          <b-alert v-if="successState" show variant="success">Program created Successfully</b-alert>
           <b-alert v-if="errorState" show variant="danger">Program  Fail to Create. Try again</b-alert>   
            <h2 class="h2-responsive"><strong>New Development Program Form</strong></h2>
              <p class="pb-4">Create Development Program</p>     
                        <div>
                            <form>
                                <mdb-input label="Program Name" v-model="form.programName" />

                                <mdb-input type="textarea" label="Program Description" :rows="2" v-model="form.programDescription" />

                                <mdb-input label="Program Year" v-model="form.programYear" />

                                <mdb-input label="Program Duration" v-model="form.programDuration" />  
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
    data() {
      return {
        form: {
         programName: '',
         programDescription: '',
         programYear: '',
         programDuration: '',
         dateRegistered: null
        },
        formReset: false
      }
    },
    computed: {
        ...mapGetters({formState: 'program/getFormState',successState: 'program/getSuccessState',errorState: 'program/getErrorState'})
    }, 
    methods: {
      ...mapActions({registerTradeProgram: 'program/registerTradeProgram'}),

      create() { 
      if(!this.form.programName) {
        this.$bvModal.msgBoxOk('Program Name required.')
        return false;
      }
     else if(!this.form.programYear) {
        this.$bvModal.msgBoxOk('Program Year required.')
        return false;
     }
      else if(!this.form.programDuration) {
        this.$bvModal.msgBoxOk('Program Duration required.')
        return false;
      }else{
         this.formReset = !this.formReset 
         let date = new Date()
         this.form.dateRegistered = date
         this.registerTradeProgram(this.form).then(e => { 
          console.log('Program Created Successfully'); 
        }).catch(console.error).finally(reset => this.resetForm());

      }

      },
      resetForm(){
          this.form.programName = this.form.programDescription =  this.form.programYear =  this.form.programDuration = '';
          this.formReset = !this.formReset    
      },
    }
  }

</script>
