const readlineSync = require("readline-sync")
let power = true;

//FUNCTION BUILDING





//CHARACTER BUILDING
class Bear {
  constructor(type, color) {
    this.type = type
    this.color = color
  }
}

const polarBear = new Bear("polar bear", "white");
const grizzlyBear = new Bear("grizzy bear", "brown");
const blackBear = new Bear("black bear", "black");

 var bears = [];

 bears.push(polarBear, grizzlyBear, blackBear);


class ChosenOne {
  constructor(name, animal, hp, health, energy){
    this.name = name;
    this.animal = animal;
    this.hp = hp;
  }
}

function getRandomElement(arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index]
}


//GAMELOOP
while (power){
  const yourName = readlineSync.question("Who are you?\n");
  const player1 = new ChosenOne(yourName, getRandomElement(bears));
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
    power = false
  }





};












