export default {
    increment(context){
        context.commit('increment');
    },
    increase(context, payload){
        setTimeout(()=>{
            context.commit('increase', payload);
        },2000)
    },
}