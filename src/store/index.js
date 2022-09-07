import {createStore} from 'vuex';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';
import counterModule  from './modules/counter';

const store = createStore({
    modules:{
        counterModule: counterModule
    },
    state(){
        return {           
            isLoggedIn: false
        };
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
})

export default store;