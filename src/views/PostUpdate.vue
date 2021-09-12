<template>
  <div>
    <Loading v-if="loading" />
    <PostForm v-else :submitForm="updatePost" :initialValues="initialValues" />
  </div>
</template>

<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import PostForm from '@/components/PostForm.vue';
import * as api from '@/api';
import Loading from '@/components/Loading.vue';

export default {
  name: 'PostUpdate',
  props: ['id'],
  components: {
    Loading,
    PostForm,
  },
  setup(props) {
    const router = useRouter();
    const initialValues = reactive({
      title: '',
      body: '',
    });
    const schema = {
      title: 'required|min:5',
      body: 'required|min:10',
    };
    const { post, error, request: getPost } = api.getPost();
    const { error: updateError, request: update, loading } = api.updatePost();
    const getCurrentPost = async () => {
      await getPost(props.id);
      initialValues.title = post.value.title;
      initialValues.body = post.value.body;
    };
    getCurrentPost();

    const updatePost = async (values) => {
      await update(props.id, values);

      if (!updateError.value) {
        router.push({
          name: 'posts',
        });
      }
    };

    return {
      loading,
      schema,
      post,
      error,
      updatePost,
      initialValues,
    };
  },
};
</script>
