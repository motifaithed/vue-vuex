import { createApp } from 'vue';
import {createStore} from 'vuex';

import App from './App.vue';

const app = createApp(App);

const store = createStore({
    state(){
        return {
            counter: 0
        };
    },
    mutations:{
        increment(state){
            state.counter++;
        },
        increase(state, payload){
            state.counter = state.counter + payload.value;
        }
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
        }
    }
})

app.use(store);
app.mount('#app');
