export const state = () => ({
    regsuccess: false,
    regerror: false,
    users:  [],
    user: {}
  })
  
  export const mutations = {
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
        //console.log("trade:"+response)
      })
      .catch(function (error) {
        console.log("users record fails to load")
      })
      .finally(function () {
        console.log("load process completed")
      });
    },
    createUser(vuexContext,user) {
      var obj = {};
      admin.auth().createUser(obj)
          .then(function(userRecord) {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log('Successfully created new user:', userRecord.uid);
          })
          .catch(function(error) {
            console.log('Error creating new user:', error);
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