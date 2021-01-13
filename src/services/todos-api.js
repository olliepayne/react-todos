const BASE_URL = '/api/todos/';

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json())
}