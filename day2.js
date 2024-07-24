
// Activity 1 : Arithmetic Operators

let num1=5;
let num2=4;
let result1;

// Task:1
result1 = num1+num2;
console.log("sum of num1 & num2 :",result1); 
//output: 9

// Task:2
result1=num1-num2;
console.log(" subtraction of num1 & num2 :",result1);
//output : 1

// Task:3
result1 = num1*num2;
console.log(" multiplication of num1 & num2 :",result1);  
//output: 20

// Task:4
result1=num1/num2;
console.log(" division of num1 & num2 :",result1); 
//output : 1.25

// Task:5
result1 =num1%num2;
console.log(" remainder of num1 & num2 :",result1); 
//output : 1



// Activity 2: Assignment Operators

num1=50;
var a=20;
// Task:6
a+=num1;
console.log("ans:",a); 
//output:70

// Task:7
a-=num1;
console.log("ans:",a); 
//output: 20

// Activity 3: Comparison Operators

// Task: 8
if(num1>num2){
    console.log("num1 is larger than num2");
}
else{
    console.log("num2 is larger than num1"); 
//output : num1 is larger than num2
}

// Task: 9
if(num1>=num2){
    console.log("num1 is greater than or equal to num2");
}
else{
    console.log("num2 is greater than or equal to num1"); 
//output: num1 is greater than or equal to num2
}

// Task: 10

let num3=34;
let num4=24;
console.log("is num3 is equal to num4?",num3==num4);
//output: false

let x=7;
let y="7";
console.log("is x is  equal to y?",x==y);
//output: true

console.log("is x is strictly equal to y?",num3===num4);
//output:false


// Activity 4: Logical Operators

num1=7;
num2=9;
num3=7;

// Task:11
if((num1<num2)&&(num1==num3)){
    console.log("Both the conditions are satisfied");
}
else{
    console.log("Both the conditions are not satisfied");
//output: Both the conditions are satisfied
}

// Task: 12
if((num1>num2)||(num1!=num3)){
    console.log("Either Both the conditions are satisfied or any one condition is satisfied");
}
else{
    console.log("Both the conditions are not satisfied");
 //output: Both the conditions are not satisfied
}


// Task:13
let str="";
if(!str){
    console.log("string is void");
}
else{
    console.log("string is not void");
//output: string is void
}

// Activity 5: Ternary Operators

// Task:14
let score=88;
let result=(score>=33)?'pass':'fail';
console.log(result);
//output:pass