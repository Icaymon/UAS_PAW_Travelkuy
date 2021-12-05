<template>
    <v-main class="body gradient">
        <div>
            <v-app-bar app fixed class="blue lighten-4">
                <v-toolbar-title class="mark" plain @click="goHome()">Travelskuy</v-toolbar-title>
                <v-spacer></v-spacer>
                
                <v-btn class="mark" plain @click="goMyTickets()">
                    My Tickets <v-icon>mdi-ticket</v-icon>
                </v-btn>

                <v-btn class="mark" plain @click="goBuyTickets()">
                    Buy Tickets <v-icon>mdi-airplane</v-icon>
                </v-btn>

                <v-btn class="mark" plain @click="goProfileUser()">
                    Welcome, User <v-icon>mdi-account</v-icon>
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
        background-image: url("../../assets/Untitled.jpg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-attachment: fixed;
        padding: 9%;
    }

    .mark:hover {
        background-color: #c5e8fc;
        cursor: pointer;
    }

    .gradient {
        background-image: linear-gradient(45deg, rgb(129, 207, 245, 0.46), rgb(213, 250, 254, 0.5)), url("../../assets/Untitled.jpg");
    }
</style>

<script>
export default {
    methods:{
        goMyTickets(){
            this.$router.push({
                name: "MyTickets",
            });
        },
        goBuyTickets(){
            this.$router.push({
                name: "BuyTickets",
            });
        },
        goProfileUser(){
            this.$router.push({
                name: "ProfileUser",
            });
        },
        goHome(){
            this.$router.push({
                name: "userProfile",
            });
        },
    }
}
</script>