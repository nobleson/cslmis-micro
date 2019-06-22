
<template>
 <div class="animated fadeIn">
  <section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header style="background-color: #2BBBAD"/>

    <!-- Card Container -->
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none">
         <b-link @click="$emit('changeComponent',{component: 'TradeView', id: null})"  href="#" class="card-link text-white"><mdb-icon icon="arrow-left" size="lg" class="text-white" />  View All Trades</b-link>
         <mdb-card class="weather-card">
          <mdb-card-body  class="pb-3">

          <b-alert v-if="successState" show variant="success">Trade created Successfully</b-alert>
           <b-alert v-if="errorState" show variant="danger">Trade  Fail to Create. Try again</b-alert>   
            <h2 class="h2-responsive"><strong>New Trade Form</strong></h2>
              <p class="pb-4">Create  Trade</p>     
                        <div>
                            <b-form>
                            <b-form-group
                                label="Trade Name:"
                                label-for="tradename"
                                description="The name of trade"
                            >
                                <b-form-input
                                id="tradename"
                                v-model="form.tradeName"
                                type="text"
                                v-focus
                                placeholder="Enter trade name"
                                ></b-form-input>
                            </b-form-group>


                            <b-form-group
                                label="Trade Description:"
                                label-for="tradedescription"
                            >
                                <b-form-textarea
                                id="tradedescription"
                                v-model="form.tradeDecsription"
                                placeholder="Enter something..."
                                rows="3"
                                max-rows="6"
                                ></b-form-textarea>
                            </b-form-group>
                               <mdb-btn color="primary" @click.native.prevent="create()" :disabled='formReset'>Submit
                                <b-spinner small v-if="formReset === true"></b-spinner>
                                <span class="sr-only" v-if="formReset === true">Wait...</span>
                                </mdb-btn>
                            </b-form>                          
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
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
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
          tradeName: null,
          tradeDecsription: null
        },
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
        ...mapGetters({formState: 'trade/getFormState',successState: 'trade/getSuccessState',errorState: 'trade/getErrorState'})
    }, 
    methods: {
      ...mapActions({registerTrade: 'trade/registerTrade'}),

      create() { 
      if(!this.form.tradeName) {
        this.$bvModal.msgBoxOk('Name required.')
        return false;
      }
      else if(!this.form.tradeDecsription) {
        this.$bvModal.msgBoxOk('Description required.')
        return false;
      }else{ 
         this.formReset = !this.formReset 
        this.registerTrade(this.form).then(e => { 
          console.log('Trade Registered Successfully'); 
        }).catch(console.error).finally(reset => this.resetForm());
      }

      },
     resetForm(){
          this.form.tradeName = this.form.tradeDecsription = '';
          this.formReset = !this.formReset    
      },
    }
  }

</script>
