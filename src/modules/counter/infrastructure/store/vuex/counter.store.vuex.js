import { createStore } from 'vuex';
import mutations from './counter.store.vuex.mutations';

const state = {
  count: 0
};

export default createStore({
  state,
  mutations
});
