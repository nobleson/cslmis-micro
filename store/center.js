export const state = () => ({
    regsuccess: false,
    regerror: false,
    center:  null
  })
  
export const mutations = {
    setCenter (state,center) {
      state.center = center
    }
}
export const getters = {
    getCenter: state => state.center
}

export const actions= {
  
    updateCenter(vuexContext,centerData) {
      var _id = "EP0qVNXhLFZlZNbwYW2PLGuad8Q2";
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/center/'+_id;
      //  console.log("centerData:"+JSON.parse(centerData)); 
        this.$axios.$put(herokuUrl,centerData)
        .then(function (response) {
          vuexContext.commit('setCenter',response)
          console.log("center loaded: "+vuexContext.state.company)
  
        })
        .catch(function (error) {
          console.log("center update  fails to load")
        })
        .finally(function () {
        });
    }
}
  /* 
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
    }
  }
  export const getters = {
    getFormState: state => state.companyFormReset,
  
    getSuccessState: state => state.regsuccess,
  
    getErrorState: state => state.regerror,
  
    getCompanies: state => state.companies
  }
  
  export const actions= {
  
    registerCompany(vuexContext,companyData) {
      let firebaseUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA73Wdeedk01ZoL-oWX08r5UxWing28knM';
      let companyAccount = {
        displayName: companyData.name,
        email: companyData.email,
        password: 'cslmis',
        returnSecureToken: true
        }    
       vuexContext.commit('changeFormState')
        return this.$axios.$post(firebaseUrl, 
        companyAccount ).then(e => {
          let date = new Date();
          let company = {
            _id: e.localId,
            companyAcronym: e.displayName,
            dateRegistered: date
          };
          vuexContext.dispatch('save',company);
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
        .then(function (response) {
          let data = JSON.stringify(response)
          vuexContext.commit('setCompanies',data)
          console.log("companies loaded")
  
      })
        .catch(function (error) {
          console.log("companies fails to load")
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
      resetSuccess(vuexContext) { 
        setTimeout(function () {vuexContext.commit('successToggle');}, 5000);
    },
    resetError(vuexContext) { 
      setTimeout(function () {vuexContext.commit('errorToggle');}, 5000);
    }
  } */