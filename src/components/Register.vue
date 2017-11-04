<template>
    <div>
        <md-layout class="container-register" md-align="center" md-gutter="50">
            <md-card class="card-register">
                <md-card-header class="header-register">Register</md-card-header>
                <md-card-content>
                    <md-input-container>
                        <md-icon>face</md-icon>
                        <label>E-mail</label>
                        <md-input
                            type="email"
                            id="email"
                            v-model="email"
                            required
                        ></md-input>
                    </md-input-container>
                    <md-input-container md-has-password>
                        <md-icon>lock</md-icon>
                        <label>Password</label>
                        <md-input
                                type="password"
                                id="password"
                                v-model="password"
                                required
                        ></md-input>
                    </md-input-container>
                    <md-button class="md-raised md-primary btn-register" @click="register">Register</md-button>
                </md-card-content>
                <p class="error-register">{{ error.message }}</p>
            </md-card>
        </md-layout>
    </div>
</template>

<script>
    import { firebaseApp } from '../firebaseApp'

    export default {
        data() {
            return {
                email: '',
                password: '',
                error: {
                    message: ''
                }
            }
        },

        methods: {
            register() {
                firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .catch(error => {
                        this.error = error
                    })
            }
        }
    }
</script>

<style scoped>
    .container-register {
        margin-top: 10%;;
    }

    .card-register {
        width: 43%;
    }

    .btn-register {
        width: 98%;
        text-align: center;
    }

    .header-register {
        text-align: center;
        font-size: 25px;
    }
    .error-register {
        text-align: center;
    }

</style>