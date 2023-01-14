const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("success");
  } else {
    reject("failed");
  }
});

promise.then((result) => console.log(result)).catch((err) => console.log(err));

const urls = [
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/2",
  "https://jsonplaceholder.typicode.com/users/3",
];

// Promise.all : takes an array of promises to be completed
Promise.all(
  urls.map((url) => {
    return fetch(url).then((resp) => resp.json());
  })
).then((user) => {
  console.log(user);
});

// Async Await ES8
// Async makes the code smaller and synchronous looking
// try,catch,finally blocks

async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/2"
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(`Oops ${err}`);
  } finally {
    console.log("finally");
  }
}

async function getData2() {
  try {
    const { first, second, third } = await Promise.all(
      urls.map(async (url) => {
        const response = await fetch(url);
        return response.json();
      })
    );
    console.log(`first: ${first}`);
  } catch (err) {
    console.log(`oops ${err}`);
  } finally {
    console.log("finally");
  }
}


const getData3 = async () => {
  let arrOfPromises = urls.map((url) => fetch(url));
  for await (let request of arrOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};

getData()
getData2()
getData3()
