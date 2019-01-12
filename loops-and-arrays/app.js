var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];

for (var i = 0; i <= officeItems.length; i++) {
  for (var j = i + 1; j < officeItems.length; j++) {
    if (officeItems[i] === officeItems[j]) {
      console.log(officeItems[i])
    }
    
  }
  
}


// console.log(howManyWords());

// var array = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// for (var i = 0; i < array.length; i++) {

//   for (var j = i + 1; j < array.length; j++) {

//     if (array[i] === array[j]) {

//       console.log(array[i]);
//     }
//   }

// }