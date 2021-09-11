<template>
  <article class="blog-post">
    <h2 class="blog-post-title">{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <div class="text-end m-4">
      <router-link class="btn btn-info me-1" :to="{ name: 'posts.update', params: { id: post.id } }"
        >Edit</router-link
      >
      <button class="btn btn-danger" @click.prevent="deletePost(post.id)">Remove</button>
    </div>
    <hr />
  </article>
</template>

<script>
import * as api from '@/api';

export default {
  name: 'Post',
  props: {
    post: Object,
  },

  setup() {
    const { error, request: remove } = api.deletePost();
    const { request: getPosts } = api.getPosts();

    const deletePost = async (_id) => {
      await remove(_id);

      if (!error.value) {
        await getPosts();
      }
    };

    return {
      deletePost,
    };
  },
};
</script>
