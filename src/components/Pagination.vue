<template>
  <ul class="pagination justify-content-center">
    <li class="page-item"><a class="page-link" href="#" @click="prev">Previous</a></li>
    <li v-for="(page, idx) in pagination.lastPage.value" :key="idx" class="page-item">
      <a class="page-link" href="#" @click="$emit('set', page)">{{ page }}</a>
    </li>
    <li class="page-item"><a class="page-link" href="#" @click="next">Next</a></li>
  </ul>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    pagination: Object,
  },
  setup(_, { emit }) {
    const prev = () => {
      emit('prev');
    };

    const next = () => {
      emit('next');
    };
    return {
      prev,
      next,
    };
  },
};
</script>
