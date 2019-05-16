<template>
<div class="main">
    <b-navbar class="navbar-expand-lg navbar-dark bg-dark static-top" toggleable="lg" type="dark" variant="info">
        <div class="container">
        <b-navbar-brand href="#">CSLMIS COMPANIES</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#"><b-button variant="primary" @click="gotologin">Login</b-button></b-nav-item>
            
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
                <b-col lg="15" align="center" class="pb-2"><b-button variant="primary" @click="gotoregister"><h1>Register <i class="fa fa-arrow-right"></i></h1></b-button></b-col>
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
</template>
<script>
export default {
    layout: 'empty',
    data(){
      return {
         
  }
    },
    methods: {
        gotoregister(){
            this.$router.push("/register")
        },
      gotologin(){
            this.$router.push("/login")
        }
    },  

}
</script>
<style>
*{padding:0; margin:0;box-sizing:border-box;} 

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