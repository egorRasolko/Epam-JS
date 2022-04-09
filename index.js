// Objects and Functions
let car = {
    color: 'black',
    power: showPower()
};
function showPower() {
    return '100ls';
    console.log('100ls');
}
    car.color = 'green';


function fruitCount(apples, pies) {
    console.log(apples+pies);
    return apples+pies;

}
fruitCount(2,2);


function nameTerminal(name) {
    if(name==="Egor"){
        alert('privet'+name);
    }
    else{
        alert('net imeni');
    }
}
nameTerminal('Egor');

function typeArgument(x,y) {
    console.log(typeof arguments[0]);
    console.log(typeof arguments[1]);

}
typeArgument("a",4);


function simpleNumber(num) {


    let flag = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            flag = false;
            break;
        }
    }
    console.log(flag);
}

simpleNumber(3);
