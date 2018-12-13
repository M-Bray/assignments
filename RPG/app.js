var rs = require("readline-sync");
//FUCTIONAL LOGIC\\
function Player(name){
    this.name = name;
    this.hp = 100;
    this.inventory = [];
    this.enemiesKilled = 0;
}


//GameLogic\\
var name = rs.question("Who are You?!!?\n");
var player = new Player(name);

//PROMP USER FOR NAME AND INFO


while(true) {

}