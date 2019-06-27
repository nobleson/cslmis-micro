export const state = () => ({
    regsuccess: false,
    regerror: false,
    jobAdvertFormReset: false,
    jobAdverts:  [],
    isContentLoading: true
  })
  export const mutations = {
    changeFormState (state) {
      state.jobAdvertFormReset = !state.jobAdvertFormReset
    },
    successToggle (state) {
      state.regsuccess = !state.regsuccess
    },
    errorToggle (state) {
      state.regerror = !state.regerror
    },
    setJobAdverts (state,data){
      state.jobAdverts = data
    }
  }
  export const getters = {
    getFormState: state => state.jobAdvertFormReset,
  
    getSuccessState: state => state.regsuccess,
  
    getErrorState: state => state.regerror,

    getJobAdverts: state => state.jobAdverts
  
  } 

  export const actions= {
  
    registerJobAdverts(vuexContext,){
      let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/company/advert/create';
     this.$axios.$post(herokuUrl,jobAdvertData)
      .then(function (response) {        
      vuexContext.commit('successToggle')
    })
      .catch(function (error) {
        vuexContext.commit('errorToggle')
      })
      .finally(function () {
        vuexContext.commit('changeFormState')
      });
    },

    loadJobAdverts(vuexContext){
      
      let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/bodies/licensing/getall';
     this.$axios.$get(herokuUrl)
      .then(function (response){
       // let data = JSON.parse(response);
        vuexContext.commit('setLicensingBodies',response);
        console.log("Job Advert:"+vuexContext.state.jobAdverts)
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
}


/* export const state = () => ({
    regsuccess: false,
    regerror: false,
    logoURL: '',
    licensingBodyFormReset: false,
    licensingBodies:  []
  })
  
  export const mutations = {
    changeFormState (state) {
      state.licensingBodyFormReset = !state.licensingBodyFormReset
    },
    successToggle (state) {
      state.regsuccess = !state.regsuccess
    },
    errorToggle (state) {
      state.regerror = !state.regerror
    },
    setLicensingBodies (state,data){
      state.licensingBodies = data
    },
    setLogoURL(state,data){
      state.logoURL = data
    }
  }
  export const getters = {
    getFormState: state => state.licensingBodyFormReset,
  
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
  }
   */