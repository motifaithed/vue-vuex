import { createApp } from 'vue';
import {createStore} from 'vuex';

import App from './App.vue';

const app = createApp(App);

const counterModule = {
    state(){
        return{
            counter: 0,
        }
    },
    mutations:{
        increment(state){
            state.counter++;
        },
        increase(state, payload){
            state.counter = state.counter + payload.value;
        },
    },
    actions:{
        increment(context){
            context.commit('increment');
        },
        increase(context, payload){
            setTimeout(()=>{
                context.commit('increase', payload);
            },2000)
        },
    },
    getters:{
        finalCounter(state){
            return state.counter * 10;
         },
         normalizedCounter(_,getters){
             const value = getters.finalCounter;
             if(value >= 100){
                 return 100;
             }
             return value;
         },
    }
}

const store = createStore({
    modules:{
        counterModule: counterModule
    },
    state(){
        return {
            
            isLoggedIn: false
        };
    },
    mutations:{
       
        login(state){
            state.isLoggedIn = true;
        },
        logout(state){
            state.isLoggedIn = false;
        }
    },
    actions:{
        
        login(context){
            context.commit('login')
        },
        logout(context){
            context.commit('logout');
        }
    },
    getters:{
       
        loginState(state){
            return state.isLoggedIn;
        }
    }
})

app.use(store);
app.mount('#app');
