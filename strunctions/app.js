//UPPERCASE\\
var phrase = "Keep Moving";
var upperPhrase = phrase.toUpperCase();
console.log(upperPhrase); 

//LOWERCASE\\
var phrasey = "TIRED OF BEING LONELY";
var lowerPhrasey = phrasey.toLowerCase();
console.log(lowerPhrasey);

//CONCAT -combining text of multiple strings, returning new string\\
var wrd = "Mr."
var wrd2 = "Bray"
var fullStr = wrd.concat(wrd2);
console.log(fullStr); 

//INDEXoF\\
var stringer = "Sitting on The Dock of The Bay"
var nIndex = stringer.indexOf("n");
console.log(nIndex);

//LASTiNDEXoF\\
var stringy = "Lets stay Together"
var eIndex = stringy.lastIndexOf("e");
console.log(eIndex);

//SPLIT\\
var str = "Hello... Mr.World. Hello. Mr.Wednesday";
var arr = str.split(". ");
console.log(arr);

//SLICE\\
var stry = "Welcome To The New World";
var newStry = stry.slice(8, 19);
console.log(newStry); 

//MATCH\\
var str3 = "Obviously, I'm curiously coding constantly. continually, and carefully finding ways collectively "; 
var res3 = str3.match(/ly/g);
console.log(res3);

//REPLACE\\

var str4 = "All You Need Is Hate" 
var res4 = str4.replace("Hate", "Love");
console.log(res4);


//SUBSTR\\

var str5 = "This Garbage Method Is Being Phased Out";
var res5 = str5.substr(4, 9);
console.log(res5);