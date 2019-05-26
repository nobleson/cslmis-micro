<template>
<div class="main">
    
    <mdb-navbar  class="top">
    <!-- Navbar brand -->
    <mdb-navbar-brand >
      <img src="~/assets/images/lg.png">
    </mdb-navbar-brand>
      <mdb-navbar-nav right>
       <mdb-btn color="white" @click="login" variant="primary" class="px-4"><h6 class="buut2">Login</h6></mdb-btn>
      </mdb-navbar-nav>
    </mdb-navbar>
    

<div class="section">
           
           <div class="logo" align="center">

            <!-- Portfolio Item Heading -->
            <img src="~/assets/images/new.png" alt="Logo image">
            
            </div>
            <!-- Portfolio Item Row -->
            <div class="text">
                <h1 class="cent" align="center" >CONSTRUCTION SKILLS LABOUR MARKET <br> INFORNMATION SYSTEM</h1>
                <h4 class="cent" align="center" >Register your company now............</h4>
            <div class="butt">
                <b-col lg="15" align="center">
                    <mdb-btn color="white" @click="gotoregister"><h1 class="buut"><b>Register</b> <i class="fa fa-arrow-right"></i></h1>
                    </mdb-btn>
                </b-col>
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

<footer  class="py-4 green text-white-50">
    <div class="cont text-center">  
    <small>Copyright &copy; CSLMIS</small>
    </div>
</footer>
</div>
</template>
<script>
import { mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbContainer, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from 'mdbvue';
import { mdbBtn } from 'mdbvue';
export default {
    layout:'empty',
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarNav,
      mdbNavItem,
      mdbContainer,
      mdbBtn
        },
    data(){
      return {
         
  }
    },
    methods: {
       gotoregister(){
           this.$router.push('/cslmis/login')
       },
    login() {
        this.$router.push('/cslmis/login');
     },
   }
}
</script>
<style>
*{padding:0; margin:0;box-sizing:border-box;} 

footer{
    color:#008751;
}

.section{
    display:flex;
    flex-direction: column;
    text-align: justify;
    justify-content: center;
    align-items:center;  
    padding-top:4%;
}

.text {
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
color:white;
min-width: auto;
background: rgba(0, 0, 0, 0.548)
}

 .cent{
      color:whitesmoke;
      font-family:'Roboto';
      text-shadow: 20%;
      
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
   
    background: url("../assets/images/3.png") no-repeat;  
    background-color: rgba(14, 12, 12, 0.918);
    background-position: center 0;
    background-size: 100% auto;
}

.text{
padding-top:1%;
padding-bottom:2%;
}

.butt{
        
   padding-top: 2%;
}

.buut{
        
 color:#008753;
}
.buut2{
        
 color:#008753;
}

.logo{
    
    padding-bottom: 2%;
}
.top{

    background-color:#008753;
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
    padding-left: 17%;
    padding-right: 15%;
}

</style>