// comment => tidak akan di running oleh javascript
// dipakai untuk : documentation atau lecture notes
// ada 2 types of comment
// inline comment
/*
mutiple line comment
can write multiple comment inside
*/

// javascript statement/pernyataan
// statement in javascript, 1 baris kode yang menjalankan 1 perintah / task
console.log("ini satu statement")
console.log("ini statement ke dua")
console.log(
    "ini statemnet ke tiga"
)

// semicolon ;, fungsinya untuk membedakan statement 1 dengan statement 2
console.log("Hallo"); console.log("nama saya ale");
console.log("saya suka javascript");
console.log("saya sekolah di purwadika");

// kasus : client => buatlah program javascript yang menampilkan "Hello, Ale" 10x
console.log("Hello, olaf")
console.log("Hello, olaf")
console.log("Hello, olaf")
console.log("Hello, olaf")
console.log("Hello, olaf")
console.log("Hello, olaf")
console.log("Hello, olaf")
console.log("Hello, olaf")
console.log("Hello, olaf")
console.log("Hello, olaf")

// variable => tempat untuk menampung data
// how to declare variable / cara bikin variable ?
// pakai kata kunci var [nama-variable]
var nama

// assign a value / masukan nilai ke dalam variable => dengan tanda =
nama = "olaf"

// declare variable and assing value
var nama2 = "elsa"

// output hasil di console
console.log(nama)
console.log(nama2)

// example
var nama3 = "ale"
var usia = 19
var hobby = "dance and codding"
console.log(nama3)
console.log(usia)
console.log(hobby)


// change value of variable / ganti nilai dari variable
usia = 22
nama3 = "anna"
console.log(usia)
console.log(nama3)

// declare mutlipe variable at once / bikin banyak variable dalam sekali deklarasi
var job, jomblo, bias
job = "UI-UX Designer"
jomblo = false
bias = "Jennie"

var school = "Purwadhika", program = "JCWM15"

console.log(school)
console.log(program)

// NOTE : aturan penamaan variable
// - buatlah nama variable sejelas mungkin yang orang lain bisa paham
//     - var x =  19 x
//     - var usia = 19 v
// - tidak boleh menggunakan nama yang sudah dipakai di kata kunci javascript
//     - var var x, var let, var console, var log, var const, etc.
// - nama awal variable tidak boleh diawali dengna angka, var 1abc = 16 x, var abc1 = 16 v
// - diushakan jangan diawali dengan simbol, var !tidakmungkin
// - kalau nama variable lebih dari satu kata, maka gunakan aturan
//     - sambungkan dengan - atau _ , var nama_anda, var nama-anda
//     - camelCase, var NamaAnda, var namaAnda

// kapan ? kalau misal data mau kita gunakan secara berualang-ulang / reuseable
var pesan = "Hello, elsa"
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
console.log(pesan)
console.log(pesan)
console.log(pesan)
console.log(pesan)

// Modern syntax declaration : let and const
// cara bikin variable dengan styanx terbaru => ECMA5
let namaSaya = "ale"
let usiaKu = 19
let hobbi = "Play a game"

let namaAnda, usiaAnda, hobbiAnda
namaAnda = "sany"
usiaAnda = 27
hobbiAnda = "menangis"

hobbiAnda = "tersenyum"

// const => constant => variable yang dibuat dengan kata kunci const nilainya tidak
// akan bisa dirubah
const merah = "merah"
// merah = "biru" // error, merah is const
// console.log(merah)

// var vs let vs const ?
// varible => kita bisa bikin varibel dengan nama yang sama lebih dari satu
var game = "Genshin Impact"
var game = "PUBG Mobile"
console.log(game)

// let tidak membolehkan membuat variable dengan nama yang sama
let orange = "orange"
let orange = "jeruk" // error

// let vs var => constrain scope

// const => nilai tidak boleh di ganti dan tidak boleh buat variable dengan nama yang sama
const pink = "pink"
const pink = "light pink" // error

// NOTE : in javascript case is matter
// Apple !== apple
let Apple = "apple"
let apple = "apple"