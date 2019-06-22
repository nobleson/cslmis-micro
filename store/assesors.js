export const state = () => ({
    regsuccess: false,
    regerror: false,
    assesors: [],
    localGovernment: {},
    _id: null,
    firebaseURL: '',
    assesorFormReset: false,

  })
  export const mutations = {
    changeFormState (state) {
        state.assesorFormReset = true
      },
    successToggle (state) {
      state.regsuccess = !state.regsuccess
    },
    errorToggle (state) {
      state.regerror = !state.regerror
    },
    setAssesors (state,data){
      state.assesors = data
    },
    setFirebaseURL (state, data){
      state.firebaseURL = data
    },
    setLocalGovernment(state,localGovernment){
      state.localGovernment = localGovernment;
    }

  }
  export const getters = {  
    getFormState: state => state.assesorFormReset,

    getSuccessState: state => state.regsuccess,
  
    getErrorState: state => state.regerror,

    getAssesors: state => state.assesors,
  
    getFirebaseURL: state => state.firebaseURL,  
  
    getLocalGovernment: state => state.localGovernment
  }
  
  export const actions= {

    registerAssesor(vuexContext,assesorData){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/assesor/create';
       this.$axios.$post(herokuUrl,assesorData)
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
      loadAssesors(vuexContext){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/assesor/getall';
       this.$axios.$get(herokuUrl)
        .then(function (response){
         // let data = JSON.parse(response);
          vuexContext.commit('setAssesors',response);
          console.log("assesors:"+vuexContext.state.assesors)
          //console.log("trade:"+response)
        })
        .catch(function (error) {
          console.log("assesors fails to load")
        })
        .finally(function () {
        });
  
      },
        loadLocalGovernment(vuexContext,value){
            let baseUrl = "https://shielded-savannah-72922.herokuapp.com/state_lg/";
            var lga = "";
            if(value == 'Abia'){lga = "abia.json"};
            if(value == 'Adamawa'){lga = "adamawa.json"};
            if(value == 'Akwa Ibom'){lga = "akwa_ibom.json"};
            if(value == 'Anambra'){lga = "anambra.json"};
            if(value == 'Bauchi'){lga = "bauchi.json"};
            if(value == 'Bayelsa'){lga = "bayelsa.json"};
            if(value == 'Benue'){lga = "benue.json"};
            if(value == 'Borno'){lga = "borno.json"};
            if(value == 'Cross River'){lga = "cross_river.json"};
            if(value == 'Delta'){lga = "delta.json"};
            if(value == 'Ebonyi'){lga = "ebonyi.json"};
            if(value == 'Enugu'){lga = "enugu.json"};
            if(value == 'Edo'){lga = "edo.json"};
            if(value == 'Ekiti'){lga = "ekiti.json"};
            if(value == 'Gombe'){lga = "gombe.json"};
            if(value == 'Imo'){lga = "imo.json"};
            if(value == 'Jigawa'){lga = "jigawa.json"};
            if(value == 'Kaduna'){lga = "kaduna.json"};
            if(value == 'Kano'){lga = "kano.json"};
            if(value == 'Katsina'){lga = "katsina.json"};
            if(value == 'Kebbi'){lga = "kebbi.json"};
            if(value == 'Kwara'){lga = "kwara.json"};
            if(value == 'Kogi'){lga = "kogi.json"};
            if(value == 'Lagos'){lga = "lagos.json"};
            if(value == 'Nasarawa'){lga = "nasarawa.json"};
            if(value == 'Niger'){lga = "niger.json"};
            if(value == 'Ogun'){lga = "ogun.json"};
            if(value == 'Ondo'){lga = "ondo.json"};
            if(value == 'Osun'){lga = "osun.json"};
            if(value == 'Oyo'){lga = "oyo.json"};
            if(value == 'Plateau'){lga = "plateau.json"};
            if(value == 'Rivers'){lga = "rivers.json"};
            if(value == 'Sokoto'){lga = "sokoto.json"};
            if(value == 'Taraba'){lga = "taraba.json"};
            if(value == 'Yobe'){lga = "yobe.json"};
            if(value == 'Zamfara'){lga = "zamfara.json"};
            if(value == 'FCT'){lga = "fct.json"};
            this.$axios.$get(baseUrl + lga).then((response) => {
              vuexContext.commit('setLocalGovernment',response);
              console.log('Local Government:'+vuexContext.state.localGovernment);
            })
            .catch((e) => {
              console.error(e)
            })
            },
            resetSuccess(vuexContext) { 
                setTimeout(function () {vuexContext.commit('successToggle');}, 5000);
            },
            resetError(vuexContext) { 
              setTimeout(function () {vuexContext.commit('errorToggle');}, 5000);
            },
            saveURL(vuexContext,url){
             vuexContext.commit('setFirebaseURL',url);
             console.log("Vuex URL:"+vuexContext.state.setFirebaseURL)
            }                  

    }