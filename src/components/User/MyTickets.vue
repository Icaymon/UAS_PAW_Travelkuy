<template>
  <v-main>
    <v-card class="container" v-bind:style="{'padding' : '0px'}">
    <div>
      <img src="../../assets/wisata.jpg" alt="labuan bajo" style="width: 100%" />
      <div class="details" style="text-align: left">
        <v-card-subtitle style="padding: 5px 15px">Nama Wisata : Labuan Bajo</v-card-subtitle>
        <v-card-subtitle style="padding: 5px 15px">Lokasi : Nusa Tenggara Timur</v-card-subtitle>
        <v-card-subtitle style="padding: 5px 15px">Tanggal: 13 September 2022</v-card-subtitle>
        <v-card-subtitle style="padding: 5px 15px">Jumlah Ticket: 3</v-card-subtitle>
        <v-card-subtitle style="padding: 5px 15px">
          Total harga : <br />
          Rp 200.000,00
        </v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="button" color="blue"  @click="goDetailTickets()">Show More</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </div>
    </div>
    </v-card>
  </v-main>
</template>

<style scoped>
  .button{
    margin: auto; 
    text-align: center; 
    display: flex;
  }
</style>

<script>
export default {
    methods:{
        goDetailTickets(){
            this.$router.push({
                name: "detailTicket",
            });
        },
    }
}
</script>