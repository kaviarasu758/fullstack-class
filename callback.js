//callback
function processUserInput(callback) {
      const name = "vijay";
      callback(name);
    }
    function greetUser(name) {
      console.log(`Hello, ${name}! Welcome to our website.`);
    }
    processUserInput(greetUser);