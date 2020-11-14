/* 📝 2 main data types in javascript
    - primitive data type 🧓
      - String : "...", '...', `...`, => "null"
      - Number : int, bigInt, infinity, NaN
      - Boolean : true or false
      - null
      - undifiend
    - reference data type 👨
      - array
      - object
      - date
      - etc.
*/

// BOOLEAN : data type yang hanya mempunyai 2 value (true or false)
let boolean = true
boolean = false

// null and undifined
// null => non value type, value null => origin type data = object
// undifined => value belom terisi / belom ada value
let number // value awal = undifined

// check data type ? => typeof
let angka = 100
let pecahan = 3.14
let kata = "Purwadhika"
let idunno = null

console.log(typeof(number))
console.log(typeof(angka))
console.log(typeof pecahan)
console.log(typeof kata)
console.log(typeof idunno)

console.log(typeof "hello") // string
console.log(typeof(number + angka)) // number

// type conversion => konversi dari satu daya type ke data type lainnya
// KONVERSI TO STRING
// 1. method .toString()
// 2. apapun jika ditambahkan dengan string = string
// 3. template string literal => `...`

// number to string
let ganjil = 3 // number
let stringGanjil = ganjil.toString() // data type => string => "3"
console.log(ganjil)
console.log(typeof ganjil)
console.log(stringGanjil)
console.log(typeof stringGanjil)

// boolean to string
let salah = false
let benar = true
let strSalah = salah.toString() // => "false" / 'false' / `false`
console.log(typeof strSalah)

// cara ke-2 dan ke-3 : automatic conversion
console.log(typeof(ganjil + ""))
console.log(typeof("ini kata" + 10)) // string
// console.log(typeof ganjil)
ganjil = ganjil.toString() // update value and data type
console.log(typeof(benar + ``))
console.log(typeof(`${benar}`))
console.log(typeof(angka + kata))
console.log(angka + kata) //100Purwadhika
console.log(typeof(null))

// KONVERSI KE NUMBER => parseInt() / parseFloat()
let strGenap = "26" // string
let nomorGenap = parseInt(strGenap) // hasilnya => tipe data number (integer), value : nomor 26
console.log(nomorGenap)
console.log(typeof nomorGenap)
let floatGenap = parseFloat(strGenap) // konversi nomor pecahan
console.log(floatGenap)
console.log(typeof floatGenap)

let strGanjil = "25.90"
console.log(parseFloat(strGanjil)) // angka 25.67
console.log(parseInt(strGanjil)) // angka 25, dibulatkan

// CASE => nilai/value yang di konversi bukan angka benar ("dua puluh lima", "2B", true, "2A65", "a100")
// HASIL KONVERSI : TIPE DATA NUMBER TAPI VALUE NaN
// angka benar ("26", "27.89", "0.8")
let angkaSalah = "lima puluh sembilan" // string biasa
let numberAngakSalah = parseInt(angkaSalah)
console.log(numberAngakSalah)
console.log(typeof numberAngakSalah)

let grade = "a100"
let gradeNumber = parseInt(grade)
console.log(gradeNumber)
console.log(typeof gradeNumber)

console.log(parseInt(benar))

// NOTE : JIKA ANGKA TIDAK BENAR DEPANNYA BERUPA ANGKA BENAR, MAKA KONVERSI AKAN
// MENGAMBIL ANGKA YANG BENAR DI AWAL
let angkaSemiBenar = "28BCDA"
let angkaAgakBenar = "100ABC"
console.log(parseInt(angkaSemiBenar))
console.log(parseInt(angkaAgakBenar))


// KONVERSI KE BOOLEAN => Boolean() => tipe data menjadi boolean, value : true atau false
let sekolah = "Purwadhika"
let stringKosong = ""
let numberBenar = 25
let tidakPunyaNilai // undifined

console.log(Boolean(sekolah))
console.log(Boolean(stringKosong))
console.log(Boolean(numberBenar))
console.log(Boolean(tidakPunyaNilai))
console.log(Boolean(NaN))

// YANG MENGHASILKAN = TRUE
// string => "purwadhika", "andi", "568hja", " " => bukan string kosong
// angka/number
// [] array kosong
// {} object kosong

// YANG MENGASILKAN = FALSE
// string kosong => "", '', ``
// null
// undifined
// NaN