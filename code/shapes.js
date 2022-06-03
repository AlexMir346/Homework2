// #4
// rectangle
let rows = 8;
let sp = 0;
let st = 13;
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < st; j++) {
    document.write('*');
  }
  sp -= 1;
  st += 0;
  document.write('<br>');
}

document.write('<hr/>');

// left triangle
for (let i = 0; i < 8; i++) {
  for (let h = 0; h < i; h++) {
    document.write('*\n');
  }
  document.write('<br/>');
}
document.write('<hr/>');

// triangle
let lines = 8;
let spaces = 7;
let stars = 1;

for (let i = 0; i < lines; i++) {
  for (let a = 0; a < spaces; a++) {
    document.write('&nbsp\n');
  }
  for (let b = 0; b < stars; b++) {
    document.write('*');
  }
  spaces -= 1;
  stars += 2;
  document.write('<br/>');
}
document.write('<hr>');

// dimond
let space = 13;
let star = 1;
let line = 8;

for (let i = 0; i <= line; i++) {
  for (let j = 0; j <= space; j++) {
    document.write('&nbsp');
  }
  for (let b = 0; b < star; b++) {
    document.write('*');
  }
  space--;
  star++;
  if (i >= line / 2 && i <= line) {
    star -= 2;
    space += 2;
  }
  document.write('<br/>');
}
document.write('<hr/>');

// #3
let a = +prompt('Enter first number');
let b = +prompt('Enter second number');

if (a < b) {
  let i = a;
  let sum = 0;
  let list = '';
  while (i < b) {
    sum += i;
    if (i % 2 !== 0) {
      list += ' ' + i;
    }
    i++;
  }
  document.write('The sum of the numbers from A to B is ' + sum);
  if (list.length > 0) {
    document.write('<p>' + 'Odd numbers werefound from A to B:' + list);
  } else {
    document.write('<p>' + 'No odd numbers were found in the number range from A to B!');
  }
} else {
  document.write('Condition A < B is not met!');
}

document.write('<hr/>');

//#2
const login = prompt('Enter your login');
const message =
  login == 'Vasya'
    ? 'Hello'
    : login == 'Boss'
    ? 'Good afternoon'
    : login == ''
    ? 'Login is not entered'
    : '';

document.write(message + '<br/>' + login);

document.write('<hr/>');

// #1
const c = +prompt('Enter first number');
const d = +prompt('Enter second number');

const res = c + d < 4 ? 'Less' : 'More';

document.write(res);
document.write('<hr/>');

//Classwork
// const text = prompt('Enter you Login');
// if (text == 'Admin' || text == 'admin') {
//   const password = prompt('Enter the password');
//   if (password == 'Vlastelin' || password == 'vlastelin') {
//     alert('Welcome to your account');
//   } else if (password == null) {
//     alert('Login canceled');
//   } else {
//     alert('Password is not correct');
//   }
// } else {
//   alert('Login is not correct');
// }
