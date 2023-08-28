var alterObjects = function (C, greeting) {
  C.greeting = function() {
    console.log(greeting)
  }
}

var C = function(name) {this.name = name; return this;}; 
var obj1 = new C('Rebecca'); 
alterObjects(C, 'What\'s up');
obj1.greeting;

(function () {
  var C = function(name) {
    this.name = name;
    return this;
  };
  var obj1 = new C('Rebecca');
  alterObjects(C, 'What\'s up');
  return obj1.greeting;
})()