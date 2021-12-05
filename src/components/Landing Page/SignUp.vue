<template>
    <main>
        <v-container fluid fill-height class="posisinya">
            <v-layout flex align-center justify-center>
                <v-flex xs12 sm6 elevation-6>
                    <v-toolbar class="blue lighten-3">
                        <v-toolbar-title class="white--text flex text-center">
                            <h1>REGISTER</h1>
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card>
                        <v-card-text class="pt-4">
                            <div>
                                <v-form v-model="valid" ref="form">
                                    <div style="margin: 0 3%">
                                        <div class="row g-3">
                                            <v-text-field label="Name" v-model="formTodo.name" :rules="nameRules" style="margin-right: 2.5%" required></v-text-field>
                                            <v-text-field label="E-mail" v-model="formTodo.email" :rules="emailRules" style="margin-left: 2.5%" required></v-text-field>
                                        </div>

                                        <div class="row g-3">
                                            <v-text-field label="Age" v-model="formTodo.age" :rules="ageRules" style="margin-right: 2.5%; "  required></v-text-field>
                                            <v-select v-model="formTodo.gender" :items="items" label="Gender" :rules="genderRules" style="margin-left: 2.5%;" required></v-select>
                                        </div>

                                        <div class="row g-3">
                                            <v-text-field label="Password" v-model="formTodo.password" type="password" min="8" :rules="passwordRules" style="margin-right: 2.5%"  required></v-text-field>
                                            <v-text-field label="Confirm Password" v-model="formTodo.confirmPassword" type="password" min="8" :rules="passwordRules" style="margin-left: 2.5%" required></v-text-field>
                                        </div>
                                    </div>
                                    <v-layout justify-center v-bind:style="{'margin-top' : '20px'}">
                                        <v-btn class="mr-2" @click="submit" :class="{ 'grey darken-1 white--text' : valid, disabled: !valid}">Sign Up</v-btn>
                                    </v-layout>
                                    <span>Have an account? <span @click="goSignIn()" class="mark" style="color: blue;"><u>Sign In</u></span></span>
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
    .mark:hover{
        cursor: pointer;
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
                passwordRules: [
                    (v) => !!v || 'Password tidak boleh kosong :(',
                ],
                emailRules: [
                    (v) => !!v || 'E-mail tidak boleh kosong :(',
                ],
                nameRules: [
                    (v) => !!v || 'Nama tidak boleh kosong :(',
                ],
                ageRules: [
                    (v) => !!v || 'Age tidak boleh kosong :(',
                ],
                genderRules: [
                    (v) => !!v || 'Gender tidak boleh kosong :(',
                ],
                formTodo: {email:null, name:null, age:null, gender:null,password:null,confirmpassword:null},
                items: ['Pria', 'Wanita'],  
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
                name: "SignIn",
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