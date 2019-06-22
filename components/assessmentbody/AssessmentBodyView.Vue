<template>
<div>
    <b-row>
            <b-col align-self="end"  class="pb-3 pl-auto" cols="12">
                <mdb-btn size="lg" color="primary"  @click="$emit('changeComponent',{component: 'RegisterAssessmentBody', id: null})" class="text-white primary-color-dark">Create New</mdb-btn>
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
         <b-col v-for="body in processAssessmentBodies" :key="body.id" cols="3">
                <div>
                  <mdb-card wide>
                    <mdb-card-up style="background-color: #2BBBAD">
                      <img src="../../assets/images/assbdy.png" width="100%" max-height="150px" />
                    </mdb-card-up>
                    <mdb-card-avatar color="white" class="mx-auto"><img :src="body.logo" class="rounded-circle mr-3" height=170px width=150px/></mdb-card-avatar>
                    <mdb-card-body class="text-center pb-0" cascade>
                      <mdb-card-title><strong>{{body.fullname}}</strong></mdb-card-title>
                      <h5 class="blue-text"><strong>{{body.accronym}}</strong></h5>
                      <mdb-card-text>{{body.missionStatment}}</mdb-card-text>
                      <mdb-card-footer class="text-muted mt-4"><mdb-btn outline="default" darkWaves size="lg" @click="$emit('changeComponent',{component:'LicensingBodyProfile',data: body})" >Manage</mdb-btn></mdb-card-footer>
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
          ...mapGetters({assessmentbodies: 'assessment/getAssessmentBodies', isContentLoading: 'assessment/getLoaderStatus'}),
          processAssessmentBodies: function(){
          let json = JSON.parse(JSON.stringify(this.assessmentbodies));
          console.log("Json:"+json);
           return  json;
          },
          processTableData: function(){
          this.dataSet.rows = this.assessmentbodies;
          //console.log("Json:"+json);
           return  this.dataSet;
          }
    },
    methods: {
      ...mapActions({loadAssessment: 'assessment/loadAssesssmentBodies'}),
        create() {
          this.loadAssessment().then((ev) => {
            //this.compayData = this.companies; 
          })
          .catch((e) => {
          })
        },
     getSelectValue(value, text) {
      console.log(value);
    },
    removeOption(data) {
      if (data.length < 2) return;
      data.pop();
    },
    removeAllOptions(data) {
      if (data.length < 2) return;
      data.splice(1);
    },
    addOption(data) {
      data.push({
        selected: false,
        text: 'Option nr ' + data.length,
        value: 'Option ' + data.length
      });
    },
    selectOption(key) {
      this.basicOptions.forEach(option => {
        option.selected = false;
      });
      this.$set(this.basicOptions[key], 'selected', true);
      this.basicOptions.sort();
    },
    selectOptions(...keys) {
      this.multiOptions.forEach(option => {
        option.selected = false;
      });
      keys.forEach(key => {
        this.$set(this.multiOptions[key], 'selected', true);
      });
      this.multiOptions.sort();
    }       
    }
  }
</script>

