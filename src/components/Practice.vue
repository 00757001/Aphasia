<template>
  <div>
    <v-toolbar color="green">
        <v-btn icon @click="$router.back()">
            <v-icon>
                mdi-arrow-left
            </v-icon>
        </v-btn>
    </v-toolbar>
    <v-container>
      <v-carousel 
        v-model="currentIndex" 
        hide-delimiters
        height="70vh"
      >
        <v-carousel-item
          v-for="(img, i) in imgs"
          :key="i"
        >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-card color="white" class="rounded-xl">
                <v-img
                  contain
                  :src="img.src"
                  height="300"
                  max-width="500"
                  
                >
                </v-img>
                <v-expand-transition>
                  <h1 v-show="img.show" style="color:black;">
                    {{img.name}}
                  </h1>
                </v-expand-transition>
                
               
              </v-card>
            </v-row>
        </v-carousel-item>
      </v-carousel>
      <v-layout row wrap align-center>
          <v-flex>
            <v-toolbar class="rounded-xl" style="width: 350px; display: inline-block;">
              <v-btn icon  @click="showName">
                <v-icon>mdi-lead-pencil</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="playAudio">
                <v-icon>mdi-play</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="pauseAudio">
                <v-icon>mdi-stop</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
          </v-flex>
      </v-layout>
      <v-snackbar v-model="snackbar" :timeout="timeout">
        已在播放
        <template v-slot:action="{ attrs }">
          <v-btn icon v-bind="attrs" @click="snackbar = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
    </v-snackbar>
    </v-container>

  </div>
</template>

<script>
  import {Howl} from 'howler';
  import dora from '@/doraemon.mp3'
  import fail from '@/fail.mp3'
  // var sound = new Howl({
  //   src: dora
  // });
  export default {
    data: () => ({
      currentIndex: 0,
      imgs: [
        {src:"https://imgur.com/TZjESLV.jpg", name:'Apple', audio:dora, show: false},
        {src:"https://imgur.com/TZjESLV.jpg", name:'Banana', audio:fail, show: false},
        {src:"https://imgur.com/TZjESLV.jpg", name:'Apple', audio:dora, show: false}
      ],
      expand: false,
      snackbar: false,
      timeout: 1500,
      sound:null,
    }),

    methods: {
      showName(){
        this.imgs[this.currentIndex].show = !this.imgs[this.currentIndex].show;
      },
      playAudio(){
        const audio = this.imgs[this.currentIndex].audio;
        this.sound = new Howl({
          src: audio
        });
        this.snackbar = true;
        this.sound.play();
      },
      pauseAudio(){
        this.snackbar = false;
        this.sound.pause();
      }

    },
  }
</script>