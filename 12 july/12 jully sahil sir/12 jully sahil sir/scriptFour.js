//error handling in single then block

const todos = fetch('https://jsonMISTAKE.typicode.com/todos');

todos.then(

  response => console.log('TCL: response', response),

  reject => console.log('Error: ', reject)

);


// GET https://jsonmistake.typicode.com/todos net::ERR_NAME_NOT_RESOLVED

// Error:  TypeError: Failed to fetch