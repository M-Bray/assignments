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
  constructor(name , animal, health, energy){
    this.name = name;
    this.animal = animal;
  }
}

function getRandomElement(arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index]
}


//GAMELOOP
while (power){
  const yourName = readlineSync.question("Who are you?\n")
  const player1 = new ChosenOne(yourName, getRandomElement(bears), "Green" )
  console.log(player1.name + "\n" + player1.animal.color + "\n" + player1.animal.type);
}












