import { shallowMount } from '@vue/test-utils';
import Post from '@/components/Post.vue';

describe('Post.vue', () => {
  it('renders post.title', () => {
    const post = {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body:
        'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    };

    const wrapper = shallowMount(Post, {
      props: {
        post,
      },
    });

    expect(wrapper.find('.blog-post-title').text()).toBe(post.title);
  });

  it('renders post.body', () => {
    const post = {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body:
        'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    };

    const wrapper = shallowMount(Post, {
      props: {
        post,
      },
    });

    expect(wrapper.find('p').text()).toBe(post.body);
  });
});
