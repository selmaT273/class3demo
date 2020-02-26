'use strict';
console.log('this is connected');

//global variables go here
var userPoints = 0;

alert('Hello, and welcome to my guessing game.');
var user = prompt('What is your name?');
var userName = user.toLowerCase();
//console.log(userName);
//the user variable should be a 
// - string
// - null
// - ' ' empty

// if the user is empty string or null, keep asking them for their name
// while(user === '' || user === null)
//there is a shorter version of this 
// the (!user) will return false if user inputs nothing, or empty string
// while(!user){
//     user = prompt('What is your name, PLEASE?!');
// }

//control in js

// if(condition){

// } else if(condition){

// } etc

// if(userName !== 'stacey'){
//     alert('you are not the right person');
// }

// alert('Hello, ' + user + ' glad you stopped by.');

// var answer = prompt('is my favorite food popcorn?','Type yes or no').toLowerCase();

// if(answer === 'no' || answer === 'n'){
//     userPoints++;
// } else {
//     alert('You are incorrect');
// }
// alert('you have ' + userPoints + ' points.');

//loop until condition turns truthy and or not-truthy
// while(condition)

//do {this code will run no mater what} while(condition);
// for( setup; condition; change variable)
// example... for(var i = 0; i < sumArray.length; i = i++)
//or,
// var i = 0;
//while (i < value){ } i++;

// var foodsILike = ['Chips','Pizza','Chicken','Chocolate'];
// for(var i = 0; i < foodsILike.length; i++){
//     console.log(foodsILike[i]);
// }

// var name;
// do {
//     console.log('I am running once before checking my condition.');
//     name = prompt('Name?');
// } while(!name);
// console.log(name);

/*
do more looping
continue means skip the rest of the iterations and go back to the beginning
*/

for(var i = 0; i < 10; i++){
    if(i === 2){
        console.log('Keep going past this number 2.');
        continue;
    }
    if (i === 4){
        console.log('this is now breaking the loop');
        break;
    }
    console.log('the variable i = ', i);

}

/* 
falsy values are 0, null, NaN, '', undefined, false
truthy values === everything else

can combine conditions 
- Not: ! 
- And: &&
- Or: ||

(craig === 'instructor' || 'teacher') => will NOT work

(craig === 'instructor' || craig === 'teacher') WILL work*/
