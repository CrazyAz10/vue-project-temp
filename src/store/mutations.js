import * as types from './mutation-types';
import $Cmn from '@/util/util.js';

const mutations = {
  [types.SET_USER] (state, user) {
    state.user = user;
  },
  [types.SET_ALERT] (state, alert) {
    state.alert = alert;
  },
  [types.SET_LOGOUT] (state, user) {
    state.user = user;
    $Cmn.sc('user_obj','',-1);
  }
};

export default mutations;
