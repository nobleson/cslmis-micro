<template>
<div>
    <b-row>
            <b-col align-self="end"  class="pb-3 pl-auto" cols="12">
                <mdb-btn size="lg" color="primary"  @click="$emit('changeComponent',{component: 'NewTrade', id: null})" class="text-white primary-color-dark">Create New</mdb-btn>
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
         <b-col v-for="trade in processTrades" :key="trade.id" cols="4">
         <div>
              <div class="card card-cascade">
                <div class="view view-cascade gradient-card-header blue-gradient">

                  <h2 class="card-header-title mb-3">{{trade.tradeName}}</h2>
                
                  <p class="card-header-subtitle mb-0"></p>

                </div>
                <div class="card-body card-body-cascade text-center">

                  <p class="card-text">{{trade.tradeDecsription}}</p>
                </div>
              </div>
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
        tabIndex: 0,
        dataSet: {
          columns: [
            {
              label: 'Trade Name',
              field: 'tradeName',
              sort: 'asc'
            },
            {
              label: 'Description',
              field: 'tradeDecsription',
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
          ...mapGetters({trades: 'trade/getTrades', isContentLoading: 'trade/getLoaderStatus'}),
          processTrades: function(){
          let json = JSON.parse(JSON.stringify(this.trades));
          console.log("Json:"+json);
           return  json;
          },
          processTableData: function(){
          this.dataSet.rows = this.trades;
          //console.log("Json:"+json);
           return  this.dataSet;
          }
    },
    methods: {
      ...mapActions({loadTrades: 'trade/loadTrades'}),
        create() {
          this.loadTrades().then((ev) => {})
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

