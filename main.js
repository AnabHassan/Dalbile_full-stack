/* 
program : amaryaal aad computer u sheegaysid si uu shaqo uqabto
programmer : qofka amarka bixinaayo
variable : container for storing data

// Variables
const is final one. it can't be reusable again 
let is reusable, 
*/
// let myName = "Anab"
// let grade = 200;

// if(grade >= 90 && grade <= 100){
//     console.log('you are Grade A')
// }
// else if (grade >= 70 && grade <= 80){
//     console.log('you are Grade B')
// }
// else if (grade <= 60 && grade >= 50 ){
//     console.log('you are Grade C')
// }
// else if(grade < 50){
//     console.log("Failed")
// }
// else if(grade > 100){
//     console.log("Unknown Grade")
// }
// else {
//     console.log('you are failed')
// }

// Loops
  // For loop
  // While loop

  // do while loop
//   let num = 0; // inialize
//   do {
//     num += 2; // increment or decrement
//     document.write(num, " ")
    
//   }
//   while(num < 12) // condition



/* Function code yar oo kuu qabanaayo shaqo gaar ah, 
   it executes when it's calls. 
   
   */
  // old way

//   function myName(){
//     document.write("Anab Hassan")
//   }
//   myName()

  // function with parameters
//   function studentData(name, age){
//     document.write(name, age," <br>" )
//   }
//   // arguments
//   studentData("Anab ", 19)
//   studentData("Ayaan ", 23)
//   studentData("Abshira ", 18)
//   studentData("Hanad  ", 14)

 /* // Classwork
  function addition(num1, num2, num3, num4, num5){
    let sum = num1 + num2 + num3 +num4 + num5;
    document.write(sum, "<br>")
  }
  addition(1, 2, 3, 4, 5)
  addition(2, 3, 4, 5, 6)
  addition(1, 3, 5, 7, 8)
*/
  
/* 
  // Classwork 2
function greaterthan(n1,n2){
    if(n1 > n2){
        document.write(n1, " aa ka weyn ",n2, "<br>" )
    }
    else if(n1 == n2){
        document.write(n1," iyo ",n2," isku mid waaye <br>")
    }
    else {
        document.write(n2," aa ka weyn  ",n1, "<br>")
    }
}
greaterthan(80, 8)
greaterthan(500, 500)
*/

// function with return
// function myname(){
//   let name = "Fatma"
//   return name
// }
// document.write(myname())

// function add(num1, num2){
//   return num1 + num2;

// }
// document.write(add(5,6))


// arrow fat function (new way)
// const sayHi = () => {
//   document.write("fat arrow function")
// }
// sayHi()

// classwork
// const multiply = (num1, num2, num3) => {
// //  let multi = num1 * num2 * num3;
//  return num1 * num2 * num3
// }
// document.write(multiply(2,3,4));

/* Array is special variable, it takes  
more than one value.
data in the array is called element.

*/
// const numbers = [1,2,3,4,5];
// const names = ['Anab', 'Fawzi','Ayaan', 'hanad']
// document.write(numbers[3], '<br>',names)

// array with loop (if the data is a lot)
// for (let num = 0; num < names.length; num++){
//   document.write(names[num], '<br>')
// }

// do while
// let num = 0;  // initialization
// while (num < names.length){ // condition
//   document.write(names[num], '<br>')
//   num++; // increment or decrement
// }

// array methods (pre-defined methods)

// join = getting all elements together.
// let join = names.join(' ')

// // pop = removes/deletes last element.
// let removeOne = names.pop();

// // push = adds new element the array to the last.
// names.push('Ilyaas');

// // shift = removes the first element.
// names.shift()

// unshift = adds one or two elements in the beginning
// names.unshift('Hassan')

// sorting based on alphabetical order  A to Z
// names.sort()

// reversing elements
// names.reverse()
// document.write(names)


/* DOM
Javascript and HTML working together
DOM stands dor Document Object Model
it allows programs and script to dynamically 
update content, structure
*/

// const title = document.getElementById('title').style
// const btn = document.getElementsByClassName('btn');
// const desc = document.getElementsByTagName('p');

// const title = document.querySelector('#title')
// // Modifying HTML using innerHTMl
// title.innerHTML = 'JavaScript'
// title.style.color = '#023e8a'

// const des = document.querySelector('p')
// des.innerHTML = 'JavaScript makes websites to work dynamic'
// des.style.fontSize = '20px'

// const btn = document.querySelector('.btn')
// btn.innerHTML = 'Learn more'
// btn.style.backgroundColor = '#023e8a'
// btn.style.border = 'none'
// btn.style.borderRadius = '8px'
// btn.style.fontSize = '20px'
// btn.style.padding = '8px 15px'
// btn.style.color = '#fff'
// btn.style.boxShadow = '1px 5px 5px grey'

/* JavaScript DOM EventListener*/
// btn.addEventListener('click', function(){
//   title.style.color = 'red'
//   des.style.backgroundColor = '#00509d'
//   des.style.color = '#fff'
//   des.style.padding = '8px 15px'
// })

const box = document.querySelector(".box");
const onbtn = document.querySelector("#onBtn");
const offbtn = document.querySelector("#offBtn");

onbtn.addEventListener("click", function(){
  box.style.backgroundColor = 'yellow';
});
offbtn.addEventListener("click", function(){
  box.style.backgroundColor = 'transparent';
});
