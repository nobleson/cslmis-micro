<template>
<div>
    <b-row>
            <b-col align-self="end"  class="pb-3 pl-auto" cols="12">
                <mdb-btn size="lg" color="primary"  @click="$emit('changeComponent',{component: 'NewTrade', id: null})" class="text-white primary-color-dark">Create New</mdb-btn>
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
        isContentLoading: true,
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
          ...mapGetters({trades: 'trade/getTrades'}),
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
          this.loadTrades().then((ev) => {
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

