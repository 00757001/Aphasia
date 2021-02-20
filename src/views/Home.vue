<template>
  <div>
    <v-toolbar dense color="green">
        <v-toolbar-title><h3>失語症訓練平台</h3></v-toolbar-title>
        <v-spacer></v-spacer>
        
          <!-- <v-btn v-if = "!$store.state.isLogin" text width="100" to="/">
            <v-icon> mdi-login-variant</v-icon>
            <h3> 登入 </h3>
          </v-btn> -->
          <!-- <v-btn icon x-large>
              <v-icon>mdi-home</v-icon>
          </v-btn> -->
        
        <!-- <v-btn v-if = "$store.state.isLogin" href="http://localhost:3000/auth/google/logout">Logout</v-btn> -->
        
          <v-menu rounded="rounded" offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-on="on">
                <v-avatar size="40">
                  <v-img
                    :src="userImg"
                    v-bind="attrs"
                  >
                  </v-img>
                </v-avatar>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                router :to = "item.route"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item href="http://localhost:3000/auth/google/logout">
                <v-list-item-title>登出</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        
    </v-toolbar>
    <v-row class = "mt-4 mx-4">
      <v-col 
        v-for="(item,i) in cards"
        :key="i"
          cols="12"
          md="4">
        <v-card
          class="mx-auto"
          max-width="450"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <v-card-title>
            {{item.title}}
          </v-card-title>

          <v-card-subtitle>
             <v-progress-linear
              v-model="item.progress"
              :color="item.barColor"
              height="25"
              rounded
            >
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card-subtitle>
          <v-card-actions>
            <v-btn
              color="green"
              router :to="item.route"
              outlined
              block
            >
              開始練習
            </v-btn>

            <!-- <v-spacer></v-spacer> -->

            <!-- <v-btn
              icon
              @click="item.show = !item.show"
            >
              <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn> -->
          </v-card-actions>

          <!-- <v-expand-transition>
            <div v-show="item.show">
              <v-divider></v-divider>

              <v-card-text>
                123
              </v-card-text>
            </div>
          </v-expand-transition> -->
        </v-card>
      </v-col>
    </v-row>
  </div>
  
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import {mapState} from 'vuex'
import axios from '@/axios';
export default {
  name: 'Home',
  components: {
    //HelloWorld
  },
  data: () => ({
    items: [
      { title: 'Click Me', route: ''},
      { title: 'Click Me', route: ''},
      { title: 'Click Me', route: ''},
      { title: 'Click Me 2', route: '' },
    ],
    closeOnContentClick: true,
    cards:[
      {title:'核心詞彙',subtitle:'練習', show: false, barColor:"teal", route: '/core', progress:0},
      {title:'高頻句型',subtitle:'練習', show: false , barColor:"amber", route: '/scramble', progress:0},
      {title:'其他',subtitle:'練習', show: false , barColor:"deep-orange", route: '/', progress:0},
    ],
  }),
  computed: {
    ...mapState({
      userImg: state => state.auth.user.image
    }),
  },
  methods: {
    async getPlayer(){
      try {
        const response = await axios.get(`player`);
        console.log(response);
      }catch (e) {
        console.log(e);
      }
    },
  },
  mounted:function(){
    this.getPlayer();
  }
}
</script>

<style lang="scss" scoped>
  

</style>
