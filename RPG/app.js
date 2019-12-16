// Math.random() * (max - min) + min


const readlineSync = require("readline-sync");
let gameOver = false;
const enemyTypes = ["a Dark Elf" , "a Wicked Witch", "a Grimey Goblin"]
const spheres = ["Blue", "Yellow", "Red"]

class Player {
    constructor(name, hp, sphere) {
        this.name = name;
        this.hp = 100;
        this.sphere = [];
    }
}

class Enemy {
    constructor(name, hp, sphere) {
        this.name = getRandomElement(enemyTypes);
        this.hp = 100;
        this.sphere = getRandomElement(spheres);
    }
}

function attack(character) {
    var damage = Math.floor(Math.random() * 25);
    character.hp -= damage;
}

Player.prototype.attack = attack;
Enemy.prototype.attack = attack;

function getRandomElement(arr) {
    var index = Math.floor(Math.random() * arr.length)
    console.log("Finding random element!\n")
    return arr[index]
}

const reply = () => {
    if (name)  {
        console.log("Hello " + name + "! \n"); 
    } else {
        name = "No Name";
        console.log("I guess we'll just call you " + name + "...");
    }
}  

//GAME LOOP\\
var name = readlineSync.question("What is Your Name?, Child of the Great Spirit.\n");

reply();


var player1 = new Player(name);



var encountersEnemy = Math.random();


while (!gameOver) {
    console.log(player1.sphere, player1.hp);
    var begin = readlineSync.keyInYN("Would you like to start Walking? \n ");
    if (!begin) {
        break;
    } else {
        encountersEnemy;
    }; 
    if (!encountersEnemy) {
            console.log("keep going") 
        } else {
            var enemy = new Enemy();
            console.log("you encountered " + enemy.name + " and he has a " + enemy.sphere + " magic sphere" + "!");
            var fight = readlineSync.keyInYN("Stand and Fight? \n");
            while (fight) {               
                player1.attack(enemy);
                console.log(enemy.name + " has " + enemy.hp + " health left\n");
                enemy.attack(player1);
                console.log(player1.name + " has " + player1.hp + " health left\n");
                if (player1.hp <= 0) {
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
                
            }
        }
    
}

                //handle fight sequence
                //use while loop to iterate until either the enemy hp or player hp is <= 0 
                //check which one died
                //if player dead --> Break
                //if Enemy is dead --> move enemy item to inventory increase