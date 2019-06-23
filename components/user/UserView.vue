<template>
<div>
    <b-row>
            <b-col align-self="end"  class="pb-3 pl-auto" cols="12">
                <mdb-btn size="lg"  color="primary" @click.native="info = true"> New User <mdb-icon icon="user" class="text-white primary-color-dark"/></mdb-btn>
             <hr>
            </b-col>
              <mdb-modal removeBackdrop :show="info" @close="info = false" info style="margin-top: 100px">
                <mdb-modal-header>
                  <mdb-modal-title>Register</mdb-modal-title>
                </mdb-modal-header>
                <mdb-modal-body>
              <b-alert v-if="successState" show variant="success">User Registered Successfully</b-alert>
              <b-alert v-if="errorState" show variant="danger">User Fail to Register. Try again</b-alert>     
                </mdb-modal-body>
                  <mdb-modal-body class="mx-3 grey-text">
                    <mdb-input v-model="form.displayName" label="Username" icon="user" class="mb-5"/>
                    <mdb-input v-model="form.email" label="Email Address" icon="envelope" type="email" class="mb-5"/>
                    <mdb-input v-model="form.phoneNumber" label="Phone Number" icon="phone" type="text"/>
                  </mdb-modal-body>
                <mdb-modal-footer center>
                <mdb-btn color="primary" @click.native.prevent="register()" :disabled='userFormReset'>Submit
                  <b-spinner small v-if="userFormReset === true"></b-spinner>
                  <span class="sr-only" v-if="userFormReset === true">Wait...</span>
                </mdb-btn>
                </mdb-modal-footer>
              </mdb-modal>
      </b-row>

 <div class="classic-tabs">      
 <mdb-tabs
    :active="0"
    tabs
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
         <b-col v-for="user in processUsers" :key="user.id" cols="4">
         <div>
              <div class="card card-cascade">
                <div class="view view-cascade gradient-card-header blue-gradient">

                  <h4 class="card-header-title mb-3">{{user.displayName}}</h4>
                
                  <p class="card-header-subtitle mb-0"></p>

                </div>
                <div class="card-body card-body-cascade text-center">

                  <p class="card-text">{{user.email}}</p>
                      <b-button variant="primary"  @click="$emit('changeComponent',{component:'UserProfile',data: user})" >Manage</b-button>
                </div>
              </div>
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
import Tabs from 'vue-tabs-component';
import  {mdbTab,mdbSelect, mdbTabItem, mdbTabContent, mdbTabPane, mdbLineChart,  mdbDatatable, mdbTabs, mdbJumbotron, mdbCarousel, mdbCarouselItem, mdbEdgeHeader, mdbGoogleMap,mdbContainer,mdbTbl,mdbChip,mdbProgress,mdbTooltip,mdbStretchedLink, mdbRow, mdbCol, mdbCard,  mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon, mdbFlippingCard, mdbAvatar, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbInput, mdbTextarea } from 'mdbvue';
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
    mdbProgress,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbInput,
    mdbTextarea
  },
   data() {
      return {
      form: {
          email: '',
          emailVerified: false,
          phoneNumber: '',
          password: 'c-lmis',
          displayName: '',
          photoURL: 'https://firebasestorage.googleapis.com/v0/b/cslmis-admin-bucket/o/profile%2FAdmin%201.png?alt=media&token=76b1edbe-4aee-4074-bb79-0ffd84dac37e',
          disabled: false
        },        
        tabIndex: 0,
        dataSet: {
          columns: [
            {
              label: 'Username',
              field: 'displayName',
              sort: 'asc'
            },
            {
              label: 'Email Address',
              field: 'email',
              sort: 'asc'
            }
            
          ],     
          rows: []
        },
        users: [],
        info: false,
        userFormReset: false

      }
    }, 
    mounted(){
      this.create();
    },
    computed: {
          ...mapGetters({listUsersResult: 'user/getUsers', isContentLoading: 'user/getLoaderStatus', adminUser: 'user/getUser',successState: 'user/getSuccessState',errorState: 'user/getErrorState'}),
          processUsers: function(){
                let json  = JSON.parse(JSON.stringify(this.listUsersResult.users));
               // console.log("Json:"+json);
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
      register() {
        this.userFormReset = !this.userFormReset
        this.createUser(this.form).then(e => {
        console.log('User registered');
        }).catch(console.error).finally(reset => this.resetForm());
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
      resetForm(){
         this.userFormReset = !this.userFormReset
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

