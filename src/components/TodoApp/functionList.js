export function createBulkTodo() {
  const array = [];
  for (let i = 1; i <= 7000; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}
