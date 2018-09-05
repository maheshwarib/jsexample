// datatype - Array
const superHereros = ['Iron Man', 'Spider Man','Bat Man'];
// console.log(superHereros);
// console.log(superHereros[0]);
// console.log(superHereros[2]);
// console.log(superHereros[superHereros.length-1]);
// console.log(`We have ${superHereros.length} super heroes`)
const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']
//start
// console.log(numbers.shift());
// console.log(numbers);
// numbers.unshift('Something');
// console.log(numbers);

//end
// console.log("The elements to be deleted is: "+ numbers.pop());
// console.log(numbers);
// numbers.push('Seven');
// console.log(numbers);

//middle
numbers.splice(2,2,'Something');
console.log(numbers);

