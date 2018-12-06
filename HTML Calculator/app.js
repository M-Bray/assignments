display = document.getElementById("display");
form = document.addName;
addNumOne = document.getElementById("addNumOne");
addNumTwo = document.getElementById("addNumTwo");
// console.log(form);
form.addEventListener("submit", function(e){
    e.preventDefault();
    var sum = +addNumOne.value + +addNumTwo.value;
    display.value = sum;
})
formMulti = document.multiName;
multiNumOne = document.getElementById("multiNumOne");
multiNumTwo = document.getElementById("multiNumTwo");

formMulti.addEventListener("submit", function(e){
    e.preventDefault();
    var product = +multiNumOne.value * +multiNumTwo.value;
    display.value = product;
})
formDivi = document.diviName;
diviNumOne = document.getElementById("diviNumOne");
diviNumTwo = document.getElementById("diviNumTwo");

formDivi.addEventListener("submit", function(e){
    e.preventDefault();
    var quotient = +diviNumOne.value / +diviNumTwo.value;
    display.value = quotient;
})