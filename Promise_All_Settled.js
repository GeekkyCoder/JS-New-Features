// Promise.all vs Promise.allSettled

// Promise.all : takes an array of promises returns a promise, short circuits the promise , if any of thse promise are rejected it will run catch function!

// Promise.allSettled : unlike Promise.all it takes an array of promises, dont do short circuit on any of the promise , it returns an promise regardless whether the promises are resolved or rejected !

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve("success"), 6000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject("failed"), 4000);
});

// lets see these in action 😅
Promise.all([promise1, promise2])
  .then((data) => console.log(`Promise.all: ${data}`))
  .catch((err) => console.log(`Promise.all: something went wrong: ${err}`));

Promise.allSettled([promise1, promise2]).then((data) =>
  console.log(`Promise.allSettled: ${data[0].value}`)
);

// Output:
// Promise.allSettled: success
// something went wrong: failed