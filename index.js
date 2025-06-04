// 1. Takes a callback function and calls it
function receivesAFunction(callback) {
  callback();
}

// 2. Returns a named function
function returnsANamedFunction() {
  return function namedFunction() {
    console.log("I'm a named function");
  };
}

// 3. Returns an anonymous function
function returnsAnAnonymousFunction() {
  return function () {
    console.log("I'm an anonymous function");
  };
}
