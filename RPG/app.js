// Math.random() * (max - min) + min


const readlineSync = require("readline-sync");
let gameOver = false;

const enemyTypes = ["a Dark Elf", "a Wicked Witch", "a Grimey Goblin"]
//const color = ["red", "orange", "yellow", "green", "blue", "purple", "black", "white", "gold", "silver"]


class MagicOrb {
    constructor(color, element, mp) {
        this.color = color;
        this.element = element;
        this.mp = mp;
    }
}

const fireOrb = new MagicOrb("Red", "Dragon Flare", 35);
const solarOrb = new MagicOrb("Yellow", "Divine Light", 47);
const waterOrb = new MagicOrb("Blue", "Arctic Energy", 30)
const earthOrb = new MagicOrb("Green", "Earthquake", 40)

const abilitySpheres = [
    fireOrb,
    solarOrb,
    waterOrb,
    earthOrb
];

class Player {
    constructor(name, hp) {
        this.name = name;
        this.hp = 100;
        this.item = getRandomElement(abilitySpheres);
    }
}

class Enemy {
    constructor(name, hp) {
        this.name = getRandomElement(enemyTypes);
        this.hp = 100;
        this.item = getRandomElement(abilitySpheres);
    }
}

function attack(character) {
    var damage = Math.floor(Math.random() * 25);
    character.hp -= damage;
}

Player.prototype.attack = attack;
Enemy.prototype.attack = attack;

// const heal = (character) => {
//    var recover = this.MagicOrb.mp;
//    character.hp += recover; 
// }
// Player.prototype.recover = recover;
// Enemy.prototype.recover = recover;


function getRandomElement(arr) {
    var index = Math.floor(Math.random() * arr.length)
    //console.log("Finding random element!\n")
    return arr[index]
}

const reply = () => {
    if (p1name) {
        console.log();
    } else {
        p1name = "No Name";
        console.log("I guess we'll just call you " + name + "...");
    }
}

function statusReport() {
    console.log(player1.name + player1.hp + player1.item);
}

const delayTest = () => setTimeout(reply, 3 * 1000);

// setInterval(() => {
//     console.log("#")
// }, 1000);

//GAME LOOP\\
while (!gameOver) {

    var p1name = readlineSync.question("What is Your Name?, Child of the Great Spirit.\n");

    var player1 = new Player(p1name);

    console.log("\nHello " + player1.name + "!\n" + "\nWould you like to start Walking?\n")
    const answerYN = ["Yes", "No"]
    var index = readlineSync.keyInSelect(answerYN);
    
    if (index === 0) {
        console.log(answerYN[index] + "\nYou have a long ways to go")

        var enemy = new Enemy();

        readlineSync.keyInPause(console.log("You've encountered " + enemy.name + " and they have a " + enemy.item.color + " sphere containing " + enemy.item.element + "!\n"));
        var fight = readlineSync.keyInYN("Stand and Fight? \n");
        if (fight) {
            player1.attack(enemy);
            console.log(enemy.name + " has " + enemy.hp + " health left\n");
            enemy.attack(player1);
            console.log(player1.name + " has " + player1.hp + " health left\n");
            if (player1.hp <= 80) {
                const charge = readlineSync.keyInYN("A great and powerful " + solarOrb.color + " Orb summons you \n " + "Will You " + player1.name + " weild its " + solarOrb.element + " and accept your destiny? \n");
                if (charge) {
                    player1.hp += solarOrb.mp;
                    console.log("You have been healed!")
                }
                console.log("You have Died, Game Over!");
                player1.hp += 100;
                break;
            } else if (enemy.hp <= 0) {
                console.log("Defeated the Enemy You Have\n");
                player1.sphere.push(enemy.sphere);
                console.log("You have obtained a " + player1.sphere + "!\n");
                player1.hp += 80;
                fight = false;

            }
        } else {
            break;
        } 
    } else {
        gameOver = true;
    }
}

                //handle fight sequence
             //use while loop to iterate until either the enemy hp or player hp is <= 0 
                //check which one died
                //if player dead --> Break
                //if Enemy is dead --> move enemy item to inventory increase