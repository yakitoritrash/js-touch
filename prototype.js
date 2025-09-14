function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

const player1 = new Player('steve', 'X');
const player2 = new Player('holly', 'O');

Player.prototype.sayHello = function() {
  console.log("Hello, i am a player");
}

player1.sayHello();
player2.sayHello();
