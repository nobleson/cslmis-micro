<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row v-show="isRegistered" class="justify-content-center">
      <b-col md="8">
        <b-alert show variant="success">
          <h4 class="alert-heading">Congratulations!</h4>
          <p>
            Your account has been created successfully, please check your email to activate it.
          </p>
          <hr> 
          <p class="mb-0">
            Proceed to <router-link to="/">Login</router-link>
          </p>
        </b-alert>
        </b-col>
      </b-row>
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
                  <img src="~/assets/images/logo.png" alt="Logo">
                </div>
                <h1>CORBON</h1>
              </b-card-body>
            </b-card>
            <b-card no-body class="p-4">
              <b-card-body>
              <b-form>
                <h1>Register</h1>
                <p class="text-muted">Create your account</p>
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text" v-model="user.username"  class="form-control" placeholder="Username" autocomplete="username" />
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text>@</b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text" v-model="user.email"  class="form-control" placeholder="Email" autocomplete="email" />
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password" v-model="user.password"  class="form-control" placeholder="Password" autocomplete="new-password" />
                </b-input-group>

                <b-input-group class="mb-4">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password" class="form-control" placeholder="Repeat password" autocomplete="new-password" />
                </b-input-group>

                <b-button variant="success"  @click="signUp" block>Create Account</b-button>
                  <b-row>
                      <b-col class="signup">
                    <span class="pull-right mt-20">Already have an account? <router-link to='/'>Login</router-link></span>
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
        <span class="ml-1">&copy; 2019 Admin Portal.</span>
        <span>Powered by </span>
        <a href="https://corbon.gov.ng"> CORBON </a>
      </b-row>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'Register',
  layout: "auth",
  isRegistered: false,
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: '',
        isSignIn: false
      }
    }
  },
  methods: {
    ...mapActions({authenticateUser: 'authentication/authenticateUser'}),
    signUp() {
      this.authenticateUser(this.user).then(e => {
      //  this.isRegistered = true;
       this.$router.push('/');
      });
    }
  }  
}
</script>
<style scoped>
.signup{
    margin-top: 50px;
}
.bg-primary{
  background-color: #3E4095;  
}
.primary{
  background-color: #3E4095;  
}
</style>