// Race,Parrallel,sequence

const a = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("a");
    }, 500);
  });
};

const b = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("b");
    }, 1000);
  });
};

const c = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("c");
    }, 3000);
  });
};

const parralel = async () => {
  const promises = [a(), b(), c()];
  const [first, second, third] = await Promise.all(promises);
  return `Parralel: ${first}, ${second}, ${third}`;
};

const race = async () => {
  const promises = [a(), b(), c()];
  const output = await Promise.race(promises);
  return `Race: ${output}`;
};

const sequence = async () => {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `Sequence: ${output1}, ${output2}, ${output3}`;
};

sequence().then(console.log);
race().then(console.log);
parralel().then(console.log);
