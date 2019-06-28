<template>
<div>
    <b-row>
            <b-col align-self="end"  class="pb-3 pl-auto" cols="12">
                <mdb-btn size="lg" color="primary"  @click="$emit('changeComponent',{component: 'NewProgram', id: null})" class="text-white primary-color-dark">Create New</mdb-btn>
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
              <b-col v-for="program in processPrograms" :key="program.id" cols="6">
              <div>
                <mdb-card class="chart-card">
                  <mdb-card-body class="pb-0">
                    <mdb-card-title class="font-weight-bold">{{program.programName}}<mdb-btn color="success" @click="$emit('changeComponent',{component:'NewProgramTrainingProvider',data: program})" class="pull-right" >Add Training Provider</mdb-btn></mdb-card-title>
                    <p class="card-text mb-4">{{program.programDescription}}</p>
                    
                    <div class="d-flex justify-content-between mb-4">
                      <p><mdb-icon icon="calendar" size="lg" class="text-info pr-2"/>{{program.programYear}}</p>
                      <p><mdb-icon icon="time" size="lg" class="grey-text pr-2"/>{{program.programDuration}}</p>
                    </div>
                      <hr class="my-4">
                      <p class="lead"><strong>All Trainees</strong></p>
                    <div class="d-flex justify-content-between">
                      <p class="display-4 align-self-end">0</p>
                    </div>
                    <hr class="my-4">
                      <p class="lead"><strong>All Training Providers</strong></p>
                    <div class="d-flex justify-content-between">
                      <p class="display-4 align-self-end">{{getProgramProviderData(program._id)}}</p>
                    </div>             
                  </mdb-card-body>
                  <mdb-card>
                    <mdb-card-body>
                      <div>
                         <mdb-tbl style="overflow-y: auto; overflow-x: auto">
                          <mdb-datatable
                            :data="programProviderDataSet"
                            striped
                            bordered
                          />
                       </mdb-tbl>  
                      </div>
                    </mdb-card-body>
                  </mdb-card>

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
                  <mdb-tbl style="overflow-y: auto; overflow-x: auto">
                    <mdb-datatable
                      :data="getProgramData"
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
        selected: ['b'], // Array reference
        options: [
          { value: '', text: '==Select Training Provider==' , disabled: true },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Default Selected Option' },
          { value: 'c', text: 'This is another option' },
          { value: 'd', text: 'This one is disabled'},
          { value: 'e', text: 'This is option e' },
          { value: 'f', text: 'This is option f' },
          { value: 'g', text: 'This is option g' }
        ],
        programProviderDataSet: {
          columns: [
            {
              label: 'S/N',
              field: 'id',
              sort: 'asc'
            },
            {
              label: 'Provider Name',
              field: 'name',
              sort: 'asc'
            },
            {
              label: 'Date Registered',
              field: 'dateRegistered',
              sort: 'asc'
            }
          ],     
          rows: []
        },
        programDataSet: {
          columns: [
            {
              label: 'Program Name',
              field: 'programName',
              sort: 'asc'
            },
            {
              label: 'Description',
              field: 'programDescription',
              sort: 'asc'
            },
            {
              label: 'Year',
              field: 'programYear',
              sort: 'asc'
            },
            {
              label: 'Duration',
              field: 'programDuration',
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
          ...mapGetters({program: 'program/getPrograms',isContentLoading :'program/getLoaderStatus',programProviders: 'program/getProgramProviders'}),
          processPrograms(){
             let json = JSON.parse(JSON.stringify(this.program));
           return  json;
          },
          getProgramData(){
             this.programDataSet.rows = this.program;
             return this.program;
          }

    },
    methods: {
      ...mapActions({loadTradePrograms: 'program/loadTradePrograms',loadProgramProviders: 'program/loadTradeProgramProvider'}),
        create() {
          this.loadTradePrograms().then((ev) => {})
       },
        getProgramProviderData(id){
            this.providers(id)
            this.programProviderDataSet.rows = this.programProviders.programTrainingProviders;
            return this.programProviders.programTrainingProviders.length;
        },
       providers(id){

          this.loadProgramProviders(id).then((ev) => {})
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

