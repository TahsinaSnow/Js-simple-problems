var first = 5;
var second = 10;
console.log(first, second);

 var temp = first;
 first = second;
 second = temp;
 console.log(first,second);

//  -------------------

var a=10;
var b=20;
console.log(a,b);

var temp=a;
a=20;
b=temp;
console.log(a,b);


// ----destructing-------------------


var first = 5;
var second = 10;
console.log(first, second);

[first, second] = [second, first];
console.log(first, second);


