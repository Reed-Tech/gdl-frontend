export function getList() {
    return fetch('https://gdlnigeria.herokuapp.com/api/v1/blog/post')
      .then(data => data.json())
  }