// Math.random() * (max - min) + min


var rs = require("readline-sync");
var gameOver = false;
var enemyTypes = ["a Dark Elf", "a Wicked Witch", "a Grimey Goblin"]
var magicSpheres = ["Blue Sphere of Tidal Destruction", "Green Sphere of Entangling Constriction", "Yellow Sphere of Delusional Confusion"];

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
    this.magicSpheres = getRandomElement(magicSpheres);
}


//GAME LOOP\\

var name = rs.question("What is Your Name?, Child of the Great Spirit.\n");
var player1 = new Player(name, 100);
while (true) {
    var isWalking = rs.keyInYN("Welcome " + name + "\nWould you like to start Walking? \n");
    if (isWalking) {
        var encountersEnemy = Math.random() < .3333333;
        if (encountersEnemy) {
            var enemy = new Enemy();
            console.log("you encountered " + enemy.name + "!");
            var fight = rs.keyInYN("Stand and Fight? \n")
            if (fight) {
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
                }
                //handle fight sequence
                //use while loop to iterate until either the enemy hp or player hp is <= 0 
                //check which one died
                //if player dead --> Break
                //if Enemy is dead --> move enemy item to inventory, increase
            
            
        }
    }
}