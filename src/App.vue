<template>
  <base-container title="Vuex">
  <the-counter></the-counter>
  <button @click="incrementCounter">Add 1</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
export default {
  components: {
    BaseContainer,
    TheCounter
  },
  methods:{
    incrementCounter(){
      this.$store.state.counter++;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>