<template>
<div>
    <b-row>
            <b-col align-self="end"  class="pb-3 pl-auto" cols="12">
                <mdb-btn size="lg" color="primary"  @click="$emit('changeComponent',{component: 'NewProgram', id: null})" class="text-white primary-color-dark">Create New</mdb-btn>
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
         <b-col v-for="program in processPrograms" :key="program.id" cols="6">
         <div>
          <mdb-card class="chart-card">
            <mdb-card-body class="pb-0">
              <mdb-card-title class="font-weight-bold">{{program.programName}}</mdb-card-title>
              <p class="card-text mb-4">{{program.programDescription}}</p>
              <div class="d-flex justify-content-between mb-4">
                <p><mdb-icon icon="calendar" size="lg" class="text-info pr-2"/>{{program.programYear}}</p>
                <p><mdb-icon icon="time" size="lg" class="grey-text pr-2"/>{{program.programDuration}}</p>
              </div>
                <hr class="my-4">
                <p class="lead"><strong>All Trainees</strong></p>
              <div class="d-flex justify-content-between">
                <p class="display-4 align-self-end">887</p>
              </div>
              <hr class="my-4">
                <p class="lead"><strong>All Training Providers</strong></p>
              <div class="d-flex justify-content-between">
                <p class="display-4 align-self-end">100</p>
              </div>             
              <div>
                <b-form-select v-model="selected" :options="options" multiple :select-size="4"></b-form-select>
                <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
              </div>
            <mdb-btn color="success">Add Provider</mdb-btn>
            </mdb-card-body>
            <mdb-card>
              <mdb-card-body>
                <div>
                    <mdb-datatable
                      :data="providersData"
                      striped
                      bordered
                    />
                </div>
              </mdb-card-body>
            </mdb-card>

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
        dataSet: {
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
              label: 'Date Created',
              field: 'dateRegistered',
              sort: 'asc'
            }
          ],     
          rows: []
        },
        providersData: {
          columns: [{
              label: 'Provider No.',
              field: 'id',
              sort: 'asc'
            },
            {
              label: 'Name',
              field: 'name',
              sort: 'asc'
            },
            {
              label: 'Date Registered',
              field: 'date',
              sort: 'asc'
            },],
          rows: [
            {
              id: '57373738',
              name: 'Avaken',
              date: '07/12/2018'
            },
            {
              id: '020292',
              name: 'Sev-Av',
              date: '04/07/2017'
            },
            {
              label: '342522',
              field: 'TY-Fuandation',
              sort: '03/03/2019'
            },]
        }

      }
    }, 
    mounted(){
      this.create();
    },
    computed: {
          ...mapGetters({program: 'program/getPrograms'}),
          processPrograms: function(){
          let json = JSON.parse(JSON.stringify(this.program));
          console.log("Json:"+json);
           return  json;
          },
          processTableData: function(){
          this.dataSet.rows = this.program;
          //console.log("Json:"+json);
           return  this.dataSet;
          }
    },
    methods: {
      ...mapActions({loadTradePrograms: 'program/loadTradePrograms'}),
        create() {
          this.loadTradePrograms().then((ev) => {
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

