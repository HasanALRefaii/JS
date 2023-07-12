/*

let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

*/
let x = 250 ;
console.log(x*0.025)


/*
Array Tasks : 
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
let number = [1,7,9,45]
let names = ["Str" ,"alex","moh",

'the','fox' ,'over' ,'lazy', 'dog',  ]
console.log(number+names)

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/

var fruits=["Tomato","Banana","Watermelon"]
console.log(fruits.indexOf("Banana"))
console.log(fruits.indexOf("Tomato"))



/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/

const food = ["pizza","mansaf" ,]
const movies = ["saw","shawshank" ]
const sports = ["football","swimming" ]
console.log(food)
console.log(movies)
console.log(sports)


/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

let num = [1,4,5]
console.log(num[0])
console.log(num[num.length-1])


/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9]
array.push(10)
array.shift ()
array.shift ()
array.shift ()
array.splice(0,0,1,3,4,6,8)
console.log(array)


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
let array2 = [0,5,7,9]
array2.shift();
array2.shift();
array2.shift();
array2.unshift(5)
array2.push(-7,3.5)
console.log(array2)

/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

var arr2 = [ -3 , 8 , 7 , 6 , 5 , -4 , 3 , 2 , 1 ];
// arr2.sort();
console.log(arr2.sort());


