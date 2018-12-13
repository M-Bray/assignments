var readline = require('readline-sync')

var gameEnd = false

var items1 = ['pistol', 'flame-thrower', 'baseball bat']

function Player (name, hp, items){
    this.name = name
    this.hp = hp
    this.items = []
    this.attack = function(){
        //hp damage amount
        return Math.floor(Math.random()*3)
    }
}
var player1 = new Player('Traveler', 10)

function Enemy (name, hp){
    this.name = name;
    this.hp = hp;
    this.attack = function(){
        //hp damage amount
        return Math.floor(Math.random()*4)
    }
}
var enemy1 = new Enemy("Lion", 4)
var enemy2 = new Enemy("Tiger", 4)
var enemy3 = new Enemy("Bear", 4)

////////////start log//////////////
console.log("\nWelcome to BlackWood Jungle! \n")
var userName = readline.question('What is your name? ')
console.log(`\nHi ${userName}, enjoy your time here! \nBut beware of the wild animals!! `)
while(!gameEnd){
    var action = readline.keyIn('\n1. Would you like to take a walk down the path? If so, press [w]. \n2. Feeling lucky punk? Fight one of our jungle animals. If you win, you earn some bling. To fight, press [f].\n3. If you are too scared, press [x] to leave now. \n4. To check your inventory of weapons, press [i]. \n5. To check your status, press [p]. \n\nEnter your option: ', {limit: ['w', 'x', 'i', 'f', 'p']})
    if (action === 'w'){
        console.log("\nHopefully your walk will be uneventful. \n")
        walk()
    }
    else if (action === 'x'){
        console.log("\nI knew you were a chicken, but you dont get to leave; walk or fight punk!")
    }
    else if (action === 'i'){
        console.log(`\nYou have the following weapons: ${player1.items} \n`)
    }
    else if(action === 'f'){
        var actions = ['Lion', 'Tiger', 'Bear']
        var index = readline.keyInSelect(actions, 'You are pretty brave to stand and fight. Who would you rather fight?\n')
        fight() 
    }
    else if(action === 'p'){
        print() 
    }
}
// options functions
function print(){
    console.log('\n' + player1.name)
    console.log('Life status: ' + player1.hp)
    console.log('Inventory: ' + player1.items)
}
function walk(){
    var walkRandom = (Math.floor(Math.random() * 8) + 1) //1,2,3 = get attack. 4,5,6 = attack. 0,7,8 = no encounter 
    // console.log(walkRandom)
    if(walkRandom === 1) {
        enemy1.hp -= player1.attack()
        console.log('\nYou attack Lion\n')
        console.log(`Player hp: ${player1.hp} \nLion hp: ${enemy1.hp} \n`)
    }
    else if(walkRandom === 2) {
        enemy2.hp -= player1.attack()
        console.log("\nYou attack Tiger\n")
        console.log(`Player hp: ${player1.hp} \nTiger hp: ${enemy2.hp} \n`)
    }
    else if(walkRandom === 3) {
        enemy3.hp -= player1.attack()
        console.log('\nYou attack Bear\n')
        console.log(`Player hp: ${player1.hp} \nBear hp: ${enemy3.hp} \n`)
    }
    else if(walkRandom === 4) {
        player1.hp -= enemy1.attack()
        console.log('\nLion attacks you \n')
        console.log(`Player hp: ${player1.hp} \nLion hp: ${enemy1.hp} \n`)
    }
    else if(walkRandom === 5) {
        player1.hp -= enemy2.attack()
        console.log('\nTiger attacks you\n')
        console.log(`Player hp: ${player1.hp} \nTiger hp: ${enemy2.hp} \n`)
    }
    else if(walkRandom === 6) {
        player1.hp -= enemy3.attack()
        console.log('\nBear attacks you\n')
        console.log(`Player hp: ${player1.hp} \nBear hp: ${enemy3.hp} \n`)
    }
    else if(walkRandom === 0 || walkRandom === 7 || walkRandom === 8){
        console.log("\nYou're lucky, you encountered no enemies on your walk! \n")
    }
/////////////
    if(player1.hp <= 0){
        gameEnd = true;
        console.log('YOU DIED!!\n')
    }
    else if(enemy1.hp <= 0 || enemy2.hp <= 0 || enemy3.hp <= 0) {
        var itemFound = items1[Math.floor(Math.random()*3)]
        player1.items.push(itemFound)
        console.log(`You earned a ${itemFound}! \nYour Inventory: ${player1.items}`)
    }
}
function fight(){
    while(player1.hp >= 0 && enemy1.hp >=0){
        if(Math.random() < .5){
            player1.hp -= enemy1.attack()
            console.log('\nEnemy attacked player')
            console.log(`Player hp: ${player1.hp}\nEnemy hp: ${enemy1.hp}`)
        }else {
            enemy1.hp -= player1.attack()
            console.log('Player attacked enemy')
            console.log(`Player hp: ${player1.hp}\nEnemy hp: ${enemy1.hp}`)
        }
    }
/////////////
    if(player1.hp <= 0){
        gameEnd = true;
        console.log('YOU DIED!!\n')
    }
    else {
        var itemFound = items1[Math.floor(Math.random()*3)]
        player1.items.push(itemFound)
        console.log(`You earned a ${itemFound}! \nYour Inventory: ${player1.items}`)
    }
}dd