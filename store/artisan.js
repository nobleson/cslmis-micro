export const state = () => ({
    regsuccess: false,
    regerror: false,
    persona: {},
    center: {},
    apprentiship: {},
    education: {},
    employment: {},
    isContentLoading: true,
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
    setArtisanId (state,id){
      state._id = id
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
    },
    changeLoaderStatus(state){
      state.isContentLoading = !state.isContentLoading;
    }    

  }
  export const getters = {  
    getSuccessState: state => state.regsuccess,
  
    getErrorState: state => state.regerror,
  
    getPersona: state => state.persona,

    getCenter: state => state.center,

    getArtisanId: state => state._id,

    getApprentiship: state => state.apprentiship,

    getEducation: state => state.education,

    getEmployment: state => state.employment,

    getLocalGovernment: state => state.localgovernment,

    getLoaderStatus: state => state.isContentLoading
  }

  export const actions= {
    registerArtisan(vuexContext,artisanData) {

       let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/admin/user/addUser';
      let artisanAccount = {
        email: artisanData.emailAddress,
        emailVerified: false,
        phoneNumber: artisanData.phoneNumber,
        password: 'password',
        displayName: artisanData.firstName +" "+artisanData.lastName,
        photoURL: artisanData.photo,
        disabled: false
        }    
        return this.$axios.$post(herokuUrl, 
          artisanAccount ).then(e => {
          let date = new Date()
          let artisan = {
            _id: e.uid,
            firstName: artisanData.firstName,
            middleName: artisanData.middleName,
            lastName: artisanData.lastName,
            gender: artisanData.gender,
            dateOfBirth: artisanData.dateOfBirth,
            disabilityType: artisanData.disabilityType,
            phoneNumber: artisanData.phoneNumber,
            emailAddress: artisanData.emailAddress,
            contactAddress: artisanData.contactAddress,
            cityOfResidence: artisanData.cityOfResidence,
            stateOfResidence: artisanData.stateOfResidence,
            centerOfGraduation: artisanData.centerOfGraduation,
            trade: artisanData.trade,
            uniqueLearnersNumber: artisanData.uniqueLearnersNumber,
            competencyLevel: artisanData.competencyLevel,
            photo: artisanData.photo,
            dateRegistered: date 
          };
          vuexContext.dispatch('addPersona',artisan); 
          vuexContext.dispatch('addCustomClaims',e.uid);
        }); 
      },

    addPersona(vuexContext,persona) {
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/artisan/create';

        this.$axios.$post(herokuUrl,persona)
         .then(function (response) {   
          vuexContext.commit('setPersona',response);
         vuexContext.dispatch('setIds');
       })
         .catch(function (error) {
        })
         .finally(function () {
          this.$bvModal.hide() 
         });
        },
        addCustomClaims(vuexContext,uid) {  
          let claims = {
            portal: 'Microservice Gateway',
            coporate: false,
            loginStatus: '0',
            admin: false,
            dataClerk: false
          }       
          let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/admin/user/updateCustomClaims/'+uid;
          this.$axios.$put(herokuUrl,claims)
           .then(function (userRecord) {        
           vuexContext.commit('successToggle')
          })
           .catch(function (error) {
             vuexContext.commit('errorToggle')
           });
          },
      addCenter(vuexContext,center) {
          let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/artisan/nvq/center/create';
  
          this.$axios.$post(herokuUrl,center)
           .then(function (response) {   
            console.log('artisan center'+JSON.stringify(response));
            vuexContext.commit('setCenter',response);
         })
           .catch(function (error) {
           })
           .finally(function () {
            //vuexContext.commit('changeFormState')
           });
          },
          addApprentiship(vuexContext,center) {
            let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/artisan/apprentiship/create';
    
            this.$axios.$post(herokuUrl,center)
             .then(function (response) {   
              console.log('artisan apprentiship'+JSON.stringify(response));
              vuexContext.commit('setApprentiship',response);
  
             // vuexContext.commit('successToggle')
              //vuexContext.dispatch('resetSuccess')
           })
             .catch(function (error) {
             })
             .finally(function () {
              //vuexContext.commit('changeFormState')
             });
            },
            addEducation(vuexContext,center) {
              let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/artisan/education/create';
      
              this.$axios.$post(herokuUrl,center)
               .then(function (response) {   
                console.log('artisan education'+JSON.stringify(response));
                vuexContext.commit('setEducation',response);
    
               // vuexContext.commit('successToggle')
                //vuexContext.dispatch('resetSuccess')
             })
               .catch(function (error) {
               })
               .finally(function () {
                //vuexContext.commit('changeFormState')
               });
              },
              addEmployment(vuexContext,center) {
                let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/artisan/employement/history/create';
        
                this.$axios.$post(herokuUrl,center)
                 .then(function (response) {   
                  console.log('artisan employment history'+JSON.stringify(response));
                  vuexContext.commit('setEmployment',response);
      
                 // vuexContext.commit('successToggle')
                  //vuexContext.dispatch('resetSuccess')
               })
                 .catch(function (error) {
                 })
                 .finally(function () {
                  //vuexContext.commit('changeFormState')
                 });
                },
                loadArtisans(vuexContext){
                  let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/artisan/getall';
                  return this.$axios.$get(herokuUrl)
                  .then(function (response){
                    vuexContext.commit('setPersona',response)
                    vuexContext.commit('changeLoaderStatus')
                    console.log("LoaderStatus:"+vuexContext.state.isContentLoading)

                  })
                  .catch(function (error) {
                    console.log("artisans data fails to load")
                    console.log("Loader fail Status:"+vuexContext.state.isContentLoading)
                  })
                  .finally(function () {
                  });
            
                },
                loadProviders(vuexContext,_id){
                  let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/artisan/nvq/center/'+_id;
                 this.$axios.$get(herokuUrl)
                  .then(function (response){
                    vuexContext.commit('setCenter',response);
                  })
                  .catch(function (error) {
                    console.log("artisan center fails to load")
                  })
                  .finally(function () {
                  });
                },
                loadApprentiship(vuexContext,_id){
                  let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/artisan/apprentiship/'+_id;
                 this.$axios.$get(herokuUrl)
                  .then(function (response){
                    vuexContext.commit('setApprentiship',response);
                  })
                  .catch(function (error) {
                    console.log("artisan apprentiship fails to load")
                  })
                  .finally(function () {
                  });
                },
                loadEducation(vuexContext,_id){
                  let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/artisan/education/'+_id;
                 this.$axios.$get(herokuUrl)
                  .then(function (response){
                    vuexContext.commit('setEducation',response);
                  })
                  .catch(function (error) {
                    console.log("artisan education fails to load")
                  })
                  .finally(function () {
                  });
                },
                loadEmployment(vuexContext,_id){
                  let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/artisan/employement/history/'+_id;
                 this.$axios.$get(herokuUrl)
                  .then(function (response){
                    vuexContext.commit('setEmployment',response);
                  })
                  .catch(function (error) {
                    console.log("artisan employment fails to load")
                  })
                  .finally(function () {
                  });
                },
          setIds(vuexContext) {
              let obj = JSON.parse(JSON.stringify(vuexContext.state.persona));
              vuexContext.commit('setArtisanId',obj._id);
              console.log('artisan id:'+obj._id);
            },
          popSucessAlert(vuexContext){
            this.$modal.$show('successState');
          },
          popErrorAlert(vuexContext){
            this.$modal.$show('errorState');
          },
          resetSuccess(vuexContext) { 
            setTimeout(function () {this.$modal.$hide('successState');}, 5000);
        },
        resetError(vuexContext) { 
          setTimeout(function () {this.$modal.$hide('errorState');}, 5000);
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
