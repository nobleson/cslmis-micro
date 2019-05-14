<template>
 <div class="animated fadeIn">
         <b-link @click="$emit('changeComponent', 'CompanyListView')"  href="#" class="card-link">View All Companies</b-link>
         <hr>
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-alert v-if="successState" show variant="success">Company Registered Successfully</b-alert>
           <b-alert v-if="errorState" show variant="danger">Company Account Failed to Create. Try again</b-alert>        
                <b-card title="New Company">
                    <b-card-text>
                        <div>
                            <b-form>
                            <b-form-group
                                label="Company Acronym:"
                                label-for="companyname"
                                description="The company short name as a display name"
                            >
                                <b-form-input
                                id="companyname"
                                v-model="form.name"
                                type="text"
                                v-focus
                                placeholder="Enter company acronym"
                                ></b-form-input>
                            </b-form-group>


                            <b-form-group
                                label="Company email address:"
                                label-for="companyemail"
                            >
                                <b-form-input
                                id="companyemail"
                                v-model="form.email"
                                type="email"
                                required
                                placeholder="Enter company email"
                                ></b-form-input>
                            </b-form-group>
                            <b-button @click="create"  type="button" variant="primary"  :disabled='formState'>Submit</b-button>
                            </b-form>                         
                        </div>
                    </b-card-text>
                </b-card>

            </b-col>
        </b-row>
    </div>
  </div>
</template>


<script>
/* import axios from 'axios'

//Create a new instance and add any global config options you might need to use.
const axiosInstance = axios.create({
  baseURL: 'https://shielded-savannah-72922.herokuapp.com/'
})
//Add isHandlerEnabled function which will check if the global handler should be used or not
const isHandlerEnabled = (config={}) => {
  return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ? 
    false : true
}

//await axiosInstance.get('/v2/api-endpoint', { handlerEnabled: false })
//Add request handler
const requestHandler = (request) => {
  if (isHandlerEnabled(request)) {
    // Modify request here
   //request.headers['Authorization'] = 'Bearer ' + token;
  }
  return request
}
//Enable request interceptor
axiosInstance.interceptors.request.use(
  request => requestHandler(request)
)

//Add response handlers
const errorHandler = (error) => {
  if (isHandlerEnabled(error.config)) {
    // Handle errors
    alert('Company fail to create. Try again');
  }
  return Promise.reject({ ...error })
}

const successHandler = (response) => {
  if (isHandlerEnabled(response.config)) {
    // Handle responses
     alert('Company created successfully');
  }
  return response
}
axiosInstance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
)
let handlerEnabled = trues
 */
//----------------------------------------------------------------------------
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
 const focus = {
    inserted(el) {
      el.focus()
    },
  }
  export default {
   directives: { focus },
    data() {
      return {
        form: {
          email: null,
          name: null
        },
        items: [{
          value: ''
        }],
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
        ...mapGetters({formState: 'company/getFormState',successState: 'company/getSuccessState',errorState: 'company/getErrorState'})

/*   	isDisabled: function(){
      //console.log('status:'+this.formState); 
      this.formDisabled = this.formState;
    },
  	regsuccess: function(){
    	return this.successAlert;
    },
  	regerror: function(){
    	return this.errorAlert;
    } */
    }, 
    methods: {
      ...mapActions({registerCompany: 'company/registerCompany'}),
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
        this.registerCompany(this.form).then(e => { 
          console.log('Company Registered Successfully'); 
          this.form.name = this.form.email = '';
        });  
      }

      }
    }
  }

</script>
