import { reactive, toRefs } from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';
const POSTS_URL = 'posts';

const state = reactive({
  posts: null,
  post: null,
  error: null,
  loading: false,
});

export function getPosts() {
  const request = async () => {
    state.error = null;
    state.loading = true;
    try {
      const res = await axios.get(POSTS_URL, {
        params: {
          _sort: 'id',
          _order: 'desc',
        },
      });
      state.posts = res.data;
    } catch (e) {
      state.error = e;
    } finally {
      state.loading = false;
    }
  };

  return { ...toRefs(state), request };
}

export function getPost() {
  const request = async (id) => {
    state.error = null;
    state.loading = true;
    try {
      const res = await axios.get(`${POSTS_URL}/${id}`);
      state.post = res.data;
    } catch (e) {
      state.error = e;
    } finally {
      state.loading = false;
    }
  };

  return { ...toRefs(state), request };
}

export function createPost() {
  const request = async (data) => {
    state.error = null;
    state.loading = true;

    try {
      const res = await axios.post(POSTS_URL, data);
      state.post = res.data;
    } catch (e) {
      state.error = e;
    } finally {
      state.loading = false;
    }
  };

  return { ...toRefs(state), request };
}

export function updatePost() {
  const request = async (id, data) => {
    state.error = null;
    try {
      const res = await axios.put(`${POSTS_URL}/${id}`, data);
      state.post = res.data;
    } catch (e) {
      state.error = e;
    }
  };

  return { ...toRefs(state), request };
}

export function deletePost() {
  const request = async (id) => {
    state.error = null;
    try {
      await axios.delete(`${POSTS_URL}/${id}`);
    } catch (e) {
      state.error = e;
    }
  };

  return { ...toRefs(state), request };
}
