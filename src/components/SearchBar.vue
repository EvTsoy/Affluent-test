<template>
  <div class="container">
    <div class="row height d-flex justify-content-center align-items-center">
      <div class="col-md-8">
        <div class="search">
          <i class="fa fa-search"></i>
          <input type="text" class="form-control" placeholder="Search..." v-model="searchTerm" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'SearchBar',
  setup(_, { emit }) {
    const searchTerm = ref('');
    watch(searchTerm, (value) => {
      emit('search', value);
    });
    return {
      searchTerm,
    };
  },
};
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  box-shadow: 0 0 40px rgba(51, 51, 51, 0.1);
  input {
    height: 60px;
    text-indent: 25px;
    border: 2px solid #d6d4d4;
    &:focus {
      box-shadow: none;
      border: 2px solid blue;
    }
  }
}
</style>
