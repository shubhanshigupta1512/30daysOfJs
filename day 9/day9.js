// Activity 1 : Selecting and Manipulating elements

//Task 1
let x =document.querySelector(".1");
x.innertext="New Text";

// Task 2
let y=document.querySelector(".2");
y.style.backgroundColor="yellow";

// Activity 2: Creating and appending elements

// Task 3
let newDiv=document.createElement('div');
newDiv.textContent="Hi! I am Shubhanshi.";
console.log(newDiv);
let div=document.querySelector("newDiv");
div.append(newDiv);

// Task 4
let list =document.getElementById("3")
let li=createElement(li);
li.innertext="Board";
list.append(li);

// Activity 3 : Removing Elements

// Task 5
let a=document.getElementById("5");
a.remove();

// Task 6
body.lastChild.remove();

// Activity 4: Modifying attributes and classes
// Task 7
let link=document.getElementsByTagName("a");
for(let i of link)
    i.href="https://www.youtube.com";

// Task 8
li.classList.add('3');
li.classList.remove('3');

//Activity 5: Event handling
// Task 9
let button=document.getElementById("4");
button.addEventListener("click",()=>{
    button.innerText="hello"
});

//<--Task 10:
function changeBorderColor() {
    let p = document.getElementById("4");
    p.style.borderColor = "red";
  }
  document.addEventListener("new", function() {
    var style = document.getElementById("6");
    style.addEventListener("mouseover", changeBorderColor);
  });
  

