// const sayHello = function (name) {
//     return "Hey there, "+ name +" !";
    
// }
// console.log(sayHello("Sammy"));
const sayHello =  (name) => `Hey there ${name} !`

// console.log(sayHello("Sammy"));
const todos = [{
    title :"Buy Bread",
    isDone: false,

}, {
    title: 'Go to Gym',
    isDone:true,
}, {
    title:'Learn code',
    isDone:true,
},
, {
    title:'Record video',
    isDone:false,
},
, {
    title:'Upload to git',
    isDone:false,
},
, {
    title:'complete course',
    isDone:true,
}
]
const thingsDone = todos.filter((todo) => todo.isDone === true);
// thingsDone.forEach((todoos) => console.log(todoos.title));
// console.log("Things not Done");
const thingsNotDone = todos.filter((todo) => todo.isDone != true);
// thingsNotDone.forEach(things => console.log(things.title));
const cameras = {
    price:600,
    weight:2000,
    myDes: function(){
        return `This canon camera is of ${this.price}$`
    }
}
console.log(cameras.myDes());
//Redux 

const func = () =>({key: 'Value'});