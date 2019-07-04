export const state = () => ({
    regsuccess: false,
    regerror: false,
    tradeFormReset: false,
    trades:  [],
    tradeSkills: [],
    isContentLoading: true,
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
    },
    changeLoaderStatus(state){
      state.isContentLoading = !state.isContentLoading;
    } 

  }
  export const getters = {
    getFormState: state => state.tradeFormReset,
  
    getSuccessState: state => state.regsuccess,
  
    getErrorState: state => state.regerror,
  
    getTrades: state => state.trades,
  
    getTradeSkills: state => state.tradeSkills,

    getLoaderStatus: state => state.isContentLoading
  }
  
  export const actions= {
  
      registerTrade(vuexContext,tradeData){
        let self = this
        return  new Promise(
          function (resolve, reject) {

            let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/trade/create';
            self.$axios.$post(herokuUrl)
              .then(function (response){
                vuexContext.commit('successToggle');
                resolve(response)
              })
              .catch(function (error) {
                vuexContext.commit('errorToggle')
                reject(error.message)
              })
            });
      },
      registerTradeSkillLevel(vuexContext,tradeSkillData){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/trade/skills/create';
       this.$axios.$post(herokuUrl,tradeSkillData)
        .then(function (response) {        
        vuexContext.commit('successToggle')
      })
        .catch(function (error) {
          vuexContext.commit('errorToggle')
        });
      },
  
      loadTrades(vuexContext){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/trade/getall';
       this.$axios.$get(herokuUrl)
        .then(function (response){
          vuexContext.commit('changeLoaderStatus')
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
      checkTradeData(vuexContext){
       let data  = vuexContext.getters('getTrades')
       console.log("trade loaded:"+data)
      }
  }
  