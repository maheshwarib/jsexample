let myAdder = function (num1, num2) {
    let added = num1 + num2;
    return added;
}
// let result = myAdder(3,5);
// console.log(result);

let myMultiplier = function (num1, num2){
return num1 * num2;
}
// let result = myMultiplier(5,6);
// console.log(result);

let guestUser = function(name = 'unName', courseCount = 0){
    return 'Hello ' + name + ' and your course count is: ' + courseCount
}


console.log(guestUser('Ram', '1'));