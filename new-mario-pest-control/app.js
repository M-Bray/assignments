const getRandomElement = (arr) => {
    var index = Math.floor(Math.random() * arr.length);
    return arr[index]
  }
class User {
    constructor(fName, lName, age, favMovie, favSport) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.favoriteMovie = favMovie;
        this.favoriteSport = favSport;
    }
}



const fruit = ["Joe", "Schmoe", 42, "Ernest Goes to Camp", "UFC"]

let objectArray = [];

for (let i = 0; i < 6; i++) {
    const testUser = new User(getRandomElement(fruit), getRandomElement(fruit), getRandomElement(fruit), getRandomElement(fruit), getRandomElement(fruit));
    objectArray.push(testUser)
}

for (let i = 0; i < objectArray.length; i++) {
    task(i)
}

function task(i) { 
    setTimeout(function() {console.log(objectArray[i].firstName)}, 1000 * i)
};


