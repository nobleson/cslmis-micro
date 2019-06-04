<template>
<div class="">
  
    <b-navbar toggleable="lg" class="top">
        <div class="container">
        <b-navbar-brand href="#"><img src="~/assets/images/logo.png"></b-navbar-brand>

        <b-navbar-toggle target="nnpm av-collapse">
          
        </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#">
                    <b-button @click="login">login</b-button>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
        
        </div>
    </b-navbar>
    
      
    <header class=" pb-5">
        <div class="container-fluid"> 

           <h1 class="ml-auto">CSLMIS
                <small>Get certified</small>
            </h1>

    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="5000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      
       <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="200"
          src="~/assets/images/slider1.png"
          alt="image slot"
        >
      </b-carousel-slide>

       <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="200"
          src="~/assets/images/slider2.png"
          alt="image slot"
        >
      </b-carousel-slide>

       <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="200"
          src="~/assets/images/slider3.png"
          alt="image slot"
        >
      </b-carousel-slide>

       <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="200"
          src="~/assets/images/slider4.png"
          alt="image slot"
        >
      </b-carousel-slide>

       <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="200"
          src="~/assets/images/slider6.png"
          alt="image slot"
        >
      </b-carousel-slide>
      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
    </b-carousel>
    </div>
   
<section class="container">
    <b-row>  
        <div class="container">         
<div class="bg-white pt-5">
        <h3 class="my-4 text-center">Training Centers </h3>
<div class="ptb steps-section ptb-sm ptb-xs"> 
    <div class="container"> 
      <div class="row"> 
        <div class="col-xs-12"> 
         </div> 
	      <div class="col-xs-12"> 
	        <div class="row steps-section"> 
	           <div class="col-sm-4 col-xs-12"> 
                 <div class="steps-description mb-xs clearfix"> 
                    <i class="stp-one-img steps-img"></i> 
                    <h3 class="medium-heading">Training artisans</h3> 
                    <p> 
                   Providing training for skilled labor to construction companies, organizations and developers on a temporary or permanent basis. Providing training to up-skill builders, developers and supervisors. Providing social empowerment opportunities for trained artisans (Small scale building materials production workshop).
                    </p> 
                </div> 
                </div> 
                <div class="col-sm-4 col-xs-12"> 
                <div class="steps-description mb-xs clearfix"> 
                    <i class="stp-two-img steps-img"></i> 
                                                            
                    <h3 class="medium-heading">Outsourcing</h3> 
                    <p> 
                        In line with our core objectives, we have a pool of trained and competent artisans in the major construction trades (Masonry, Carpentry, Plumbing, Electrical, Tiling, Painting and Steel Fabrication) to be supplied to construction companies and other estate developers who would require their services.
                    </p> 
                </div> 
                </div> 
                <div class="col-sm-4 col-xs-12"> 
                <div class="steps-description clearfix"> 
                     <i class="stp-three-img steps-img"></i> 
                                                                
                    <h3 class="medium-heading">Artisans Program</h3> 
                    <p> 
                   We provide a database for internal and external audiences to perform analysis, profiling, research, surveys and targeted communications to prospective clients, partners and employers.
                    </p> 
                </div> 
                </div> 
              </div> 
            </div> 
         </div> 
        </div> 
    </div>
     </div> 
     </div>  
      </b-row>
    </section>
   <div class="#">
    <footer id="sticky-footer" class="py-4 text-white-50">
        <div class="container text-center">
            <small>Copyright &copy; CSLMIS</small>
        </div>
    </footer>
     </div>
 </header>
</div>

</template>

<script>
import { mdbBtn } from 'mdbvue';
import {mapGetters, mapActions} from 'vuex'
export default {
    layout:'empty',
     component:{
                mdbBtn
              },
    data(){
      return {
          slide: 0,
          sliding: null
        }
    },
     methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      login(){
        this.$router.push('/cslmis/login')
      }
    }
}
</script>

<style>
    #page-content {
        flex: 1 0 auto;
    }

.top{
    background-color: #008751;
    color:rgb(126, 122, 122);
}
footer{
    background-color: #008751;
}
.bg-white {
    padding-bottom: 4%;
}
</style>
