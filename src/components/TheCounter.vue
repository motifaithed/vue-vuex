<template>
      <h2>{{ finalCounter }}</h2>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        computed:{
            // checkCounter(){
            //     return this.$store.getters.finalCounter;
            // }
            ...mapGetters('counterModule',['finalCounter'])
        }
    }
</script>