<template>
  <article class="blog-post">
    <h2 class="blog-post-title">{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </article>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
