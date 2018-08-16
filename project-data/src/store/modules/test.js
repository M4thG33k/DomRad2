// make our modules namespaced to avoid method name conflicts
const namespaced = true;

// sub modules
const modules = {};

// The variables accessible from this store - store variables should have a default value
// Store variables should not be directly assigned outside of the instance which defines them;
// if you need to change the value of a stored variable, use/create a mutation that does it for you.
const state = {
    test: "This is",
    cookie: document.cookie
};

// Methods used to get computed data from the store.
// Getters are to the Store as Computed Values are to Components - they will update their values when their dependencies change.
// state must be an input to every getter.
// More information can be found here: https://vuex.vuejs.org/en/getters.html
const getters = {};


// Actions are methods associated with the store that can called to perform...well...actions on the stored variables
// These methods do *not* have to be synchronous.
// Actions are normally used to call mutations (defined below)
// More information can be found here: https://vuex.vuejs.org/en/actions.html
const actions = {};


// Mutations are methods associated with a store that directly change the stored values.
// These methods are called synchronously (do not put API calls in mutations, instead use an Action to make the API call
// and place the necessary data in the store via a mutation).
// More information can be found here: https://vuex.vuejs.org/en/mutations.html
const mutations = {};

// Return the store module
export default {
    namespaced,
    state,
    getters,
    actions,
    mutations,
    modules
}