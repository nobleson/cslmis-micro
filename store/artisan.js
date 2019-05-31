export const state = () => ({
    regsuccess: false,
    regerror: false,
    persona: {},
    center: {},
    apprentiship: {},
    education: {},
    employment: {},
    localgovernment: {},
    _id: null,
    artisan:  []
  })
  
  export const mutations = {
    successToggle (state) {
      state.regsuccess = !state.regsuccess
    },
    errorToggle (state) {
      state.regerror = !state.regerror
    },
    setPersona (state,data){
      state.persona = data
    },
    setCenter(state,data){
        state.center = data
    },
    setApprentiship(state,data){
    state.apprentiship = data
    },
    setEducation(state,data){
        state.education = data
    },
    setEmployment(state,data){
    state.employment = data
    },
    setLocalGovernment(state,localgovernment){
      state.localgovernment = localgovernment;
    }

  }
  export const getters = {  
    getSuccessState: state => state.regsuccess,
  
    getErrorState: state => state.regerror,
  
    getPersona: state => state.persona,

    getCenter: state => state.center,

    getApprentiship: state => state.apprentiship,

    getEducation: state => state.education,

    getEmployment: state => state.employment,

    getLocalGovernment: state => state.localgovernment
  }
  

  export const actions= {
    addPersona(vuexContext,persona) {
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/artisan/create';

        this.$axios.$post(herokuUrl,persona)
         .then(function (response) {   
          console.log('artisan registered'+JSON.stringify(response)) 
          vuexContext.commit('setPersona',JSON.stringify(response))    
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
          if(value == 'Ekiti'){lga = "ekiiti.json"};
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
            console.log('Local Government:'+vuexContext.state.localgovernment);
          })
          .catch((e) => {
            console.error(e)
          })
          }

  }