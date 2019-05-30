<template>
<<<<<<< HEAD
  <div class="app flex-row align-items-center">
    <div class="id">
      <img src="~/assets/images/bg.jpg" alt="Logo" height="5000" width="4000">
      </div>
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
                  <img src="~/assets/images/logo.png" alt="Logo">
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
=======
<div class="main">
    <b-navbar class="navbar-expand-lg navbar-dark bg-dark static-top" toggleable="lg" type="dark" variant="info">
        <div class="container">
        <b-navbar-brand href="#">CSLMIS COMPANIES</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#">Login</b-nav-item>
            
            </b-navbar-nav>
        </b-collapse>
        </div>
    </b-navbar>

<div class="section">
           
           <div class="logo" align="center">

            <!-- Portfolio Item Heading -->
            <img src="~/assets/images/Logo1.png" alt="Logo image">
            
            </div>
            <!-- Portfolio Item Row -->
    <div class="text">
                <h1 class="cent" align="center" >CONSTRUCTION SKILLS LABOUR MARKET <br> INFORNMATION SYSTEM</h1>
                <h4 class="cent" align="center" >Register your company now............</h4>
            <div class="butt">
                <b-col lg="15" align="center" class="pb-2"><b-button variant="primary"><h1>Register <i class="fa fa-arrow-right"></i></h1></b-button></b-col>
            </div>
    </div>                  
</div>
 
<b-row class="cards">
    <b-col>
                <b-card>
                    <div class="box-part">
                        <i class="fa fa-address-card fa-3x"></i>
                        <div class="title">
                             <h2>Job Listings</h2>
                        </div>

                        <div class="good">
                            <span>
                                <p class="lead mb-0">  
                                 List Jobs and recieve applications form qualified Artisans
                                </p>
                            </span>
                        </div>
                        </div>
                </b-card>
    </b-col>

    <b-col>
                <b-card>
                    <div class="box-part">
                        <i class="fa fa-address-card fa-3x"></i>
                        <div class="tittle">
                            <h2>Trade Ratings</h2>
                        </div>

                        <div class="good">
                            <span>
                               <p class="lead mb-0">
                                Provide labour statistics of certified licensed Artsans and get high ratings
                               </p>
                            </span>
                        </div>
                        </div>
                </b-card>
    </b-col>

     <b-col>
                <b-card>
                    <div class="box-part">
                        <i class="fa fa-address-card fa-3x"></i>
                        <div class="title">
                             <h2>Employment</h2>
                        </div>

                        <div class="good">
                            <span>
                                <p class="lead mb-0">
                                    Employment of qualified Artisans from Job adverts
                                    </p>
                            </span>
                        </div>
                        </div>
                </b-card>
    </b-col>
            
            
        
        </b-row>
 

<footer id="sticky-footer" class="py-4 bg-dark text-white-50">
    <div class="cont text-center">  
    <small>Copyright &copy; CSLMIS</small>
    </div>
</footer>
</div>
>>>>>>> 5dd587c6647464ea3f38bf0e2e576cc8ec43c1e0
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

export default {
    layout: 'empty',
    data(){
      return {
         
  }
    }  
}
</script>
<style>
*{padding:0; margin:0;box-sizing:border-box;} 
h1,h2,h3,{margin-bottom: 5px}
.section{
    display:flex;
    flex-direction: column;
    text-align: justify;
    justify-content: center;
    align-items:center;  
}

.text {
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
color:white;
min-width: auto;
min-height: 12em;
background: rgba(0, 0, 0, 0.3)
}

.good {
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
min-width: auto;
min-height: auto;

}
.section:nth-of-type(1){
    background-image: url("../assets/images/1.jpg");
    background-position: center;  
}

.text{
padding-top:1%;
padding-bottom:2%;
}

.butt{
   padding-top: 2%;
}

.logo{
    
    padding-bottom: 2%;
}

.cards{
    flex: 1 0 auto;
    display:flex;
    flex-direction: row;
    text-align: justify;
    justify-content: center;
    align-items:center;
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 15%;
    padding-right: 15%;
}

</style>
