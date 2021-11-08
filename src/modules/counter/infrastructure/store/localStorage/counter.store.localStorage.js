const COUNTER_LOCAL_STORAGE_KEY = 'counter_count';

localStorage.setItem(COUNTER_LOCAL_STORAGE_KEY, '0');

class LocalStorageCounter {
  #listeners = [];

  constructor() {
    window.addEventListener('storage', e => {
      if (e.storageArea !== localStorage || e.key !== COUNTER_LOCAL_STORAGE_KEY) return;
    
      this.#listeners.forEach(listener => {
        listener(e.newValue);
      });
    });
  }

  getCount() {
    return Number(localStorage.getItem(COUNTER_LOCAL_STORAGE_KEY));
  }

  setCount(newCount) {
    localStorage.setItem(COUNTER_LOCAL_STORAGE_KEY, String(newCount));

    const storageEvent = new Event('storage');

    storageEvent.key = COUNTER_LOCAL_STORAGE_KEY;
    storageEvent.storageArea = localStorage;
    storageEvent.newValue = newCount;

    window.dispatchEvent(storageEvent);
  }

  subscribe(listener) {
    this.#listeners.push(listener);
  }
}

export default new LocalStorageCounter();
