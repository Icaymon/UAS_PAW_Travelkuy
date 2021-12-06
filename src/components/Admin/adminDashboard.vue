<template>
    <v-main>
        <h1 class="center-text textsize" v-bind:style="{'margin-top' : '125px'}">Welcome Back, Admin</h1>
        <v-btn v-bind:style="{'background-color' : '#3cff50'}" @click="goViewTickets()">
            View Tickets
        </v-btn>
    </v-main>
</template>

<style scoped>
    .textsize{
        font-size: 48px;
    }
</style>

<script>
export default {
    methods:{
        goViewTickets(){
            this.$router.push({
                name: "viewTickets",
            });
        },
    }
}
</script>