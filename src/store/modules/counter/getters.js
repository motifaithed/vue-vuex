export default {
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