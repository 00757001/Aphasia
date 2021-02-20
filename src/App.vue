<template>
  <v-app>
    <div id="app" >
      <v-slide-x-transition mode="out-in" v-if="!ifLoading">
        <router-view />
      </v-slide-x-transition>
      <Loading v-if="ifLoading" />
    </div>
  </v-app>
</template>

<script>
import Loading from '@/components/Loading.vue'
export default {
    components: {
      Loading
    },
    data: () => ({
        
    }),
    mounted(){
      this.$store.dispatch("getUser");
    },
    computed:{
      ifLoading(){
        return this.$store.state.loading;
      }
    },
    methods:{
      
    },
    
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  // html,body,#app{
  //   height: 100%;
  // }
}
</style>
