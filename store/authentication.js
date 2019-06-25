import Cookie from 'js-cookie'

export const state = () => ({
  user: null,
  isValidUser: false,
  token: null,
  _id:  null,
  session: null
})
export const getters = {
  getUser: state => state.user,
  getSession: state => state.session,
  getUserStatus: state => state.isValidUser,
  getToken: state => state.token,
  getCompanyId: state => state._id,
  isAuthenticated: state => state.token !== null
}
export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setSession(state, session) {
    state.session = session;
  },

  setToken(state, tok) {
    state.token = tok;
  },
  setUserStatus(state) {
    state.isValidUser = !state.isValidUser;
  },
  setCompanyId(state, id) {
    state._id = id;
  }

}

export const actions= {
  authenticateUser(vuexContext,userData) {
    let myUrl;
    let user;
    if(userData.isSignIn) {
      user = {
      email: userData.email,
      password: userData.password,
      returnSecureToken: true
    }      
      myUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyA73Wdeedk01ZoL-oWX08r5UxWing28knM';
     }

    return this.$axios.$post(myUrl, 
      user ).then(e => {
        vuexContext.commit('setSession',e )
    }).catch(function (error) { 
      console.log(error);
    });
  },
fetchUserDataById(vuexContext, uid){ 
   let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/admin/user/getuserbyId/'+uid;
   return this.$axios.$get(herokuUrl)
      .then(function (userRecord){
        vuexContext.commit('setUser',JSON.parse(JSON.stringify(userRecord)))
      })
      .catch(function (error) {
        console.log("user record fails to load")
      })
      .finally(function () {
        console.log("load process completed")
      });

},
initSetup(vuexContext){
  vuexContext.commit('setCompanyId',vuexContext.state.session.localId )
  let token = vuexContext.state.session.idToken;
  vuexContext.commit('setToken', token );
  Cookie.set('jwt', token);
  localStorage.setItem('user-token', token);
  localStorage.setItem('companyId', vuexContext.state.session.localId);
},

  signOut(vuexContext) {
    localStorage.removeItem('user-token');
    localStorage.removeItem('companyId');
    Cookie.remove('jwt')
    vuexContext.commit('setToken', null);
    this.$router.push('/auth')
  },
  initAuth(vuexContext, req) {
    let token;
    if (req) {
      if (!req.headers.cookie) {
        return;
      }
      const jwtCookie = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("jwt="));
      if (!jwtCookie) {
        return;
      }
      token = jwtCookie.split("=")[1];
    } else {
      token = localStorage.getItem("user-token");
    }
    vuexContext.commit("setToken", token);
  }
}

 
