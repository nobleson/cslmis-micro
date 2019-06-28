<template>
  <section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header style="background: #2BBBAD"/>
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none">
     <b-link @click="$emit('changeComponent',{component: 'UserView', id: null})"  href="#" class="card-link text-white"><mdb-icon icon="arrow-left" size="lg" class="text-white" /> View All Users</b-link>
    <mdb-card class="weather-card">
      <mdb-card-body class="pb-3">
      <div class="d-flex flex-row">
        <img v-if="userData.photoUrl == null" src="https://firebasestorage.googleapis.com/v0/b/cslmis-admin-bucket/o/profile%2FAdmin%201.png?alt=media&token=76b1edbe-4aee-4074-bb79-0ffd84dac37e" class="rounded-circle mr-3" height="120px" width="150px" alt="avatar" style="max-height: 100px; max-width: 150px"/>
        <img v-else :src="userData.photoUrl" class="rounded-circle mr-3" height="120px" width="150px" alt="avatar" style="max-height: 100px; max-width: 150px"/>
       
        <div>
          <mdb-card-title class="font-weight-bold mb-2">{{userData.displayName}}</mdb-card-title> 
          <mdb-card-text><mdb-icon icon="clock" class="pr-2" /><timeago :datetime="userData.metadata.creationTime"></timeago></mdb-card-text>
        </div>
      </div>
        <mdb-card-title class="font-weight-bold">{{userData.customClaims.portal}}</mdb-card-title>
        <mdb-card-text><b-button>Block User</b-button></mdb-card-text>

        <mdb-tooltip trigger="hover">
            <div class="tooltip">Website</div>
                    <b-link href="#" target="_blank" class="float-right p-1 my-1">More Actions</b-link>
          </mdb-tooltip>
        <div class="collapse-content">
          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <div v-if="show2" class="collapse-item">
              <mdb-tbl borderless sm class="mb-0">
                <tbody>
                  <tr>
                    <td class="font-weight-normal align-middle">Telephone Number</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">{{userData.phoneNumber}}</p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="phone" size="lg" class="amber-text" />
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-normal align-middle">Email Address</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">{{userData.email}}</p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="envelope" size="lg" class="text-info" />
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-normal align-middle">Email Verified</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">{{userData.emailVerified}}</p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="check-circle" size="lg" class="amber-text" />
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-normal align-middle">User Role</td>
                    <td class="float-right font-weight-normal">
                      <p v-if="userData.customClaims.admin === false" class="mb-1">Data Clerk</p>
                      <p v-else class="mb-1">Admin</p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="user" size="lg" class="amber-text" />
                    </td>
                  </tr>
                   <tr>
                    <td class="font-weight-normal align-middle">User Status</td>
                    <td class="float-right font-weight-normal">
                      <p v-if="userData.customClaims.loginStatus === '0'" class="mb-1">Unblocked</p>
                      <p v-else class="mb-1">Blocked</p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="ban" size="lg" class="amber-text" />
                    </td>
                  </tr>                 

                  <tr>
                    <td class="font-weight-normal align-middle">Last Login Time</td>
                    <td class="float-right font-weight-normal">
                      <p v-if="userData.metadata.lastSignInTime === null"></p>
                      <p v-else class="mb-1"><timeago :datetime="userData.metadata.lastSignInTime"></timeago></p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="hotel" size="lg" class="amber-text" />
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
import {mdbEdgeHeader, mdbGoogleMap,mdbContainer,mdbTbl,mdbProgress,mdbTooltip,mdbStretchedLink, mdbRow, mdbCol, mdbCard,  mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon, mdbFlippingCard, mdbAvatar } from 'mdbvue';
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
    mdbProgress,
    LMap,
    LTileLayer,
    LMarker
  },
  props: ['userData'],
  data() {
    return {
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
