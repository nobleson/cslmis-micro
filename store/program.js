export const state = () => ({
    regsuccess: false,
    regerror: false,
    programFormReset: false,
    programs:  [],
    programProviders: []
  })
  
  export const mutations = {
    changeFormState (state) {
      state.programFormReset = !state.programFormReset
    },
    successToggle (state) {
      state.regsuccess = !state.regsuccess
    },
    errorToggle (state) {
      state.regerror = !state.regerror
    },
    setPrograms (state,data){
      state.programs = data
    },
    setProgramProviders (state,data){
      state.programProviders = data
    }
  }
  export const getters = {
    getFormState: state => state.programFormReset,
  
    getSuccessState: state => state.regsuccess,
  
    getErrorState: state => state.regerror,
  
    getPrograms: state => state.programs,
  
    getProgramProvider: state => state.programProviders
  }
  
  export const actions= {
  
      registerTradeProgram(vuexContext,programData){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/program/create';
       this.$axios.$post(herokuUrl,programData)
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
      registerTradeProgramProviders(vuexContext,programProviderData){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/program/provider/create';
       this.$axios.$post(herokuUrl,programProviderData)
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
  
      loadTradePrograms(vuexContext){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/program/getall';
       this.$axios.$get(herokuUrl)
        .then(function (response){
         // let data = JSON.parse(response);
          vuexContext.commit('setPrograms',response);
          console.log("trades:"+vuexContext.state.programs)
          //console.log("trade:"+response)
        })
        .catch(function (error) {
          console.log("trade fails to load")
        })
        .finally(function () {
        });
      },
  
      loadTradeProgramProvider(vuexContext){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/program/provider/getall';
       this.$axios.$get(herokuUrl)
        .then(function (response){
         // let data = JSON.parse(response);
          vuexContext.commit('setProgramProviders',response);
          console.log("program providers:"+vuexContext.state.companies)
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
  