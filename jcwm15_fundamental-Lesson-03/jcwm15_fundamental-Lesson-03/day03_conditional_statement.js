// CONDITIONAL STATEMENT : if...else...
// kadang program perlu melakukan task/perintah berdasarkan kondisi (comparison/perbandingan)
// syntax :
/* if (conditional) {
        perintah di dalam {} akan dijalanakan jika kondisi terpenuhi = true
   } else { 
        condisi tidak terpenuni = false
        atau jika semua kondisi tidak terpenuhi (multiple condition)
        perintah disini akan dijalankan
   }
*/

// CASE  : check ganjil atau genap ?
let angka = 20

// check angka genap
if (angka % 2 == 0) {
    console.log("ini angka genap.")
} else {
    console.log("ini angka ganjil.")
}

// CASE : check angka positif/negatif
let number = 9
if (number > 0) {
    console.log("ini angka positif.")
} else {
    console.log("ini angka negatif.")
}

// MULTIPLE CONDITION : kondisi > 1
// CASE : menampilkan grade : execlent (>= 80), good (>=60), bad ( <= 60)
let nilai = 15
if (nilai >= 80) { 
    console.log("Excelent") 
} else if (nilai >= 60) { // kodisi ke dua
    console.log("Good")
} else {
    console.log("Bad")
}

// NOTE : else tidak membutuhkan kondisi

// CASE : check umur untuk masuk bioskop untuk nonton film genre action 18+
// input : tahun lahir
// output : umur > 18 : consol boleh masuk, < 18, tidak boleh masuk
let tahunLahir = 2005

// hitung umur
let date = new Date() // get waktu sekaranf
let umur = date.getFullYear() - tahunLahir

// check kondisi
if (umur >= 18) {
    console.log("Boleh masuk")
} else {
    console.log("Tidak boleh masuk")
}

// CONDITIOAN USING SWICTH ... CASE ...
// sama aja denga if ... else ...
// syntxa :
/*
    switch(parameter) {
        case condisi :
            jalankan perintah
            break
        case condisi 2 :
            jalankan perintah
            break
        default :
            jalankan perintah
    }
*/

// CASE : ngecek profesi
let job = "mengemudi"
if (job == "mengajar") {
    console.log("profesinya adalah guru")
} else if (job == "mengemudi") {
    console.log("profesinya adalah supir")
} else {
    console.log("tidak ada kerjaan")
}

switch(job) {
    case "mengajar" :
        console.log("profesinya adalah guru")
        break
    case "mengemudi" :
        console.log("profesinya adalah supir")
        break
    default :
        console.log("tidak ada kerjaan")
}