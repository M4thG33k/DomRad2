<template>
    <div id="app">
        <div v-if="this.$store.state.settings.allowCookies">
            <b-alert variant="success" show>Good!</b-alert>
        </div>
        <div v-if="!this.$store.state.settings.allowCookies">
            <b-alert variant="info" show class="m-4">
                This application uses cookies to store settings/preferences. By continuing to the site, you are allowing
                this application to use these cookies. No personal identification information will be gathered/stored.
                <div class="d-flex justify-content-end mt-2">
                    <b-button variant="secondary" size="sm" @click="allowCookies()">Continue to application</b-button>
                </div>
            </b-alert>
        </div>
        <!--<img src="./assets/logo.png">-->
        <!--<b-alert variant="danger">Danger Alert</b-alert>-->
        <!--<router-view></router-view>-->
    </div>
</template>

<script>
    export default {
        name: 'app',
        methods: {
            allowCookies() {
                this.$store.dispatch("settings/allowCookies");
            }
        }
    }
</script>

<style>
</style>
