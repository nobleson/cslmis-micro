<template>
<div class="">
    <b-navbar toggleable="lg" class="top">
        <div class="container">
        <b-navbar-brand href="#"><img src="~/assets/images/logo.png"></b-navbar-brand>

        <b-navbar-toggle target="nnpm av-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#"></b-nav-item>
                <b-nav-item href="#">
                  <b-button @click="login">Login</b-button>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
        
        </div>
    </b-navbar>

    <header class=" pb-5">
        <div class="container">

            <!-- Portfolio Item Heading -->
            <h1 class="my-4">CSLMIS
                <small>Get certified</small>
            </h1>

            <!-- Portfolio Item Row -->
            <div class="row">

                <div>
                    <b-carousel
                            id="carousel-1"
                            v-model="slide"
                            :interval="4000"
                            controls
                            indicators
                            background="#ababab"
                            img-width="1024"
                            img-height="480"
                            style="text-shadow: 1px 1px 2px #333;"
                            @sliding-start="onSlideStart"
                            @sliding-end="onSlideEnd"
                    >
                        <!-- Text slides with image -->
                        <b-carousel-slide
                                caption="First slide"
                                text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                                img-src="https://picsum.photos/1024/480/?image=52"
                        ></b-carousel-slide>

                        <!-- Slides with custom text -->
                        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                            <h1>Hello world!</h1>
                        </b-carousel-slide>

                        <!-- Slides with image only -->
                        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

                        <!-- Slides with img slot -->
                        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                        <b-carousel-slide>
                            <img
                                    slot="img"
                                    class="d-block img-fluid w-100"
                                    width="1024"
                                    height="480"
                                    src="https://picsum.photos/1024/480/?image=55"
                                    alt="image slot"
                            >
                        </b-carousel-slide>

                        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                                a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                            </p>
                        </b-carousel-slide>
                    </b-carousel>
                </div>

               

            </div>
            <!-- /.row -->

            <!-- Related Projects Row -->
        </div>
    </header>
    <section class="bg-white pt-5">
        <h3 class="my-4 text-center">Top Training Centers</h3>
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
                    <h3 class="medium-heading">Choose your programme</h3> 
                    <p> 
                    Start by exploring our programmes to determine which is a good fit for you. 
                    </p> 
                </div> 
                </div> 
                <div class="col-sm-4 col-xs-12"> 
                <div class="steps-description mb-xs clearfix"> 
                    <i class="stp-two-img steps-img"></i> 
                                                            
                    <h3 class="medium-heading">Start your application</h3> 
                    <p> 
                        Ready to apply? The online application will walk you through all application steps. 
                    </p> 
                </div> 
                </div> 
                <div class="col-sm-4 col-xs-12"> 
                <div class="steps-description clearfix"> 
                     <i class="stp-three-img steps-img"></i> 
                                                                
                    <h3 class="medium-heading">Wait for selection</h3> 
                    <p> 
                    Once you’re selected, huge life changes are ahead. If you decide to accept the offer. 
                    </p> 
                </div> 
                </div> 
              </div> 
            </div> 
         </div> 
        </div> 
    </div>

    <div class="container">
    <b-row>
            
      </b-row>
    </div>
        <!-- /.row -->
    </section>
    <footer id="sticky-footer" class="py-4 text-white-50">
        <div class="container text-center">
            <small>Copyright &copy; CSLMIS</small>
        </div>
    </footer>
</div>

</template>

<script>
import { mdbBtn } from 'mdbvue';
import {mapGetters, mapActions} from 'vuex'
export default {
    layout:'empty',
    data(){
      return {
          component:{
              mdbBtn
          },
         
        
        }
    },
      methods:{
            Login(){
                this.$router.push('cslmis/login')
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
    color:white;
}
footer{
    background-color: #008751;
}
</style>
