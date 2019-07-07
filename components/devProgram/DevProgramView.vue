<template>
    <mdb-container>
      <mdb-row>
        {{processPrograms}}
        <mdb-col md="8" lg="7" class="mx-auto float-none">
    <mdb-card class="weather-card">
      <mdb-card-body class="pb-3">
      <div class="d-flex flex-row">
        <div>
          <mdb-card-title class="font-weight-bold mb-2">{{fullname}}</mdb-card-title> 
          <mdb-card-text><mdb-icon icon="clock" class="pr-2" /><timeago :datetime="dateRegistered"></timeago></mdb-card-text>
        </div>
      </div>
        <mdb-card-title class="font-weight-bold">{{accronym}}</mdb-card-title>
        <mdb-card-text>{{programList}}</mdb-card-text>
        <div>
        </div>
        <div class="collapse-content">
          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <div v-if="show2" class="collapse-item">
              <mdb-tbl borderless sm class="mb-0">
                <tbody>
                  <tr>
                    <td class="font-weight-normal align-middle">Email Address</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">{{emailAddress}}</p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="envelope" size="lg" class="text-info" />
                    </td>
                  </tr>
                </tbody>
              </mdb-tbl>
            </div>
          </transition>
          <hr />
          <mdb-btn tag="a" @click.native="show2 = !show2" :class="['p-1 my-1 mr-0 deep-purple-text', !show2 && 'collapsed']" flat darkWaves aria-expanded="false" aria-controls="collapseExample" />
        </div>
      </mdb-card-body>
    </mdb-card>
        </mdb-col>
          <div class="text-center" v-if="isContentLoading">
            <b-spinner variant="primary" label="Text Centered"></b-spinner>
          </div>
      </mdb-row>
    </mdb-container>
    <!-- /.Card Container -->
</template>

<script>
import VueTimeago from 'vue-timeago'
import {mdbEdgeHeader, mdbGoogleMap,mdbContainer,mdbTbl,mdbChip,mdbProgress,mdbTooltip,mdbStretchedLink, mdbRow, mdbCol, mdbCard,  mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon, mdbFlippingCard, mdbAvatar } from 'mdbvue';
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
import { mixin as clickaway } from 'vue-clickaway';
export default {
   components: {
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
    mdbProgress
  },
   data() {
      return {
        tabIndex: 0,
        programList: [],
        show1: false,
        show2: false,
        height1: '2.65rem',
        zoom:15,
        markers: [{ lat: 45.508, lng: -73.587 }],
        center: { lat: 45.508, lng: -73.587 },
        places: ['Lagos'],
        currentPlace: null,
        accronym: '',
        emailAddress: '',
        dateRegistered:'',
        fullname: '',
        missionStatment: ''
      }
    },
    mounted(){
      this.create();
    },
    computed: {
          ...mapGetters({devPrograms: 'devprogram/getDevPrograms',isContentLoading:'devprogram/getLoaderStatus'}),
            processPrograms(){
              if(typeof this.devPrograms[0] != 'undefined' || this.devPrograms[0] != null){
                this.dataObject = this.devPrograms[0]
                for(var i = 0; i < this.dataObject.programTrainingProviders.length; i++){
                  var object = this.dataObject.programTrainingProviders[i]
                  if(object.id == localStorage.getItem('centerId')){
                     this.getProgramDetails(this.dataObject._id)
                  }
                }
              } 
           } 
    },
    methods: {
      ...mapActions({loadPrograms: 'devprogram/loadDevPrograms',program: 'devprogram/loadProgramDetails'}),
        create() {
          this.loadPrograms().then((ev) => {console.log("Load successfully")})
          .catch((e) => {
            console.log(e.message)
          })
        },
        getProgramDetails(id){
          this.program(id).then(function(program){

               // this.programList = this.dataObject.programTrainingProviders
              /// return this.programList = this.dataObject.programTrainingProviders
            this.programList.push(program);
            })
        },
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-primary', 'text-light']
        } else {
          return ['bg-light', 'text-info']
        }
      },         
    toggle1() {
      this.show1 = !this.show1;
      this.show1 ? this.height1 = this.fullHeight1 : this.height1 = '2.65rem';
    },
    beforeEnter(el) {
      el.style.height = '0';
      el.style.opacity = '0';
    },
    enter(el) {
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = '1';
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = '1';
    },
    leave(el) {
      el.style.height = '0';
      el.style.opacity = '0';
    },
    away1() {
      this.gradient1 = false;
    },
    away2() {
      this.gradient2 = false;
    },
    away3() {
      this.gradient3 = false;
    },
    away4() {
      this.gradient4 = false;
    },
    setPlace(place) {
      this.currentPlace = place;
    }

  },
  mixins: [clickaway]
  }
</script>
<style scoped>
h4 {
  font-weight: bold;
}
.collapse {
  transition: height 0.3s;  
}
.collapse-item {
  transition: all 0.5s;  
}
.gradient-card {
  transition: 0.5s ease-in-out; 
}
.gradient-card.show {
  margin-top: 20px;
}
.gradient-card .card-image {
  display: inline-block;
  width: 100%;
  transition: 0.5s ease-in-out; 
}
.gradient-card.show .card-image {
  width: 112px;
  height: 112px;
  margin-left: 20px;
  margin-top: -20px;
}
.gradient-card .card-body {
  padding: 0 1.25rem;
}
.collapse-content .fas.fa-heart:hover {
  color: #f44336 !important;
}
.collapse-content .fas.fa-share-alt:hover {
  color: #0d47a1 !important;
}
.card.weather-card .collapse-content a.collapsed:after {
  content: 'Expand'; }

.card.weather-card .collapse-content a:not(.collapsed):after {
  content: 'Collapse'; }
</style>

<style>
.card.chart-card .classic-tabs .nav.tabs-white li a {
  color: #757575;
  font-weight: 500;
}
.card.chart-card .classic-tabs .nav.tabs-white li a.active {
  color: #673ab7;
}
.myMap {
  position: absolute;
  top: 10px;
  left: 25%;
  z-index: 5;
  background-color: #fff;
  padding: 5px;
  border: 1px solid #999;
  text-align: center;
  font-family: 'Roboto','sans-serif';
  line-height: 30px;
  padding-left: 10px;
}

</style>

