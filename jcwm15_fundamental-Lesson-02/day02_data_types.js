/* 📝 2 main data types in javascript
    - primitive data type 🧓
      - String
      - Number
      - Boolean
      - null
      - undifiend
    - reference data type 👨
      - array
      - object
      - date
      - etc.
*/

// STRING => text biasa, cirinya dibuat menggunakan "...", '...', `...` (backtic)
let nama = "ale" // string
nama = 'alian'
nama = `Alien`

let usia = '20' // string
let hobby = 'dance'
let job = 'codder'

console.log('nama saya : ' + nama + ', ' + 'usia : ' + usia)

// string template literal => syarat harus pake backtic `...`
// kalau mau akses variable gunaka  string dolar ${}
console.log(`nama saya : ${nama} dan usia saya ${usia}`)

// STRING PROPERTY & METHODS => properti dan metode untuk memanipulasi string
// property => length, untuk meghitung panjang string termasuk spasi
let kenalan = "nama saya adalah " + nama
console.log(kenalan)
console.log(kenalan.length)

// methods
console.log(kenalan.toLowerCase()) // membuat semua string menjadi huruf kecil
console.log(kenalan.toUpperCase())
console.log(kenalan.repeat(2)) // mengulang string

let sekolah = "Purwadhika"
console.log(sekolah)
console.log(sekolah.indexOf("P"))
console.log(sekolah.indexOf("p")) // tidak ada huruf p, -1
console.log(sekolah.indexOf('a'))
console.log(sekolah.slice(0)) // misahin dari index ke-? 
console.log(sekolah.slice(4))
console.log(sekolah.slice(0, 3)) 
//.slice(i, j), potong string dari index ke-i sampai ke-j
// atau kita potong j karater dimulai dari index ke-i
console.log(sekolah.charAt(5)) // mencari karakter pada index ke-?
console.log(kenalan.includes('tidak'))
console.log(kenalan.includes('nama'))
console.log(sekolah.substring(0, 3))
console.log(sekolah)

// REFERENCE :
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


// NUMBER => angka
// number punya value kategori => int, BigInt
// special value in number infinity and NaN(Not A Number)
let usiaku = 19 // number
let angka = 0.5 // floating number
let takhinga = Infinity
let idunno = NaN

// PROPERTIES & METHODS
// methods
console.log(angka.toFixed()) // pembulatan angka
console.log(usiaku.toExponential())
console.log(isNaN(angka)) // false
console.log(isNaN(idunno)) // true
console.log(isFinite(angka)) // true
console.log(isFinite(takhinga)) // false

// REFERENCE :
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
