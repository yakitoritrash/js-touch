//  const myObject = {
//    property: 'Value!',
//    otherProperty: 77,
//    "obnoxiious prop": function() {
//
//    }
//  };
//
//  myObject.property;
//

//  const playerOne = {
//    name: "tim",
//    marker: "X"
//  };
//
//  const playerTwo = {
//    name: "jenn",
//    marker: "O"
//  };

//  function Player(name, marker) {
//    this.name = name;
//    this.marker = marker;
//    this.sayName = function() {
//      console.log(this.name)
//    };
//  }
//
//  const player = new Player('steve', 'X');
//  player.sayName();


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read} yet` 
  };
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not read');
console.log(theHobbit.info());
