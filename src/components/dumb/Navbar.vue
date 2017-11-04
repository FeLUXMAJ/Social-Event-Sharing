<template>
    <md-toolbar>
        <h2 class="md-title" style="flex: 1">Ovi</h2>


        <a href="/#/login" v-if="!this.$store.state.isLogged">
            <md-button class="md-raised md-primary">
                Log in
            </md-button>
        </a>
        <a href="/#/register" v-if="!this.$store.state.isLogged">
            <md-button class="md-raised md-primary">
                Register
            </md-button>
        </a>

        <md-button class="md-raised md-accent" @click="signOut" v-if="this.$store.state.isLogged">
            Log out
        </md-button>

    </md-toolbar>
</template>

<script>
    import { firebaseApp } from '../../firebaseApp'
    export default {
        name:'nav-bar',
        methods: {
            signOut(){
                this.$store.dispatch('signOut')
                firebaseApp.auth().signOut()
            }
        }

    }
</script>

<style></style>