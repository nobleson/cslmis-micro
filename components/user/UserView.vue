<template>
<div>
  <FlashMessage></FlashMessage>
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
                </mdb-modal-body>
                  <mdb-modal-body class="mx-3 grey-text">
                    <mdb-input v-model="form.displayName" label="Username" icon="user" class="mb-5"/>
                    <mdb-input v-model="form.email" label="Email Address" icon="envelope" type="email" class="mb-5"/>
                    <mdb-input v-model="form.phoneNumber" label="Phone Number" icon="phone" type="text"/>
                  </mdb-modal-body>
                <mdb-modal-footer center>
                <mdb-btn color="primary" @click.native.prevent="register()" :disabled='formReset'>Submit
                  <b-spinner small v-if="formReset === true"></b-spinner>
                  <span class="sr-only" v-if="formReset === true">Wait...</span>
                </mdb-btn>
                </mdb-modal-footer>
              </mdb-modal>
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


              <b-col v-for="user in processUsers" :key="user.id" cols="4">
              <div>
                <mdb-card testimonial>
                  <mdb-card-up gradient="aqua" class="lighten-1" style="height: 100px"></mdb-card-up>
                  <mdb-card-avatar color="white" class="mx-auto">
                    <img v-if="user.photoURL == null" src="https://firebasestorage.googleapis.com/v0/b/cslmis-admin-bucket/o/profile%2FAdmin%201.png?alt=media&token=76b1edbe-4aee-4074-bb79-0ffd84dac37e" class="rounded-circle"/>
                   <img v-else :src="user.photoURL" class="rounded-circle"/>
                    </mdb-card-avatar>
                  <mdb-card-body>
                    <h5 class="blue-text"><strong>{{user.displayName}}</strong></h5>
                    <hr />
                        <p class="card-text">{{user.email}}</p>
                        <b-button variant="primary"  @click="$emit('changeComponent',{component:'UserProfile',data: user})" >Manage</b-button>
                  </mdb-card-body>
                </mdb-card>

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
        pillsActive: 0,
        verticalWithin: 0,   
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
        formReset: false

      }
    }, 
    mounted(){
      this.create();
    },
    computed: {
          ...mapGetters({listUsersResult: 'user/getUsers', isContentLoading: 'user/getLoaderStatus', adminUser: 'user/getUser',successState: 'user/getSuccessState',errorState: 'user/getErrorState'}),
        processUsers: function(){
              return this.listUsersResult.users;
            },
            processTableData: function(){
              //this.dataSet.rows =  JSON.parse(JSON.stringify(this.listUsersResult.users));
              this.dataSet.rows =  this.listUsersResult.users;
              return this.dataSet;
        }

    },
    methods: {
      ...mapActions({createUser: 'user/createUser', loadUsers: 'user/loadUsers',fetchUserDataByEmail: 'user/fetchUserDataByEmail' }),

      register() {
        if(!this.form.displayName) {
          this.$bvModal.msgBoxOk('Username or Display name is required.')
          return false;
        }
        else if(!this.form.email) {
          this.$bvModal.msgBoxOk('A valid email address is required.')
          return false;
        }
        else if(!this.form.phoneNumber) {
          this.$bvModal.msgBoxOk('A valid phone number is required.')
          return false;
        }else{ 
          this.formReset = !this.formReset
          this.form.phoneNumber = "+234"+this.form.phoneNumber.replace(/^0+/, '');
         this.createUser(this.form).then(e =>this.resetForm()).catch(function (error) {{
          console.log('User registration fail '+error);
          }}); 
        }
      },
      watchSuccessState(){
          if(this.successState){
            this.flashMessage.success({title: 'GOT IT', message: 'User registered successfully',icon: true});
            this.form.displayName = this.form.email = this.form.phoneNumber = '';
          }
        },
        watchErrorState(){ 
          if(this.errorState){
            this.flashMessage.error({title: 'Oops!: ', message: 'User registration fails! Try again',icon: true});
          }
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
         this.formReset = !this.formReset
         this.watchSuccessState();
         this.watchErrorState();
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

