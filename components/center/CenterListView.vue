<template>
<section>
    <b-row>
            <b-col align-self="end"  class="pb-3 pl-auto" cols="12">
                <mdb-btn size="lg" color="primary"  @click="$emit('changeComponent',{component: 'CenterRegister', id: null})" class="text-white primary-color-dark">Create New</mdb-btn>
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
            <b-col v-for="body in processProvider" :key="body.id" cols="4">
            <div>
              <mdb-card wide>
                <mdb-card-up style="background-color: #2BBBAD">
                  <img src="../../assets/images/Asssces.png" width="100%" max-height="150px" />
                </mdb-card-up>
                <mdb-card-avatar color="white" class="mx-auto"><img :src="body.logo" class="rounded-circle mr-3" height=170px width=150px/></mdb-card-avatar>
                <mdb-card-body class="text-center pb-0" cascade>
                  <mdb-card-title><strong>{{body.fullLegalName}}</strong></mdb-card-title>
                  <h5 class="blue-text"><timeago :datetime="body.dateRegistered"></timeago></h5>
                  <mdb-card-text></mdb-card-text>
                  <mdb-card-footer class="text-muted mt-4"><mdb-btn outline="default" darkWaves size="lg" @click="$emit('changeComponent',{component:'CenterDetails',data: body})" >Manage</mdb-btn></mdb-card-footer>
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
import {mdbTab, mdbTabItem, mdbTabContent, mdbTabPane, mdbDatatable, mdbTabs, mdbJumbotron, mdbCarousel, mdbCarouselItem, mdbEdgeHeader, mdbGoogleMap,mdbContainer,mdbTbl,mdbChip,mdbProgress,mdbTooltip,mdbStretchedLink, mdbRow, mdbCol, mdbCard,  mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon, mdbFlippingCard, mdbAvatar } from 'mdbvue';
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
export default {
   components: {
    mdbTab,   
    mdbTabItem,   
    mdbTabContent,   
    mdbTabPane,   
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
              label: 'Name',
              field: 'fullLegalName',
              sort: 'asc'
            },
            {
              label: 'Acronym',
              field: 'accronym',
              sort: 'asc'
            },
            {
              label: 'Tel. Number',
              field: 'telephone',
              sort: 'asc'
            },
            {
              label: 'Email Address',
              field: 'email',
              sort: 'asc'
            },
            {
              label: 'Address',
              field: 'officialAddress',
              sort: 'asc'
            },
            {
              label: 'Date Created',
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
          ...mapGetters({provider: 'provider/getProvider', isContentLoading: 'provider/getLoaderStatus'}),
          processProvider: function(){
          let json = JSON.parse(JSON.stringify(this.provider));
          console.log("Json:"+JSON.stringify(this.provider));
           return  json;
          },
          processTableData: function(){
          this.dataSet.rows = this.provider;
          //console.log("Json:"+json);
           return  this.dataSet;
          }

    },
    methods: {
      ...mapActions({loadTrainingProvider: 'provider/loadprovider'}),
        create() {
          this.loadTrainingProvider().then((ev) => {})
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
.tabs-component {
  margin: 4em 0;
}

.tabs-component-tabs {
  border: solid 1px #ddd;
  border-radius: 6px;
  margin-bottom: 5px;
}

@media (min-width: 700px) {
  .tabs-component-tabs {
    border: 0;
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    margin-bottom: -1px;
  }
}

.tabs-component-tab {
  color: #999;
  font-size: 14px;
  font-weight: 600;
  margin-right: 0;
  list-style: none;
}

.tabs-component-tab:not(:last-child) {
  border-bottom: dotted 1px #ddd;
}

.tabs-component-tab:hover {
  color: #666;
}

.tabs-component-tab.is-active {
  color: #000;
}

.tabs-component-tab.is-disabled * {
  color: #cdcdcd;
  cursor: not-allowed !important;
}

@media (min-width: 700px) {
  .tabs-component-tab {
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 3px 3px 0 0;
    margin-right: .5em;
    transform: translateY(2px);
    transition: transform .3s ease;
  }

  .tabs-component-tab.is-active {
    border-bottom: solid 1px #fff;
    z-index: 2;
    transform: translateY(0);
  }
}

.tabs-component-tab-a {
  align-items: center;
  color: inherit;
  display: flex;
  padding: .75em 1em;
  text-decoration: none;
}

.tabs-component-panels {
  padding: 4em 0;
}

@media (min-width: 700px) {
  .tabs-component-panels {
    border-top-left-radius: 0;
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 0 6px 6px 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    padding: 4em 2em;
  }
}
</style>

