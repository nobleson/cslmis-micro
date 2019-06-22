<template>
<div>
    <b-row>
            <b-col align-self="end"  class="pb-3 pl-auto" cols="12">
                <mdb-btn size="lg" color="primary"  @click="$emit('changeComponent',{component: 'NewAssesor', id: null})" class="text-white primary-color-dark">Create New</mdb-btn>
             <hr>
            </b-col>
            <hr>
      </b-row>
 <div class="classic-tabs">      
 <mdb-tabs
    :active="0"
    tabs
    card
    color="primary"
    class="mb-5"
    :links="[
      { text: 'Card View', icon: 'square', bigIcon: true  },
      { text: 'Table View', icon: 'table', bigIcon: true  }]"
    :transition-duration="0.5"
    transition-style="linear"
  >
    <template :slot="'Card View'">
      <mdb-container>
          <div class="text-center" v-if="isContentLoading">
            <b-spinner variant="primary" label="Text Centered"></b-spinner>
          </div>
            <b-row>
              <b-col v-for="assesor in processAssesors" :key="assesor.id" cols="3">
              <div>
                <mdb-card md="4">
                  <mdb-card-up>
                    <img  class="card-image-top" src="../../assets/images/bg1.png" alt="a photo of a house facade"/>
                  </mdb-card-up>
                  <mdb-avatar class="mx-auto white" circle>
                    <img  :src="assesor.photo" class="rounded-circle" style="position: absolute; left: 30%; bottom: 250px; max-height: 100px; max-width: 150px"/>
                  </mdb-avatar>
                  <mdb-card-body class="text-center pb-0"  style="padding-top: 100px" cascade>
                    <mdb-card-title><strong>{{assesor.surname}} {{assesor.middleName}} {{assesor.otherName}}</strong></mdb-card-title>
                    <h5 class="blue-text"><strong>{{assesor.phoneNumber}}</strong></h5>
                    <mdb-card-text>{{assesor.contactAddress}}</mdb-card-text>
                      <timeago :datetime="assesor.dateRegistered"></timeago>
                    <mdb-card-footer>
                      <mdb-btn size="lg" outline="primary"  @click="$emit('changeComponent',{component: 'AssesorProfile',data: assesor})" class="primary-color-dark">Manage</mdb-btn>
                      </mdb-card-footer>
                  </mdb-card-body>
                </mdb-card>
                </div>
              </b-col>
              </b-row>
      </mdb-container>
    </template>
    <template :slot="'Table View'">
      <mdb-container>
          <mdb-row>
            <mdb-col md="12">
              <mdb-datatable
                :data="processTableData"
                striped
                bordered
                materialInputs
              />
          </mdb-col>
          </mdb-row>
      </mdb-container>
    </template>
  </mdb-tabs>
  </div>
 </div>
</template>
<script>
import VueTimeago from 'vue-timeago'
import {mdbDatatable, mdbTabs, mdbJumbotron, mdbCarousel, mdbCarouselItem, mdbEdgeHeader, mdbGoogleMap,mdbContainer,mdbTbl,mdbProgress,mdbTooltip,mdbStretchedLink, mdbRow, mdbCol, mdbCard,  mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon, mdbFlippingCard, mdbAvatar } from 'mdbvue';
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
export default {
		components: {
    mdbDatatable, 
    mdbTooltip,
    mdbGoogleMap,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardHeader,
    mdbEdgeHeader,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbCardUp,
    mdbCardAvatar,
    mdbCardGroup,
    mdbBtn,
    mdbView,
    mdbMask,
    mdbStretchedLink,
    mdbIcon,
    mdbFlippingCard,
    mdbAvatar,
    mdbTbl,
    mdbTabs, 
    mdbJumbotron, 
    mdbCarousel, 
    mdbCarouselItem,
    mdbProgress
		},
   data() {
      return {
        isContentLoading: true,
        tabIndex: 0,
        dataSet: {
          columns: [
            {
              label: 'Surname',
              field: 'surname',
              sort: 'asc'
            },
            {
              label: 'Middle Name',
              field: 'middleName',
              sort: 'asc'
            },
            {
              label: 'Other Name',
              field: 'otherName',
              sort: 'asc'
            },
            {
              label: 'DOB',
              field: 'dateOfBirth',
              sort: 'asc'
            },
            {
              label: 'Gender',
              field: 'gender',
              sort: 'asc'
            },
            {
              label: 'Email Address',
              field: 'emailAddress',
              sort: 'asc'
            },
            {
              label: 'Contact',
              field: 'contactAddress',
              sort: 'asc'
            }

          ],     
          rows: []
        }

      }
    }, 
    mounted(){
      this.create();
    },
    computed: {
          ...mapGetters({assesors: 'assesors/getAssesors'}),
          processAssesors: function(){
          let json = JSON.parse(JSON.stringify(this.assesors));
          console.log("Json:"+json);
           return  json;
          },
          processTableData: function(){
          this.dataSet.rows = this.assesors;
          //console.log("Json:"+json);
           return  this.dataSet;
          }

    },
    methods: {
      ...mapActions({loadAssesors: 'assesors/loadAssesors'}),
        create() {
          this.loadAssesors().then((ev) => {
             this.successHandleLoder()
          })
          .catch((e) => {
            this.errorHandleLoder() 
          })
        },
       successHandleLoder(){
            return this.isContentLoading = false;
       },
       errorHandleLoder(){
         return this.isContentLoading = true;
       },
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-primary', 'text-light']
        } else {
          return ['bg-light', 'text-info']
        }
      }
        
    }
  }
</script>

