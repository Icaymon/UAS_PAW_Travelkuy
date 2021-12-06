<template>
    <v-main>
        <v-container>
            <v-card class="profileInfo rounded-xl">
                <v-avatar class="mt-8" size="150">
                    <img
                        alt="profile"
                        src="../../assets/profile.png" 
                        style="width: 100%"
                    >
                </v-avatar>
                <v-card-text class="black--text profileDesc">
                    <div class="profileText">
                        <p>{{ user.name }}</p>
                        <p class="pt-5">{{ user.email }}</p>
                    </div>
                </v-card-text>
            </v-card>
            <v-card class="profileForm rounded-xl">
                <v-card-text class="pt-4">
                    <div>
                        <v-form v-model="valid" ref="form">
                            <h1 style="text-align: center">Personal Information</h1>
                            <div style="margin: 0 3%">
                                <v-text-field label="Name" v-model="formTodo.name" :rules="nameRules" required></v-text-field>
                                <v-text-field label="E-mail" v-model="formTodo.email" :rules="emailRules" required></v-text-field>
                                <v-text-field label="Age" v-model="formTodo.age" :rules="ageRules" required></v-text-field>
                                <v-select v-model="formTodo.gender" :items="items" label="Gender" :rules="genderRules" required></v-select>
                                <v-text-field label="Old Password" v-model="formTodo.password" type="password" min="8" :rules="passwordRules" required></v-text-field>
                                <v-text-field label="New Password" v-model="formTodo.password" type="password" min="8" :rules="passwordRules" required></v-text-field>
                                <v-text-field label="Confirm New Password" v-model="formTodo.confirmPassword" type="password" min="8" :rules="passwordRules" required></v-text-field>
                            </div>
                            <v-layout justify-center style="margin-top: 60pt;">
                                <v-btn class="blue white--text me-4 rounded-xl" @click="update">Update</v-btn>
                                <v-btn class="red white--text ms-4 rounded-xl" @click="logout">Logout</v-btn>
                            </v-layout>
                        </v-form>
                    </div>
                </v-card-text>
            </v-card>
            <v-snackbar v-model="snackbar" :color="color" timeout="2000" bottom>{{ error_message }}</v-snackbar>
        </v-container>
    </v-main>
</template>

<style scoped>
.profileInfo{
    width: 350px;
    height: 400px;
    margin-left: 50pt;
}

.profileDesc{
    background-color: #C4C4C4;
    margin-top: 20px;
    width: 350px;
    height: 200px;
}

.profileForm{
    width: 800pt;
    height: 550pt;
    margin-top: -297pt;
    margin-left: 450pt;
}

.profileText{
    margin-top: 25pt;
    font-size: 25px;
}
</style>

<script>
    export default {
        name: "userProfile",
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
                user:{
                    name: 'User',
                    email: 'User@gmail.com'
                },
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
        logout() {
            localStorage.removeItem('token');
            this.$router.push({
                name: 'Login Page',
            });
        }
    },
};
</script>