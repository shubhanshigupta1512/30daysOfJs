// Activity 1 : for loop

// Task 1

for(let i = 1; i <= 10; i++){
    console.log(i);
}
// output :- 1 2 3 4 5 6 7 8 9 10

//Task2 

let num = 5;
for (let i = 1; i <= 10; i++) {
    console.log(5*i);
}

// Output:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50


// Activity 2 : While Loop

// Task 3

let sum = 0;
let i=1;
while(i<=10){
    sum=sum+ i;
    i++;
}
console.log(sum);

// Task 4
let n= 10;
while(n>0){
    console.log(n);
    n--;
}
// output :-10 9 8 7 6 5 4 3 2 
1
// Activity 3 : Do.. while loop

// Task 5 
let a=1;
do{
    console.log(a);
    a++;
}
while(a<=5);
/*output
1
2
3
4
5 */

//Task 6 


let fact = 6; 
let f = 1;
let x= 1;

do {
    f *= x;
    x++;
} while (x <= fact);

console.log(f);
//output
// 120


//Activity 4 : Nested Loops

//Task 7                     

let y= 5;
for(let i = 0; i < y; i++) {
    let row = '';
    for(let j = 0; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}
 /* OUTPUT : 
    *
    * *
    * * *
    * * * *
    * * * * *  
*/


//Activity 5: Loop Control Statements:

//Task 8:  

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; 
    }
    console.log(i);
}
/*Output:
1
2
3
4
6
7
8
8
9
10 
*/

//Task 9 :
for (let num = 1; num <= 10; num++) {
    if (num === 5) {
        break; 
    }
    console.log(num);
}
/*Output:
1
2
3
4
*/