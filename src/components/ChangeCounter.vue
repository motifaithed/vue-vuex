<template>
    <button @click="incrementCounter">add 1</button>
</template>
<script>
    export default{
        methods:{
            incrementCounter(){
                this.$store.commit('increment');
            }
        }
    }
</script>