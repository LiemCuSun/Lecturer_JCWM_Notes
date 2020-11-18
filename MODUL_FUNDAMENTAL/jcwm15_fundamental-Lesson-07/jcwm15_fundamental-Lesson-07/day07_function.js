// FUNCTION
// didefinisikan sebagai block kode yang berisi perintah yang bisa dipakai berkali-kali
// jika kita ingin menjalankan perintah kita tinggal panggil kodenya

// CASE : tampilkan "Saya belajar JavaScript" 10x
// let msg = "Saya belajar JavaScript"
// for(let i = 0; i < 10; i++) {
//     console.log(msg)
// }

// dengan menggunakan function
// FUNCTION DECLARATION
// function PrintPesan () {
//     for(let i = 0; i < 10; i++) {
//         console.log("Saya belajar JavaScript")
//     }
// }

// function setelah di declare / dibuat tidak akan sampai function itu di panggil
// INVOKE A FUNCTION / MEMANGGIL / MENJALANKAN FUNCTION => namaFungsi()
// PrintPesan()

// CASE : buat fungsi untuk memperkenalkan diri
function Kenalan () {
    console.log(`Nama saya, alee`)
    console.log(`saya suka codding sama maen game`)
    console.log(`sekian`)
}

Kenalan()

// FUNCTION WITH PARAMETER / FUNCTION DENGAN INPUT
// parameter berfungsi sebagai input di sebuah fungsi
// parameter seperti sebuah variable yang berfungsi untuk menyimpan input dari user

function KenalanV2 (name) {
    console.log(`Hello, nama saya ${name}`)
    console.log("saya suka codding")
    console.log("sekian")
}

// value dari input yang diberikan oleh user akan dimasukan ke dalam parameter name
KenalanV2("alee") 

// PARAMTER atau INPUT lebih dari satu => nama parameter di pisah dengan koma " , "
function KenalanV3 (name, hobby) {
    console.log(`Hello, nama saya ${name}`)
    console.log(`saya suka ${hobby}`)
    console.log('sekian.')
}

KenalanV3('olaf', 'nyanyi')

// NOTE : urutan dari parameter itu penting
KenalanV3('nyanyi', 'olaf') // name = 'nyanyi', hobby = 'olaf'

// BAGAIMANA JIKA FUNCTION YANG BUTUH INPUT KITA PANGGIL TANPA MASUKIN INPUT
KenalanV3() // name = undefined, hobby = undefined

// CASE : buatlah fungsi untuk menghitung pejumlahan 2 buah bilangan, a dan b
function Penjumlahan (a, b) {
    console.log(a + b)
}

Penjumlahan(10, 9)
Penjumlahan(7, 5)

// RULE PENAMAAN :
// mirip denga variable : tidak boleh diawali dengan angka = function 0kosong() { ... } x
// nama fungsi tidak boleh menggunakan kata kunci / keyword yg sudah dipakai di js
// => function function () {...} x, function var () {...} x
// kalau nama function lebih dari satu kata gunakan aturan :
// - pisah dengan , underscore (_) atau negatif (-)
// - lower or upper camelCase

// CASE : variable vs function name
// let pengurangan = 3 - 5
// function pengurangan (a, b) {
//     console.log(a - b)
// }
// pengurangan(4, 5)

// NOTE : nama variable tidak boleh sama dengan nama function yang sudah dibuat

// LOCAL SCOPE => { .... }
// variable yang ada didalam function
function Perkalian (a, b) {
    // local variable => hanya bisa dipakai/diakses di dalam function
    let hasil = a * b
    console.log(hasil)
}

// jika kita panggil varibale hasil diluar function ?
// console.log(hasil) // error

// bagaimana jika kita ingin MENGGUNAKAN/MENGAKSES value dari suatu variable didalam fungsi ?
// case saat ini => akses value dari variable hasil didalam fungsi Perkalian

// FUNCTION WITH RETURN VALUE
// function yang menghasilakan suatu value yang bisa diakses / dipakai untuk next perintah

function PerkalianV2 (a, b) {
    // local variable
    let hasil = a * b
    console.log(hasil)

    // give return value => supaya value dari hasil bisa dipakai diluar fungsi
    return hasil
}

PerkalianV2(9, 8) // fungsi ini akan menghasilkan value dari return

// tampung hasil dari fungsi PerkalianV2 kedalam suatu variable
let hasilPerkalian = PerkalianV2(9, 8)
let hasilBagi = hasilPerkalian / 10
console.log(hasilPerkalian)
console.log(PerkalianV2(5, 5))
console.log(PerkalianV2(3, 4))

// NOTE : value yang direturn oleh suatu function dapat berupa apapun 
// => string, number, boolean, array, object bahakan fungsi juga