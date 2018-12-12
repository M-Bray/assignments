// var seconds = 0;
// setInterval(function(){
//     seconds++
//     console.log(seconds)
// }, 1000)



// function doubleNumbers(arr){
//     var doubles = arr.map(function(num){
//         return num * 47; 
//     })
//     return doubles;
// }

// console.log(doubleNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])); 





// function stringItUp(arr){
//     var stringy = arr.map(function(word){
//         return word.toString() ;
//     })
//     return stringy;
// }

// console.log(stringItUp([2, 5, 100]))


///////////////alert();\\\\\\\\\\\\\\\\\\\\


var form = document.getElementById("application");

form.addEventListener("submit", function(e){
    e.preventDefault();

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    var male = document.getElementById("genderMale").value;
    var female = document.getElementById("genderFemale").value;
    
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Age: " + age);
    console.log("Gender: " + male);
    console.log("Gender: " + female);

})
console.log(form);