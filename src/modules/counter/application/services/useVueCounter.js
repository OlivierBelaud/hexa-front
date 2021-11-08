import { ref } from 'vue';
import CounterService from '../../domain/counter.service';
import counterRepository from '../../infrastructure/counter.repository';
import counterStore from '../../infrastructure/store/counter.store';

const counterService = CounterService(counterRepository);

export default function useCounter() {
  const count = ref(0)

  counterStore.subscribeToCount((storeCount) => {
    count.value = storeCount
  });

  const increment = async (by) => {
    await counterService.increment(by)
  };

  const decrement = async (by) => {
    await counterService.decrement(by)
  };

  return {
    count,
    increment,
    decrement
  };
}
