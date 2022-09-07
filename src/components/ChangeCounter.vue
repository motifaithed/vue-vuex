<template>
    <button @click="incrementCounter">increment 10</button>
</template>
<script>
    export default{
        methods:{
            incrementCounter(){
                this.$store.dispatch({
                    type: 'increase',
                    value: 10
                });
            }
        }
    }
</script>