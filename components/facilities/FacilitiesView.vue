<template>
<div>
    <b-row>
            <b-col align-self="end"  class="pb-3 pl-auto" cols="12">
                <mdb-btn size="lg" color="primary"  @click="$emit('changeComponent',{component: 'NewFacilities', id: null})" class="text-white primary-color-dark">Create New</mdb-btn>
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
              <b-col v-for="body in processFacilities" :key="body.id" cols="3">
                <div>
                  <mdb-card wide>
                    <mdb-card-up style="background-color: #2BBBAD">
                    </mdb-card-up>
                    <mdb-card-body class="text-center pb-0" cascade>
                      <mdb-card-title><strong>{{body.firstName}} {{body.middleName}} {{body.lastName}}</strong></mdb-card-title>
                      <h5 class="blue-text"><strong>{{body.idNumber}}</strong></h5>
                      <mdb-card-text>{{body.residentialAddress}}</mdb-card-text>
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
</div>
</template>
<script>
import Tabs from 'vue-tabs-component';
import  {mdbTab,mdbSelect, mdbTabItem, mdbTabContent, mdbTabPane, mdbLineChart,  mdbDatatable, mdbTabs, mdbJumbotron, mdbCarousel, mdbCarouselItem, mdbEdgeHeader, mdbGoogleMap,mdbContainer,mdbTbl,mdbChip,mdbProgress,mdbTooltip,mdbStretchedLink, mdbRow, mdbCol, mdbCard,  mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon, mdbFlippingCard, mdbAvatar } from 'mdbvue';
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
export default {
     components: {
    mdbTab,   
    mdbTabItem,   
    mdbTabContent,   
    mdbTabPane,   
    mdbLineChart,   
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
    mdbSelect,
    mdbJumbotron, 
    mdbCarousel, 
    mdbCarouselItem,
    mdbProgress
  },
   data() {
      return {
        pillsActive: 0,
        verticalWithin: 0,
        traineeLis: [],
        dataObject: {},
        tabIndex: 0,
        dataSet: {
          columns: [
            {
              label: 'ID Number',
              field: 'idNumber',
              sort: 'asc'
            },
            {
              label: 'First Name',
              field: 'firstName',
              sort: 'asc'
            },
            {
              label: 'Middle Name',
              field: 'middleName',
              sort: 'asc'
            },
            {
              label: 'Last Name',
              field: 'lastName',
              sort: 'asc'
            },
            {
              label: 'Gender',
              field: 'gender',
              sort: 'asc'
            },
            {
              label: 'Phone Number',
              field: 'phoneNumber',
              sort: 'asc'
            },
            {
              label: 'Date Registered',
              field: 'dateRegistered',
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
          ...mapGetters({facilities: 'facilities/getFacilities',isContentLoading:'facilities/getLoaderStatus'}),
          processFacilities: function(){
            if(typeof this.facilities[0] != 'undefined' || this.facilities[0] != null){
               this.dataObject = this.facilities[0]
               this.facilityList = this.dataObject.facilityList
               return this.facilityList = this.dataObject.facilityList
            }
            //if(Array.isArray(this.trainees)){}
          },
          processTableData: function(){
            if(Array.isArray(this.facilityList)){
              this.dataObject = this.apprentice[0]
              this.dataSet.rows = this.dataObject.facilityList
              return  this.dataSet;
            }else{
              this.dataSet.rows = this.facilities.facilityList
              return  this.dataSet;
            }
           
          } 
    },
    methods: {
      ...mapActions({loadFacilities: 'facilities/loadFacilities'}),
        create() {
          this.loadFacilities().then(function (e){console.log("successfully load")}).catch(function(error){console.log(error.message)});
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
