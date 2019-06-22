export const state = () => ({
    regsuccess: false,
    regerror: false,
    logoURL: '',
    assessmentFormReset: false,
    isContentLoading: true,
    assessmentBodies:  []
  })
  
  export const mutations = {
    changeFormState (state) {
      state.assessmentFormReset = !state.assessmentFormReset
    },
    successToggle (state) {
      state.regsuccess = !state.regsuccess
    },
    errorToggle (state) {
      state.regerror = !state.regerror
    },
    setAssessmentBodies (state,data){
      state.assessmentBodies = data
    },
    setLogoURL(state,data){
      state.logoURL = data
    },
    changeLoaderStatus(state){
      state.isContentLoading = !state.isContentLoading;
    } 

  }
  export const getters = {
    getFormState: state => state.assessmentFormReset,
  
    getSuccessState: state => state.regsuccess,
  
    getErrorState: state => state.regerror,

    getLogoURL: state => state.logoURL,

    getAssessmentBodies: state => state.assessmentBodies,

    getLoaderStatus: state => state.isContentLoading

  
  }
  
  export const actions= {
  
      registerAssessmentBody(vuexContext,assessmentData){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/bodies/assessment/create';
       this.$axios.$post(herokuUrl,assessmentData)
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

      loadAssesssmentBodies(vuexContext){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/bodies/assessment/getall';
       this.$axios.$get(herokuUrl)
        .then(function (response){
          vuexContext.commit('setAssessmentBodies',response);
          vuexContext.commit('changeLoaderStatus')
          console.log("assessment bodies:"+vuexContext.state.assessmentBodies)
          //console.log("trade:"+response)
        })
        .catch(function (error) {
          console.log("trade fails to load")
        })
        .finally(function () {
        });
  
      },
      
      loadURL(vuexContext,url){
        vuexContext.commit('setLogoURL',url);
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
      checkProgramData(vuexContext){
       let data  = vuexContext.getters('getPrograms')
       console.log("trade loaded:"+data)
      },
      resetSuccess(vuexContext) { 
        setTimeout(function () {vuexContext.commit('successToggle');}, 5000);
    },
    resetError(vuexContext) { 
      setTimeout(function () {vuexContext.commit('errorToggle');}, 5000);
    }
  }
  