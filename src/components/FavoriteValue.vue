<template>
     <h2>{{ normalizedCounter }}</h2>
     <p>do more...</p>
</template>

<script>
    import {mapGetters} from 'vuex';
  export default {
      computed:{
        //   checkCounter(){
        //       return this.$store.getters.normalizedCounter;
        //   }
        ...mapGetters(['normalizedCounter'])
      }
  }
</script>