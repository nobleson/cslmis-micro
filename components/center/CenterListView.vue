<template>
<section>
    <b-row>
            <b-col align-self="end"  class="pb-3 pl-auto" cols="12">
                <mdb-btn size="lg" color="primary"  @click="$emit('changeComponent',{component: 'CenterRegister', id: null})" class="text-white primary-color-dark">Create New</mdb-btn>
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
              <b-row>
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
                </b-row>
          <div class="text-center" v-if="isContentLoading">
            <b-spinner variant="primary" label="Text Centered"></b-spinner>
          </div>
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
 </section>
</template>
<script>
import Tabs from 'vue-tabs-component';
import {mdbDatatable, mdbTabs, mdbJumbotron, mdbCarousel, mdbCarouselItem, mdbEdgeHeader, mdbGoogleMap,mdbContainer,mdbTbl,mdbChip,mdbProgress,mdbTooltip,mdbStretchedLink, mdbRow, mdbCol, mdbCard,  mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon, mdbFlippingCard, mdbAvatar } from 'mdbvue';
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
    mdbProgress
  },
   data() {
      return {
        tabIndex: 0,
        dataSet: {
          columns: [
            {
              label: 'Center No.',
              field: 'centerNumber',
              sort: 'asc'
            },
            {
              label: 'Name',
              field: 'fullLegalName',
              sort: 'asc'
            },
            {
              label: 'Address',
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
            },
            {
              label: 'State',
              field: 'state',
              sort: 'asc'
            },
            {
              label: 'Local Government',
              field: 'localgovernment',
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
          this.loadTrainingProvider().then((ev) => {
          })
          .catch((e) => {
          })
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

