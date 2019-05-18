export const state = () => ({
    success: false,
    NewJobApplicationapperror: false,
    NewJobApplication: null

})
export const mutations = {

    setnewJobApplication (state,NewJobApplication){
        state.NewJobApplication=NewJobApplication
    }
}
export const getters = {
    getNewJobApplication: state => state.NewJobApplication
}

export const actions={
    updateNewJobApplication(vuexContext,NewJobApplicationData) {
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/jobapplication/'; 
        this.$axios.$put(herokuUrl,NewJobApplicationData)
        .then(function (response) {
          vuexContext.commit('setNewJobApplication',response)
          console.log("NewJobApplication loaded: "+vuexContext.state.NewJobApplication)
  
        })
        .catch(function (error) {
          console.log("NewJobApplication update  fails to load")
        })
        .finally(function () {
        });
    }
}
