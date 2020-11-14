// REVIEW :
// if ... else... , dipakai untuk menjalana perintah berdasarkkan kondisi
// if (...) {...}, if akan saat kondisi yang ada didalam kurung () nilainya true
// saat nilai true maka kode di kurung kurawal {} akan di jalankan
// else akan jalan saat semua kondisi yang ada di if tidak terpenuhi / false

// CASE : menentukan apakah nilai tersebut habis dibagi 5
let nilai = 35
if (nilai % 5 === 0) { // kondisi : check apakah nilai habis dibagi 5 => true or false
    console.log("nilai habis dibagi lima")
} else {
    console.log("nilai tidak habis dibagi dengan lima")
}

// SWICTH & CASE 
// swicth (...) akan mengambil value dari parameter yang ada di dalam ()
// dan akan membandingkannya / comparison dengan parameter yang ada di case ...
// case akan jalan kalau kondisinya true
// NOTE : SWICTH HANYA MELAKUKAN TRIPLE EQUAL COMPARISON ===

let job = "mengemudi"
switch(job) {
    case "mengajar" : // job === "mengajar" => "mengemudi" === "mengajar"
        console.log("profesinya adalah guru")
        break
    case "mengemudi" : // job === "mengemudi"
        console.log("profesinya adalah supir")
        break
    default : // selain kondisi diatas / semua kondisi tidak terpenuhi
        console.log("tidak ada kerjaan")
}

// CASE IMT : berat badan ideal
let masa = 67 // kg
let tinggi = 1.78 // m

// hitung IMT
let IMT = masa / (Math.pow(tinggi, 2)) // 21.14
// console.log("IMT = " + IMT)
console.log("IMT = ", IMT)

switch(true) {
    case (IMT > 39.9) : 
    // true === (IMT > 39.9) => true === false => false
        console.log("obesitas")
        break
    case (IMT > 30) : 
    // true === false => false 
        console.log("sangat berlebih")
        break
    case (IMT > 25) :
    // true === false => false
        console.log("berlebih")
        break
    case (IMT > 18.5) :
    // true === true => true
        console.log("berat badan ideal")
        break
    default :
        console.log("berat badan kurang")
}

// LOGIC OPERATOR
// jika didalam if (...) ada 2 kondisi yang di pertimbangkan / check di dalam ()
// CASE : misalkan siswa boleh masuk ke dalam kampus jika membawa tas dan sepatu
let bawaTas = true
let bawaSepatu = false
if (bawaTas && bawaSepatu) {
    // boleh masuk
} else {
    // tidak boleh masuk
}

// OPERATOR : AND (&&), OR(||), NEGASI / KEBALIKAN (!)
// hasil perbandingn menggunakan logic operator : boolean => true or false
// AND (&&) : NOTE : nilai akan true kalau kedua kondisi true
console.log(true && true) // true
console.log(true && false) // false
console.log(false && true) // false
console.log(false && false) // false

if (bawaTas && bawaSepatu) {
    // boleh masuk
    console.log("boleh masuk")
} else {
    // tidak boleh masuk
    console.log("tidak boleh masuk")
}

// NOTE : dalam logic operator untuk kasus if..else..
// semua value akan di konversi menjadi boolean lalu di compare

// SPECIAL CASE : OUTPUT
console.log(0 && 1) // jika nilai sebelah kiri false => output : yang ada di kiri
console.log(1 && 1) // jika nilai sebelah kiri true => output : yang ada di kanan
console.log(1 && "dia") // "dia"
console.log(0 && "dia") // 0

// OR (||) : NOTE : nilai akan true jika salah satu ada yang true
console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false

// CASE : siswa boleh masuk jika membawa tas atau sepatu
if (bawaSepatu || bawaTas) {
    console.log("boleh masuk")
} else {
    console.log("tidak boleh masuk")
}

// NEGASI : !, membalikan nilai / value
// kalau misalkan kita lakukan operasi negasi terhadap value => data type dan
// value akan di konversi menjadi boolean => true or false
console.log(!true) // false
console.log(!false) // true
console.log(!0) // true
console.log(!1) // false
console.log(!"") // true

// CASE : manampilkan grade siswa berasarkan nilai
// A => 80 - 100
// B => 70 - 80
// C => 50 - 70
// D => 40 - 50
// E => 0 - 40

let nilaiStudent = 77
if (nilaiStudent >= 80 && nilaiStudent <= 100) {
    console.log("grade A")
} else if (nilaiStudent >= 70 && nilaiStudent < 80) {
    console.log("grade B")
} else if (nilaiStudent >= 50 && nilaiStudent < 70) {
    console.log("grade C")
} else if (nilaiStudent >= 40 && nilaiStudent < 50) {
    console.log("grade D")
} else {
    console.log("grade E")
}

// console.log(5 < 6 < 1)

// SPECIAL CASE : incompareable undifined
console.log(undefined > 0) // false
console.log(undefined < 1) // false
console.log(undefined == 0) // fasle
console.log(undefined == undefined) // false
