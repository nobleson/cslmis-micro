<template>
<section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header color="indigo"/>
    <!-- Card Container -->
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="10" lg="9" class="mx-auto float-none white z-depth-1 py-2 px-2">
      <mdb-row>
            <mdb-col>
              <mdb-card wide>
                <b-link @click="$emit('changeComponent',{component: 'AssessmentBodyView', id: null})"  href="#" class="card-link"><mdb-icon fab icon="arrow-left" />Back</b-link>
                <mdb-view hover cascade>
                <mdb-media>
                  <mdb-media-image class="d-flex align-self-start mr-3" :src="assessBodyData.logo" alt="Logo" />
                  <mdb-media-body>
                    <h5 class="mt-0 font-weight-bold">{{assessBodyData.fullname}}</h5>
                    <p>{{assessBodyData.missionStatment}}</p>
                  <a class="icons-sm tw-ic"><mdb-icon fab icon="linkedIn" /></a>    
                  <a class="icons-sm tw-ic"><mdb-icon fab icon="twitter" /></a>
                  <a class="icons-sm fb-ic"><mdb-icon fab icon="facebook" /></a>
                  </mdb-media-body>
                </mdb-media>
                </mdb-view>
              </mdb-card>
            </mdb-col>
          </mdb-row>
          <mdb-card-body>
           <mdb-card-text>
          <dl class="row">
            <dt class="col-sm-4">Phone Number</dt>
            <dd class="col-sm-8">{{assessBodyData.telephoneNumber}}</dd>

            <dt class="col-sm-4">Email Address</dt>
            <dd class="col-sm-8">{{assessBodyData.emailAddress}}</dd>

            <dt class="col-sm-4">Website Address</dt>
            <dd class="col-sm-8">{{assessBodyData.websiteAddress}}</dd>

            <dt class="col-sm-4 text-truncate">City</dt>
            <dd class="col-sm-8">{{assessBodyData.city}}</dd>
            <dt class="col-sm-4 text-truncate">Date Registered</dt>
            <dd class="col-sm-8">{{assessBodyData.dateRegistered}}</dd>
          </dl>
           </mdb-card-text>
            <mdb-card-text>
              <blockquote class="blockquote bq-primary">
                <p class="bq-title">Contact Address</p>
                <p>{{assessBodyData.contactAddress}}</p>
              </blockquote>
           </mdb-card-text>
          </mdb-card-body>
            <mdb-card>
                <mdb-card-body>
                  <mdb-google-map
                    name="reg"
                    class="col-md-12"
                    style=" height: 500px"
                    :zoom="14"
                    :markerCoordinates="[{
                      latitude: 40.725118,
                      longitude: -73.997699,
                      title: 'New York'
                    }]">
                  </mdb-google-map>
                </mdb-card-body>
              </mdb-card>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <!-- /.Card Container -->
  </section>


</template>
<script>
  import { mdbEdgeHeader, mdbContainer, mdbRow, mdbCol, mdbCardBody, mdbInput,mdbAvatar,mdbCard, mdbCardImage, mdbCardHeader, mdbCardTitle, mdbCardText, mdbCardFooter,mdbMedia,mdbGoogleMap, mdbMediaBody, mdbMediaImage, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon  } from 'mdbvue';
export default {
  		components: {
      mdbEdgeHeader,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbCardBody,
      mdbInput,
      mdbBtn,
      mdbAvatar,
			mdbCard,
			mdbCardImage,
			mdbCardHeader,
			mdbCardTitle,
			mdbCardText,
			mdbCardFooter,
			mdbCardUp,
			mdbCardAvatar,
      mdbCardGroup,
      mdbGoogleMap, 
			mdbView,
			mdbMask,
      mdbIcon,
      mdbMedia,
      mdbMediaBody,
      mdbMediaImage 

		},
    props: ['assessBodyData'],
    data(){
      return{

      }
    },
   methods: {
      handleSubmit(e) {
        console.log('Form submitted');
      }
    }
}
</script>
<style scoped>
  small {
    font-weight: 300;
  }
</style>