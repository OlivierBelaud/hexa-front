export const VUEX_MUTATION_SET_COUNT = 'SET_COUNT';

export default {
  [VUEX_MUTATION_SET_COUNT](state, newCount) {
    state.count = newCount;
  }
};
