// ARRAY [...] : menyimpan koleksi data / menyimpan data lebih dari satu 
// dalam satu tempat

// CASE : buatlah program untuk menyimpan data username pelanggan
let user1 = "admin_super"
let user2 = "kristof"
let user3 = "elsa"
let user4 = "olaf"

// setiap kita mau buat data username baru kita harus buat variable baru
// dan kita harus ingat nama variable

// SOLUSI PAKAI ARRAY
let users = ["admin_super", "kristof", "elsa", "olaf"]
console.log(users)

// ARRAY dapat menampung semua tipe data termasuk array itu sendiri
let arr = [1, 0.0, NaN, true, "Purwadhika", "", ["Holla"]]

// CARA AKSES VALUE DI DALAM ARRAY / ELEMENT / ITEM
// gunnakan index atau urutan, index dimulai dari 0 => namaArray[index]
console.log(users[2])
console.log(users[0])
console.log(arr[3])

// MENAMBAHKAN DATA KEDALAM ARRAY ? => method .push()
// .push() di pakai untuk menambahkan value/element/item ke dalam array dan
// di letakkan di urutan terakhir
// namaArray.push(value)
users.push("anna")
users.push(18976)
console.log(users)

//  CRUD Operation
// Create array
let arr1 = [] // literal => buat array kosong ga ada isinya untuk menampung data

// buat array kosong, dengan 5 element / item kosong di dalamnya
let arr2 = new Array(5)
let arr3 = new Array()

console.log (arr1)
console.log (arr2)
console.log (arr3)

// read data didalam array
//  menggunakan index => index dimulai dari 0
let users1 = ["elsa", "olaf", "anna"]
console.log(users1[0])
console.log(users1[1])
console.log(users1[2])

// add/insert/menambahkan data to array
//  .push() => menambahkan item ke dalam array, ditaruh paling akhir
// .unshift() => menambahkan item ke dalam array, ditaruh dipaling awal
users1.push("cusun")
console.log(users1)
users1.unshift("liem")
console.log(users1)

//  edit / update data / item / element di dalam array
users1[4] = "aldo"
console.log(users1) // cusun hilang du ganti aldo

// delete data/item/element di dalam array
// 2 ways => 
// method => slice, .shift(), .pop(), ...
// key delete => delete array[index]

// method
users1.pop() // menghapus item/element terakhir
users1.shift() // menghapus item/element pertama
console.log(users1)

let months = ["jan","feb","mar","apr","may","jun"]
console.log("months", months)

// Splice
console.log(months.splice(3))
let hasil = months.splice(3)
console.log(hasil)

let arr4 = ["hello", 1 , true , ["hi"], "world", "react-js" , 9 , 11]
for (let i = 0; i < arr4.length; i++) {
    if (typeof arr4[i] == "string") {
        console.log(arr4[i])
    }
}

let arrStr = arr4.filter(item => typeof item == "string")
console.log(arrStr)

