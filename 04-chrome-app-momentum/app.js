// number / string / const / let

const a = 2;
const b = 9;
let myName = "heajae";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hi " + myName);

myName = "jung hea jae";

console.log("my new name is " + myName);

// true&false / null / undefined

const amISlim = true;
const amIFat = false;
const cloud = null;
let something;
console.log(something, cloud, amISlim, amIFat);

// array

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri"];

console.log(daysOfWeek);

console.log(daysOfWeek[4]);

daysOfWeek.push("sat", "sun");

console.log(daysOfWeek);

// object

const player = {
  name: "heajae",
  age: 21,
  slim: true,
};

console.log(player);
console.log(player.name);

player.lastname = "jung";
player.slim = "false";
player.age = player.age + 10;
console.log(player);

// 적용해보기

let people = "jung hea jae";
const age = 31;

console.log(people + " is " + age + " years old");

people = "nam so yeon";

console.log(people + " is " + age + " years old");

const amIPretty = true;
const amIUgly = false;
const myBrain = null;
let myBody;

console.log(amIPretty, amIUgly, myBrain, myBody);

const myFavoriteFood = ["sushi", "noodle", "soup"];

console.log(myFavoriteFood);
console.log(myFavoriteFood[2]);

myFavoriteFood.push("chicken", "pizza");

console.log(myFavoriteFood[4]);
