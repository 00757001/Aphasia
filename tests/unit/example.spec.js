import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue'
import store from '@/store'
import App from '@/App.vue';
import Vuetify from 'vuetify';

describe('APP unit test', () => {
  Vue.use(Vuetify);
  const localVue = createLocalVue();
  localVue.use(Vuetify);
  const wrapper = shallowMount(App,{store, localVue});
  it('is instantiated', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
