<template>
    <v-main>
        <v-card-actions>
            <v-spacer></v-spacer>
                <v-btn class="grey white--text" @click="goAddTickets()"><v-icon>mdi-card-plus</v-icon>Add Vacation</v-btn>
            <v-spacer></v-spacer>
        </v-card-actions>
        <v-container>
            <v-card class="profileForm">
                <div>
                    <img src="../../assets/wisata.jpg" alt="labuan bajo" style="width: 100%" />
                    <div style="text-align: left">
                        <v-card-subtitle style="padding: 5px 15px">Nama Wisata : Labuan Bajo</v-card-subtitle>
                        <v-card-subtitle style="padding: 5px 15px">Lokasi : Nusa Tenggara Timur<br/><br/></v-card-subtitle>
                        <v-card-subtitle style="padding: 5px 15px">
                            Total harga : <br/>
                            Rp 200.000,00
                        </v-card-subtitle><br>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                                <v-btn class="blue white--text" @click="goEditTickets()">Edit Ticket</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </div>
                </div>
            </v-card>
        </v-container>
    </v-main>
</template>

<style scoped>
.profileForm{
    width: 970pt;
    height: 720pt;
    margin-top: 10pt;
    margin-left: 180pt;
}
</style>

<script>
export default {
    methods:{
        goEditTickets(){
            this.$router.push({
                name: "editTickets",
            });
        },
        goAddTickets(){
            this.$router.push({
                name: "addTickets",
            });
        },
    }
}
</script>