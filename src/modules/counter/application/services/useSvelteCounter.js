import { writable } from 'svelte/store';
import CounterService from '../../domain/counter.service';
import counterRepository from '../../infrastructure/counter.repository';
import counterStore from '../../infrastructure/store/counter.store';

const counterService = CounterService(counterRepository)

export const count = writable(counterStore.getCount())

counterStore.subscribeToCount((storeCount) => {
  count.set(storeCount)
});

export const increment = async (by) => {
  await counterService.increment(by)
};

export const decrement = async (by) => {
  await counterService.decrement(by)
};
