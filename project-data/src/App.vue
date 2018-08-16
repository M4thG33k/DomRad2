<template>
    <div id="app">
        <div v-if="this.$store.state.settings.allowCookies">
            <b-navbar toggleable="md" type="dark" variant="dark">
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                <b-navbar-brand to="/">NavBar</b-navbar-brand>

                <b-collapse is-nav id="nav_collapse">
                    <b-navbar-nav>
                        <b-nav-item to="settings">Settings</b-nav-item>
                        <b-nav-item to="randomize">Randomize</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
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
        data() {
            return {
                settings: false
            }
        },
        methods: {
            allowCookies() {
                this.$store.dispatch("settings/allowCookies");
            }
        },
        watch: {
            '$route'(nw, old) {
                switch (nw.path.split("/")[1]) {
                    case "settings":
                        this.settings = true;
                        break;
                    default:
                        this.settings = false;
                }
            }
        }
    }
</script>

<style>
</style>
