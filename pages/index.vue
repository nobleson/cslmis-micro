<template>
  <div class="app flex-row align-items-center">
  <div class="id">
     <img src="~/assets/images/bg1.png" alt="Logo"  height="5000" width="4000">
  </div>
    <div class="container">
       <b-row>
           <b-col md="8">
           <h4 class="text-center">Construction LMIS Portal</h4>
           </b-col>
       </b-row>
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="text-white primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <img src="~/assets/images/logo.png" alt="Logo">
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
                    <b-form-input type="text" class="form-control" v-model="user.email" placeholder="Username" autocomplete="username email" />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" v-model="user.password" class="form-control" placeholder="Password" autocomplete="current-password" />
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button @click="logIn" variant="primary" class="px-4">Login
                                <b-spinner small v-if="formReset === true"></b-spinner>
                                <span class="sr-only" v-if="formReset === true">Wait...</span>
                      </b-button>
                    </b-col>
                  </b-row>
                  <b-row>
                      <b-col class="signup">
                    <span class="pull-right mt-20">Don't have account yet? <router-link to='/register'>SignUp</router-link></span>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
      <b-row  class="justify-content-center">
        <a href="https://admin.cslmis.gov.ng">Construction LMIS</a>
        <span class="ml-1">&copy; 2019 Admin Portal.</span>
        <span class="ad"> &nbsp;&nbsp;Brand by </span>
        <a href="https://corbon.gov.ng">  &nbsp;&nbsp;CORBON </a>
      </b-row>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'Login',
  layout: "auth",

  data() {
    return {
      user: {
        email: '',
        password: '',
        isSignIn: true
      },
      formReset: false
    }
  },
  computed: {
    ...mapGetters({session: 'authentication/getSession', userData: 'authentication/getUser', loginStatus:'authentication/getResponseStatus'}),
  },
  methods: {
    ...mapActions({authenticateUser: 'authentication/authenticateUser',setupUser: 'authentication/initSetup',fetchUserDataById: 'authentication/fetchUserDataById'}),
    logIn() {
      if(!this.user.email) {
        this.$bvModal.msgBoxOk('Email or Username is required.')
        return false;
      }
      else if(!this.user.password) {
        this.$bvModal.msgBoxOk('Password is required.')
        return false;
      }else{ 
          this.formReset = !this.formReset 
          this.authenticateUser(this.user).then(e => this.getUserClaims())
          .catch(error => this.getStatus(error));
      }
    },
    getStatus(e){
      if(this.loginStatus == 400){
          this.formReset = !this.formReset 
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
      if(this.userData.customClaims.portal == 'CORBON Admin'){
           this.formReset = !this.formReset 
           this.init()
           this.$router.push('/cslmis/dashboard');
      }else{
        this.formReset = !this.formReset 
        this.$bvModal.msgBoxOk('Unauthorized Access, please contact your administrator')
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
.id{
  position:absolute;
}
.ml-1{
  color:white;
}
.ad{
  color:white;
}
.text-center{
  color:white;
}
</style>

