<template>
     <h2>{{ checkCounter }}</h2>
     <p>do more...</p>
</template>

<script>
  export default {
      computed:{
          checkCounter(){
              return this.$store.getters.normalizedCounter;
          }
      }
  }
</script>