//fetch api returns a promise
const todos = fetch('https://jsonplaceholder.typicode.com/todos');

console.log('TCL: todos', todos);

// promise.then(function1,function2)
let p = todos.then(

  response => console.log('TCL: response', response),
  // functionOne, functionTwo


  err => console.log('TCL: err', err)

)

// function functionOne(response) {
//   console.log(response);
// }

// function functionTwo(err) {
//   console.log(err);
// }

console.log(p);