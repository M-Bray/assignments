
// var t = myWorld();


// function myWorld() {
//     return(
//         "whatever it dont matter I guess"
//     )
// }

// function MultiplyByLength(arr) {
// 	var newArr = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		newArr.push(arr[i] * arr.length)
// 	}
// 	return newArr;
// }


//             ////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\             


// function MultiplyByLength(arr) {
// 	return arr.map( function(num) {
// 		return num * arr.length;
// 	})
// }

// function MultiplyByLength(arr) {
// 	return arr.map( (num) => num * arr.length);
// }

function atTime(ms){
	setTimeout(() => {
		const date = new Date();
		console.log(date.toLocaleString())
	}, ms);
} 
atTime(5000)