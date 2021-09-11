<template>
  <div>
    <Loading v-if="loading" />
    <form @submit.prevent="updatePost" v-else>
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title" v-model="title" />
      </div>
      <div class="mb-3">
        <label for="body" class="form-label">Body</label>
        <textarea class="form-control" id="body" rows="3" v-model="body"></textarea>
      </div>
      <button class="btn btn-primary">Create</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import * as api from '@/api';
import Loading from '@/components/Loading.vue';

export default {
  name: 'PostUpdate',
  props: ['id'],
  components: {
    Loading,
  },
  setup(props) {
    const router = useRouter();
    const title = ref('');
    const body = ref('');
    const { post, error, request: getPost } = api.getPost();
    const { error: updateError, request: update, loading } = api.updatePost();
    const getCurrentPost = async () => {
      await getPost(props.id);
      title.value = post.value.title;
      body.value = post.value.body;
    };
    getCurrentPost();

    const updatePost = async () => {
      await update(props.id, {
        title: title.value,
        body: body.value,
      });

      if (!updateError.value) {
        router.push({
          name: 'posts',
        });
      }
    };

    return {
      loading,
      title,
      body,
      post,
      error,
      updatePost,
    };
  },
};
</script>
