// let result = prompt('write your result')
// if (result >=90)
// {document.write('excellent')}
// else if (result>=80)
// {document.write('very good')}
// else if (result>=60)
// {document.write(' good')}
// else 
// {document.write('failed')
// }
// 
// let names = ['ahmed' , 'mohammed' ,'ali','alaa','hasan','yazan','mazen','gamal','gameel']

// for(let i =0 ;i < names.length ;i=+1 )
// {
//     console.log(names[i])
  
// }

/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
  var num1 = 1
  var num2 = 5
  if(num1>num2)
  {document.write(num1)}
  else {document.write(num2)}


 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
  var num11 = 3
  var num12 = -7
  var num13 =2
  if (num11* num12 *num13>0)
  {window.alert ('+')}
  else {window.alert('-')}


 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
var a = 0
var b = -1
var c = 4

if (a>b && a>c)
 { 
    if (b>c)
    {console.log(a , b  ,c)}

    else {console.log(a , c , b)}
 }

  else if (b>a && b>c) 
  {
    if (a>c)
    {console.log(b , a , c)}

    else {console.log(b , c , a)}
  }

  else if (c>a && c>b)
  {
    if (a>b)
    {console.log(c , a , b)}
    else{console.log(c , b, a)}
  }


  
 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
 a =-5
 b=-2
 c=-6
 d=0
 f=-1
 if (a>b && a>c && a>d && a>f )
 {window.alert(a)}

 else if (b>a && b>c && b>d && b>f )
 {window.alert(b)}


  else if (c>a && c>b && c>d && c>f )
  {window.alert(c)}

  else  if (d>a && d>c && d>b && d>f )
  {window.alert(d)}

   else if (f>a && f>c && f>d && f>b )
  {window.alert(f)}

 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/

    let x = 8
    let y = 5
    if (x>y)
    {document.write('hello world')}
    else {document.write('goodbye')  }
  
 /******* End Your Code ********* */

/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/

let mark = 85 

if (mark>=90) 
{ console.log('A')}

else if (mark>=80) 
{ console.log('B')}

else if (mark>=70) 
{ console.log('C')}

else if (mark>=60) 
{ console.log("D")}

else if (mark>=50) 
{ console.log('E')}

else {console.log('Fail')}

// 1. Write a JS code to print numbers from 1 to 10
for (let i = 1 ; i <=10 ; i++)
{console.log(i)} 


/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/
var arr = [13,23,12,45,22,48,66,100]
for (let i =0 ; i<=arr.length; i++ )
{ 
    if(arr[i]%2==0)
   { console.log(arr[i])} }


/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/
document.write('<br>')
  for (let i =1 ; i<=8 ; i++)
  {
    for (let j=1 ; j<=i ; j++){
    document.write(j)}
    
 document.write ('<br>')
  }
//   document.write(j + '<br>')
  
// for(let i=1 ; i<=8 ; i++)
// {
//     for(let j=1 ; j<=i ; j++)
//     {string+=j}
//     string += '\n'
   
// }
// console.log(string)
 /* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"


*/

let z = "dont know why"
if (z.includes ='y') {
console.log ('yes')}
else {console.log('no')}
