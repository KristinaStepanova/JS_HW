//task 1
function multiply() {
  let res = 1;
  if (!arguments.length) {
    return 0;
  }
  for (item in arguments) {
    res *= arguments[item];
  }
  return res;
}

multiply(5, 4, 9);

//task 2
function reverseString(val) {
  return val
    .split("")
    .reverse()
    .join("");
}

let res2 = reverseString("abcd");

//task 3
function getCodeStringFromText(val) {
  let letterCode = "";
  for (item in val) {
    letterCode += val.charCodeAt(item) + " ";
  }
  return letterCode;
}

let res3 = getCodeStringFromText("utyr");

//task 4
function guess(number) {
  if (number > 10 || number < 0) {
    console.log("error");
  }
  let val = Math.floor(Math.random() * 10 + 1);
  if (val === number) {
    return console.log("You win");
  } else {
    return console.log(
      "Вы не угадали ваше число " + number + " а выпало число " + val
    );
  }
}

guess(10);

//task 5
function getArray(n) {
  let arr = [];
  for (i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

getArray(5);

//task 6
function doubleArray(array) {
  let secondArray;
  secondArray = array.slice().concat(array);
  return secondArray;
}

let firstArray = [2, 4, 7, 0];
doubleArray(firstArray);

//task 7
function changeCollection() {
  let newArray = arguments;
  for (item in newArray) {
    if (!Array.isArray(newArray[item])) {
      return console.log("error");
    } else {
      newArray[item].shift();
    }
  }
  return newArray;
}

changeCollection([1, 2, 3], [2, 3, 4]);


//task 8
function users(arr, prop, val) {
    if (!arr || !prop || !val) {
        return console.log('error');
    }
    let newArr = [];
    for (index in arr) {
        for (key in arr[index]){
            if (arr[index][key] === val){
                newArr.push(arr[index]);
            }
        }
    }
    return console.log(newArr);
}

let userArray = [ {name: 'Kate', age: 30}, {name: 'Anna', city: 'Kharkiv'}, {name: 'Vlad', city: 'Kiev'} ]
users(userArray, 'city', 'Kiev');