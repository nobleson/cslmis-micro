<template>
  <section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header style="background: #2BBBAD"/>

    <!-- Card Container -->
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none">
     <b-link @click="$emit('changeComponent',{component: 'CenterListView', id: null})"  href="#" class="card-link text-white"><mdb-icon icon="arrow-left" size="lg" class="text-white" /> View All Training Providers</b-link>
    <mdb-card class="weather-card">
      <mdb-card-body class="pb-3">
      <div class="d-flex flex-row">
        <img src="../../assets/images/provider.png"  class="rounded-circle mr-3" style="max-height: 100px; max-width: 150px" alt="avatar"/>
        <div>
          <mdb-card-title class="font-weight-bold mb-2">{{providerData.fullLegalName}}</mdb-card-title> 
          <mdb-card-text><mdb-icon icon="clock" class="pr-2" /><timeago :datetime="providerData.dateRegistered"></timeago></mdb-card-text>
        </div>
      </div>
        <mdb-card-title class="font-weight-bold">{{providerData.acronym}}</mdb-card-title>
        <mdb-card-text>Center No.</mdb-card-text>
        <div>
            <gmap-map
              :center="center"
              :zoom="12"
              style="width:100%;  height: 200px;"
            >
              <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                @click="center=m.position"
              ></gmap-marker>
            </gmap-map>
        </div>
        <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
            <div class="tooltip">Website</div>
                    <b-link :href="providerData.website" target="_blank" class="float-right p-1 my-1">Visit Website</b-link>
          </mdb-tooltip>
        <div class="collapse-content">
          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <div v-if="show2" class="collapse-item">
              <mdb-tbl borderless sm class="mb-0">
                <tbody>
                  <tr>
                    <td class="font-weight-normal align-middle">Legal Status</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">{{providerData.legalLatatus}}</p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="star" size="lg" class="amber-text" />
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-normal align-middle">Official Address</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">{{providerData.officialAddress}}</p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="map-marked" size="lg" class="text-info" />
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-normal align-middle">Phone Number</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">{{providerData.telephone}}</p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="phone" size="lg" class="amber-text" />
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-normal align-middle">Email Address</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">{{providerData.email}}</p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="envelope" size="lg" class="amber-text" />
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-normal align-middle">State</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">{{providerData.state}}</p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="map-marked" size="lg" class="amber-text" />
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-normal align-middle">Local Government</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">{{providerData.localGovernment}}</p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="map-marked" size="lg" class="amber-text" />
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
      </mdb-row>
    </mdb-container>
    <!-- /.Card Container -->
  </section>

</template>

<script>
import VueTimeago from 'vue-timeago'
import {mdbEdgeHeader, mdbGoogleMap,mdbContainer,mdbTbl,mdbChip,mdbProgress,mdbTooltip,mdbStretchedLink, mdbRow, mdbCol, mdbCard,  mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon, mdbFlippingCard, mdbAvatar } from 'mdbvue';
import { mixin as clickaway } from 'vue-clickaway';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
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
    mdbProgress,
    LMap,
    LTileLayer,
    LMarker
  },
  props: ['licensingBodyData'],
  data() {
    return {
      providerData: {
        _id: '',
        fullLegalName: '',
        acronym: '',
        nationality: '',
        legalLatatus: '',
        officialAddress: '',
        postalAddress: '',
        telephone: '',
        email: '',
        website: '',
        contactPersonsNumber: '',
        contactPersonsEmail: '',
        dateFounded: '',
        primaryCtivities: {},
        noPermanentTrainer: '',
        noAdjunctTrainers: '',
        noAdminStaff: '',
        localGovernment: '',
        state: '',
        dateRegistered: ''
      },
      show1: false,
      show2: false,
      height1: '2.65rem',
      zoom:15,
      markers: [{ lat: 45.508, lng: -73.587 }],
      center: { lat: 45.508, lng: -73.587 },
      places: ['Lagos'],
      currentPlace: null

    }
  },
  mounted() {
    this.geolocate();
  },
  methods: {
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
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }

  },
  mixins: [clickaway]

};
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
