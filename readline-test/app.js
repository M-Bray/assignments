// IMPORT (?)
const readlineSync = require("readline-sync")
let gameOver = false;

//FUNCTION BUILDING


//COLORS
const colors = ['\x1b[31m', '\x1b[33m', '\x1b[32m', '\x1b[34m', '\x1b[35m']

const getRandomElement = (arr) => {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index]
}

const attack = (character) => {
  const damage = Math.floor(Math.random() * 60);
  character.hp -= damage;
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
  constructor(name, hp, race, item) {
    this.name = name;
    this.hp = hp;
    this.race = race;
    this.item = item;
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

const enemy1 = new Enemy('Grinaldo', 100, 'Dark Wizard', 'Black Wand');
const enemy2 = new Enemy('Zilla', 100, 'Dark Witch', 'Dark Crystal');
const enemies = [];
enemies.push(enemy1, enemy2);
const randomEnemy = getRandomElement(enemies);

const randomColor = getRandomElement(colors);

const attackEnemy = attack();


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
  
  const yourName = readlineSync.question(`${randomColor}\n\nWhat is your name?\n\n`);
  const player1 = new Player(yourName);

  // for (let i = 0; i < animals.length; i++) {
  //   task(i)
  // }

  // function task(i) { 
  //   setTimeout(function() {console.log(animals[i])}, 1000 * i)
  // }}

  

  console.log(` ${randomColor} \nHello ${player1.name}, and Good ${dayTime()} to you!\n`);
  const yourHP = readlineSync.question(`${randomColor}\nGive yourself HP and begin.\n`);
  player1.hp = yourHP; 
  print(player1);

  readlineSync.keyInPause(`${randomColor}\nTo continue on this journey you must first allow your animal spirit to be awakened`)
  const spiritAnimal =  readlineSync.keyInYN(`${randomColor}\nWould you like to know the animal that calls from within you?`);
  if (spiritAnimal) {
    player1.animal = randomAnimal;
    console.log(`${randomColor}\nThe ${player1.animal.species} has been awoken within you and will be your guide.`)
  }
  const begin = readlineSync.keyInYN(`\n${randomColor}Would you like to begin?\n`);
  
  if (begin) {
    console.log(`\n${randomColor}Great!\n\nLets begin\n`);
  } else {
    readlineSync.keyInPause(`${randomColor}\n...GAME OVER...\n`);
    gameOver = true
  };
  console.log(`${randomColor}Which direction will you travel?\n\n`)
  const eastOrWest = readlineSync.keyInSelect(['North', 'South', 'East', 'West']);
  if ('West') {
    console.log(`${randomColor}\nYour journey has begun and you are headed West towards the beautiful Sierra Nevada Mountains\n`);
    const scared = readlineSync.keyInYN(`${randomColor}You scared?\n`)
    if (scared) {
      console.log(`${randomColor}You better get tough quick bud It's okay if you are...`) 
    } else {
      console.log(`${randomColor}You don't have to pretend..\n`)
    }
    const continueTraveling = readlineSync.keyInYN(`\nContinue on your journey?\n`);
    if (continueTraveling) {

    }
  } 
  if (eastOrWest === "East") {
    console.log(`${randomColor}You have begun your jouney East\n\nGood Luck!\n`);
    
  } else {
    gameOver = true
  }
};