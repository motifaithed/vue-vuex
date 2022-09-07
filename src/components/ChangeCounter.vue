<template>
    <button @click="increase({value: 10})">increment 10</button>
</template>
<script>
    import {mapActions} from 'vuex';
    export default{
        methods:{
            // incrementCounter(){
            //     this.$store.dispatch({
            //         type: 'increase',
            //         value: 10
            //     });
            // }
            ...mapActions(['increase'])
        }
    }
</script>