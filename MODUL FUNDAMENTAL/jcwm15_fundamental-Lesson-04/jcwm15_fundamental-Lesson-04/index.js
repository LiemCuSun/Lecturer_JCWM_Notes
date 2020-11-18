// PROBLEM SOLVE
// CASE #4 : CONVERT DAYS TO ? YEARS ? MONTH ? WEEKS ? DAYS
let totalHari = 360 // hari
let hari = totalHari

// hitung tahun, 1 tahun = 360 hari
let tahun = Math.floor(hari / 360)
hari -= tahun * 360 // totalHari = totalHari - tahun * 360

// hitung bulan
let bulan = Math.floor(hari / 30)
hari -= bulan * 30

// hitung minggu
let minggu = Math.floor(hari / 7)
hari -= minggu * 7

console.log(`${totalHari} hari ada ${tahun} tahun ${bulan} bulan ${minggu} minggu ${hari} hari`)

// CASE #6 : SHOW TODAY, TOMMOROW, AND YESTERDAY
let hariIni = new Date() // ambil waktu saat ini
let tanggal = hariIni.getDate()
let bulanIni = hariIni.getMonth() + 1 // index bulan mulai dari 0 = januari
let tahunIni = hariIni.getFullYear()
console.log(`Hari ini tanggal ${tanggal}-${bulanIni}-${tahunIni}`)
console.log(`Besok tanggal ${tanggal+1}-${bulanIni}-${tahunIni}`)
console.log(`Kemaren tanggal ${tanggal-1}-${bulanIni}-${tahunIni}`)

// MATH OBJECT => MATH.RANDOM() => generate random number between 0 and 1 (0.01, 0.9, 0.6, )
// tidak termasuk 1
// REF : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
console.log(Math.random())

// generate with custom max range
// CASE : generate random number between 0 - 5 (5 isn't included)
let max = 5
console.log(Math.floor(Math.random() * max))

// random = 0.5 => 0.5 * 5 = 2.5 => 2
// 0.9 * 5 => 4.5 => 4

let floatNumber = Math.random()
console.log(floatNumber.toPrecision(2))