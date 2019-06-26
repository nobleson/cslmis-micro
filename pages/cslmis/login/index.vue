<template>
  <div class="app flex-row align-items-center">
    <div class="container">
       <b-row>
           <b-col md="8">
           <h4 class="text-center">Construction Companies Portal</h4>
           </b-col>
       </b-row>
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="text-white primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <img src="~/assets/images/new.png" alt="Logo">
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
                    <b-col cols="6">
                     <!--  <b-button @click="logIn" variant="primary" class="px-4">Login</b-button> -->
                     <div class="text-xs-left">
                       <button type="button" @click="logIn" class="btn btn-primary btn-lg" id="load" data-loading-text="<i class='fa fa-spinner fa-spin '></i> Processing ">login</button>
                     <!-- <b-button @click="logIn"  type="button" variant="primary"  :disabled='userFormReset'>Login
                        <b-spinner small v-if="userFormReset === true"></b-spinner>
                        <span class="sr-only" v-if="userFormReset === true">Wait...</span>                                
                      </b-button> -->
                    </div>
                    </b-col>
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
      userFormReset: false,
      spinner: '0'
    }
  },
   resetForm(){
         this.user.email = this.user.password = '';
          this.userFormReset = !this.userFormReset    
      },
  computed: {
    ...mapGetters({session: 'authentication/getSession', userData: 'authentication/getUser'}),
  },
  methods: {
    ...mapActions({setupUser: 'authentication/initSetup',authenticateUser: 'authentication/authenticateUser',fetchUserDataById: 'authentication/fetchUserDataById'}),
    logIn() {
      this.authenticateUser(this.user).then(e => this.getUserClaims());
    },
    getUserClaims(){
      console.log("Logged UID:"+this.session.localId)
      this.fetchUserDataById(this.session.localId).then(e => this.validate());
    },
    validate(){
     // var loggedUser = this.userData
      console.log("Logged User Claims:"+JSON.stringify(this.userData.customClaims))

      if(this.userData.customClaims.portal == 'Construction Company Admin'){
        this.init()
        this.$router.push('/cslmis/dashboard');
      }else{
        this.$bvModal.msgBoxOk('Unauthorized Access, please contact your administrator')
      }
    },
    init(){
      this.setupUser();
    },
    resetPassword() {
      //reset password code. probably dispatch to an action.
    },
    checkEmailVerificationStstus(){
      return
    }
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
