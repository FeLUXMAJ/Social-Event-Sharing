<template>
    <div class="dashboard-container">
        <md-layout md-align="center" md-gutter="50" style="text-align:center ">
           <h1 style="font-weight: 100">Events</h1>
            <AddEvent></AddEvent>
        </md-layout>

            <div class="row">
                <div class="col-md-3">
                    <EventItem v-for="(event, index) in this.$store.state.events" :event="event" key="index"></EventItem>
                </div>
            </div>
    </div>
</template>

<script>
    import { firebaseApp, eventsRef } from '../firebaseApp'
    import AddEvent from '../components/dumb/AddEvent.vue'
    import EventItem from '../components/dumb/EventItem.vue'
    export default {
        components: {
            'AddEvent': AddEvent,
            'EventItem': EventItem,
        },
        methods: {

        },
        mounted() {
            eventsRef.on('value', snap => {
                let events = [];
                snap.forEach(event => {
                    events.push(event.val())
                })
                console.log('events', events);
                this.$store.dispatch('setEvents', events);
            })
        },
    }
</script>

<style>
    .dashboard-container {
        padding:0 10%;
        margin: 0 auto;
    }
</style>