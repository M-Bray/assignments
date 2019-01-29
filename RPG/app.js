// Math.random() * (max - min) + min


var readlineSync = require("readline-sync");
var gameOver = false;
var enemyTypes = ["a Dark Elf", "a Wicked Witch", "a Grimey Goblin"]
var sphere = ["Blue", "Yellow", "Red"]

function MagicSpheres(sphere, strength) {
    this.sphere = sphere;
    this.strength = strength
}

function attack(character) {
    var damage = Math.floor(Math.random() * 47);
    character.hp -= damage;
}

function Player(name, hp) {
    this.name = name;
    this.hp = hp;
    this.magicSpheres = [];
}

Player.prototype.attack = attack;
Enemy.prototype.attack = attack;
function getRandomElement(arr) {
    var index = Math.floor(Math.random() * arr.length)
    return arr[index]
}


function Enemy(name) {
    this.name = getRandomElement(enemyTypes);
    this.hp = Math.floor(Math.random() * 31) + 50;
    this.magicSpheres = getRandomElement(MagicSpheres);
}


//GAME LOOP\\
var name = readlineSync.question("What is Your Name?, Child of the Great Spirit.\n");
console.log("Hello " + name + " Your quest awaits you ~ ~ ~ ~ \n")
var hp = readlineSync.question("Give yourself HP and Begin.\n")
var player1 = new Player(name, hp);
while (true) {
    var isWalking = readlineSync.keyInYN("Would you like to start Walking? \n ");
    console.log("Walking")
    if (isWalking) {
        var encountersEnemy = Math.random() < .333;
        if (encountersEnemy === false) {
            console.log("keep going") }
            var enemy = new Enemy();
            console.log("you encountered " + enemy.name + "!");
            var fight = readlineSync.keyInYN("Stand and Fight? \n");
            while (fight) {
                switch (true) {
                    case (player1.hp <= 0): 
                        console.log("You have Died")
                        gameOver = true
                        break;
                    case (Enemy.hp <= 0): 
                        console.log("Defeated the Enemy You Have")
                        break;                       
                    }
                    player1.attack(enemy);
                    enemy.attack(player1);
                    console.log(enemy.hp)
                    console.log(player1.hp)
                    break;
                }
                //handle fight sequence
                //use while loop to iterate until either the enemy hp or player hp is <= 0 
                //check which one died
                //if player dead --> Break
                //if Enemy is dead --> move enemy item to inventory, increase
            

    }
}