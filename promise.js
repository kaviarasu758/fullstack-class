// Promise
const myPromise = new Promise((resolve, reject) => {
    const success = true;
  
    if (success) {
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise rejected with an error!");
    }
  });
  
  myPromise
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error);
    });
  