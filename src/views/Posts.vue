<template>
  <div>
    <Loading v-if="loading" />
    <div v-else>
      <SearchBar @search="search($event)" />
      <router-link :to="{ name: 'posts.create' }" class="btn btn-success my-3">Create</router-link>
      <div v-for="post in posts" :key="post.id">
        <Post :post="post" />
        <div class="text-end m-4">
          <router-link
            class="btn btn-info me-1"
            :to="{ name: 'posts.update', params: { id: post.id } }"
            >Edit</router-link
          >
          <button class="btn btn-danger" @click.prevent="deletePost(post.id)">Remove</button>
        </div>
        <hr />
      </div>
    </div>

    <Pagination
      :pagination="pagination"
      @set="pagination.set($event)"
      @prev="pagination.prev()"
      @next="pagination.next()"
      @last="pagination.last()"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import * as api from '@/api';
import Post from '@/components/Post.vue';
import Pagination from '@/components/Pagination.vue';
import useArrayPagination from '@/composables/use-array-pagination';
import useSearch from '@/composables/use-search';
import SearchBar from '@/components/SearchBar.vue';

export default {
  name: 'Posts',
  components: {
    Post,
    SearchBar,
    Pagination,
  },

  setup() {
    const allPosts = ref([]);
    const {
      posts, error, request: getPosts, loading,
    } = api.getPosts();
    const { error: deleteError, request: remove } = api.deletePost();

    (async () => {
      await getPosts();
      allPosts.value = posts.value;
    })();

    const deletePost = async (id) => {
      await remove(id);
      if (!deleteError.value) {
        await getPosts();
        allPosts.value = posts.value;
      }
    };

    const search = (value) => {
      allPosts.value = useSearch(posts, value);
    };

    const pagination = useArrayPagination(allPosts);

    return {
      error,
      loading,
      posts: pagination.result,
      pagination,
      search,
      deletePost,
    };
  },
};
</script>
