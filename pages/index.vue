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
    <div class="container">
						<div class="row">
							
							<div class="col-xs-12">
								<div class="row steps-section">
									<div class="col-sm-4 col-xs-12">
										<div class="steps-description mb-xs clearfix">
											<i class="fa fa-list fa-3x"></i>
										    <h3 class="medium-heading">Job Listings</h3>
											<p>
												List Jobs and recieve applications form qualified Artisans
											</p>
										</div>
									</div>
									<div class="col-sm-4 col-xs-12">
										<div class="steps-description mb-xs clearfix">
											<i class="fa fa-star fa-3x"></i>
											<h3 class="medium-heading">Trade Ratings</h3>
											<p>
												Provide labour statistics of certified licensed Artsans and get high ratings
											</p>
										</div>
									</div>
									<div class="col-sm-4 col-xs-12">
										<div class="steps-description clearfix">
											<i class="fa fa-handshake fa-3x"></i>
											<h3 class="medium-heading">Employment</h3>
											<p>
												Employment of qualified Artisans from Job adverts
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
                       
    </b-row>

<footer  class="py-4 text-white-100">
    <div class="cont text-center">  
    <small>Copyright &copy; CSLMIS 2019</small>
    </div>
</footer>
</div>
</template>
<script>
import { mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbCard, mdbDropdownItem, mdbContainer, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from 'mdbvue';
import { mdbBtn } from 'mdbvue';
export default {
    layout:'empty',
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarNav,
      mdbNavItem,
      mdbContainer,
      mdbBtn,
      mdbCard
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

.lead{
    display: flex;
    align-content: center;
    font-family: Arial Black;
    
}
footer{
    color:#008751;
    font: Arial, Times;
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
      color:white;
      font-family:'Arial Black';
      
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
        
 color:#008751;
}
.buut2{
        
 color:#008751;
}

.logo{
    
    padding-bottom: 2%;
}
.top{

    background-color:#008751;
}
.cont{
    color:white;
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
footer{
    background-color: #008751;
}

</style>