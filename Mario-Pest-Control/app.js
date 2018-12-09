var zinger = document.getElementById("zingerInput");
var kritter = document.getElementById("kritterInput");
var miniNecky = document.getElementById("miniNeckyInput");
var total = document.getElementById("totalButton");

total.addEventListener("click", function(e){
    var pay = (+kritter.value * 5) + (+zinger.value * 7) + (+miniNecky.value * 11);
    document.getElementById("payBox").innerHTML = ("Donkey Kong has earned a total of ") + pay + (" bananas");
})
