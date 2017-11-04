<template>
    <div class="dashboard-events-div">

    <md-dialog md-open-from="#fab" md-close-to="#fab" ref="dialog2">
        <md-dialog-title>Add an event</md-dialog-title>

        <md-dialog-content>


            <md-input-container>
                <label>Title</label>
                <md-icon>title</md-icon>
                <md-input
                        type="text"
                        id="title"
                        v-model="event.title"
                        placeholder="Title"
                        maxlength="30"
                        required
                >
                </md-input>
            </md-input-container>
            <md-input-container>
                <label>Description</label>
                <md-icon>speaker_notes</md-icon>
                <md-textarea
                        type="text"
                        id="description"
                        v-model="event.description"
                        placeholder="Description"
                        maxlength="100"
                        required
                ></md-textarea>
            </md-input-container>
            <md-input-container>
                <md-icon>access_time</md-icon>
                <md-input
                        type="date"
                        id="date"
                        placeholder="date"
                        v-model="event.date"
                        required
                ></md-input>
            </md-input-container>
            <md-input-container>
                <md-icon>location_on</md-icon>
                <md-input
                        type="text"
                        id="location"
                        placeholder="Location"
                        v-model="event.location"
                        required
                ></md-input>
            </md-input-container>
            <md-button class="md-raised md-primary addevent-btn" @click="addEvent">Submit Event</md-button>
        </md-dialog-content>

        <md-dialog-actions>
            <md-button class="md-primary" @click="closeDialog('dialog2')">Cancel</md-button>
        </md-dialog-actions>
    </md-dialog>

    <md-button class="md-fab md-fab-top-center" id="fab" @click="openDialog('dialog2')">
        <md-icon>add</md-icon>
    </md-button>

    </div>
</template>

<script>
import { eventsRef } from '../../firebaseApp'
    export default {
        name:'AddEvent',
        data() {
            return {
                event: {
                    title: '',
                    description: '',
                    date: '',
                    location: '',
                    email: '',
                }
            }
        },
        methods: {
            addEvent() {
                this.event.email = this.$store.state.user.email;
                eventsRef.push(this.event);
                this.event.location = '';
                this.event.email = '';
                this.event.date = '';
                this.event.description = '';
                this.event.title = '';
            },
            openDialog(ref) {
                this.$refs[ref].open();
            },
            closeDialog(ref) {
                this.$refs[ref].close();
            },
            onOpen() {
                console.log('Opened');
            },
            onClose(type) {
                console.log('Closed', type);
            }
        }

    }

</script>

<style>
    .dashboard-events-div {
        width: 50%;
    }
    .addevent-btn {
        width: 90%;
    }
</style>