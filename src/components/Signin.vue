<template>
    <div>
        <md-layout class="login-container" md-align="center" md-gutter="50">
            <md-card class="card-login">
                <md-card-header md-big="true">
                    <md-card-header-text>
                        <div class="md-title" style="text-align: center;">Log in</div>
                        <div class="md-subhead"></div>
                    </md-card-header-text>
                </md-card-header>
                <md-card-content>
                    <md-input-container>
                        <md-icon>face</md-icon>
                        <label for="email">Email</label>
                        <md-input
                            type="email"
                            id="email"
                            v-model="email"
                            placeholder="app@example.com"
                            required
                        ></md-input>
                    </md-input-container>
                    <md-input-container md-has-password>
                        <md-icon>lock</md-icon>
                        <label for="password">Password</label>
                        <md-input
                            type="password"
                            id="password"
                            v-model="password"
                            required
                        >
                        </md-input>
                    </md-input-container>
                    <md-button class="md-raised md-primary btn-login" @click="signIn">Log in</md-button>
                </md-card-content>
               <p class="error-login">{{ error.message }}</p>
            </md-card>

        </md-layout>
    </div>
</template>

<script>
    import { firebaseApp } from '../firebaseApp'
    export default {
        data() {
            return {
                email:'',
                password:'',
                error: {
                    message:''
                }

            };
        },

        methods: {
            signIn(){
                firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
                    .catch(error => {
                        this.error = error;
                        console.log(this.error);
                    })
                console.log(this.error.message)
            }
        }
    }

</script>

<style scoped>
    .login-container{
        margin-top: 10%;
    }

    .card-login {
        width: 43%;
    }

    .btn-login {
        width: 98%;
        text-align: center;
    }

    .error-login {
        text-align: center;
    }

</style>