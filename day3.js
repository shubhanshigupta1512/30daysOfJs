// Activity 1:If-Else statements

// Task 1
let num1 = 8;
if (num1 > 0) {
console.log("+ve");
}
else if (num1 < 0) {
    console.log("-ve");
}
else {
    console.log("0"); 
 //output: +ve
}

// Task :2
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}
else {
    console.log("you are not eligible to vote."); 
//output: You are eligible to vote.
}


//Activity: 2  Nested if else statements

//Task:3
let a = 4;
let b = 6;
let c = 5;
if (a > b) {
    if (a > c) {
        console.log("a is greater");
    }
    else {
        console.log("c is graeter");
    }
}
else {
    if (b > c) {
        console.log("b is graeter");
    }
    else {
        console.log("c is graeter"); 
     //output:b is greater
    }
}

// Activity 3 Switch Case

//Task: 4
const date = new Date();
let day = date.getDay();

switch (day) {
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesay");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    default:
        console.log("invalid day") 
  //output: sunday

}

//Task 5
let score=75;
switch (true) {
    case (score>85):
        console.log("A");
        break;
    case (70>score<=85):
        console.log("B");
        break;
    case (55>score<=70):
        console.log("C");
        break;
    case (score<=55):
        console.log("D"); 
 //output-B
        break;
}
// Activity 4: Ternary Operator
  
//Task 6
let x = 7;
let check=x%2==0?"even":"odd"; 
 //output: odd
console.log(check); 


//Activity 5 Combining Conditions

//Task 7
let year=2024;
if((year%4==0&&year%100!=0)||year%400==0){
    console.log("leap year");
}
else{
    console.log("not a leap year"); 
 //output: leap year
}