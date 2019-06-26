export const state = () => ({
    regsuccess: false,
    regerror: false,
    logoURL: '',
    awardingBodyFormReset: false,
    awardingBodies:  [],
    isContentLoading: true
  })
  
  export const mutations = {
    changeFormState (state) {
      state.awardingBodyFormReset = !state.awardingBodyFormReset
    },
    successToggle (state) {
      state.regsuccess = !state.regsuccess
    },
    errorToggle (state) {
      state.regerror = !state.regerror
    },
    setAwardingBodies (state,data){
      state.awardingBodies = data
    },
    setLogoURL(state,data){
      state.logoURL = data
    },
    changeLoaderStatus(state){
      state.isContentLoading = !state.isContentLoading;
    } 

  }
  export const getters = {
    getFormState: state => state.awardingBodyFormReset,
  
    getSuccessState: state => state.regsuccess,
  
    getErrorState: state => state.regerror,

    getLogoURL: state => state.logoURL,

    getAwardingBodies: state => state.awardingBodies,

    getLoaderStatus: state => state.isContentLoading
  
  }
  
  export const actions= {
  
      registerAardingBody(vuexContext,awardingBodyData){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/bodies/certify/create';
       this.$axios.$post(herokuUrl,awardingBodyData)
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

      loadAwardingBodies(vuexContext){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/bodies/certify/getall';
       this.$axios.$get(herokuUrl)
        .then(function (response){
          vuexContext.commit('changeLoaderStatus')
          vuexContext.commit('setAwardingBodies',response);
          console.log("awarding bodies:"+vuexContext.state.awardingBodies)
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
  