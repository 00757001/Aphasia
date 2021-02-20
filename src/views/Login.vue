<template>
    <div>
        <v-toolbar dense color="green">
            <v-toolbar-title><h3>失語症訓練平台</h3></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
            </v-toolbar-items>
        </v-toolbar>
    
        <v-container fluid >
            <v-img src = "https://imgur.com/xQFXvJ1.png" contain max-height="70"></v-img>
            <v-card width="400px" class="mx-auto mt-5">
                
                <v-card-title class="justify-center">
                    
                    <h3 class="font-weight-black">登入你的帳號</h3>
                </v-card-title> 
                <v-card-text>
                    <v-form>
                        <v-text-field 
                            label="Username" 
                            prepend-icon="mdi-account-circle"                      
                        />
                    </v-form>
                    <v-form>
                        <v-text-field 
                            label="Password" 
                            :type="showPassword ? 'text' : 'password'"  
                            prepend-icon="mdi-lock"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="showPassword = !showPassword"
                        />
                    </v-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <!-- <v-btn color="primary">Sign up</v-btn>
                    <v-spacer></v-spacer> -->
                    <v-btn color="success" 
                        block 
                        elevation="2"
                        large
                        outlined
                        class="font-weight-black"
                    >登入</v-btn>
                </v-card-actions>
                <p>或是</p>
                <v-card-actions>
                    <v-btn
                        block
                        elevation="4"
                        large
                        text
                        href="http://localhost:3000/auth/google"
                    ><img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.199/static/media/google-logo.c21ca9d1.svg" style="height: 18px; margin-right: 8px; width: 18px;">
                        使用 Google 帳號註冊
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
        <v-spacer></v-spacer> 
    </div>
       
</template>

<script>
//import axios from '@/axios';
export default {
    data: () => ({
        showPassword: false,
    }),
    
    methods: {

    },
}
</script>

<style lang="scss" scoped>
::v-deep .v-toolbar__content {
    padding-right: 0px !important;
}
</style>
