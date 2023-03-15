//what happens when error is not handled

const todos = fetch('https://jsonMISTAKE.typicode.com/todos');

todos
  .then(
    response => console.log('TCL: response', response),

    error => console.log(error)
  );



//   GET https://jsonmistake.typicode.com/todos net::ERR_NAME_NOT_RESOLVED

// Uncaught (in promise) TypeError: Failed to fetch