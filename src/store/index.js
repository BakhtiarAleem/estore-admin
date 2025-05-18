import { createStore } from "vuex";
import data from '@/data/inventoryManagement.json'
const store = createStore({
    state:{
        isAuthenticated: localStorage.getItem('isAuthenticate') === 'true',
        user: JSON.parse(localStorage.getItem('user')) || null,
        inventory: JSON.parse(localStorage.getItem('inventory')) || null,
    },
    mutations:{
        login(state, payload){
            state.isAuthenticated = true
            state.user = payload
            localStorage.setItem('isAuthenticate', 'true')
            localStorage.setItem('user', JSON.stringify(payload))
            localStorage.setItem('inventory', JSON.stringify(data))
            
        },
        logout(state){
            state.isAuthenticated = false
            state.user = {}
            localStorage.removeItem('isAuthenticate')
            localStorage.removeItem('user')
            localStorage.removeItem('inventory')
        },
        addProduct(state, payload){            
            const data = state?.inventory;
            const id = data.data.length + 1
            payload.id = id
            if (!Array.isArray(data.data)) {
                data.data = [];
            }
            data.data.push(payload);
            state.inventory = data;
            localStorage.setItem('inventory', JSON.stringify(state.inventory));
        },
    },
    actions:{
        login({ commit }, user){
            commit('login', user)
        },
        logout({ commit }){
            commit('logout')
        },
        addProduct({ commit }, data){
            commit('addProduct', data)
        }
    },
    getters:{
        isAuthenticated: (state) => state.isAuthenticated,
        user: (state) => state.user,
        inventory: (state) => state.inventory
    }
})

export default store