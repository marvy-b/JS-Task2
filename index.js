//1
function isOldEnoughToDrink(age){
  if(age >= 18){
    return true        
  }
  else{
    return false;
  }
}

//2
function isOldEnoughToDrinkAndDrive(age) {
  if  (age >= 21){
      return false
  }else{
    return false;
  }
}


//3
function getProperty(obj, key) {
 if (obj) return obj[key];
  return null;
}
var obj = {
  key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output);

//4
function addProperty(obj, key) { 
  obj[key] = "true";
  return obj;
}


//5
function isPersonOldEnoughToDrinkAndDrive(person){
let oldEnough = false;
  return false;
}

function isOldEnoughToDrinkAndDrive(obj) {
  if  (obj.age < 18){
      return "This person is not old enough to drink or drive in Nigeria"
  }
  return false;
}

//6
function computeAverageLengthOfWords(firstWord, secondWord){
  return (firstWord.length + secondWord.length) / 2;
}

//7
function transformFirstAndLast(arr){
  let first = arr.slice(0, 1);
  let last = arr.slice(-1);
  let firstAndLast = {first: last};
  return firstAndLast;
}

//8
function getAllKeys(obj){
  let keyArray = [];
  for (keys in obj) {
    keyArray.push(keys);
  }
  return keyArray;
}