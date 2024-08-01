// Activity 1 : Template Literals 

//Task 1
let myName = "Shubhanshi";
let age = "18";
let str =`Hi! Myself ${myName} and I am ${age} years old.`;
console.log(str);
//output:Hi! Myself Shubhanshi and I am 18 years old.

//Task 2
let multiLineStr=`hi
I am Shubhanshi.
How about you?`
console.log(multiLineStr);
/*output:
hi
I am Shubhanshi.
How about you?*/

//Activity 2 : Destructuring

// Task 3
let arr=[1,2,3,4,5];
const [first,second]=arr;
console.log(`First no. is ${first}`);
console.log(`Second no. is ${second}`);
/*output :
First no. is 1
Second no. is 2*/

// Task 4
let book={
  title: "Rich Dad Poor Dad",  
  author: "Robert T. Kiyosaki",
  year: 1997,
};
let{title,author}=book;
console.log(`title:${title}`);
console.log(`author:${author}`);
/*output:
title:Rich Dad Poor Dad
author:Robert T. Kiyosaki*/

//Activity 3:Spread and Rest operator

// Task 5
let aRRay=[3,4,5];
let newarr=[...aRRay,6,7,8];
console.log(`Array:${aRRay}`);
console.log(`Updated Array:${newarr}`);
/*output: 
Array:3,4,5
Updated Array:3,4,5,6,7,8*/

// Task 6
function calculatesum(...args){
    let sum =0;
    for(let i of args){
        sum=sum+i;
    }
    return sum;
}
let ans=calculatesum(50,60,70);
console.log(ans);
//output:180

//Activity 4 : Default parameters

//Task 7
function multiply(x,y=1){
    return x*y;
}
console.log(multiply(5,6));
//output:30

// Activity 5 : Enhanced Objects Literals 
let name1="Shubhanshi";
let age1="18";
let branch="ece";
let info={
    name1,
    age1,
    engineering: ()=>branch,
    greet(){
        console.log("hello");
    }
}
console.log(info.name1);
console.log(info.age1);
console.log(info.engineering);
info.greet();
/*output:
Shubhanshi
18
[Function: engineering]
hello*/

// Task 9:
let a="firstname";
let b="lastname";
const obj={
    [a]:"Shubhanshi",
    [b]:"Gupta"

};
console.log(obj);
//output : { firstname: 'Shubhanshi', lastname: 'Gupta' }




