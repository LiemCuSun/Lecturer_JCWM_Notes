// OBJECT => di dalam javascript everything is an object. object adalah sebuah tipe
// data yang mampu menyimpan multiple value, mirip dengan array tetapi jika array
// data di simpan berdasarkan index, 
// namun object menggunakan pasangan "key" : "value"
// object juga bisa menyipan data type apapun termasuk array, 
// function, atau object itu sendiri

// ANALOGI : SEMUA BENDA YANG KALIAN LIHAT ADALAH OBJECT
// SETIAP OBJECT PUNYA PROPERTIES :
// E.X. :
// object : laptop, 
// poperties : 
//  - merk : asus rog
//  - warna : biru
//  - layar : 14", etc.

// CRUD OPERATION : CREATE, READ, UPDATE/EDIT, & DELETE
// cara bikin object ?
// 1st : syntax literal atau secara langsung => {...}
let laptop1 = { merk : "Asus", warna : "Biru", layar : 14 }
let laptop2 = { merk : "Lenovo", warna : "hitam", layar : 16 }
console.log(laptop1)

let laptop1arr = ["Asus", "Biru", 14]

// read object ?
// jika di array, kita ingin baca item/element didalamnnya => kita gunakan index, index start with 0
// kalau di object we used key to access its value => object.prop/key
console.log(laptop1.merk)
console.log(laptop1.layar)
console.log(laptop2.merk)
console.log(laptop1arr[0])

// tambah prop/key baru ?
laptop1.harga = 16000000
console.log(laptop1)
console.log(laptop1.harga)

laptop2.usb_c = true
console.log(laptop2)

// update ? mirip dengan add new props
laptop1.harga = 15990900
laptop1.warna = "Black"
console.log(laptop1)

// NOTE : jika kita mau menambahkan propeties/key baru, jika props/key belom
// ada di object yang ingin kita update, maka props/key akan di buat secara otomatis
// jika props/key sudah ada => makan value dari porps/key tersebut akan di update

// DELETE ? cara delete props/key di object
delete laptop2.usb_c
delete laptop1.warna
console.log(laptop1)
console.log(laptop2)

// METHOD ?
// by definition : method is a function yang disimpan didalam object

// ANALOGI : method ?
// properties => describe about the OBJEECT / menggambarkan object yang kita lihat
// method lebih ke sifat dan kata kerja
// e.x : 
// object : olaf
// properties : 
//  - hitung : "wortel"
//  - pake_baju : false
//  - rambut : "ranting"
// methods :
//  - bernyayi
//  - menari


// CASE : OBJECT => orang/human
let orang = {  
    nama : "elsa", 
    gender : "female", 
    age : 17,
    berlari : function () {
        console.log("orang ini bisa berlari.")
    }
}
console.log(orang)

console.log(orang.nama)
orang.berlari() // cara invoke / memanggil function/method didalam object

// add new method to object orang
orang.bernyanyi = function () {
    console.log("orang ini sedang bernyayi.")
}

console.log(orang)
orang.bernyanyi()

// CASE : simpanlah data user dalam bentuk object dengan data sbg berikut
// nama : andre, sekolah : purwadhika, tahun-lahir : 1998
// let user = { nama : "Andre", sekolah : "Purwadhika", tgl : 1998 }

// method disini bisa dipakai untuk mengkalkulasi / menghiting value yang 
// suatu saat dibutuhkan tetapi valuenya tidak perlu disimpan
let user = { 
    nama : "Andre", 
    sekolah : "Purwadhika", 
    tahun : 1998,
    umur : function () {
        let today = new Date().getFullYear()
        let umur = today - this.tahun

        // give a return value
        return umur
    }
}

console.log(user)
console.log(user.nama)
console.log(user.sekolah)
console.log("umur : ", user.umur())