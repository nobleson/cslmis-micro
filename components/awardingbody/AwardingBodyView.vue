<template>
<section>
    <b-row>
            <b-col align-self="end"  class="pb-3 pl-auto" cols="12">
                <mdb-btn size="lg" color="primary"  @click="$emit('changeComponent',{component: 'NewAwardingBody', id: null})" class="text-white primary-color-dark">Create New</mdb-btn>
             <hr>
            </b-col>
            <hr>
      </b-row>
  <mdb-row>
  <mdb-col class="m-5" cols="12">
    <mdb-tab tabs color="primary" justify>
      <mdb-tab-item icon="square" :active="pillsActive==0" @click.native.prevent="pillsActive=0">Card View</mdb-tab-item>
      <mdb-tab-item icon="table" :active="pillsActive==1" @click.native.prevent="pillsActive=1">Table View</mdb-tab-item>
    </mdb-tab>
    <mdb-tab-content>
      <mdb-tab-pane class="fade" key="show1" v-if="pillsActive==0">
        <mdb-row>
                <b-col v-for="body in processAwardingBody" :key="body.id" cols="4">
                <div>
                  <mdb-card wide>
                    <mdb-card-up style="background-color: #2BBBAD">
                      <img src="../../assets/images/certbdy.png" width="100%" max-height="150px" />
                    </mdb-card-up>
                    <mdb-card-avatar color="white" class="mx-auto"><img :src="body.logo" class="rounded-circle mr-3" height=170px width=150px/></mdb-card-avatar>
                    <mdb-card-body class="text-center pb-0" cascade>
                      <mdb-card-title><strong>{{body.fullname}}</strong></mdb-card-title>
                      <h5 class="blue-text"><strong>{{body.accronym}}</strong></h5>
                      <mdb-card-text>{{body.missionStatment}}</mdb-card-text>
                      <mdb-card-footer class="text-muted mt-4"><mdb-btn outline="default" darkWaves size="lg" @click="$emit('changeComponent',{component:'AwardingBodyProfile',data: body})" >Manage</mdb-btn></mdb-card-footer>
                    </mdb-card-body>
                  </mdb-card>
                  </div>
                </b-col>
        </mdb-row>
        <div class="text-center" v-if="isContentLoading">
            <b-spinner variant="primary" label="Text Centered"></b-spinner>
          </div>
      </mdb-tab-pane>
      <mdb-tab-pane class="fade" key="show2" v-if="pillsActive==1" style="min-height: 700px; overflow-y: auto;">
        <mdb-card>
              <mdb-tbl style="overflow-y: auto; overflow-x: hidden">
                <mdb-datatable
                  :data="processTableData"
                  striped
                  bordered
                  materialInputs
                  /> 
            </mdb-tbl>  
        </mdb-card>
        </mdb-tab-pane>
    </mdb-tab-content>
  </mdb-col>
 </mdb-row>
 </section>
</template>
<script>
import Tabs from 'vue-tabs-component';
import {mdbTab, mdbTabItem, mdbTabContent, mdbTabPane,mdbDatatable, mdbTabs, mdbJumbotron, mdbCarousel, mdbCarouselItem, mdbEdgeHeader, mdbGoogleMap,mdbContainer,mdbTbl,mdbChip,mdbProgress,mdbTooltip,mdbStretchedLink, mdbRow, mdbCol, mdbCard,  mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon, mdbFlippingCard, mdbAvatar } from 'mdbvue';
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
    mdbChip,
    mdbTabs, 
    mdbJumbotron, 
    mdbCarousel, 
    mdbCarouselItem,
    mdbProgress,
    mdbTab,
    mdbTabItem,
    mdbTabContent,
    mdbTabPane    
  },
   data() {
      return {
        pillsActive: 0,
        verticalWithin: 0,
        tabIndex: 0,
        dataSet: {
          columns: [
            {
              label: 'Name',
              field: 'fullname',
              sort: 'asc'
            },
            {
              label: 'Accronym',
              field: 'accronym',
              sort: 'asc'
            },
            {
              label: 'Tel. Number',
              field: 'telephoneNumber',
              sort: 'asc'
            },
            {
              label: 'Email Address',
              field: 'emailAddress',
              sort: 'asc'
            },
            {
              label: 'City',
              field: 'city',
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
          ...mapGetters({awardingBodies: 'awardingbody/getAwardingBodies', isContentLoading: 'awardingbody/getLoaderStatus'}),
          processAwardingBody: function(){
          let json = JSON.parse(JSON.stringify(this.awardingBodies));
          console.log("Json:"+json);
           return  json;
          },
          processTableData: function(){
          this.dataSet.rows = this.awardingBodies;
          //console.log("Json:"+json);
           return  this.dataSet;
          }
    },
    methods: {
      ...mapActions({loadAwardingBodies: 'awardingbody/loadAwardingBodies'}),
        create() {
          this.loadAwardingBodies().then((ev) =>{})
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
<style scoped>
  .slide-toggle-enter-active {
    transition: .3s ease-in;
    opacity: 1;
    max-height: 500px;
  }

  .slide-toggle-enter,
  .slide-toggle-leave-active {
    opacity: 0;
    max-height: 0;
  }

  .slide-toggle-leave {
    opacity: 1;
    max-height: 500px;
  }
</style>
