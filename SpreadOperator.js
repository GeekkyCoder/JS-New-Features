// Spread Operator allows an iterable to be exapnded one or more places!


const obj = {
  lion: 2,
  squirrel: 5,
  elephant: 3,
};


//  Creates a new array/obj/string with a new instance , does not affect the original string,object and array

const { ...rest } = obj;

// updating the newly created intance of orginal object, does not update the original object
rest.lion = "chittah";

console.log(`rest: ${rest}`);
console.log(`obj: ${obj}`);

const arr = [1, 2, 3, 4, 5, 6, 7];

// creating a newly created array with the instance of orifinal array, does not update the original arraya in any way!

// ,,, simply means skipping some elements

const [, , , ...all] = arr;

console.log(`spread: ${all}`);
console.log(`arr: ${arr}`);

// Strings:
let str = "hello faraz";
console.log(`str: ${[...str]}`);
