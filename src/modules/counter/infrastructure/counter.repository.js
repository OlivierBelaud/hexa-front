import counterStore from './store/counter.store';

const CounterRepository = {
  async getCount() {
    // call HTTP requests

    // or get count in store (cache)
    return counterStore.getCount();
  },

  async increment(by) {
    // call HTTP requests

    // increment count in store
    counterStore.setCount(counterStore.getCount() + by);
  },

  async decrement(by) {
    // call HTTP requests

    // decrement count in store
    counterStore.setCount(counterStore.getCount() - by);
  }
}

export default CounterRepository;
