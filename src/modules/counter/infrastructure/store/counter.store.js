import vuexStore from './vuex/counter.store.vuex';
import { VUEX_MUTATION_SET_COUNT } from './vuex/counter.store.vuex.mutations';
import localStorageCounter from './localStorage/counter.store.localStorage';

// ================== VUEX ==================

// const CounterStore = {
//   subscribeToCount(callback) {
//     vuexStore.subscribe((mutation, state) => {
//       callback(state.count);
//     });
//   },

//   getCount() {
//     return vuexStore.state.count;
//   },

//   setCount(newCount) {
//     vuexStore.commit(VUEX_MUTATION_SET_COUNT, newCount);
//   }
// }

// ================== LOCAL STORAGE ==================

const CounterStore = {
  subscribeToCount(callback) {
    localStorageCounter.subscribe((newCount) => {
      callback(newCount);
    });
  },

  getCount() {
    return localStorageCounter.getCount();
  },

  setCount(newCount) {
    localStorageCounter.setCount(newCount);
  }
}

export default CounterStore;
