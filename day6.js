// Activity 1 : Array Creation and Access

// Task 1 : array from 1 to 5
let array=[1,2,3,4,5];
console.log(array);
//output : [ 1, 2, 3, 4, 5 ]

// Task 2 : first and last element of an array
console.log("First element : ",array[0]);
console.log("Last element: ",array[array.length-1]);
// Output: 
// First element : 1
//Last element : 5

// Activity 2 : Array Methods (Basic)

//Task 3 : push method
array.push(6);
console.log("Updated array : ",array);
//output: Updated array : [ 1, 2, 3, 4, 5, 6 ]

//Task 4: pop method
array.pop();
console.log("Updated array : ",array);
//output: Updated array :  [ 1, 2, 3, 4, 5 ]

//Task 5 : shift method
array.shift();
console.log("Updated array : ",array);
//output: Updated array :  [ 2, 3, 4, 5 ]

//Task 6 : unshift method
array.unshift(0);
console.log("Updated array : ",array);
//output : Updated array : [ 0, 2, 3, 4, 5 ]

// Activity 3 : Array Methods (Intermediate)

//Task 7 : map method
let doubledArray = array.map( n => n*2 );
console.log("Doubled array : ", doubledArray);
//output : Doubled array :  [ 0, 4, 6, 8, 10 ]

//Task 8 : filter method
let filteredArray = array.filter( n=> n%2 === 0);
console.log("Filtered array : ", filteredArray);
//output:Filtered array :  [ 0, 2, 4 ]

//Task 9 : reduce method
let sum = array.reduce((x,y)=> x+y,0);
console.log("Sum of all numbers in the array :", sum);
//output : Sum of all numbers in the array : 14

// Activity 4 : Array Iteration

// Task 10 : for loop
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}
/*output :
0
2
3
4
5*/

// Task 11 : forEach method
array.forEach(console.log);
/* output :
0 0 [ 0, 2, 3, 4, 5 ]
2 1 [ 0, 2, 3, 4, 5 ]
3 2 [ 0, 2, 3, 4, 5 ]
4 3 [ 0, 2, 3, 4, 5 ]
5 4 [ 0, 2, 3, 4, 5 ] */

// Activity 5 : Multi-Dimensional Arrays 

// Task 12 : 2-D array
let matrix = [
    [3, 6, 9],
    [12, 15, 18],
    [21, 24, 27]
];
console.log(matrix);
//output : [ [ 3, 6, 9 ], [ 12, 15, 18 ], [ 21, 24, 27 ] ]

// Task 13 : accessing specific element 

console.log("Element at [2][1]:", matrix[2][1]); 
// Output: 24


