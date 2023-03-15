const todos = fetch('https://jsonMISTAKE.typicode.com/todos');

// const todos = fetch('https://jsonplaceholder.typicode.com/todos');


todos
  .then(response => response.json())

  .then(json => {
    console.log(json);

    json.map(item => console.log(item.title))
  })

  .catch(err => console.log(err));


// GET https://jsonmistake.typicode.com/todos net::ERR_NAME_NOT_RESOLVED

// TypeError: Failed to fetch