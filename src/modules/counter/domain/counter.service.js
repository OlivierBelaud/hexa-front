const CounterService = (counterRepository) => {

  return {
    async increment(by) {
      return counterRepository.increment(by);
    },
  
    async decrement(by) {
      return counterRepository.decrement(by);
    }
  }
}

export default CounterService
