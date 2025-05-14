import { createStore } from "vuex";

const store = createStore({
    state:{
        isAuthenticated: localStorage.getItem('isAuthenticate') === 'true',
        user: JSON.parse(localStorage.getItem('user')) || null
    },
    mutations:{
        login(state, payload){
            state.isAuthenticated = true
            state.user = payload
            localStorage.setItem('isAuthenticate', 'true')
            localStorage.setItem('user', JSON.stringify(payload))
        },
        logout(state){
            state.isAuthenticated = false
            state.user = {}
            localStorage.removeItem('isAuthenticate')
            localStorage.removeItem('user')
        }
    },
    actions:{
        login({ commit }, user){
            commit('login', user)
        },
        logout({ commit }){
            commit('logout')
        }
    },
    getters:{
        isAuthenticated: (state) => state.isAuthenticated,
        user: (state) => state.user
    }
})

export default store