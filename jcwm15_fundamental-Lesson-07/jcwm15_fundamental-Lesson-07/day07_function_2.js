// FUNCTION : PART-2
// DEFAULT VALUE
// kalau misal kita panggil suatu fungsi yang butuh parameter/input tetapi
// parameter/input tidak diberika saat kita panggil fungsinya

// a = 0 & b = 0 , value ini akan dipakai jika user tidak memberikan input/paramter
function Penjumlahan (a = 0, b = 0) { 
    // check input
    console.log("a = ", a)
    console.log("b = ", b)

    // execute task
    let hasil = a + b
    // console.log(hasil)

    // give a return value
    return hasil
}

console.log("result = ", Penjumlahan(4, 6))
console.log("result = ", Penjumlahan()) // no input/parameter => a = 0, b = 0

// NOTE : RETURN DIALAM FUNCTION juga bisa sebagai penanda bahwa function itu berakhir
// atau sudah selesai eksekusi
// jika masih ada code di bawah kata kunci return makan code tidak akan di eksekusi
function Pembagian (a, b) {
    // check input
    console.log("a = ", a)
    console.log("b = ", b)

    // execute task
    let hasil = a / b

    // return a value
    return hasil
    console.log(hasil) // code ini tidak akan di eksekusi karena ada setelah return
}

console.log("hasil bagi : ", Pembagian(10, 2))

// HOISTING => salah satu feature dari javascript
// jika ada kata kunci function didalam program javascript, makan javascript akan mendifined function
// terlebih dahulu, sehingga memungkinkan kita memanggila function sebeleum function
// di declare

// invoke function before declaraion
console.log(Pengurangan(10, 9))

function Pengurangan (a, b) {
    return a - b // retrun value hasil dari a - b
}

// FUNCTION EXPRESION dan ANONYMOUS FUNCTION
// function expression cara kedua untuk membuat suatu fungsi
// dengan memasukan fungsi kedalam suatu variable => karena di javascript function is a value
let LuasPersegi = function (p, l) {
    return p * l
}

console.log(LuasPersegi(10, 10))


// CALLBACK FUNCTION => function sebagai input/parameter didalam function lain
function PrintPesan (pesan) {
    console.log(pesan)
}

function LuasSegitiga (alas, tinggi, print) {
    // parameter print ini akan diisi suatu function => callback function
    let luas = 0.5 * alas * tinggi

    // invoke / panggil callback function didalam fungsi LuasSegitiga
    print(luas)
}

LuasSegitiga(5, 11, PrintPesan)

// TRACK
// LuasSegitiga (5, 11, PrintPesan) 
// => parameter didalam fungsi => alas = 5, tinggi = 11, print = PrintPesan
// => hitung luas = ...
// => panggil fungsi print(luas) => printPesan(luas)

// .sort((a, b) => a - b)
// .sort(function (a, b) {
//      retrun a - b
// })

// FUNCTION THAT RETRUN A FUNCTION
// fungsi yang me-return fungsi
function CubeVolume (panjang) {
    // calculate volume
    let volume = Math.pow(panjang, 3)

    // function return a function
    return function () {
        console.log(volume)
    }
}

// tampung hasil dari fungsi
let hasilVolume = CubeVolume(5) 
// karena CubeVolume mereturn / menghasilkan suatu fungsi maka
// value dari variable hasilVolume menjadi sebuah fungsi

console.log(hasilVolume)
hasilVolume()