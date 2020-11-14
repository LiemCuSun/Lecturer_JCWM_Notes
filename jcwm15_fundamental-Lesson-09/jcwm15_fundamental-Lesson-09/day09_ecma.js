// TERNARY OPERATOR => shortcut dari if...else...
// CASE : check angka ganjil ? 
// 1# if...else... 
let num = 7
if (num % 2 !== 0) {
    console.log("Angka ganjil.")
} else {
    console.log("Angka genap.")
}


// 2# ternary operator => condition/comparison ? case true : case false
num % 2 !== 0 ? console.log("Angka ganjil") : console.log("Angka genap")

// CASE : check value sebelum disimpan dalam variable, check angka positif
// jika positif : simpan value true di variable
// input : number (-10 - +10) => output : true or false
let numPositif = num >= 0 ? true : false
console.log(numPositif)

// CASE 2, PAKAI IF ... ELSE...
let numPositif2
if (num >= 0) {
    numPositif2 = true
} else {
    numPositif2 = false
}

// TERNARY OPEARTOR WITH MORE THAN ONE CONDITION/COMPARISON
// CASE :
// check angka : 
// input : 0 => console.log("angka nol")
// input : > 0 => console.log("angka positif")
// input : < 0 => console.log("angka negatif")

// 1# if...else...
let num2 = 9
if (num2 === 0) {
    console.log("Angka nol.")
} else if (num2 > 0) {
    console.log("Angka positif.")
} else {
    console.log("Angka negatif.")
}

num2 === 0 ? console.log("Angka nol") : 
num2 > 0 ? console.log("Angka positif") : 
console.log("Angka negatif")

// NOTE : ternary operator meksi ditulis dalam multiple line 
// tetap akan di baca sebagai satu statement

// Arrow function => shortcut dari function
// CASE : buatlah fungsi untuk ngecek apakah bilangan tersebut
// habis di bagi 5
// 1# function biasa
function HabisDiBagiLima (num) {
    num % 5 === 0 ? console.log(true) : console.log(false)
}

HabisDiBagiLima(7)
HabisDiBagiLima(25)


// 2# Arrow function used functional expression
// function yang disimpan didalam variable
const HabisDiBagiLimaKah = (num) => num % 5 === 0 ? console.log(true) : console.log(false)

HabisDiBagiLimaKah(9)
HabisDiBagiLimaKah(15)

// NOTES :
// 1. jika input cuman 1, boleh tidak menggunakan ()
// 2. jika block code lebih dari satu baris, maka dibungkus dengan {...}
// 3. jika block code 1 baris, arrow function akan otomatis me-return value

// rule no 1
const ApakahGanjil = num => num % 2 !== 0 ? console.log("ganjil") : console.log("genap")
ApakahGanjil(9)

// rule no 2
const ApakahGenap = (num) => {
    if (num % 2 === 0) {
        console.log("genap")
    } else {
        console.log("ganjil")
    }
}


// rule no 3
const IsPositif = (num) => num > 0 ? true : false
const temp = IsPositif(-8)
console.log(temp)

// jika block code {...} lebih dari satu baris => jika ingin me-return value
// harus pake kata kunci return
const IsPositifKah = (num) => {
    return num > 0 ? true : false
}

const temp2 = IsPositifKah(9)
console.log(temp2)

// SPREAD OPERATOR => ...
// case #1 : untuk mengcopy isi dari array atau object
// reference vs full copy => array & object

// reference copy
let arr1 = [1, 2, 3]
let arr2 = arr1 // saya mau kasih nama baru [1, 2, 3] dengan nama arr2
console.log(arr1)
console.log(arr2)

arr2[1] = 5
console.log(arr2)
console.log(arr1)

// LOGIC
// [1, 2, 3] => punya nama arr1 dan arr2

// full copy => spread operator
let arrayOriginal = ["a", "b", "c"]
let arrayCopy = [...arrayOriginal] 
// saya buat array baru
// dengan elemet/item didalamnnya saya isi dari 
// copian semua element di arrayOriginal
// => kita punya 2 array yang sama
arrayCopy[0] = "A"
console.log(arrayCopy)
console.log(arrayOriginal)

// OBJECT
let obj1 = { nama : "alee", hobi : "codding" }
let obj2 = { ...obj1 }
console.log(obj1)
console.log(obj2)

// HIGH ORDER FUNCTION
// => function yang pake callback atau function yang me-return function

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// callback function => function yang menjadi input di function lain
array.sort((a, b) => b - a)
console.log(array)

function callback (a, b) {
    return a - b
}

array.sort(callback)
console.log(array)

// ARRAY
// .filter(), .map(), .forEach()
// .some(), .every(), .reduce()


// setTimeOut & setInterval
// special function 
// setTimeOut => set timer sebelum callback function di jalankan
// setTimeout(() => console.log("Time Out."), 3000) 
// setTimeOut(callback, time), time in ms

// setInterval => set timer, tapi callback function akan dijalankan
// berkali-kali dengan jeda / interval waktu yang diberikan
// setInterval(() => console.log("Hello."), 3000) 
// setInterval(callback, time), time in ms

// FUNCTION THAT RETURN A FUNCTION
// fungsi yang menghasilkan fungsi
// CASE : check angka apakah habis di bagi 3?
function HabisDiBagiTiga (num) {
    return num % 3 === 0 ? true : false
}

console.log(HabisDiBagiTiga(8))


function HabisDiBagiTigaKah (num) {
    return function () {
        return num % 3 === 0
    }
}

console.log(HabisDiBagiTigaKah(8)())

// versi arrow function
const HabisDiBagiTigaYa = (num) => () => num % 3 === 0
console.log(HabisDiBagiTigaYa(9)())

// OBJECT DESTRUCTURING
let mobil = { merk : "avanze", harga : 109000, warna : "oceanic blue" }
console.log(mobil)

// cara biasa = untuk ambil value di setiap props
console.log(mobil.merk)
console.log(mobil.warna)
console.log(mobil.harga)

// cara object destucturing => props/key yang ada di dalam object akan di 
// destucture / di pisah menjadi individual variable

// let { merk, harga, warna } = { merk : "avanze", harga : 109000, warna : "oceanic blue" }
let { merk, harga, warna } = mobil
console.log(merk)
console.log(harga)
console.log(warna)