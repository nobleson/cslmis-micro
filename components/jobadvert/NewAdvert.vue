<template>
<div>
  
    <div class="container">
      <b-button @click="$emit('changeComponent', 'JobAdvertView')">Back</b-button>
     
    <div >
          <form>
              <p class="h4 text-center mb-4">Job Advert </p>
              <div class="grey-text">
               <mdb-input label="Enter Job Tittle" v-model="form.jobtitle" size="lg" required/>
                <mdb-input label="Enter Job Description" v-model="form.JobDescription" size="lg" required/>
                <mdb-input label="Enter Job Requirement" v-model="form.jobrequirment" size="lg" required/>
                <mdb-input label="Enter Adstart" v-model="form.adstart" size="lg" required/>
                <mdb-input label="Enter Job Status" v-model="form.Jobstatus" size="lg" required/>
                <mdb-input label="Enter Job Location" v-model="form.joblocation" size="lg" required/>
                <mdb-input label="Enter Subscription" v-model="form.subscription" size="lg" required/>
                <mdb-input label="Enter Job Qualification" v-model="form.jobqualification" size="lg" required />
                <b-form-group id="input-group-2 " label="Deadline Date" label-for="inputs">
                  <date-picker v-model="form.deadlineDate" :config="{format: 'DD/MM/YYYY'}"></date-picker>
                </b-form-group>
                <mdb-input label="Enter Company Id" v-model="form.companyId" size="lg" required/>
                </div>
                <div class="text-center">
                <mdb-btn>Submit</mdb-btn>
                </div>
              
              <b-card class="mt-3" header="Form Data Result">
                        <pre class="m-0">{{ form }}</pre>
                 </b-card>

            </form>
        
    </div> 
  </div>
  </div>
</template>
<script>

import { mdbInput, mdbCard, mdbCardbody, mdbBtn } from 'mdbvue';
  export default {
    name: "Input",
    components: {
      mdbInput,
      mdbCard,
      mdbBtn
    },
    data() {
      return {
        form:{
          jobtitle:'',
          JobDescription:'',
          jobrequirement:'',
          Jobstatus:'',
          joblocation:'',
          subscription:'',
          jobqualification:'',
          deadlineDate: '',
          companyId:'',
          
        }
        
        

      };
    }
  }
</script>
<style>
.top{
  margin-top:20%;
   margin-top:10%;
}
</style>