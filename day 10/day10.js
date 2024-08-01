// Activity 1: Basic Event Handling

// Task 1
let button1=document.querySelector("#button1");
let para1=document.querySelector("#para1");
button1.addEventListener("click",()=>{
    para1.innerText="Happiness is something which we can’t describe in words it can only be felt from someone’s expression of a smile. Likewise, happiness is a signal or identification of good and prosperous life. Happiness is very simple to feel and difficult to describe. Moreover, happiness comes from within and no one can steal your happiness.";
});

// Task 2
document.querySelector("#button2").addEventListener("doublelclick", () => {
    const imgage1 = document.querySelector("#image1");
    image1.style.visibility = (image1.style.visibility === "hidden") ? "visible" : "hidden";
});

// Activity 2 : Mouse Events 

// Task 3 
heading1.addEventListener("mouseover",()=>{
    heading1.style.backgroundColor="pink";
})

// Task 4
heading1.addEventListener("mouseout",()=>{
    heading1.style.backgroundColor="white";
})

// Activity 3 : Keyboard Events 

// Task 5
let input1=document.querySelector("#input1");
input1.addEventListener("keydown",(event)=>{
    console.log(event.key); 
})

// Task 6
input1.addEventListener("keyup",()=>{
    console.log(input1.value);
});

// Activity 4 : Form Events

// Task 7
document.querySelector("#test").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(`Option 1: ${document.querySelector("#dropdown1").value}`);
    console.log(`Option 2: ${document.querySelector("#dropdown2").value}`);
});

// Task 8
document.querySelector("#dropdown1").addEventListener("change", (event) => {
    document.querySelector("#para2").innerText = `Selected Option: ${event.target.value}`;
});

// Activity 5 : Event Delegation

// Task 9
let list1=document.querySelector("#list1");
list1.addEventListener("click",function(event){
    let listItem=event.target;
    if(listItem.tagName=="LI")
    {
        console.log(listItem.textContent);
    }
});

// Task 10
let button3=document.querySelector("#button3");
button3.addEventListener("click",()=>{
    let li=document.createElement("LI");
    let input3=document.querySelector("#input3");
    li.innerText=input3.value;
    list1.append(li);
    list1.addEventListener("click",(event)=>{
    if(event.target.tagName=="LI")
        console.log(event.target.innerText);
});
});