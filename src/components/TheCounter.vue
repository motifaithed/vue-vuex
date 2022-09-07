<template>
      <h2>{{ checkCounter }}</h2>
</template>

<script>
    export default {
        computed:{
            checkCounter(){
                return this.$store.getters.finalCounter;
            }
        }
    }
</script>