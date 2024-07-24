//ACTIVITY 1

//Task-1
function check(num){
    if(num%2===0){
        return true;
    }
    else{
        return false;
    }
}
if(check(8)){
    console.log("even");
}
else{
    console.log("odd");  
//output: even
}

// Task 2
function sq(n){
    return n*n;
}
console.log(sq(5)); 
//output: 25

//ACTIVITY 2

//Task 3
function max(num1,num2){
    if(num1>num2){
        console.log(num1 +"is maximum");
    }
    else{
        console.log(num2 +"is maximum");
    }
}
max(3,9);  
//output- 9 is maximum


//Task 4 
function concatenate(str1,str2){
    return str1+str2;
}
let str1="Hello";
let str2="World";
let str3=concatenate(str1,str2); 
//output-HelloWorld
console.log(str3);


//ACTIVITY-3:

//Task-5
let sum=(a,b)=>a+b;
let result=sum(5,8);
console.log(result); 
//output:13

//Task 6 
const check1=(char,str)=>{
        for(let i=0; i<str.length;i++){
            if(str[i]==char) 
                return true;   
        } 
        return false;
}
    console.log(check1('y','Shubhu')) //true
   
  
    
//ACTIVITY 4

//Task 7
const product=(x,y=3)=>{
    return x*y;
}
console.log(product(3));
//output: 9

//Task 8
function greet(name,age)
{
    return 'Hello $ {name} ! Your age is ${age}.';
}
console.log(greet("Shubhanshi","19"))     
//Hello Shubhanshi ! Your age is 19.



//ACTIVITY 5
//Task 9

function repeat(x,times){
    for(let i=0;i<times;i++)
      x()
}
function y(){
    console.log("Hello!");
}
repeat(y,5)   
//output: Hello!
// Hello!
// Hello!
// Hello!
// Hello!


// Task 10
function a(n){
    return n*n;
}
function b(n){
    return n-5;
}
function func(a,b,x){
    let ans=a(x);
    return b(ans);
}
console.log(func(a,b,4)); 
// Output : 11