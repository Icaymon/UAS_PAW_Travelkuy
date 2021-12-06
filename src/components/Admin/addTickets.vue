<template>
    <v-main>
        <v-container>
            <!-- <GMapMap
                :center='center'
                :zoom='12'
                style='width:100%;  height: 400px;'
                >
                />
            </GMapMap> -->
            <v-card class="profileForm">
                <div>
                    <div style="margin: 0 3%">
                        <v-text-field class="col-sm-5" label="Nama Wisata" type="text" required></v-text-field>
                        <v-text-field class="col-sm-5" label="Lokasi" type="text" required></v-text-field>
                        <v-text-field class="col-sm-5" label="Latitude" type="number" required></v-text-field>
                        <v-text-field class="col-sm-5" label="Longtitude" type="number" required></v-text-field>
                        <v-text-field class="col-sm-5" label="Total Harga" type="number" required></v-text-field>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                                <v-btn class="blue white--text" @click="goViewTickets()">Add Ticket</v-btn>
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
    height: 360pt;
    margin-top: 10pt;
    margin-left: 180pt;
}
</style>

<script>
export default {
    data() {
        return {
            center: { lat: 45.508, lng: -73.587 },
            currentPlace: null,
            markers: [],
            places: [],
        }
    },
    mounted() {
        this.geolocate();
    },
    created(){
        this.$getLocation({})
            .then(coordinates => {
                this.coordinates = coordinates;
            })
            .catch(error => alert(error));
    },
    methods:{
        goViewTickets(){
            this.$router.push({
                name: "viewTickets",
            });
        },
        geolocate: function() {
            navigator.geolocation.getCurrentPosition(position => {
                this.center = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                };
            });
        },
        setPlace(place) {
            this.currentPlace = place;
        },
        addMarker() {
            if (this.currentPlace) {
                const marker = {
                lat: this.currentPlace.geometry.location.lat(),
                lng: this.currentPlace.geometry.location.lng(),
                };
                this.markers.push({ position: marker });
                this.places.push(this.currentPlace);
                this.center = marker;
                this.currentPlace = null;
            }
        },
    }
}
</script>