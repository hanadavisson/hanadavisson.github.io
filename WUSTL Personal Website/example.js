// /*Fizzbuzz*/

// for (var i=1; i<101; i++){
// 	if((i%3===0)&&(i%5===0)){console.log('Fizzbuzz')}
// 	else if (i%5===0){console.log('Buzz')}
// 	else if (i%3===0){console.log('Fizz')}
// 	else{console.log(i)}
// }

// /*sum of every even number between 100 and 200*/

// var total = 0;
// for (var i=100; i<=200; i++){
// 	if(i%2===0){
// 	total= i + total;}
// }
// console.log(total);

// /*product of the array*/

// x= [23, 100098, 4, 123];
// var total = 1;
// for (var i=0; i<4; i++){
// 	total= x[i] * total;
// }
// console.log(total);

// /*alternate way for array*/

// var startingArray = [23, 100098, 4, 123];
// total = 1; 
// for (var i=0; i<startingArray.length; i++){
// 	total = total * startingArray[i]
// }

// /*greeting function*/

// var greeting = function(hi, name){
// 	console.log(hi, name);
// }
// greeting('hello','hana');
// greeting('whats up','bethany');
// greeting('sup' ,'greg');
// greeting('hi','kevin');

// /*squared function*/

// var squared = function(x){
// 	var result = x * x;
// 	console.log(result)
// }
// squared(5);
// squared(16);
// squared(176);

// /*ponential function*/

// var exponent = function (base, exponent){
// 	var result = Math.pow(base,exponent);
// 	console.log(result);
// }
// exponent(3,2);
// exponent(5,3);
// exponent(8,4);

// /*alternate exponent using for loop*/

// var exponent = function(base, power){
// 	result=1;
// 	for (var i=1;i<=power;i++){
// 		result = result *base;
// 	}
// 	console.log(result);
// 	return result;
// }
// exponent(3,2);
// exponent(5,3);
// exponent(8,4);