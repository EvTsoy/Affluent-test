/** Originally adapted from Thorsten Lünborg */
import { ref, computed, watch } from 'vue';

function minmax(val, min, max) {
  if (val < min) return min;
  if (val > max) return max;
  return val;
}

export default function (options) {
  const { perPage = ref(10), total = ref(null), startPage = 1 } = options;

  const onCurrentPage = ref(startPage);
  const currentPage = computed(() => onCurrentPage.value);

  const lastPage = computed(() => (total.value ? Math.ceil(total.value / perPage.value) : null));
  const offset = computed(() => Math.min((currentPage.value - 1) * perPage.value, total.value));

  const set = (val) => {
    if (typeof val !== 'number') return;
    onCurrentPage.value = minmax(val, 1, lastPage.value);
  };

  const prev = () => set(currentPage.value - 1);
  const next = () => set(currentPage.value + 1);
  const first = () => set(1);
  const last = () => set(lastPage.value);

  watch(
    [perPage],
    () => {
      if (onCurrentPage.value > lastPage.value) {
        onCurrentPage.value = lastPage.value;
      }
    },
    { lazy: true },
  );
  return {
    perPage,
    total,
    currentPage,
    lastPage,
    offset,
    prev,
    next,
    first,
    last,
    set,
  };
}
