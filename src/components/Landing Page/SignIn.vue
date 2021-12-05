<template>
    <main>
        <v-container fluid fill-height class="posisinya">
            <v-layout flex align-center justify-center>
                <v-flex xs12 sm6 elevation-6>
                    <v-toolbar class="blue lighten-3">
                        <v-toolbar-title class="white--text flex text-center">
                            <h1>LOGIN</h1>
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card>
                        <v-card-text class="pt-4">
                            <div>
                                <v-form v-model="valid" ref="form">
                                    <v-text-field label="Enter Your E-mail" v-model="email" :rules="emailRules" required></v-text-field>
                                    <v-text-field label="Enter Your Password" v-model="password" type="password" min="8" :rules="passwordRules" required></v-text-field>
                                    <v-layout justify-center>
                                        <v-btn class="mr-2" @click="submit" :class="{ 'grey darken-1 white--text' : valid, disabled: !valid}">Sign In</v-btn>
                                    </v-layout>
                                    <span>Don't have account? <span @click="goRegister()" style="color: blue;"><u>Sign Up</u></span></span>
                                </v-form>
                            </div>
                        </v-card-text>
                    </v-card>
                    <v-snackbar v-model="snackbar" :color="color" timeout="2000" bottom>{{ error_message }}</v-snackbar>
                </v-flex>
            </v-layout>
        </v-container>
    </main>
</template>

<style>
    .posisinya{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 0%;
        margin: 0%;
    }
    
</style>

<script>
    export default {
        name: "Login",
        data() {
            return {
                load: false,
                snackbar: false,
                error_message: '',
                color: '',
                valid: false,
                password: '',
                passwordRules: [
                    (v) => !!v || 'Password tidak boleh kosong :(',
                ],
                email: '',
                emailRules: [
                    (v) => !!v || 'E-mail tidak boleh kosong :(',
                ]
            };
        },
    
    methods: {
        submit() {
            if(this.$refs.form.validate())
            {
                // Cek Validasi Data Yang Terkirim
                this.load = true;
                this.$http.post(this.$api + '/login', {
                    email: this.email,
                    password: this.password
                }).then(response => {
                    // Simpan Data ID User Yang Diinput
                    localStorage.setItem('id',response.data.user.id);
                    localStorage.setItem('token',response.data.access_token);
                    this.error_message = response.data.message;
                    this.color = "green";
                    this.snackbar = true;
                    this.load = false;
                    this.clear();
                    this.$router.push({
                        name: 'Course',
                    });
                }).catch(error => {
                    this.error_message = error.response.data.message;
                    this.color = 'red';
                    this.snackbar = true;
                    localStorage.removeItem('token');
                    this.load = false;
                })
            }
        },

        clear()
        {
            this.$refs.form.reset() // Clear Form Login
        },
        goSignIn(){
            this.$router.push({
                name: "User",
            });
        },
        goRegister(){
            this.$router.push({
                name: "SignUp",
            });
        }
    },
};
</script>