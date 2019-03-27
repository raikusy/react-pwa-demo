function fetchData(id) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => res.json())
    .then(res => {
      localStorage.setItem(`${id}`, JSON.stringify(res));
      return res;
    })
    .catch(err => {
      return JSON.parse(localStorage.getItem(`${id}`));
    });
}

export default fetchData;
