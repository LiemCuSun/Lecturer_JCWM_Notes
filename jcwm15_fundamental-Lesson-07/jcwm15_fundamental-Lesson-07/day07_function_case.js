// CASE : buatlah sebuah fungsi untuk mengecek apakah suatu bilangan itu ganjil
// input : number => ouput : boolen
// IsOdd(6) => false
// IsOdd(7) =. true

function IsOdd (numb) {
    let hasil
    if (numb % 2 !== 0) {
        hasil = true
    } else {
        hasil = false
    }

    return hasil
}

console.log(IsOdd(8))
console.log(IsOdd(7))

// CASE : buatlah fungsi untuk mambalik suatu string
// input : string => output : string hasil di balik
// BalikString("alee") > "eela"

function BalikString (str) {
    // convert string to array
    let arrStr = str.split("") // [...]
    let arrRvs = arrStr.reverse()

    // convert to string
    let result = arrRvs.join("")

    // give a return value
    return result
}

console.log(BalikString("javascript"))