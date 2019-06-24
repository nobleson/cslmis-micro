export const state = () => ({
  regsuccess: false,
  regerror: false,
  companyFormReset: false,
  companyNameMsg: '',
  companyEmailMsg: '',  
  isContentLoading: true,
  companies:  []
})

export const mutations = {
  changeFormState (state) {
    state.companyFormReset = !state.companyFormReset
  },
  successToggle (state) {
    state.regsuccess = !state.regsuccess
  },
  errorToggle (state) {
    state.regerror = !state.regerror
  },
  setCompanies (state,data){
    state.companies = data
  },
  changeLoaderStatus(state){
    state.isContentLoading = !state.isContentLoading;
  } 

}
export const getters = {
  getFormState: state => state.companyFormReset,

  getSuccessState: state => state.regsuccess,

  getErrorState: state => state.regerror,

  getCompanies: state => state.companies,

  getLoaderStatus: state => state.isContentLoading

}

export const actions= {

  registerCompany(vuexContext,companyData) {
    let firebaseUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA73Wdeedk01ZoL-oWX08r5UxWing28knM';
    let companyAccount = {
      email: companyData.companyEmail,
      emailVerified: false,
      phoneNumber: companyData.companyTelephone,
      password: 'c-lmis',
      displayName: companyData.companyName,
      photoUrl: companyData.logo,
      disabled: false,
      returnSecureToken: true
      }    
     vuexContext.commit('changeFormState')
      return this.$axios.$post(firebaseUrl, 
      companyAccount ).then(e => {
        let date = new Date()
        let company = {
          _id: e.localId,
          companyName: companyData.companyName,
          companyAcronym: companyData.companyAcronym,
          companyTelephone: companyData.companyTelephone,
          companyEmail: companyData.companyEmail,
          companyAddress: companyData.companyAddress,
          dateRegistered: date
        };
        let emailInfo ={
          requestType: 'VERIFY_EMAIL',
          idToken: e.idToken
        }
        vuexContext.dispatch('save',company); 
        vuexContext.dispatch('addCustomClaims',e.localId);
        vuexContext.dispatch('sendCompanyAccountEmail',emailInfo)
      });
    },
    save(vuexContext,company){
      let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/company/create';

     this.$axios.$post(herokuUrl,company)
      .then(function (response) {        
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
    loadCompanies(vuexContext){
      let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/company/getall';
     this.$axios.$get(herokuUrl)
      .then(function (response){
        vuexContext.commit('setCompanies',response)
        vuexContext.commit('changeLoaderStatus')
        console.log("loading status:"+vuexContext.state.isContentLoading)
      })
      .catch(function (error) {
        console.log("companies fails to load")
      })
      .finally(function () {
      });

    },
    sendCompanyAccountEmail(vuexContext,emailInfo){

      let firebaseUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/getOobConfirmationCode?key=AIzaSyA73Wdeedk01ZoL-oWX08r5UxWing28knM';
     this.$axios.$post(firebaseUrl,emailInfo)
      .then(function (response) {
        console.log("verification details:"+JSON.stringify(response))
        console.log("company verification email sent");
    })
      .catch(function (error) {
        console.log("company verification email fails")
      })
      .finally(function () {
      });

    },
    addCustomClaims(vuexContext,uid) {  
      let claims = {
        portal: 'Construction Company Admin',
        microService: 'Company',
        coporate: true,
        loginStatus: '0',
        admin: true,
        dataClerk: false
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
    toggleFormState(vuexContext) {
      vuexContext.commit('changeFormState')
    },
    toggleSucessAlert(vuexContext){
      vuexContext.commit('successToggle')
    },
    toggleErrorAlert(vuexContext){
      vuexContext.commit('errorToggle')
    },
    checkCompanyData(vuexContext){
     let data  = vuexContext.getters('getCompanies')
     console.log("companies loaded:"+data)
    },
    resetSuccess(vuexContext) { 
      setTimeout(function () {vuexContext.commit('successToggle');}, 5000);
  },
  resetError(vuexContext) { 
    setTimeout(function () {vuexContext.commit('errorToggle');}, 5000);
  }
}
