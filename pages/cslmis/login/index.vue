<template>
  <div class="app flex-row align-items-center">
  
    <div class="container">
       <b-row>
           <b-col md="8">
           <h4 class="text-center">CSLMIS Portal</h4>
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
                      <b-button @click="logIn" variant="primary" class="px-4">Login</b-button>
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
        <a href="https://admin.cslmis.gov.ng">CSLMIS</a>
        <span class="ml-1" >&copy; 2019 Admin Portal.</span>
        <span class="ad">Powered by </span>
        <a href="https://corbon.gov.ng"> CORBON </a>
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
      }
    }
  },
  methods: {
    ...mapActions({authenticateUser: 'authentication/authenticateUser'}),
    logIn() {
      this.authenticateUser(this.user).then(e => {
       console.log(JSON.stringify("Login:"+e));
        this.$router.push('/cslmis/dashboard');
      });
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
.id{
  position: absolute;
}
.ml-1{
  color:white;
}
.ad{
   color:white;
}

</style>
