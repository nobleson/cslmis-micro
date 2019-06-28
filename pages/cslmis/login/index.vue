<template>
  <div class="app flex-row align-items-center">
    <div class="container">
       <b-row>
           <b-col md="8">
           <h4 class="text-center">C-LMIS Centers Portal</h4>
           </b-col>
       </b-row>
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="text-white primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <img src="~/assets/images/new.png" alt="Logo" width="150" height="150">
                </div>
                <h6 class="text-white">Brand by</h6>
                <h1>CORBON</h1>
              </b-card-body>
            </b-card>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="text" class="form-control" v-model="user.email" placeholder="Email Address" autocomplete="email address" />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" v-model="user.password" class="form-control" placeholder="Password" autocomplete="current-password" />
                  </b-input-group>
                  <b-row>
                    
                     <div class="text-xs-left">
                     <mdb-btn color="primary" @click.native.prevent="logIn()" :disabled='formReset'>Login
                      <b-spinner small v-if="formReset === true"></b-spinner>
                      <span class="sr-only" v-if="formReset === true">Wait...</span>
                    </mdb-btn>
                    </div>
                  
                  </b-row>
                  <b-row>
                      <b-col class="signup">
                    <span class="pull-right mt-20">Don't have account yet? <router-link to='/application'>Apply</router-link></span>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
      <b-row  class="justify-content-center">
        <a href="https://admin.cslmis.gov.ng">CSLMIS </a>
        <span class="ml-1">&copy; 2019 Admin Portal. </span>
        <span>Powered by </span> 
        <a href="https://corbon.gov.ng"> CORBON </a>
      </b-row>
    </div>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  import { mdbBtn, } from 'mdbvue';
const focus = {
    inserted(el) {
      el.focus()
    },
  }
export default {
  directives: { focus },
  name: 'Login',
  layout: "empty",
   components: {
      mdbBtn
     },

  data() {
    return {
      user: {
        email: '',
        password: '',
        isSignIn: true
      },
      formReset: false,
      spinner: '0'
    }
  },
   
  computed: {
    ...mapGetters({session: 'authentication/getSession', userData: 'authentication/getUser'}),
  },
  methods: {
    ...mapActions({setupUser: 'authentication/initSetup',authenticateUser: 'authentication/authenticateUser',fetchUserDataById: 'authentication/fetchUserDataById'}),
    logIn() {
      if(!this.user.email){
      this.$bvModal.msgBoxOk('Email or Username is required')
      return false;
      }else if(!this.user.password){
        this.$bvModal.msgBoxOk('Password is required')
        return false;
      }else{
        this.formReset =!this.formReset
        this.authenticateUser(this.user).then(e => this.getUserClaims())
        .catch(error => this.getUserClaims(error));
      }
    },
    getUserStatus(e){
      if(this.loginStatus == 400){
         this.formReset =!this.formReset
         this.$bvModal.msgBoxOk('Error: The password or email is invalid')
      }
      console.log("Error:"+e)
    },
    getUserClaims(){
      console.log("Logged UID:"+this.session.localId)
      this.fetchUserDataById(this.session.localId).then(e => this.validate());
    },
    validate(){
     // var loggedUser = this.userData
      console.log("Logged User Claims:"+JSON.stringify(this.userData.customClaims))
      if(this.userData.customClaims.portal == 'Construction Center Admin'){
        this.formReset =!this.formReset
        this.init()
        this.$router.push('/cslmis/dashboard');
      }else{
        this.formReset =!this.formReset
        this.$bvModal.msgBoxOk('Unauthorized access, please contact your administrator')
      }
    },
    init(){
      this.setupUser();
    },
    
  }
}
</script>
<style scoped>
.signup{
    margin-top: 50px;
}
.bg-primary{
  background-color: #008751;  
}
.primary{
  background-color: #008751;  
}
</style>