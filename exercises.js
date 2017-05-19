// Hello, you!
function hello(name) {
  console.log('Hello', name)
}
hello('Ryan')

//Hello, you! Part 2
function hello(name = "Meow") {
  console.log('Hello', name)
}
hello()
hello('Leon')

//Madlib
function madlib(a,b) {
  let output = 'The ' + a + ' ' + b + ' the world';
  return output;
}
madlib('cat', 'ate');

//Tip Calculator
function tipAmount(amount, service) {
  if (service == 'good') {
    amount = amount * 1.2
  }
  else if (service == 'fair') {
    amount = amount * 1.15
  }
  else if (service == 'poor') {
    amount = amount * 1.1
  }
  else {
    console.log('Bad input')
  }
  return amount;
}

console.log(tipAmount(100, 'good'));

//Tip Calculator 2

function tipAmount(amount, service) {
  if (service == 'good') {
    amount = amount * 1.2
  }
  else if (service == 'fair') {
    amount = amount * 1.15
  }
  else if (service == 'poor') {
    amount = amount * 1.1
  }
  else {
    console.log('Bad input')
  }
  return amount;
}

console.log(tipAmount(100, 'good'));

//Tip Calculator 3

function tipAmount(amount, service, diners) {
  if (service == 'good') {
    amount = amount * 1.2
  }
  else if (service == 'fair') {
    amount = amount * 1.15
  }
  else if (service == 'poor') {
    amount = amount * 1.1
  }
  else {
    console.log('Bad input')
  }
  amount = amount/diners
  return amount;
}

console.log(tipAmount(100, 'good'));

//Print Numbers

function printNumbers(start, end) {
  for (let x = start; x <= end; x++){
    console.log(x)
  }
}

function printNumbers(start, end) {
  let x = start;
  while (x <= end){
    console.log(x)
    x++;
  }
}

printNumbers(4,20);

//Print a Square

function printSquare(i) {
  for (let x = 1; x <= i; x++){
    console.log('*'.repeat(i))
      "/n"
  }
}
printSquare(5);

//Print a box

function printBox(i) {
  cap = []
  box = []
  for (let x = 1; x <= i; x++) {
    cap.push("*")
  }
  for (let x = 0; x <=i; x++){
    if(x == 0) {
      box.push('*');
    }
    else if (x == i-1) {
      box.push('*');
    }
    else {
      box.push(' ');
    }
  }
  console.log(cap.join(''));
  for (let x = 1; x <= i-2; x++) {
    console.log(box.join(''));
  }
  console.log(cap.join(''));
}

//Print a Banner

function banner(i, icon) {
  cap = [];
  msg = icon + i + icon;
  for(let x = 0; x <= i.length+1; x++) {
    cap.push(icon);
  }
  console.log(cap.join(''));
  console.log(msg);
  console.log(cap.join(''));
}

banner('test text', '&');

//Factors

//Ceasar Cipher 1 and 2 (flexible)
function caesar(rot, text) {
  text = text.toUpperCase();
  outNum = []; //numeric values of letters
  out = []; //output array

  for(let x = 0; x < text.length; x++) { //load outNum
    outNum.push(text.charCodeAt(x)-rot);
      if(outNum[x] < 65) {
        outNum[x] = outNum[x] +26; //keep within alphabet if rot is positive
      }
      if(outNum[x] > 90) {
        outNum[x] = outNum[x] -26; //keep within aphabet if rot is negative
      }
  }

  for(let x = 0; x <text.length; x++) { //convert outNum to letters bu loading in to OUT array
    out.push(String.fromCharCode(outNum[x]));
  }
  return out.join('');
}

caesar(-13, 'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar')

//l337 5p34k
//Skipped; do 7 if then clauses. Done.

//Long-Long Vowels
function long(text) {
  textArray = []
  for (let x = 0; x < text.length; x ++) {
    textArray.push(text[x]);
    }

  for (let x = 0; x < text.length; x ++) {
    if (textArray[x] == textArray[x-1]) {
      textArray.splice(x, 0, textArray[x]+textArray[x]+textArray[x]);
    }
  }
  text = textArray.join('');
  console.log(text);
}
long('jookliik');

//Sum the Numbers

function numberSum(array) {
  var sum = 0
  for (let x = 0; x < array.length; x++) {
    sum = sum + array[x];
  }
  console.log(sum);
}

//Just the Positives

function justPos (array) {
  var pos = [];
  for (let x =0; x <array.length; x++) {
    if (array[x] >= 0) {
      pos.push(array[x]);
    }
  }
  return pos;
  console.log(pos);
}

//Matrix Addition

function matrixAdd (mat1, mat2) {
  var newMat = [[],[]];
  for (let x = 0; x < mat1.length; x++) {
    for (let y = 0; y < mat2.length; y++) {
      newMat[x][y] = mat1[x][y] + mat2[x][y];
    }
  }
  console.log(newMat);
}

//Matrix Multiplication

//Rock Paper Scissors

function rockPaperScissors (p1, p2) {
  if (p1 == 'rock') {
    if p2 ==
  }
  else if (p1 == p2) {
      console.log('A draw!')
  }
}

//Positive Numbers
// Write a function which takes an array of numbers as input and returns a new
// array containing only the positive numbers in the given array

var b = [1, -2, -3, 4 , -5, 6, -7]

function isPositive (x) {
  return x >= 0;
}

b.filter(isPositive);

// Even Numbers
//
// Write a function which takes an array of numbers as input and returns a new
// array containing only the even numbers in the given array.

var a = [1, 2, 3, 4 ,5 ,6 ,7]

function isEven (x) {
  return x % 2 == 0;
}

a.filter(isEven);

// Square the Numbers
//
// Write a function which takes an array of numbers as input and returns a
// new array containing result of squaring each of the numbers in the given array
// by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

var a = [1, 2, 3, 4];
function squareNum (n) {
  return n * n;
}
var aSquared = a.map(squareNum);

// Cities 1
//
// Write a function which takes an array of city objects

var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

cities.filter(function (x) {
  return x.temperature < 70;
});

// Cities 2
//
// Write a function which takes an array of city objects like the above
// problem as input and returns an array of the cities names.
cities.map(function (x) {
  return x.name;
});

// Good Job!
// Print out 'Good Job, {{name}}!' for each person's name, one on a line.

var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

for (var attribute in people) {
  var x = people[attribute];
  console.log(`Hello ${x}`);
}

// Sort an array
//
// Given an array of strings such the array of names given in the previous problem,
//  sort them by alphabetically order.

people.sort();

// Sort an array, 2
//
// Sort the same array, but not by alphabetically order, but by how long each name
//  is, shortest name first.

people.sort(function(x, y) {
  if (x.length > y.length) {return 1; }
  else if (x.length < y.length) { return -1; }
  return 0;
  }
);

// Sort an array, 3
var arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];

arr.sort(function(x,y) {
  if
  (x.reduce(
    function (a, b)
      {return a + b;}
    )
    <
  y.reduce(
    function (a,b)
      {return a+b;}
    )
  ) {
    return 1;
  }
  else if
  (x.reduce(
    function (a, b)
      {return a+b;}
    )
      >
  y.reduce(
    function (a,b)
      {return a+b;}
    )
  ) {
    return -1;
  }
  else {
  return 0;
    }
  }
);

//3 times
