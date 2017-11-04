import * as types from './mutation-types'

export const mutations = {
    [types.SIGN_IN] (state, user_payload) {
        state.user = user_payload;
        state.isLogged = 1;
    },

    [types.SIGN_OUT] (state) {
        state.user = {};
        state.isLogged = 0;
    },

    [types.REGISTER] (state, user_payload) {
        state.user = user_payload;
        state.isLogged = 1;
    },

    [types.SET_EVENTS] (state, events_payload) {
        state.events = events_payload
    }
}
