export default function (arrayRef, searchTerm) {
  const array = arrayRef.value;
  const filtered = array.filter(
    (item) => item.title.match(searchTerm) || item.body.match(searchTerm),
  );
  return filtered;
}
