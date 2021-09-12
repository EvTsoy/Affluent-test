import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Home.vue', () => {
  it('renders inner text', () => {
    const wrapper = mount(Home);
    expect(wrapper.text()).toContain('From Author');
  });
});
