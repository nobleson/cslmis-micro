export const state = () => ({
    successAlert: false,
    errorAlert: false
  })
  

export const getters = {
    getSuccessAlert: state => state.successAlert,
    getErrorAlert: state => state.errorAlert
  }
  