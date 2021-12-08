import { defineStore, acceptHMRUpdate } from 'pinia'
import MainState from '../types/mainState';
import { repositories } from './repositories.json';

const useMainStore = defineStore('main', {
  state: (): MainState => ({
    repositories,
  }),
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot));
}

export default useMainStore;
