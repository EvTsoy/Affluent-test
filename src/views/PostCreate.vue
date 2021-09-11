<template>
  <div>
    <Loading v-if="loading" />
    <form @submit.prevent="createPost" v-else>
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
  components: {
    Loading,
  },
  setup() {
    const router = useRouter();
    const title = ref('');
    const body = ref('');
    const {
      post, error, request: create, loading,
    } = api.createPost();

    const createPost = async () => {
      await create({
        title: title.value,
        body: body.value,
      });

      if (!error.value) {
        router.push({
          name: 'PostCreate',
        });
      }
    };

    return {
      loading,
      title,
      body,
      post,
      error,
      createPost,
    };
  },
};
</script>
