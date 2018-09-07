// java tries to act smart by guessing the value it may cause problem to the code sometime
// console.log('5' + 5);
// const giveType = typeof{'5'}
// console.log(giveType)
const adder = false + 5;
// console.log(adder);

const loginDetails = []
//login for getting details for DB

const loginId = loginDetails[0];

if(loginId != undefined && loginId != null && loginId != fasle){
    console.log('Allow user to login');
}else{
    console.log('Auth failed')
}
// valuse that interpret as false:
// false, 0, '', null, undefined;
