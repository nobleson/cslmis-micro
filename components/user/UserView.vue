<template>
<div>
    <b-row>
            <b-col align-self="end"  class="pb-3 pl-auto" cols="12">
                <mdb-btn size="lg" color="primary"  @click="$emit('changeComponent',{component: 'NewTrade', id: null})" class="text-white primary-color-dark">Create New</mdb-btn>
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
        {{adminUser}}
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
      user: {
          email: '',
          emailVerified: false,
          phoneNumber: '',
          password: '',
          displayName: '',
          photoURL: '',
          disabled: false
        },        
        tabIndex: 0,
        dataSet: {
          columns: [
            {
              label: 'Trade Name',
              field: 'tradeName',
              sort: 'asc'
            },
            {
              label: 'Description',
              field: 'tradeDecsription',
              sort: 'asc'
            }
          ],     
          rows: []
        },
        users: []

      }
    }, 
    mounted(){
      this.create();
      this.loadUser('noblesityav@yahoo.com');
    },
    computed: {
          ...mapGetters({listUsersResult: 'user/getUsers', isContentLoading: 'user/getLoaderStatus', adminUser: 'user/getUser'}),
          processUsers: function(){
                       // var users = [];
            //this.listUsersResult.users.forEach(function(userRecord) {
             //   var userObj = {user : userRecord.toJSON}
             //   users.push(userObj);
               // console.log('user', userRecord.toJSON());
            //  }); 
                let json  = JSON.parse(JSON.stringify(this.listUsersResult.users));
                return  json;

              },
              processTableData: function(){
              this.dataSet.rows = JSON.parse(JSON.stringify(this.listUsersResult.users));
              //console.log("Json:"+json);
              return  this.dataSet;
          }
    },
    methods: {
      ...mapActions({createUser: 'user/createUser', loadUsers: 'user/loadUsers',fetchUserDataByEmail: 'user/fetchUserDataByEmail' }),
      addUser() {
        this.createUser(this.user).then(e => {
        console.log('User created');
        });
      },
      create() {
        this.loadUsers().then(e => {
        console.log('Users loaded');
        });
      },
      loadUser(email) {
        this.fetchUserDataByEmail(email).then(e => {
        console.log('User loaded');
        });
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
.form-elegant .font-small {
    font-size: 0.8rem; }

.form-elegant .z-depth-1a {
    -webkit-box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25);
    box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25); }

.form-elegant .z-depth-1-half,
.form-elegant .btn:hover {
    -webkit-box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15);
    box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15); }

.form-elegant .modal-header {
    border-bottom: none; }

.modal-dialog .form-elegant .btn .fab {
    color: #2196f3!important; }

.form-elegant .modal-body, .form-elegant .modal-footer {
    font-weight: 400; }
</style>

