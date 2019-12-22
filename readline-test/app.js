// IMPORT (?)
const readlineSync = require("readline-sync")
let gameOver = false;

//FUNCTION BUILDING
function getRandomElement(arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index]
}

//CHARACTER BUILDING
class Bear {
  constructor(type, color) {
    this.type = type
    this.color = color
  }
}

class Enemy {
  constructor(name, power, gender, race) {
    this.name = name;
    this.power = power;
    this.gender = gender;
    this.race = race;
  }
}

const enemy1 = new Enemy("Pee N. WX", "Alphebitizing Awareness Ninja", "Female" , "Gorilla/ Dinosaur");
const enemy2 = new Enemy("")

const polarBear = new Bear("polar bear", "white");
const grizzlyBear = new Bear("grizzy bear", "brown");
const blackBear = new Bear("black bear", "black");

const bears = [];
 
bears.push(polarBear, grizzlyBear, blackBear);
 
const randomBear1 = getRandomElement(bears);



// const test = (x) => {
//   x ? console.log("hello") : console.log("Goodbye");
// };

// setTimeout(test(true), 2000);
// console.log(setTimeout);

class ChosenOne {
  constructor(name, animal, hp, health, energy){
    this.name = name;
    this.animal = animal;
    this.hp = hp;
  }
}

//GAMELOOP
while (!gameOver){
  const yourName = readlineSync.question("Who are you?\n");
  const player1 = new ChosenOne(yourName, randomBear1);
  console.log("\n\n" + player1.name + ",\nYour spirit animal is a   ....   " + player1.animal.type);
  const begin = readlineSync.question("\nWould you like to begin?\nYES or NO?\n");
  
  if (begin === "YES") {
    console.log("Great!\n\nLets begin\n");
  } else {
    readlineSync.keyInPause("\n...GAME OVER...\n");
    break;
  };
  console.log("Which direction will you travel?\n")
  const eastOrWest = readlineSync.question("\nEast, or West?\n\n");
  if (eastOrWest === "West") {
    console.log("\nYour journey has begun and you are headed West towards the beautiful Sierra Nevada Mountains\n");
    continue;
  } else if (eastOrWest === "East") {
    console.log("You have begun your jouney East\n\nGood Luck!\n");
    continue;
  } else {
    gameOver = true
  }
};