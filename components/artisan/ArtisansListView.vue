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
  <mdb-row>
  <mdb-col class="m-5" cols="12">
    <mdb-tab tabs color="primary" justify>
      <mdb-tab-item icon="square" :active="pillsActive==0" @click.native.prevent="pillsActive=0">Card View</mdb-tab-item>
      <mdb-tab-item icon="table" :active="pillsActive==1" @click.native.prevent="pillsActive=1">Table View</mdb-tab-item>
    </mdb-tab>
    <mdb-tab-content>
      <mdb-tab-pane class="fade" key="show1" v-if="pillsActive==0">
        <mdb-row>
         <b-col v-for="arti in processPersonaDetails" :key="arti.id" cols="4">
         <div>
            <ul class="list-unstyled">
              <li class="media">
                  <img v-if="arti.photo == null" src="https://firebasestorage.googleapis.com/v0/b/cslmis-admin-bucket/o/profile%2FAdmin%201.png?alt=media&token=76b1edbe-4aee-4074-bb79-0ffd84dac37e" class="rounded-circle mr-3" height="120px" width="150px" alt="avatar" style="max-height: 100px; max-width: 150px"/>
                 <img v-else :src="arti.photo" class="rounded-circle mr-3" height="120px" width="150px" alt="avatar" style="max-height: 100px; max-width: 150px" />
                <div class="media-body">
                  <h5 class="mt-0 mb-2 font-weight-bold">{{arti.firstName}}  {{arti.middleName}}  {{arti.lastName}}</h5>
                  <h6 v-if="arti.registrationStatus == '1'"><i class="fas fa-check-circle green-text"> Verified Artisan</i></h6> 
                  <h6 v-else><i class="fas fa-exclamation-triangle red-text"> Not Verified Artisan</i></h6> 
                  <p>{{arti.permanentAddress}}</p>
                  <h5><mdb-badge pill color="success">{{arti.trade}}</mdb-badge></h5>
                    <b-button variant="primary"  @click="$emit('changeComponent',{component:'ArtisanProfile',data: arti})" >Manage</b-button>
                </div>
              </li>
            </ul>
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
import * as firebase from 'firebase/app'
import 'firebase/storage'
import  uuidv4 from 'uuid/v4';
import datepicker from 'vue-date-picker'
import vueFlashcard from 'vue-flashcard';
import Dropzone from 'nuxt-dropzone'
import Tabs from 'vue-tabs-component';
import  {mdbBadge,mdbModal,mdbModalHeader,mdbModalTitle,mdbModalBody,mdbModalFooter,mdbInput,mdbTab,mdbSelect, mdbTabItem, mdbTabContent, mdbTabPane, mdbLineChart,  mdbDatatable, mdbTabs, mdbJumbotron, mdbCarousel, mdbCarouselItem, mdbEdgeHeader, mdbGoogleMap,mdbContainer,mdbTbl,mdbChip,mdbProgress,mdbTooltip,mdbStretchedLink, mdbRow, mdbCol, mdbCard,  mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon, mdbFlippingCard, mdbAvatar } from 'mdbvue';
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
    mdbBadge,
    mdbTab,   
    mdbTabItem,   
    mdbTabContent,   
    mdbTabPane,      
    mdbModal,
    Dropzone,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter, 
    mdbInput,  
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
        pillsActive: 0,
        verticalWithin: 0,      
        tabIndex: 0,
        batchModal: false,
        personaForm: {
          firstName: '',
          middleName: '',
          lastName: '',
          gender: '',
          dateOfBirth: '',
          disabilityType: '',
          phoneNumber: '',
          emailAddress: '',
          contactAddress: '',
          cityOfResidence: '',
          stateOfResidence: '',
          centerOfGraduation: '',
          trade: '',
          uniqueLearnersNumber: '',
          competencyLevel: '',
          stateOrigin: '',
          localGovernmentOrigin: '',
          dateRegistered: '',
          nationality: '',
          photo: ''
        },

        dataSet: {
          columns: [
            {
              label: 'Unique Number',
              field: 'uniqueLearnersNumber',
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
              label: 'Phone Number',
              field: 'phoneNumber',
              sort: 'asc'
            },
            {
              label: 'Contact Address',
              field: 'contactAddress',
              sort: 'asc'
            },
            {
              label: 'State Residence',
              field: 'stateOfResidence',
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
          console.log("Artisans:"+JSON.stringify(this.persona));
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
