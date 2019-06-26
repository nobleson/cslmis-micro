export const state = () => ({
    regsuccess: false,
    regerror: false,
    logoURL: '',
    regulatoryBodyFormReset: false,
    regulatoryBodies:  [],
    isContentLoading: true,
  })
  
  export const mutations = {
    changeFormState (state) {
      state.regulatoryBodyFormReset = !state.regulatoryBodyFormReset
    },
    successToggle (state) {
      state.regsuccess = !state.regsuccess
    },
    errorToggle (state) {
      state.regerror = !state.regerror
    },
    setRegulatoryBodies (state,data){
      state.regulatoryBodies = data
    },
    setLogoURL(state,data){
      state.logoURL = data
    },
    changeLoaderStatus(state){
      state.isContentLoading = !state.isContentLoading;
    } 
  }
  export const getters = {
    getFormState: state => state.regulatoryBodyFormReset,
  
    getSuccessState: state => state.regsuccess,
  
    getErrorState: state => state.regerror,

    getLogoURL: state => state.logoURL,

    getRegulatoryBodies: state => state.regulatoryBodies,
  
    getLoaderStatus: state => state.isContentLoading
  }
  
  export const actions= {
  
      registerRegulatoryBody(vuexContext,regulatoryBodyData){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/bodies/regulatory/create';
       this.$axios.$post(herokuUrl,regulatoryBodyData)
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

      loadRegulatoryBodies(vuexContext){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/bodies/regulatory/getall';
       this.$axios.$get(herokuUrl)
        .then(function (response){
          vuexContext.commit('changeLoaderStatus')
          vuexContext.commit('setRegulatoryBodies',response);
          console.log("awarding bodies:"+vuexContext.state.regulatoryBodies)
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
  }
  