// REVIEW LOOP : running code / program repeatly
// WHILE (...) {...} => 
// while (batas loop / kondisi ) {
    // execude code
// }

// define initial condition as starting point
// let start = 0 // define variable with value 0 as starting value

// loop 10x
// while(start < 10) {
//     // execute your code here...
//     console.log("start : ", start)

//     // increment / looping step
//     start++
// }

// FOR (...) {...}
// for (let start = 0; start < 10; start++) {
//     console.log("start : ", start)
// }

// DERET FIBONANCI : 0, 1, 1, 2, 3, 5, 8, ...
// BATAS 25
let intialValue = 0
let currentValue = 1
console.log(intialValue)
console.log(currentValue)

while (true) {
    // simpan old current value
    let temp = currentValue

    // update value
    currentValue += intialValue // currentValue = currentValue + initialValue
    intialValue = temp

    // check value
    if (currentValue > 25) {
        break
    }

    console.log(currentValue)
}

// inital = 0
// current = 1
// loop : temp = 1, current = 1 + 0 = 1, intial = temp = 1
// loop : temp = 1, current = 1 + 1 = 2, intial = 1
// loop : temp = 2, current = 2 + 1 = 3, inital = 2
// loop : temp = 3, current = 3 + 2 = 5, inital = 3
// loop : temp = 5, current = 5 + 3 = 8, inital = 5, ....
