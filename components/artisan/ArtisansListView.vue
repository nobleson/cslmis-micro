<template>
<div>
    <b-row>
            <b-col align-self="end"  class="pb-3 pl-auto" cols="12">
                <mdb-btn size="lg" color="primary"  @click="$emit('changeComponent',{component: 'NewArtisan', id: null})" class="text-white primary-color-dark">Create New</mdb-btn>
                <mdb-btn size="lg" color="primary"  @click="$emit('changeComponent',{component: 'BatchArtisans', id: null})" class="text-white primary-color-dark pull-right">Batch Artisans</mdb-btn>
             <hr>
            </b-col>
            <hr>
      </b-row>
 <div class="classic-tabs">      
 <mdb-tabs
    :active="0"
    tabs
    defualt
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
         <b-col v-for="arti in processPersonaDetails" :key="arti.id" cols="6">
         <div>
            <ul class="list-unstyled">
              <li class="media">
                <img class="d-flex mr-3" :src="arti.photo" alt="photo">
                <div class="media-body">
                  <h5 class="mt-0 mb-2 font-weight-bold">{{arti.surname}}  {{arti.middleName}}  {{arti.otherName}}</h5>
                  <!--Review-->
                  <i class="fas fa-star blue-text"> </i>
                  <i class="fas fa-star blue-text"> </i>
                  <i class="fas fa-star blue-text"> </i>
                  <i class="fas fa-star blue-text"> </i>
                  <i class="fas fa-star blue-text"> </i>
                  <p>{{arti.permanentAddress}}</p>
                    <b-button variant="primary"  @click="$emit('changeComponent',{component:'ArtisanProfile',data: arti})" >Manage</b-button>
                </div>
              </li>
            </ul>
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
 </div>
</template>
<script>
import * as firebase from 'firebase/app'
import 'firebase/storage'
import  uuidv4 from 'uuid/v4';
import datepicker from 'vue-date-picker'
import vueFlashcard from 'vue-flashcard';
import Dropzone from 'nuxt-dropzone'
import Tabs from 'vue-tabs-component';
import  {mdbModal,mdbModalHeader,mdbModalTitle,mdbModalBody,mdbModalFooter,mdbInput,mdbTab,mdbSelect, mdbTabItem, mdbTabContent, mdbTabPane, mdbLineChart,  mdbDatatable, mdbTabs, mdbJumbotron, mdbCarousel, mdbCarouselItem, mdbEdgeHeader, mdbGoogleMap,mdbContainer,mdbTbl,mdbChip,mdbProgress,mdbTooltip,mdbStretchedLink, mdbRow, mdbCol, mdbCard,  mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon, mdbFlippingCard, mdbAvatar } from 'mdbvue';
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
const firebaseConfig = {
    apiKey: "AIzaSyA73Wdeedk01ZoL-oWX08r5UxWing28knM",
    authDomain: "cslmis-admin.firebaseapp.com",
    databaseURL: "https://cslmis-admin.firebaseio.com",
    projectId: "cslmis-admin",
    storageBucket: "gs://cslmis-admin-bucket",
    messagingSenderId: "263391859932",
    appId: "1:263391859932:web:4a6a7871600a3acd"
  };
  
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : '' 

export default {
     components: {
    mdbModal,
    Dropzone,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter, 
    mdbInput,  
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
            dropOptions: {
            url: "https://httpbin.org/post",
            maxFilesize: 2, // MB
            maxFiles: 4,
            chunking: true,
            chunkSize: 500, // Bytes
            thumbnailWidth: 150, // px
            thumbnailHeight: 150,
            addRemoveLinks: true
          },
        tabIndex: 0,
        batchModal: false,
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
              label: 'Address',
              field: 'permanentAddress',
              sort: 'asc'
            },
            {
              label: 'Phone Number',
              field: 'phoneNumber',
              sort: 'asc'
            },
            {
              label: 'State',
              field: 'state_origin',
              sort: 'asc'
            },
            {
              label: 'LG Area',
              field: 'local_government',
              sort: 'asc'
            }            

          ],     
          rows: []
        }

      }
    }, 
    mounted(){
      this.createArtisanList();
    },
    computed: {
          ...mapGetters({persona: 'artisan/getPersona', isContentLoading: 'artisan/getLoaderStatus'}),
          processPersonaDetails: function(){
          let json = JSON.parse(JSON.stringify(this.persona));
          //console.log("Json:"+JSON.stringify(this.persona));
           return  json;
          },
          processTableData: function(){
          this.dataSet.rows = this.persona;
          //console.log("Json:"+json);
           return  this.dataSet;
          }
          
    },
    methods: {
      ...mapActions({loadArtisans: 'artisan/loadArtisans'}),
        createArtisanList() {
          this.loadArtisans().then((ev) => {
          //   this.successHandleLoder()
          })
          .catch((e) => {
           // this.errorHandleLoder() 
          })
        },
        removeAllFiles() {
          this.$refs.el.removeAllFiles();
        },
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-primary', 'text-light']
        } else {
          return ['bg-light', 'text-info']
        }
      },
     cw_value: function(i) {
          this.clickedArtisan = this.$refs.refWord[i];
            //"I don't know how to get inner text from a clicked value"
     },
    onComplete: function(){
          alert("It's Done");
     },
    }
  }
</script>
<style <style lang="scss" scoped>

</style>
