var rs = require("readline-sync");
var gameOver = false;
var magicSpheres = ["Blue Orb of Tidal Destruction", "Green Orb of Entangling Constriction","Yellow Orb of Delusional Confusion"]
function Player (name, hp, magicSpheres){
    this.name = name;
    this.hp = hp;
    this.magicSpheres = [];
    this.attack = function(){
        return Math.floor(Math.random()*3)
    }
}
var player1 = new Player("Wizard", 10git)