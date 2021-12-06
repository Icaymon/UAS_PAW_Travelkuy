<template>
    <v-main>
        <v-container>
            <v-card class="profileForm">
                <div>
                    <img src="../../assets/wisata.jpg" alt="labuan bajo" style="width: 100%" />
                    <div style="margin: 0 3%">
                        <v-text-field class="col-sm-5" label="Nama Wisata" type="text" required></v-text-field>
                        <v-text-field class="col-sm-5" label="Lokasi" type="text" required></v-text-field>
                        <v-text-field class="col-sm-5" label="Total Harga" type="number" required></v-text-field>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                                <v-btn class="blue white--text" @click="goViewTickets()">Update Ticket</v-btn>
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
    height: 800pt;
    margin-top: 10pt;
    margin-left: 180pt;
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