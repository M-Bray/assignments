const readlineSync = require("readline-sync");
let gameOver = false;

// CHARACTORS 
const enemyTypes = ["Cornis the Dark Elf", "Sheela the Wicked Witch", "Gerble the Grimey Goblin"]

class Enemy {
    constructor(name, hp) {
        this.name = getRandomElement(enemyTypes);
        this.hp = 100;
        this.item = getRandomElement(abilitySpheres);
    }
}

class Player {
    constructor(name, hp) {
        this.name = name;
        this.hp = 100;
        this.item = [];
    }
}
const abilitySpheres = [];

class MagicOrb {
    constructor(color, element, mp) {
        this.color = color;
        this.element = element;
        this.mp = mp;
    }
}

const fireOrb = new MagicOrb("Red", "Dragon Flare", 35);
abilitySpheres.push(fireOrb);
const solarOrb = new MagicOrb("Yellow", "Divine Light", 47);
abilitySpheres.push(solarOrb);
const waterOrb = new MagicOrb("Blue", "Arctic Energy", 30)
abilitySpheres.push(waterOrb);
const earthOrb = new MagicOrb("Green", "Earthquake", 40)
abilitySpheres.push(earthOrb);

function heal(character) {
    var potion = character.item.mp;
    character.hp += potion;
}

function attack(character) {
    var damage = 25;
    character.hp -= damage;
}

Player.prototype.attack = attack;
Enemy.prototype.attack = attack;

Player.prototype.heal = heal;
Enemy.prototype.heal = heal;

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

        readlineSync.keyInPause(console.log("You've encountered " + enemy.name + " and they have a " + enemy.item.color + " sphere containing " + enemy.item.element + " wisdom!\n"));
        var fight = readlineSync.keyInYN("Stand and Fight? \n");
        while (fight) {
            if (fight) {
                player1.attack(enemy);
                console.log(enemy.name + " has " + enemy.hp + "HP\n");
                enemy.attack(player1);
                console.log(player1.name + " has " + player1.hp + "HP\n");
            }
            if (fight === true && enemy.hp <= 0 && enemy.hp < player1.hp) {
                readlineSync.keyInPause(console.log("Evil has been destroyed and " + enemy.name + " has been defeated"));
                console.log(player1.name + " " + player1.hp + "HP\n", enemy.name + " " + enemy.hp + "HP\n");
                fight = false
            } else if (fight === true && player1.hp <= 0 && player1.hp < enemy.hp) {
                readlineSync.keyInPause(console.log("You have been defeated in the face of evil by " + enemy.name));
                console.log(player1.hp, enemy.hp)
                fight = false
            }
            if (player1.hp <= 76 && player1.item.mp > 0) {
                readlineSync.keyInPause(console.log("\nA great and powerful Orb summons you.\n "));
                const charge = readlineSync.keyInYN("\nWill you, Lord " + player1.name + "! encompass its Ancient " + player1.item.element + " wisdom and accept your destiny? \n");
                if (charge) {
                    player1.hp += player1.item.mp;
                    console.log("\nYou have been healed " + player1.item.mp + "HP\n");
                    player1.item.mp = 0;
                } else {
                    console.log("Now you must die!");
                    gameOver = true;
                };
            }
            if (enemy.hp <= 51) {
                readlineSync.keyInPause(console.log("\nA great and powerful Orb summons has summoned the enemy.\n "));
                enemy.hp += enemy.item.mp;
                console.log("\The enemy has been healed " + enemy.item.mp + "HP\n");
                player1.item.mp = 0;
            }
        }
    }

}
                //handle fight sequence
             //use while loop to iterate until either the enemy hp or player hp is <= 0 
                //check which one died
                //if player dead --> Break
                //if Enemy is dead --> move enemy item to inventory increase