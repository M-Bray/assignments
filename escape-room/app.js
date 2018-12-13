var rs = require("readline-sync");
var isAlive = true;
var isKeyFound = false;
var hasEscaped = false;

while(isAlive && hasEscaped === false) {
    var options = ["Put hand in hole", "Find the key", "Open the door"]
    var index = rs.keyInSelect(options, "You're trapped in a room.. About to get got. What will it be?")
    if (index === 0) {
        console.log("You just got GOT")
        isAlive = false;
    } else if (index === 1) {
        console.log("You just got.. The KEY")
        isKeyFound = true;
    } else if (index === 2 && !isKeyFound) {
        console.log("awww shheeezzy, you'z about to get Got!")
    } else if (index === 2 && isKeyFound) {
        console.log("Youz a free fella! Congrats")
        hasEscaped = true;
    } else {
        console.log("Is You CRAZY!?")
    }
};

