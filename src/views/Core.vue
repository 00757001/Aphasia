<template>
  <v-card tile>
    <v-toolbar color="green">
        <v-btn icon @click="$router.back()">
            <v-icon>
                mdi-arrow-left
            </v-icon>
        </v-btn>
        <v-toolbar-title>
          <h3>核心字彙</h3>
        </v-toolbar-title>
    </v-toolbar>
    <v-row class = "mt-4 mx-4">
      <v-col 
        v-for="(item,i) in cards"
        :key="i"
          cols="12"
          md="4">
        <v-card
          class="mx-auto"
          max-width="400"
          height="220"
        >
          <!-- <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img> -->
            <v-img
                class="white--text align-end"
                height="140px"
                :src="item.src"
            >
                <v-card-title >
                    <h2 >
                        {{item.title}}
                    </h2>
                </v-card-title>
            </v-img>

          <v-card-actions>
            <v-btn
              color="green"
              outlined
              block
              class="mt-6"
              router: to = "/practice"
            >
              開始練習
            </v-btn>
          </v-card-actions>

          
        </v-card>
      </v-col>
    </v-row>
      

  </v-card>
  
</template>

<script>
export default {
  components: {
    //HelloWorld
  },
  data: () => ({
    closeOnContentClick: true,
    image:"",
    cards:[
      {title:'食物',src:'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
      {title:'生活',src:'https://cdn.vuetifyjs.com/images/cards/docks.jpg'},
      {title:'動作',src:'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
      {title:'地點',src:'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
      {title:'服飾',src:'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
      {title:'交通工具',src:'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
    ],
  }),
  methods:{
    
  },
  mounted:function(){
    
  }
}
</script>

<style lang="scss" scoped>
  

</style>
