import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { RootStateTypes, AllStateTypes } from './interface';
import user from './modules/user';
import test from './modules/test';

export default createStore<RootStateTypes>({
  state: {
    token: 'erw--999.token',
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    test,
  },
});

export const key: InjectionKey<Store<AllStateTypes>> = Symbol('vue-store');

/**
 *
 */
export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key);
}
