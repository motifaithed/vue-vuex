<template>
    <button @click="login" v-if="!loginState">Login</button>
    <button @click="logout" v-else>Logout</button>
</template>
<script>
    import {mapActions} from 'vuex';
    import { mapGetters } from 'vuex';
    export default {
        computed:{
            ...mapGetters(['loginState'])
        },
         methods:{
            ...mapActions(['login','logout'])
         }
    }
</script>