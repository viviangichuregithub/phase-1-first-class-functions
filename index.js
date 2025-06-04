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

// Export the functions for testing
module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction,
};


/*receivesAFunction(callback)*/
function receivesAFunction(callback) {
  callback();
}

/*returnsANamedFunction()*/
function returnsANamedFunction() {
  function namedFunction() {
    console.log("I am a named function");
  }
  return namedFunction;
}

/*returnsAnAnonymousFunction()*/
function returnsAnAnonymousFunction() {
  return function () {
    console.log("I am an anonymous function");
  };
}

