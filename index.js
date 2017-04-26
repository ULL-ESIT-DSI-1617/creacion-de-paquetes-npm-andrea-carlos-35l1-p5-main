global.geom ={};

var Triangle = require("@ull-andrea-carlos/ull-andrea-carlos-triangle");
var Rectangle = require("@ull-andrea-carlos/ull-andrea-carlos-rectangle");
var Square = require("@ull-andrea-carlos/ull-andrea-carlos-square");

var t = new Triangle({ width: 100, height: 100 });
var s = new Square( { width: 100 });
var r = new Rectangle({ width: 100, height: 100 });

console.log(t.getArea());
console.log(s.getArea());
console.log(r.getArea());
