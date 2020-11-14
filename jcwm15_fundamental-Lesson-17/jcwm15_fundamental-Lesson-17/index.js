// REVIEW FUNDAMENTAL
// ARRAY => []
// untuk menyimpan multiple data dalam satu variable
// atau data type yang mampu menyimpan multiple value dan multiple data type
// array bisa menyimpan Number, String, Boolean, Object, Array, Function, etc.

// CRUD OPERATION (CREATE, READ, UPDATE, DELETE)
// CREATE ARRAY
let arr = [] // array kosong
let arr2 = new Array() // array kosong
console.log(arr)
console.log(arr2)

// kalau misal kita pakai class array, kita bisa define di awal
// panjang array nya dan juga isinya

// aku bikin array dengan panjang 5 isinya 0
let nol = [0, 0, 0, 0, 0]
let nol2 = new Array(5).fill(0)
console.log(nol)
console.log(nol2)

// READ ARRAY => CARA DAPETIN VALUE ATAU ITEM/ELEMENT DI DALMANYA
// PAKAI INDEX => MULAI DARI 0
let users = ["elsa", "olaf", "dading"]
console.log(users[1])
console.log(users[0])

// UPDATE ARRAY => EDIT VALUE ATAU NAMABAHIN ITEM/ELEMENT BARU
// ADD ITEM BARU => .push(value) or .unshift(value)
users.push("anemo") // add value/item di akhir
users.unshift("pyro") // add value/item di awal
console.log(users)

// EDIT VALUE
users[4] = "geo"
users[users.length - 1] = "ana" // ganti value dari element terkahir di array
console.log(users)

// DELETE ITEM DI DALAM ARRAY
users.splice(2, 1) 
// .splice(i, n), kita mau delete mulai dari index ke-i
// sebanyak n-buah
delete users[0]

console.log(users)

// ARRAY BISA DI ISI DENGAN ARRAY, OBJECT, ATAU FUNCTION
let arr3 = [0, ["Hello"], true, () => console.log("world"), { name : "alee" }]
console.log(arr3[2])
console.log(arr3[4])
console.log(arr3[4].name)
console.log(arr3[3])
arr3[3]() // invoke function / jalanin function

// ARROW FUNCTION => SYNTAX SINGKAT UNTUK MEMBUAT/MEN-DECLARE SEBUAH FUNCTION
// FUNCTIONAL EXPRESSION => FUNCTION YANG DISIMPAN DI DALAM VARIABLE
const HelloWorld = () => console.log("Hello World")
// karena variable kita isi dengan suatu function, maka variable tersebut
// akan berubah menjadi function
HelloWorld()

const Hello = (name) => {
    console.log("Hello, " + name)
}

Hello("krist")

// OBJECT => tujuannya untuk menyimpan multiple data type, mirip dengan array
// tetapi jika array aksess value dari element didalam array menggunakan index
// kalau di object aksess value dari element menggunakan key/props
// karena di object value selalu berpasangan dengan key/props
// => { key : value }
// value => Object, Array, Boolean, Number, String, function, etc.

// OBJECT lebih dipakai untuk mengkelompokan data yang memiliki hubungan
// kita anggap data dengan analogi OBJECT REAL

// misalkan kita punya data user => kita anggap user adalah OBJECT
// kita deskripsikan user dengan key dan value
// misal : user punya nama alee => key "nama" dan valuenya "alee"

// CRUD OBJECT => CREATE, READ, UPDATE, AND DELETE
// CREATE OBJECT
// 1. literal => secara langsung => {...}
// 2. constructor => class & functional 

// #LITERAL => {...}
// case : object user
// deskripsi : nama, username, alamat, email, password, etc.
let user1 = {
    name : "jennie",
    alamat : "JKT",
    email : "jenniebabay@gmail.com"
}

console.log(user1)

// READ value di OBJECT ?
// array => index
// object => .key or ["key"]
console.log(user1.alamat)
console.log(user1.email)
console.log(user1["alamat"])
console.log(user1["email"])

// UPDATE => ADD ATAU EDIT
// ADD => key/porps : tambahanin deskripsi baru
user1.sekolah = "Purwadhika"
console.log(user1)
user1.rambut = "Pink"
console.log(user1)

// EDIT => value dari key/props yang sudah ada
user1.alamat = "Korea"
user1.rambut = "Black"
console.log(user1)

// DELETE => key/props => value
delete user1.rambut
console.log(user1)

// 2. CLASS => cetakan object => cara untuk bikin object
// class di pake untuk membentuk suatu object yang sama persis
// dari segi prop/key
class User {
    constructor(name, alamat, email) {
        this.name = name,
        this.alamat = alamat,
        this.email = email
    }
}

let user2 = new User("alee", "BSD", "alee@yaoo.com")
console.log(user2)
let user3 = new User("lisa", "JKT", "lisabp@gmail.com")
console.log(user3)

// 3. functional constructor => cetakan object => function untuk bikin object
function Manusia (nama, usia, hobby) {
    this.nama = nama
    this.usia = usia
    this.hobby = hobby
}

// kalau misalkan kita bikin function untuk membuat object
// jangan panggi function secara langsung => Manusia ()
// tetapi gunakan kata kunci new ... untuk membuat object
let Manusia1 = new Manusia("serigala", 100, "makan")
console.log(Manusia1)

// OBJECT YANG MENYIMPAN VALUE => OBJECT, ARRAY, ATAU FUNCTION (METHOD)
let Mobil = {
    merk : "Ferarri",
    warna : "merah",
    jumlah_roda : 4,
    automatic : true,
    jalan : () => {
        return "mobil berjalan."
    },
    fitur : {
        design : "aerodynamic",
        harga : "mahal"
    }
}
console.log(Mobil)
console.log(Mobil.merk)
console.log(Mobil.jumlah_roda)
console.log(Mobil.jalan) // console.log fungsinya
console.log(Mobil.jalan()) // console.log hasil return dari fungsinya
console.log(Mobil.fitur)
console.log(Mobil.fitur.design)
console.log(Mobil.fitur.harga)

// kalau pakai kurung siku
console.log(Mobil["merk"])
console.log(Mobil["jalan"])
console.log(Mobil["jalan"]())
console.log(Mobil["fitur"]["design"])

// OBJECT DI DALAM ARRAY
let database = [
    {
        nama : "alee",
        umur : 19,
        single : true,
        kenalan : () => `Hello World`
    },
    {
        nama : "jennie",
        umur : 19,
        single : true,
        kenalan : () => `Hello World`
    }
]
console.log(database)
console.log(database[1])
console.log(database[1].nama)
console.log(database[1].umur)
console.log(database[1]["nama"])
console.log(database[1]["single"])
console.log(database[0].kenalan())