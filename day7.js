// Activity 1 : Object creation and Access

// Task 1 
const book = {
    title : "Rich Dad Poor Dad",
    author : "Robert T. Kiyosaki",
    year : 1997,
}
console.log(book);
/*output : {
  title: 'Rich Dad Poor Dad',  
  author: 'Robert T. Kiyosaki',
  year: 1997
}*/

// Task 2
console.log(book["title"]);
console.log(book["author"]);
/*Output : 
Rich Dad Poor Dad
Robert T. Kiyosaki */

// Activity 2 : Object Methods

// Task 3
book.method=function(){
    return this.title + " " +this.author
}
console.log(book.method());
//output : Rich Dad Poor Dad Robert T. Kiyosaki

// Task 4
changeyear=function(year){
    book.year = year;
};
changeyear(2022);
console.log(book.year);
//output : 2022

// Activity 3 : Nested Objects 

// Task 5 :
const library ={
    name :"The Indian Library",
    book1:{
        title:"Making India Awesome",
        author:"Chetan Bhagat",
    },
    book2:{
        title:"A Call to Honour ",
        author:"Jaswant Singh",
    },
  
};
console.log(library);
/*output:{
  name: 'The Indian Library',
  book1: { title: 'Making India Awesome', author: 'Chetan Bhagat' },
  book2: { title: 'A Call to Honour ', author: 'Jaswant Singh' }
}*/

// Task 6 :

console.log(library.name);
console.log(library.book1.title);
console.log(library.book2.title);

/*output : The Indian Library
Making India Awesome
A Call to Honour */

// Activity 4: The this Keyword

// Task 7 :


const book1 = {
    title:"The Alchemist",
    author:"Paulo Coelho",
    year:"1988",
    getTitleAndYear: function() {
        return `${this.title} (${this.year})`;
    }
};
console.log(book1.getTitleAndYear());
//output : The Alchemist (1988)

// Activivty 5 : Object Iteration

// Task 8 :
for(const key in book){
    console.log(`Key : ${key} and Value : ${book[key]}`);;
}
/*output :
Key : title and Value : Rich Dad Poor Dad
Key : author and Value : Robert T. Kiyosaki
Key : year and Value : 2022
Key : method and Value : function(){
    return this.title + " " +this.author
}*/

// Task 9 :
console.log(Object.keys(book));
console.log(Object.values(book));
/*output :
[ 'title', 'author', 'year', 'method' ]
[
  'Rich Dad Poor Dad',
  'Robert T. Kiyosaki',
  2022,
  [Function (anonymous)]
]*/