<template>
    <div class="col-md-3">
        <md-card>
            <md-card-header>
                <div class="md-title">
                    {{ event.title }} - {{ event.email }}
                </div>
                <div class="md-subtitle">
                    {{ event.date }}
                </div>
            </md-card-header>
            <md-card-content>
                {{ event.description }}
            </md-card-content>
        </md-card>
    </div>
</template>

<script>
    export default {
        props:['event']
    }
</script>

<style>

</style>