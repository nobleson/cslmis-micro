
<template>
  <section style="background: #ededed; padding-bottom: 100px">
    <!-- Purple Header -->
    <mdb-edge-header style="background: #2BBBAD"/>

    <!-- Card Container -->
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none">
     <b-link @click="$emit('changeComponent',{component: 'ArtisansListView', id: null})"  href="#" class="card-link text-white"><mdb-icon icon="arrow-left" size="lg" class="text-white" /> View All Artisans</b-link>
        <mdb-card class="chart-card">
          <mdb-card-body class="d-flex flex-row">
            <img :src="artiData.photo" class="rounded-circle mr-3" height="50px" width="50px" alt="avatar" />
            <div>
              <mdb-card-title class="font-weight-bold mb-2">{{artiData.surname}}  {{artiData.middleName}}  {{artiData.otherName}}</mdb-card-title>
               <mdb-card-text><mdb-icon icon="clock" class="pr-2" /><timeago :datetime="artiData.dateOfBirth"></timeago></mdb-card-text>
            </div>
          </mdb-card-body>
          <div class="classic-tabs">
            <mdb-tab class="tabs-white nav-fill" justify>
              <mdb-tab-item class="ml-0" :active="tab==0" @click.native.prevent="tab=0">Profile</mdb-tab-item>
              <mdb-tab-item :active="tab==1" @click.native.prevent="tab=1">Provider</mdb-tab-item>
              <mdb-tab-item :active="tab==2" @click.native.prevent="tab=2">Apprentiship</mdb-tab-item>
            </mdb-tab>
            <mdb-tab-content>
              <mdb-tab-pane class="fade" key="show1" v-if="tab==0">
            <div>
              <mdb-tbl borderless sm class="mb-0">
                <tbody>
                  <tr>
                    <td class="font-weight-normal align-middle">Surname</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">{{artiData.surname}}</p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="user" size="lg" class="amber-text" />
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-normal align-middle">Middle Name</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">{{artiData.middleName}}</p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="user" size="lg" class="text-info" />
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-normal align-middle">Other Name</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">{{artiData.otherName}}</p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="user" size="lg" class="amber-text" />
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-normal align-middle">Date of Birth</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">{{artiData.dateOfBirth}}</p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="history" size="lg" class="amber-text" />
                    </td>
                  </tr>
                   <tr>
                    <td class="font-weight-normal align-middle">Gender</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">{{artiData.gender}}</p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="venus-mars" size="lg" class="amber-text" />
                    </td>
                  </tr>                 

                  <tr>
                    <td class="font-weight-normal align-middle">Place of Birth</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">{{artiData.placeOfBirth}}</p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="map-marked" size="lg" class="amber-text" />
                    </td>
                  </tr>
                  
                  <tr>
                    <td class="font-weight-normal align-middle">Permanent Address</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">{{artiData.permanentAddress}}</p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="map-marked" size="lg" class="amber-text" />
                    </td>
                  </tr>

                  <tr>
                    <td class="font-weight-normal align-middle">Email Address</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">{{artiData.emailAddress}}</p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="envelope" size="lg" class="amber-text" />
                    </td>
                  </tr>
       
                  <tr>
                    <td class="font-weight-normal align-middle">State Origin</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">{{artiData.state_origin}}</p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="map-marked" size="lg" class="amber-text" />
                    </td>
                  </tr>
    
                  <tr>
                    <td class="font-weight-normal align-middle">Local Government</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">{{artiData.local_government}}</p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="map-marked" size="lg" class="amber-text" />
                    </td>
                  </tr>
   
                  <tr>
                    <td class="font-weight-normal align-middle">Nitionality</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">{{artiData.nationality}}</p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="map-marked" size="lg" class="amber-text" />
                    </td>
                  </tr>                                        

                </tbody>
              </mdb-tbl>
            </div>
              </mdb-tab-pane>
              <mdb-tab-pane class="fade" key="show2" v-if="tab==1">
                <div>
                  <mdb-tbl borderless sm class="mb-0">
                    <tbody>
                      <tr>
                        <td class="font-weight-normal align-middle">Center Name</td>
                        <td class="float-right font-weight-normal">
                          <p class="mb-1">{{providerData.centerName}}</p>
                        </td>
                        <td class="float-right mr-3">
                          <mdb-icon icon="map-marked" size="lg" class="amber-text" />
                        </td>
                      </tr>
                      <tr>
                        <td class="font-weight-normal align-middle">Center Number</td>
                        <td class="float-right font-weight-normal">
                          <p class="mb-1">{{providerData.centerNumber}}</p>
                        </td>
                        <td class="float-right mr-3">
                          <mdb-icon icon="list" size="lg" class="text-info" />
                        </td>
                      </tr>
                      <tr>
                        <td class="font-weight-normal align-middle">Candidate ID Number</td>
                        <td class="float-right font-weight-normal">
                          <p class="mb-1">{{providerData.candidateNumber}}</p>
                        </td>
                        <td class="float-right mr-3">
                          <mdb-icon icon="list" size="lg" class="amber-text" />
                        </td>
                      </tr>
                      <tr>
                        <td class="font-weight-normal align-middle">Trade Learnt</td>
                        <td class="float-right font-weight-normal">
                          <p class="mb-1">{{providerData.candidateTrade}}</p>
                        </td>
                        <td class="float-right mr-3">
                          <mdb-icon icon="hand-holding-usd" size="lg" class="amber-text" />
                        </td>
                      </tr>
                    </tbody>
                  </mdb-tbl>
                </div>
              </mdb-tab-pane>
              <mdb-tab-pane class="fade" key="show3" v-if="tab==2">
                <div>
                  <mdb-tbl borderless sm class="mb-0">
                    <tbody>
                      <tr>
                        <td class="font-weight-normal align-middle">Apprentiship Place</td>
                        <td class="float-right font-weight-normal">
                          <p class="mb-1">{{apprentishipData.apprentishipPlace}}</p>
                        </td>
                        <td class="float-right mr-3">
                          <mdb-icon icon="map-marked" size="lg" class="amber-text" />
                        </td>
                      </tr>
                      <tr>
                        <td class="font-weight-normal align-middle">Apprentiship Year</td>
                        <td class="float-right font-weight-normal">
                          <p class="mb-1">{{apprentishipData.apprentishipYear}}</p>
                        </td>
                        <td class="float-right mr-3">
                          <mdb-icon icon="calendar" size="lg" class="text-info" />
                        </td>
                      </tr>
                      <tr>
                        <td class="font-weight-normal align-middle">Master's Phone Number</td>
                        <td class="float-right font-weight-normal">
                          <p class="mb-1">{{apprentishipData.masterPhoneNumber}}</p>
                        </td>
                        <td class="float-right mr-3">
                          <mdb-icon icon="phone" size="lg" class="amber-text" />
                        </td>
                      </tr>
                      <tr>
                        <td class="font-weight-normal align-middle">Master's Name</td>
                        <td class="float-right font-weight-normal">
                          <p class="mb-1">{{apprentishipData.masterFullName}}</p>
                        </td>
                        <td class="float-right mr-3">
                          <mdb-icon icon="user" size="lg" class="amber-text" />
                        </td>
                      </tr>
                    </tbody>
                  </mdb-tbl>
                </div>
              </mdb-tab-pane>
            </mdb-tab-content>
          </div>
        </mdb-card>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <!-- /.Card Container -->
  </section>

</template>

<script>
import { mdbContainer,mdbEdgeHeader, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbIcon, mdbView, mdbMask, mdbBtn, mdbTooltip, mdbProgress, mdbTbl, mdbChip, mdbTab, mdbTabItem, mdbTabContent, mdbTabPane, mdbLineChart } from 'mdbvue';
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'CardProPage',
  components: {
    mdbContainer,
    mdbEdgeHeader,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbIcon,
    mdbView,
    mdbMask,
    mdbBtn,
    mdbTooltip,
    mdbProgress,
    mdbTbl,
    mdbChip,
    mdbTab,
    mdbTabItem,
    mdbTabContent,
    mdbTabPane,
    mdbLineChart
  },
  mounted() {
    this.fullHeight1 = this.$refs.collapse1.$el.scrollHeight + 'px';
    this.fullHeight2 = '100%';
  },
  props: ['artiData'],
  data() {
    return {
          apprentishipData: 
          {
          apprentishipPlace: '',
          apprentishipYear: '',
          masterPhoneNumber: '',
          masterFullName: ''
          },
          providerData:
          {
          centerName: '',
          centerNumber: '',
          candidateNumber: '',
          candidateTrade: ''
        },
      show1: false,
      show2: false,
      height1: '2.65rem',
      gradient1: false,
      gradient2: false,
      gradient3: false,
      gradient4: false,
      tab: 0,
      lineChartData: {
        labels: ["8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM"],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,255,255,0.4)',
            borderColor: '#673ab7',
            pointBackgroundColor: 'transparent',
            borderWidth: 2,
            pointBorderColor: '#673ab7',
            pointBorderWidth: 1,
            data: [885, 884, 887, 883, 888, 889, 888]
          }
        ]
      },
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
              color: "rgba(0, 0, 0, 0.1)",
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            }
          }]
        }
      }
    };
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
    }
  },
  mixins: [clickaway]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
