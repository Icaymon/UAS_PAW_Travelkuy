<template>
    <v-main>
        <h1 class="center-text textsize" v-bind:style="{'margin' : '0 30px'}">Start Your Journey</h1>
        <v-btn v-bind:style="{'background-color' : '#3cff50'}" @click="goBuyTickets()">
            Buy Tickets
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
        goBuyTickets(){
            this.$router.push({
                name: "BuyTickets",
            });
        },
    }
}
</script>