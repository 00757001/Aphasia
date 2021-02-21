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
              <v-btn icon @click="Record"  :color="color">
                <v-icon>mdi-microphone</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="download">
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </v-toolbar>
          </v-flex>
      </v-layout>
      <v-snackbar v-model="snackbar.show" :timeout="snackbar.timeout" :color="snackbar.color">
        <h3>{{ snackbar.msg }}</h3>
        <template v-slot:action="{ attrs }">
          <v-btn icon v-bind="attrs" @click="snackbar.show = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
    </v-snackbar>
    </v-container>

  </div>
</template>

<script>
  //Recorder
  import Recorder from 'recorder-js'; 
  //audio player
  import {Howl} from 'howler';
  import dora from '@/doraemon.mp3'
  import fail from '@/fail.mp3'

  //Recorder.js config
  const audioContext =  new (window.AudioContext || window.webkitAudioContext)();
  const recorder = new Recorder(audioContext, {
                                                                                                                                                                                   
    ///onAnalysed: data => console.log(data),
  });
  //--------------------------------
  export default {
    name: 'Practice',
    data: () => ({
      currentIndex: 0,
      imgs: [
        {src:"https://imgur.com/TZjESLV.jpg", name:'Apple', audio:dora, show: false},
        {src:"https://imgur.com/TZjESLV.jpg", name:'Banana', audio:fail, show: false},
        {src:"https://imgur.com/TZjESLV.jpg", name:'Apple', audio:dora, show: false}
      ],
      expand: false,
      snackbar: {show: false,timeout:1500,color:"",msg:""},
      //timeout: 1500,
      sound:null,
      isRecord:false,
      blob:null,
    }),
    mounted(){
      navigator.mediaDevices.getUserMedia({audio: true})
          .then(stream => recorder.init(stream))
          .catch(err => console.log('Uh oh... unable to get stream...', err));
    },
    computed: {
      color(){
        let color = (this.isRecord)? "red":"";
        return color;
      }
    },
    methods: {
      showName(){
        this.imgs[this.currentIndex].show = !this.imgs[this.currentIndex].show;
      },
      playAudio(){
        const audio = this.imgs[this.currentIndex].audio;
        this.sound = new Howl({
          src: audio
        });
        this.snackbar.color = "";
        this.snackbar.msg = "播放中";
        this.snackbar.show = true;
        this.sound.play();
      },
      Record(){
        if(!this.isRecord) this.startRecording();
        else this.stopRecording();
        this.isRecord = !this.isRecord;
      },
      startRecording(){
        console.log('start recording...')
        recorder.start();
      },
      stopRecording(){
        recorder.stop()
          .then(({blob}) => {
            this.blob = blob;
          });
        console.log('stop recording...')
      },
      download(){
        if(this.blob != null && this.blob != undefined){
          Recorder.download(this.blob,`${this.imgs[this.currentIndex].name}`);
        }
        else{
          this.snackbar.color = "error";
          this.snackbar.msg = "尚無音檔";
          this.snackbar.show = true;
          
        }
      }
    },
  }
</script>