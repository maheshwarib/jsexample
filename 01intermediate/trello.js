const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = ['Jan', 'Feb', 'March' , 'April' , 'May' , 'June' , 'July' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec']
console.log(days[0]);
// days.forEach(function (day, index) {
//     console.log(`starts with ${index+1} -- ${day}`);
// })
// for (let index = 0; index < days.length; index++) {
//      console.log(days[index]);     
// }

days.forEach(function (one, index){
    console.log(`starts with ${index+1} -- ${one}`)
});
months.forEach(function(month, index){
console.log(`Years Start with ${index+1}  *** ${month} `)
});

months.forEach(function (monthly, index) {
    console.log(`Months in a year is ${monthly}`)
    
})
// const myTodos = []
// myTodos.push('Buy Bread');
// myTodos.push('Record videos for youtube');
// myTodos.push('Go to Gym');
// myTodos.forEach(function(todo, index){
// console.log(`Your task number ${index + 1} is : ${todo}`);
// })
// const myTodos = []
// myTodos.unshift('Buy Bread');
// myTodos.unshift('Record videos for youtube');
// myTodos.unshift('Go to Gym');
// for (let index = 0; index < myTodos.length; index++) {
//     console.log(`Your task number ${index + 1} is : ${myTodos[index]}`);
    
// }
// myTodos.forEach(function(todo, index){
// console.log(`Your task number ${index + 1} is : ${todo}`);
// })