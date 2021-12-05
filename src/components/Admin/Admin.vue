<template>
    <div>
        <v-app-bar app fixed>
            <v-toolbar-title>Travelskuy</v-toolbar-title>
            <v-spacer></v-spacer>
            
            <v-btn text to="/viewTickets">
                View Tickets
            </v-btn>

            <v-btn text to="/adminProfile">
                Welcome, Admin
            </v-btn>
        </v-app-bar>
        <div class="fullheight pa-5">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "adminProfile",
        data() {
            return {
            };
        },    
    };
</script>

<style scoped>
.fullheight{
    min-height: 100vh !important;
}

</style>