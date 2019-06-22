export const state = () => ({
    regsuccess: false,
    regerror: false,
    tradeFormReset: false,
    trades:  [],
    tradeSkills: []
  })
  
  export const mutations = {
    changeFormState (state) {
      state.tradeFormReset = !state.tradeFormReset
    },
    successToggle (state) {
      state.regsuccess = !state.regsuccess
    },
    errorToggle (state) {
      state.regerror = !state.regerror
    },
    setTrades (state,data){
      state.trades = data
    },
    setTradeSkills (state,data){
      state.tradeSkills = data
    }
  }
  export const getters = {
    getFormState: state => state.tradeFormReset,
  
    getSuccessState: state => state.regsuccess,
  
    getErrorState: state => state.regerror,
  
    getTrades: state => state.trades,
  
    getTradeSkills: state => state.tradeSkills
  }
  
  export const actions= {
  
      registerTrade(vuexContext,tradeData){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/trade/create';
       this.$axios.$post(herokuUrl,tradeData)
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
      registerTradeSkillLevel(vuexContext,tradeSkillData){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/trade/skills/create';
       this.$axios.$post(herokuUrl,tradeSkillData)
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
  
      loadTrades(vuexContext){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/trade/getall';
       this.$axios.$get(herokuUrl)
        .then(function (response){
         // let data = JSON.parse(response);
          vuexContext.commit('setTrades',response);
          console.log("trades:"+vuexContext.state.companies)
          //console.log("trade:"+response)
        })
        .catch(function (error) {
          console.log("trade fails to load")
        })
        .finally(function () {
        });
      },
  
      loadTradeSkillLevel(vuexContext){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/trade/skills/getall';
       this.$axios.$get(herokuUrl)
        .then(function (response){
         // let data = JSON.parse(response);
          vuexContext.commit('setTradeSkills',response);
          console.log("trades:"+vuexContext.state.companies)
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
      checkTradeData(vuexContext){
       let data  = vuexContext.getters('getTrades')
       console.log("trade loaded:"+data)
      },
      resetSuccess(vuexContext) { 
        setTimeout(function () {vuexContext.commit('successToggle');}, 5000);
    },
    resetError(vuexContext) { 
      setTimeout(function () {vuexContext.commit('errorToggle');}, 5000);
    }
  }
  