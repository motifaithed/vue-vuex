<template>
  <base-container title="Vuex" v-if="loginState">
  <the-counter></the-counter>
  <favorite-value></favorite-value>
  <button @click="increment">Add 1</button>
  <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

import {mapActions} from 'vuex';
import { mapGetters } from 'vuex';
export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },
  computed:{
    ...mapGetters(['loginState'])
  },
  methods:{
    // incrementCounter(){
    //   this.$store.dispatch('increment');
    // }
    ...mapActions(['increment'])
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