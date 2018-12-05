var hiddenBox = document.querySelector(".hiddenBox");

hiddenBox.addEventListener("mouseover", function(e){
    e.target.style.backgroundColor = "blue";
})
hiddenBox.addEventListener("mousedown", function(e){
    e.target.style.backgroundColor = "red";
})
hiddenBox.addEventListener("mouseup", function(e){
    e.target.style.backgroundColor = "yellow";
})
hiddenBox.addEventListener("dblclick", function(e){
    e.target.style.backgroundColor = "green";
})
window.addEventListener("scroll", function(e){
    hiddenBox.style.backgroundColor = "purple";
})
window.addEventListener("keyup", function(e){
    if(e.keyCode === 82) {
        hiddenBox.style.backgroundColor = "red";
    } else if(e.keyCode === 66) {
        hiddenBox.style.backgroundColor = "blue";
    } else if(e.keyCode === 80) {
        hiddenBox.style.backgroundColor = "purple";
    } else if(e.keyCode === 79) {
        hiddenBox.style.backgroundColor = "orange";
    } else if(e.keyCode === 89) {
        hiddenBox.style.backgroundColor = "yellow";
    } else if(e.keyCode === 71) {
        hiddenBox.style.backgroundColor = "green";
    } 
})