import * as types from './mutation-types';

const mutations = {
  [types.SET_USER] (state, user) {
    state.user = user;
  },
  [types.SET_ALERT] (state, alert) {
    state.alert = alert;
  }
};

export default mutations;
