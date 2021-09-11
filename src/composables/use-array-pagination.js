/** Originally adapted from Thorsten Lünborg */
import { computed } from 'vue';
import usePagination from './use-pagination';

export default function (arrayRef) {
  const pagination = usePagination({
    total: computed(() => (arrayRef.value ? arrayRef.value.length : 1)),
  });

  const result = computed(() => {
    const array = arrayRef.value;
    if (!Array.isArray(array)) return [];
    return array.slice(pagination.offset.value, pagination.offset.value + pagination.perPage.value);
  });

  return {
    ...pagination,
    result,
  };
}
