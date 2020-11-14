// COMPARISON OPERATOR => hasilnya berupa boolean true atau false
// matematic comparison : >, <, >=, <=, ==, ===, !=
// perbandingan dua angka (tipe data number)
console.log(10 > 10) // false
console.log(10 >= 10) // true
console.log(8 == 9) // false
console.log(1 != 0) // true

// equality => == atau ===
console.log(7 == 8) // false
console.log(7 === 9) // false

// perbandingan untuk tipe data string
console.log("saya" == "kamu") // false
console.log("saya" === "kamu") // false
console.log("aku" == "aku") // true
console.log("6" < "7") // true

// perbandingan 2 tipe data yang berbeda
console.log(0 == false) // true
console.log(1 == true) // true
console.log(19 == "19") // true

// NOTE : perbandingan itu mengutamakan value dibanding tipe data

//  STRICT EQUALITY (== vs ===)
//  == digunakan untuk membandingkan 2 tipe data yang berbeda, see below:
console.log(0 == false) // output = true

// === digunakan untuk membandingkan data dengan tipe yang sama
console.log(0 === false) // output = false
console.log("1" === 1) // false
