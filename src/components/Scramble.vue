<template>
  <div>
    <v-toolbar dense color="green">
      <v-btn icon @click="$router.back()">
        <v-icon>
          mdi-arrow-left
        </v-icon>
      </v-btn>
    </v-toolbar>
    <v-container>
        <v-container style="background:#E9F5DC;color:white" rounded-lg>
          <v-row>
            <v-col v-for="(item,i) in selected" :key="i" 
              cols="10"
              md="2"
              sm="2"
            >
              <v-card>
                  <v-img :src="item.src" contain max-height="100px"> 
                  </v-img>
              </v-card>
            </v-col>
            
            <v-col class="text-right">
              <v-btn fab small color="success" class="">
                <v-icon> mdi-volume-high </v-icon>
              </v-btn>
              <br/>
              <v-btn fab small color="warning" class="" @click="deleteCard">
                <v-icon> mdi-backspace </v-icon>
              </v-btn>
              <br/>
              <v-btn fab small color="error" class="" @click="clearCard">
                <v-icon > mdi-delete </v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              
            </v-col>
          
          </v-row>
          
        </v-container>
      
      <v-item-group multiple>
        <v-container>
          <v-row v-for="(row,i) in cards" :key="i">
            <div v-if = "i % 2 == 0">
              <h3>
                {{row.title}}
              </h3>
              <v-divider></v-divider>
            </div>
            <v-col
              v-for="(item,j) in row.col"
              :key="j"
              cols="12"
              md="2"
              sm="2"
            > 
              <v-item>
                <v-card
                  class="d-flex align-center"
                  light
                  @click="appendCard(item)"
                > 
                  <v-img :src="item.src">
                  </v-img>
                  <!-- <v-scroll-y-transition>
                    <div
                      v-if="active"
                      class="display-3 flex-grow-1 text-center"
                    >
                      Active
                    </div>
                  </v-scroll-y-transition> -->
                </v-card>
              </v-item>
              <h3>{{item.alt}}</h3>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </v-container>
    <v-snackbar
      v-model="snackbar"
      timeout=2000
    >
      <h3>裝不下了</h3>
      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
  import me from '@/photo/me.jpg'
  import sister from '@/photo/sister.jpg'
  import drink from '@/photo/drink.jpg'
  import wipe from '@/photo/wash.jpg'
  import cola from '@/photo/cola.jpg'
  import milk from '@/photo/milk.jpg'
  export default {
    name: 'Scramble',
    data:() => ({
      cards:[
        {title: '人'},
        {col:[{ src: me, alt:'我', audio:''},{ src:sister, alt:'姊姊', audio:''},]},
        {title: '動作'},
        {col:[{ src:drink, alt:'喝', audio:''}, { src:wipe, alt:'擦嘴巴', audio:''}]},
        {title: '物品'},
        {col:[{ src:cola, alt:'可樂', audio:''}, { src:milk, alt:'牛奶', audio:''}]},
      ],
      selected:[],
      snackbar:false,
    }),

    methods: {
      appendCard(item){
        if(this.selected.length == 5){
          this.snackbar = true;
        }
        else{
          this.selected.push(item);
          console.log(this.selected);
        }
      },
      clearCard(){
        this.selected = [];
      },
      deleteCard(){
        this.selected.pop();
      }
    },
    
  }
</script>

<style lang="scss" scoped>
  // .action {
  //   position: absolute;
  //   left: 0px;
  //   width: 200px;
  // }

</style>