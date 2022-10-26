console.log("1 uzd");
let vardas = "Jonas";
let pavarde = "Jonaitis";
if(vardas > pavarde){
console.log(vardas);
}else {
    console.log(pavarde);
}
//--------------------------------
console.log("2 uzd");
let vardas1 = "Jonas";
let pavarde1 = "Jonaitis";
console.log(vardas1.toUpperCase() + " " + pavarde1.toLowerCase());
//---------------------------------
console.log("3 uzd");
let vardas2 = "Jonas";
let pavarde2 = "Jonaitis";
let part = vardas2.slice(0, 1) + pavarde2.slice(0, 1);
console.log(part);
//---------------------------------
console.log("4 uzd");
let vardas3 = "Jonas";
let pavarde3 = "Jonaitis";
let part1 = vardas2.slice(2, 5) + pavarde2.slice(5, 8);
console.log(part1);
//----------------------------------
console.log("5 uzd");
let kint = "An American in Paris";
function replaceAWithStar(strin){
    return strin.replace(/a/gi, "*");
}
console.log(replaceAWithStar(kint));
//-----------------------------------
console.log("6 uzd");
let string1 = "An American in Paris";
let string2 = "Breakfast at Tiffany's";
let string3 = "2001: A Space Odyssey";
let string4 = "It's a Wonderful Life";

function withoutVowels(string) {
    var withoutVowels = "";
    for (var i = 0; i < string.length; i++) {
        if (!isVowel(string[i])) {
          withoutVowels += string[i];
        }
      }
      return withoutVowels;
  }
  
  function isVowel(char) {
    return 'AaEeIiOoUuYy'.includes(char);
  }

  console.log(withoutVowels(string1));
  console.log(withoutVowels(string2));
  console.log(withoutVowels(string3));
  console.log(withoutVowels(string4));
  //-------------------------------------