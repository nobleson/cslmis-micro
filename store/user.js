export const state = () => ({
    regsuccess: false,
    regerror: false,
    isContentLoading: true,
    userFormReset: false,
    users:  [],
    user: {}
  })
  
  export const mutations = {
    changeFormState (state) {
      state.userFormReset = !state.userFormReset
    },
    successToggle (state) {
        state.regsuccess = !state.regsuccess
      },
    errorToggle (state) {
        state.regerror = !state.regerror
     },
    setUsers (state,data){
      state.users = data
    },
    setUser (state,data){
      state.user = data
    },
    changeLoaderStatus(state){
      state.isContentLoading = !state.isContentLoading;
    } 

  }
  export const getters = {  
    getFormState: state => state.userFormReset,

    getSuccessState: state => state.regsuccess,
  
    getErrorState: state => state.regerror,

    getUsers: state => state.users,
  
    getUser: state => state.user,

    getLoaderStatus: state => state.isContentLoading
  }
  
  export const actions= {

    loadUsers(vuexContext){
      let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/admin/user/getAll';
     this.$axios.$get(herokuUrl)
      .then(function (response){
       // let data = JSON.parse(response);
        vuexContext.commit('setUsers',response);
        vuexContext.commit('changeLoaderStatus')
        console.log("LoaderStatus:"+vuexContext.state.isContentLoading)
      })
      .catch(function (error) {
        console.log("users record fails to load")
      })
      .finally(function () {
        console.log("load process completed")
      });
    },
    createUser(vuexContext,user) {         
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/admin/user/create';
       this.$axios.$post(herokuUrl,user)
        .then(function (userRecord) {        
          vuexContext.dispatch('addCustomClaims',userRecord.uid);
       })
        .catch(function (error) {
          vuexContext.commit('errorToggle')
          vuexContext.dispatch('resetError')

        });
      },
    fetchUserDataById(vuexContext, uid){
        admin.auth().getUser(uid)
        .then(function(userRecord) {
          // See the UserRecord reference doc for the contents of userRecord.
          vuexContext.commit('setUser',userRecord.toJSON())
          console.log('Successfully fetched user data:', userRecord.toJSON());
        })
        .catch(function(error) {
          console.log('Error fetching user data:', error);
        });
    },
    fetchUserDataByEmail(vuexContext, email){ 
          let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/admin/user/getuserbyEmail/'+email;
        this.$axios.$get(herokuUrl)
          .then(function (userRecord){
            vuexContext.commit('setUser',userRecord)
            console.log('Successfully fetched user data:', userRecord);
          })
          .catch(function (error) {
            console.log("user record fails to load")
          })
          .finally(function () {
            console.log("load process completed")
          });

    },
    addCustomClaims(vuexContext,uid) {  
      let claims = {
        portal: 'CORBON Admin',
        coporate: true,
        loginStatus: '0',
        admin: false,
        dataClerk: true
      }       
      let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/admin/user/updateCustomClaims/'+uid;
      this.$axios.$put(herokuUrl,claims)
       .then(function (userRecord) {        
       vuexContext.commit('successToggle')
       vuexContext.dispatch('resetSuccess')
      })
       .catch(function (error) {
         vuexContext.commit('errorToggle')
         vuexContext.dispatch('resetError')
       })
       .finally(function () {
         vuexContext.commit('changeFormState')
       });
      },
      resetSuccess(vuexContext) { 
        setTimeout(function () {vuexContext.commit('successToggle');}, 5000);
    },
    resetError(vuexContext) { 
      setTimeout(function () {vuexContext.commit('errorToggle');}, 5000);
    }

 }



/*  {
    email: 'user@example.com',
    emailVerified: false,
    phoneNumber: '+11234567890',
    password: 'secretPassword',
    displayName: 'John Doe',
    photoURL: 'http://www.example.com/12345678/photo.png',
    disabled: false
  } */