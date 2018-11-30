if(5 > 3) {
    console.log("is greater than")
}
if("cat".length === 3) {
    console.log("is the length")
}
if("cat" === "dog") {
    } else {
        console.log("not the same")
    }

for(var i = 0; i < 10; i++) {
    console.log(i)
}

for(var i = 0; i < 101; i++) {
    if(i % 2 === 0) {
        console.log("Even")
    } else {
        console.log("Odd")
    }
}

// BRONZE \\

var person = {
    name: "Bobby",
    age: 12
  };
if(person.name[0] === "B" && person.age >= 18) {
      console.log("You're Old Enough To Watch")
} else {
    console.log("Not Old Enough To Watch, Later Dawg..")
};

// SILVER \\

if(1 === "1") {
    console.log("strict")
} else if(1 === "1") {
    console.log("loose")
} else {
    console.log("not equal at all")
}
if(1 <= 2 && 2 === 4 || (3*4) > 10 && (5 + 10) > 10) {
    console.log("yes")
}