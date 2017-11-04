import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import { mutations } from "./mutations";
import * as actions from "./actions";

const state = {
    // products: [
    //     {name:'A', price:'35'},
    //     {name:'B', price:'50'},
    //     {name:'C', price:'58'},
    // ],
    user: {},
    events: [],
    isLogged: 0,
}

export const store = new Vuex.Store({
    state,
    mutations,
    actions,
});