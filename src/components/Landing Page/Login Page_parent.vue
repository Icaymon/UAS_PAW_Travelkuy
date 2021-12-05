<template>
    <v-main class="body gradient">
        <div>
            <v-app-bar app fixed class="blue lighten-4">
                <v-toolbar-title class="mark" plain @click="goHome()">Travelskuy</v-toolbar-title>
                <v-spacer></v-spacer>
                
                <v-btn class="mark" plain @click="goLogin()">
                    Login
                </v-btn>

                <v-btn class="mark" plain @click="goRegister()">
                    Sign Up
                </v-btn>
            </v-app-bar>
            <div class="fullheight pa-5">
                <router-view></router-view>
            </div>
        </div>
    </v-main>
</template>

<style>
    .body{
        background-image: url("../../assets/gambar.jpg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-attachment: fixed;
        overflow-y: auto;
        padding: 9%;
    }
    .mark:hover {
        background-color: #dff2fd;
        cursor: pointer;
    }
    .gradient {
        background-image: linear-gradient(45deg, rgba(129, 207, 245, 0.46), rgba(213, 250, 254, 0.5)), url("../../assets/gambar.jpg");
    }
</style>

<script>
export default {
    methods:{
        goHome(){
            this.$router.push({
                name: "Landing Page",
            });
        },
        goLogin(){
            this.$router.push({
                name: "SignIn",
            });
        },
        goRegister(){
            this.$router.push({
                name: "SignUp",
            });
        }
    }
}
</script>