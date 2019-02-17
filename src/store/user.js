import firebase from 'firebase'


export default{
    state: {
        user:{
            isAuthenticated:false,
            uid:null,
        }
    },
    mutations: {
        SET_USER(state,payload){
            state.user.isAuthenticated = true
            state.user.uid = payload
        },
        UNSET_USER(state){
            state.user = {
                isAuthenticated:false,
                uid:null,
            }
        }
    },
    actions: {
        SIGNUP({commit},payload){
            commit('SET_PROCESSING',true)
            commit('CLEAR_ERROR')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(()=>{
                
                commit('SET_PROCESSING',false)
            })    
            .catch(function(error) {
                // console.log(error);
                commit('SET_PROCESSING',false);
                commit('SET_ERROR',error.message);
                // var errorCode = error.code;
                // var errorMessage = error.message;
                // ...
              });
        },
        SIGNIN({commit},payload){
            commit('SET_PROCESSING',true)
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(()=>{
                
                commit('SET_PROCESSING',false)
            })    
            .catch(function(error) {
                // console.log(error);
                commit('SET_PROCESSING',false);
                commit('SET_ERROR',error.message);
                // var errorCode = error.code;
                // var errorMessage = error.message;
                // ...
              });
        },
        SIGNOUT(){
            firebase.auth().signOut();
        },
        STATE_CHANGE({commit},payload){
            if(payload){
                commit('SET_USER',payload.uid);
            }else{
                commit('UNSET_USER');
            }
        }
    },
    getters:{
        isAuthenticated:(state)=>state.user.isAuthenticated
    }
  }