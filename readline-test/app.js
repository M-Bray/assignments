// IMPORT (?)
const readlineSync = require("readline-sync")
let gameOver = false;

//FUNCTION BUILDING
const myArray = ["hello", "goodbye", "howdy-howdy"];

const getRandomElement = (arr) => {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index]
}

const timeOfDay = () => {
  const d = new Date();
  return d.getHours();
}

const dayTime = () => timeOfDay() <= 10 ? `Morning` : timeOfDay() <= 12 ? `Late Morning` : timeOfDay() < 18 ? `Afternoon` : timeOfDay() < 24 ? `Evening` : `not sure`;


//CHARACTER BUILDING
class Animal {
  constructor(species, color, hp) {
    this.species = species;
    this.color = color;
    this.hp = hp;
    this.item = [];
  };
};

class Enemy {
  constructor(name, power, gender, race) {
    this.name = name;
    this.power = power;
    this.gender = gender;
    this.race = race;
  };
};

const blackBear = new Animal("black bear", "black", 80);
const mountainLion = new Animal("mountain lion", "wheat", 100);
const redTailHawk = new Animal("red tailed hawk", "white/brown/red", 70);
const racoon = new Animal("racoon", "black/white", 50);
const rattleSnake = new Animal("rattle snake", "brown/black", 70);
const squirrel = new Animal("squirrel", "brown/grey", 40);

const animals = [];
 
animals.push(blackBear, mountainLion, redTailHawk, rattleSnake, racoon, squirrel);
 
const randomAnimal = getRandomElement(animals);



// const test = (x) => {
//   x ? console.log("hello") : console.log("Goodbye");
// };

// setTimeout(test(true), 2000);
// console.log(setTimeout);

class Player {
  constructor(name, hp, animal){
    this.name = name;
    this.hp = hp;
    this.animal = animal;
  }
}

const print = (x) => {
  console.log(`Name: ${x.name}\nHP: ${x.hp}`)
}

//GAMELOOP
while (!gameOver){
  
  const yourName = readlineSync.question(`${'\x1b[31m'}\n\nWhat is your name?\n\n`);
  const player1 = new Player(yourName);

  // for (let i = 0; i < animals.length; i++) {
  //   task(i)
  // }

  // function task(i) { 
  //   setTimeout(function() {console.log(animals[i])}, 1000 * i)
  // }}

  

  console.log(` ${'\x1b[33m'} \nHello ${player1.name}, and Good ${dayTime()} to you!\n`);
  const yourHP = readlineSync.question(`${'\x1b[32m'}\nGive yourself HP and begin.\n`);
  player1.hp = yourHP; 
  print(player1);

  readlineSync.keyInPause(`${'\x1b[34m'}\nTo continue on this journey you must first allow your animal spirit to be awakened`)
  const spiritAnimal =  readlineSync.keyInYN(`${'\x1b[35m'}\nWould you like to know the animal that calls from within you?`);
  if (spiritAnimal) {
    player1.animal = randomAnimal;
    console.log(`${'\x1b[31m'}\nThe ${player1.animal.species} has been awoken within you and will be your guide.`)
  }
  const begin = readlineSync.question("\nWould you like to begin?\nYES or NO?\n");
  
  if (begin === "YES") {
    console.log("Great!\n\nLets begin\n");
  } else {
    readlineSync.keyInPause("\n...GAME OVER...\n");
    gameOver = true
  };
  console.log("Which direction will you travel?\n")
  const eastOrWest = readlineSync.question("\nEast, or West?\n\n");
  if (eastOrWest === "West") {
    console.log("\nYour journey has begun and you are headed West towards the beautiful Sierra Nevada Mountains\n");
    const scared = readlineSync.keyInYN(`You scared?`)
    if (scared) {
      console.log(`You better get tough quick bud It's okay if you are...`) 
    } else {
      console.log(`You don't have to pretend..`)
    }
  } 
  if (eastOrWest === "East") {
    console.log("You have begun your jouney East\n\nGood Luck!\n");
    
  } else {
    gameOver = true
  }
};