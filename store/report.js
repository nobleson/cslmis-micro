export const state = () => ({
    regsuccess: false,
    regerror: false,
    reportFormReset: false,
    report:  [],
    isContentLoading: true
  })
  export const mutations = {
    changeFormState (state) {
      state.reportFormReset = !state.reportFormReset
    },
    successToggle (state) {
      state.regsuccess = !state.regsuccess
    },
    errorToggle (state) {
      state.regerror = !state.regerror
    },
    setReport (state,data){
      state.report = data
    }
  }
  export const getters = {
    getFormState: state => state.reportFormReset,
  
    getSuccessState: state => state.regsuccess,
  
    getErrorState: state => state.regerror,
  
    getReport: state => state.report
  
  } 
  
  export const actions= {
  
    registerReport(vuexContext,){
      let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/company/advert/create';
     this.$axios.$post(herokuUrl,ReportData)
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
  
    registerReport(vuexContext){
      
      let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/bodies/licensing/getall';
     this.$axios.$get(herokuUrl)
      .then(function (response){
       // let data = JSON.parse(response);
        vuexContext.commit('setReport',response);
        console.log("report:"+vuexContext.state.report)
        //console.log("trade:"+response)
      })
      .catch(function (error) {
        console.log("report fails to load")
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
   