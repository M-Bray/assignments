var newStr = " "; 
function removeA(str) {
    for (i = 0; i < str.length; i++) {
        if (str[i] !== "a" && str[i] !== "A") {
            newStr += str[i]
        }
    } 
    return newStr;  
}
console.log(removeA("Aye matey!"))  