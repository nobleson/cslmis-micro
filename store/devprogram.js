export const state = () => ({
    regsuccess: false,
    regerror: false,
    devProgramFormReset: false,
    devPrograms:  null,
    isContentLoading: true
  })
  export const mutations = {
    changeLoaderStatus (state) {
      state.isContentLoading = !state.isContentLoading
    },
    successToggle (state) {
      state.regsuccess = !state.regsuccess
    },
    errorToggle (state) {
      state.regerror = !state.regerror
    },
    setDevPrograms (state,data){
      state.devPrograms = data
    }
  }
  export const getters = {
    getLoaderStatus: state => state.isContentLoading,
  
    getSuccessState: state => state.regsuccess,
  
    getErrorState: state => state.regerror,
  
    getDevPrograms: state => state.devPrograms
  
  } 
  
  export const actions= {
      
      loadDevPrograms(vuexContext){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/program/provider/getall';
          this.$axios.$get(herokuUrl)
           .then(function (response){
            vuexContext.commit('changeLoaderStatus')
             vuexContext.commit('setDevPrograms',response);
           })
           .catch(function (error) {
             console.log("Dev programs fails to load")
           })
           .finally(function () {
           });
       
      },
      loadProgramDetails(vuexContext,id){
        let self = this
        return new Promise(function (resolve, reject){
          let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/program/'+id;
          self.$axios.$get(herokuUrl)
           .then(function (response){
            resolve(response)
          })
           .catch(function (error) {
             reject(error.message)
           });
        });
      }

  }
  
  
  /* export const state = () => ({
    regsuccess: false,
    regerror: false,
    logoURL: '',
    apprentishipFormReset: false,
    apprentiship:  []
  })
  
  export const mutations = {
    changeFormState (state) {
      state.apprentishipFormReset = !state.apprentishipFormReset
    },
    successToggle (state) {
      state.regsuccess = !state.regsuccess
    },
    errorToggle (state) {
      state.regerror = !state.regerror
    },
    setApprentiship (state,data){
      state.apprentiship = data
    },
    setLogoURL(state,data){
      state.logoURL = data
    }
  }
  export const getters = {
    getFormState: state => state.apprentishipFormReset,
  
    getSuccessState: state => state.regsuccess,
  
    getErrorState: state => state.regerror,
  
    getLogoURL: state => state.logoURL,
  
    getLicensingBodies: state => state.licensingBodies
  
  }
  
  export const actions= {
  
      registerLicensingBody(vuexContext,licensingBodyData){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/bodies/licensing/create';
       this.$axios.$post(herokuUrl,licensingBodyData)
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
  
      loadLicensingBodies(vuexContext){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/bodies/licensing/getall';
       this.$axios.$get(herokuUrl)
        .then(function (response){
         // let data = JSON.parse(response);
          vuexContext.commit('setLicensingBodies',response);
          console.log("awarding bodies:"+vuexContext.state.licensingBodies)
          //console.log("trade:"+response)
        })
        .catch(function (error) {
          console.log("trade fails to load")
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
   