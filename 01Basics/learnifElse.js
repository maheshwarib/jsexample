// if (5>8) {
//     console.log('I am inside the if Block')
// }
// else if(false){
//     console.log('I am inside the elseif Block')
// }else{
//     console.log("Notice this")
// }
var whoIsHere = ''
if(whoIsHere === 'user') {
    console.log('Greeting message to user ')
    console.log("Allow access to view all courses")
} else if (whoIsHere === 'teacher') {
    console.log('Greeting message to teacherr ')
    console.log("Allow access to view his courses")
}else{
    console.log('MESSAGE: Please verify your account')
    console.log('Send user an email for Verification')
}
var marks = 10
console.log('MESSAGE: Marks Scored')
console.log('\t')
if(marks === 10) {
    console.log('Awesome')
} else if (marks === 5) {
    console.log('Good ')
}else if (marks === 2) {
    console.log('Poor')
}else if (marks === 0) {
    console.log('failed ')
}else{
    console.log('MESSAGE: Please enter a valid number')
   
}
