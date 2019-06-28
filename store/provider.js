export const state = () => ({
    regsuccess: false,
    regerror: false,
    providerFormReset: false,
    providerNameMsg: '',
    providerEmailMsg: '',  
    isContentLoading: true,
    provider:  []
  })
  
  export const mutations = {
    changeFormState (state) {
      state.providerFormReset = !state.providerFormReset
    },
    successToggle (state) {
      state.regsuccess = !state.regsuccess
    },
    errorToggle (state) {
      state.regerror = !state.regerror
    },
    setProvider (state,data){
      state.provider = data
    },
    changeLoaderStatus(state){
      state.isContentLoading = !state.isContentLoading;
    } 

  }
  export const getters = {
    getFormState: state => state.providerFormReset,
  
    getSuccessState: state => state.regsuccess,
  
    getErrorState: state => state.regerror,
  
    getProvider: state => state.provider,

    getLoaderStatus: state => state.isContentLoading

  }
  
  export const actions= {
  
    registerProvider(vuexContext,providerData) {
      let firebaseUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA73Wdeedk01ZoL-oWX08r5UxWing28knM';
        let providerAccount = {
          email: providerData.companyEmail,
          emailVerified: false,
          phoneNumber: providerData.companyTelephone,
          password: 'c-lmis',
          displayName: providerData.companyName,
          photoUrl: providerData.logo,
          disabled: false,
          returnSecureToken: true
          }  
       vuexContext.commit('changeFormState')
        return this.$axios.$post(firebaseUrl, 
            providerAccount ).then(e => {
          let date = new Date();
          let provider = {
            _id: e.localId,
            fullLegalName: providerData.companyName,
            acronym: providerData.companyAcronym,
            officialAddress: providerData.companyAddress,
            email: providerData.companyEmail,
            telephone: providerData.companyTelephone, 
            dateRegistered: date
          };
          let emailInfo ={
            requestType: 'VERIFY_EMAIL',
            idToken: e.idToken
          }
          vuexContext.dispatch('save',provider);
          vuexContext.dispatch('addCustomClaims',e.localId);
          vuexContext.dispatch('sendProviderAccountEmail',emailInfo)
        });
      },
      save(vuexContext,provider){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/center/create';
  
       this.$axios.$post(herokuUrl,provider)
        .then(function (response) {        
      })
        .catch(function (error) {
        });
      },
      addCustomClaims(vuexContext,uid) {  
        let claims = {
          portal: 'Training Provider Admin',
          microService: 'Provider',
          coporate: true,
          loginStatus: '0',
          admin: true,
          dataClerk: false
        }       
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/admin/user/updateCustomClaims/'+uid;
        this.$axios.$put(herokuUrl,claims)
         .then(function (userRecord) {        
         vuexContext.commit('successToggle')
        })
         .catch(function (error) {
           vuexContext.commit('errorToggle')
         });
        },
      loadprovider(vuexContext){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/center/getall';
       this.$axios.$get(herokuUrl)
        .then(function (response){
         // let data = JSON.parse(response);
          vuexContext.commit('setProvider',response);
          vuexContext.commit('changeLoaderStatus')
          //console.log("provider:"+response)
        })
        .catch(function (error) {
          console.log("provider fails to load")
        })
        .finally(function () {
        });
  
      },
      sendProviderAccountEmail(vuexContext,emailInfo){
  
        let firebaseUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/getOobConfirmationCode?key=AIzaSyA73Wdeedk01ZoL-oWX08r5UxWing28knM';
       this.$axios.$post(firebaseUrl,emailInfo)
        .then(function (response) {
          console.log("verification details:"+JSON.stringify(response))
          console.log("provider verification email sent");
      })
        .catch(function (error) {
          console.log("provider verification email fails")
        })
        .finally(function () {
        });
  
      },
      toggleFormState(vuexContext) {
        vuexContext.commit('changeFormState')
      },
      toggleSucessAlert(vuexContext){
        vuexContext.commit('successToggle')
      },
      toggleErrorAlert(vuexContext){
        vuexContext.commit('errorToggle')
      },
      checkproviderData(vuexContext){
       let data  = vuexContext.getters('getProvider')
       console.log("provider loaded:"+data)
      }
  }
  