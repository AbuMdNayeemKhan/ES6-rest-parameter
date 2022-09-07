//==========Rest Parameter==========//
// Rest parameters can use many values. but if we need multiple parameters with rest parameter you should use the rest parameter after all normal parameters.

function show (...numbers) {
    let sum = 0;
    for (let i of numbers){
        sum = sum + i;
    }
    console.log("Show : " + sum);
}
show(1, 2, 3, 4, 5);
function calcu(...cal){
    
    for (let i=0; i < cal.length; i++){
        console.log(cal[i]);
    }
}
calcu(10, 12, 15);