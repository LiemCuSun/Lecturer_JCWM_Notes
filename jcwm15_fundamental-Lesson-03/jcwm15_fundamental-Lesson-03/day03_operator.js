// OPERATOR
// ARITHMATIC OPERATOR : operasi matematika (+, -, /(bagi), *(kali), **(pangkat), %(modulus/sisa bagi))
// operasi untuk angka
console.log(1 + 50) // 51
console.log(25 + 25) // 50
console.log(90 - 8) // 82
console.log(66 / 6) // 11 
console.log(5 * 5) // 25
console.log(2**4) // 2 x 2 x 2 x 2

// % MODULUS / sisa bagi
console.log(5 % 3) // 2
console.log(25 % 6) // 1

// operasi beda tipe data
console.log("Hello" + 100) // Hello100

// selain operasi + (penjumlaha), jika 2 tipe data melakukan operasi arithmetic
// akan ada konversi otomatis => semua data harus menjadi number
console.log("Dunia" / "Indah") // NaN
console.log("Aku" - 99) // NaN
console.log("39" - 8) // 31
console.log(65 * true) // 65

// NOTE : boolean true atau false kalau di konversi jadi number
// true = 1
// false = 0

console.log(76 + "1" * false) // 76
console.log("99" + "1") // 991
console.log("99" - "1") // 98
console.log(undefined + 100) // NaN

// UNARY OPERATOR, increment(++) and decrement(--)
// ++, --, +=, -=
// untuk angka
let number = 2
number++ // number nilainya saya naikan 1 => 3, increment = ditambah 1
console.log(number)
number++ // 4
console.log(number)
number-- // decrement / dikurangi 1
console.log(number) // 3
++number
--number
console.log(number) // 3
// BY DEFAULT INCREMENT => +1, DECREMENT => -1

// default increment or decrement => += / -=
let genap = 50
genap += 1 // genap = genap + 1
console.log(genap) // 51
genap -= 1 // genap = genap - 1
console.log(genap) // 50
genap += 5 // genap = genap + 5
console.log(genap) // 55
genap *= 100 // genap = genap * 100
console.log(genap) //5500
genap /= 10 // genap = genap / 10
console.log(genap) //550
genap %= 2 // genap = genap % 2
console.log(genap) // 0


// CASE : misal saya mau menghitung 5^6
console.log(5**6)

// CASE : hitung akar dari 25 ?
// karena operasi sqrt / akar dari suatu nilai tidak termasuk di dalam
// arithmetic operator JavaScript, kita gunaka Tool bawaan dari nodejs/js

// MATH OBJECT => tool untuk melakukan operasi matematik
// REF : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
console.log(Math.sqrt(25)) // menghitung akar
console.log(Math.pow(5, 6)) // mengitung pangkat => 5^6
console.log(Math.abs(-10)) // |-10| => 10, absoulute value
console.log(Math.round(2.57)) // pembulatan angka secara otomatis kebawah atau keatas
console.log(Math.round(2.33))

console.log(Math.floor(2.87)) // pembulatan kebawah
console.log(Math.ceil(2.11)) // pembulatan keatas

// DATE OBJECT => tool untuk mengakses waktu di komputer/laptop
// REF : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
let time = Date.now() // waktu skrng di komputer dalam miliseconds dihitung sejak 1970...
console.log(time)

let date = new Date() // menghasilkan object yang punya informasi waktu saat ini
console.log(date.getTime()) // medapatkan waktu saat ini in milisecond
console.log(date.getFullYear()) // get tahun
console.log(date.getHours()) // get jam
console.log(date.getDate()) // get tanggal
console.log(date.getMonth()+1) // get bulan
console.log(date)

let angka = 4

switch(angka) {
    case (angka % 2 == 0) :
    console.log(`Angka ${angka} terbilang GENAP !`)
        break
    default :
    console.log(`Angka ${angka} terbilang GANJIL !`)
}