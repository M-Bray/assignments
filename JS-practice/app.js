// //ES5
// // function doStuff(){

// // }

// //ES6
// const doStuff = () => {

// }

// // anonymous
// () => { }

// // one argument 
// x => {
//     console.log("I don't need parenthesis")
// }

// //multiple parameters\
// (x, y) => {
//     console.log("You must have parenthesis for more than one parameter");
// }

// // return single expression 
// const multiplyBy2 = x => 2 * x;


// //multiple lines or statements
// x => {
//     console.log(x);
//     return "this has multiple lines"
// }


// function getThis() {
//     console.log(this);
// }

// // getThis();

// const object = {
//     name: "Shwing",
//     getThis,
//     nested: {
//         name: "nested object",
//         getThis
//     }
// }

// // object.getThis();
// object.nested.getThis();

const person = {
    name: "",
    clothes: ["socks", "shoes", "shirt"],
    getDressed: function () {
        this.clothes.forEach(function (article) {
            this.currentlyWearing.push(article)
        });
        console.log(this.currentlyWearing);
    },
    currentlyWearing: []
}

person.getDressed();