var jhon = {
    name: ' I am Jhon',
    age: 24,
    isActive: true,
}
var marry = {
    name: 'I am marry',
    age: 23,
    isActive: true,
}
var sam = {
    name: 'I am Sam',
    age: 29,
    isActive: false,
}
let users = new Map()
// 'Jhon' is a key it can be any name
users.set('Jhon', jhon);
users.set('marry', marry);
users.set('sam', sam);
console.log(users.size);
console.log(users.keys());
console.log(users.values());
for (const key of users.keys()) {
    console.log(key)
}
for (const value of users.values()) {
    console.log(value.name)
}
for (const [key, value] of users.entries()) {
    // console.log(key + ' = ' + value.name);
    //convert the above line into string literals
    
}
users.forEach((value, key) => console.log(key + ' = ' + value.name));
var arrofArr = [['one', '1'], ['two' , '2'] , ['three' , '3']];
var newMap = new Map(arrofArr);
console.log(newMap);