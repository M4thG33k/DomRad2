import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import test from './modules/test';
import settings from './modules/settings';

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
    modules: {
        test,
        settings
    },
    strict: debug
});