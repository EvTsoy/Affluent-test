<template>
  <div>
    <Loading v-if="loading" />
    <PostForm v-else :submitForm="createPost" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import * as api from '@/api';
import Loading from '@/components/Loading.vue';
import PostForm from '@/components/PostForm.vue';

export default {
  name: 'PostCreate',
  components: {
    Loading,
    PostForm,
  },
  setup() {
    const router = useRouter();

    const {
      post, error, request: create, loading,
    } = api.createPost();

    const createPost = async (values) => {
      await create(values);

      if (!error.value) {
        router.push({
          name: 'posts',
        });
      }
    };

    return {
      loading,
      post,
      error,
      createPost,
    };
  },
};
</script>
