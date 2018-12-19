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

// const person = {
//     name: "Swanson McKringleberry",
//     clothes: ["socks", "shoes", "shirt"],
//     getDressed: function () {
//         const self = this;
//         this.clothes.forEach(function (article) {
//             self.currentlyWearing.push(article)
//         });
//         console.log(this.currentlyWearing);
//     },
//     currentlyWearing: []
// }

// person.getDressed();








function getAllTodos(url) {
    return axios.get(url).then(response => response.data)
}

function renderTodo(todo) {

    //Create Elements
    const li = document.createElement("li");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const completed = document.createElement("input");
}
//modify

//append to the DOM
ul.appendChild(li);
[li, title, description price, completed].forEach(el => li.appendChild(el));







//SETTING HEX CODES FOR COLOR BLIND\CONTRAST\\
// ARIA FOR COMPLETELY BLIND\\