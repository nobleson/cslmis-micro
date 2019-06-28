import Cookie from 'js-cookie'

export const state = () => ({
  user: null,
  token: null,
  session: null,
  responseStatus: 0
})

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
  setResponseStatus(state, code){
    state.responseStatus = code;
  }

}
export const getters = {
  getUser: state => state.user,
  getToken: state => state.token,
  isAuthenticated: state => state.token !== null,
  getSession: state => state.session,
  getResponseStatus: state => state.responseStatus
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
    }else {
      
        user = {
        displayName: userData.username,
        email: userData.email,
        password: userData.password,
        returnSecureToken: true
      }

      myUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA73Wdeedk01ZoL-oWX08r5UxWing28knM';
    }

    return this.$axios.$post(myUrl, 
      user ).then(e => {
        vuexContext.commit('setSession',e )
    }).catch(function (error){
      
      let json = JSON.parse(JSON.stringify(error)) 
      vuexContext.commit('setResponseStatus',json.response.status)
      return json.response.status
    });
  },
  signOut(vuexContext) {
    localStorage.removeItem('user-token');
    Cookie.remove('jwt')
    vuexContext.commit('setToken', null);
    this.$router.push('/auth')
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
      let token = vuexContext.state.session.idToken;
      vuexContext.commit('setToken', token );
      Cookie.set('jwt', token);
      localStorage.setItem('user-token', token);
      if(vuexContext.state.user.customClaims.admin == true){
        localStorage.setItem('userRole','Admin');
      }else{
        localStorage.setItem('userRole','Data Clerk');
      }
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
