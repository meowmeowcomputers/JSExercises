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
  
}
