// array => fungsinya untuk menyimpan collection of data
// > 1 data
// array bisa menampung => hampir semua tipe data termasuk array itu sendiri

// CRUD Operation
// create array
let arr = [] // literal => saya buat array kosong tidak ada isinya
// saya buat array kosong, dengan 5 element / item kosong didalamnya
let arr2 = new Array(5)
let arr3 = new Array() // saya buat array kosong tidak ada isinya

// console.log(arr)
// console.log(arr2)
// console.log(arr3)

// read data dialam array / akses data di dalam array
// menggunakan index => index dimulai dari 0
let users = ["elsa", "olaf", "anna"]
// console.log(users[0])
// console.log(users[1])
// console.log(users[2])

// add/insert/menambahkan data to array
// .push() => menambahkan item/element/data ke dalam array, ditaruh paling akhir
// .unshift() => menambahkan item/element/data ke dalam array, di taruh paling awal
users.push("alee")
// console.log(users)
users.push("kevin")
// console.log(users)
users.unshift("doni")
// console.log(users)

// edit/update data/item/element di dalam array
users[5] = "aldo"
users[0] = "chelsie"
// console.log(users)

// delete data/item/element di dalam array
// 2 ways => 
// method => .splice(), .shift(), .pop(),... 
// key delete => delete array[index]

// method
users.pop() // menghapus item/element terakhir
users.shift() // menghapus item/element pertama
// console.log(users)

let months = ["jan", "feb", "mar", "apr", "may", "june"]
// console.log("months", months)

// .splice() => remove, add/insert, replace item/element di dalam array

// .splice(i), saya mau memotong/mengambil item/element dari array mulai dari index ke-i samapai terakhir
// console.log(months.splice(3)) // metode ini akan menghasilkan array hasil .splice()
// let hasil = months.splice(3)
// console.log("hasil", hasil)
// console.log(months)

// .splice(i, 0, new-value) => insert new item/elemet di dalam array
// mesukin item/element di tengah2 array
months.splice(1, 0, "oct") // saya ingin masukan data "oct" ke dalam index ke-1
months.splice(3, 0, "aug")
// console.log(months)

// .splice(i, j, new-value) => 
// saya ingin mereplace element di index ke-i, 
// dengan value = new-value dan total j-element
months.splice(3, 1, "desc")
// console.log(months)
months.splice(1, 2, "jul", "aug")
// console.log(months)

// me-remove multiple item inside array
// men-delete lebih dari 1 item/element
// [ 'jan', 'jul', 'aug', 'desc', 'mar' ]
months.splice(1, 2) // .splice(i, j) => saya ingin me-remove mulai dari index ke-i sebanyak j-element
// console.log(months)

// delete with key delete
let hobbies = ["singing", "dancing", "coding", "running"]
// console.log("hobbies", hobbies)
delete hobbies[2] // saya menghapus value dari item dengan index 2
// console.log(hobbies)
hobbies.splice(1, 1) // saya menghapus item dari index ke-1 sebanyak 1 element
// console.log(hobbies)

// METHOD AND PROPERTIES
// REF : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// POPERTY of ARRAY => .LENGTH => untuk menghitung item/panjang array
// console.log(months.length)
// console.log(hobbies.length)


// METHODS => .sort(), .reverse(), .reduce()
let numbers = [9, 7, 4, 2, 1, 0, 10, 3, 8]
numbers.sort((a, z) => a - z) // mengurutkan dari terkecil-terbesar
// console.log("number sort asc", numbers)
numbers.sort((a, z) => z - a)
// console.log("number sort desc", numbers)

let season = ["semi", "panas", "dingin", "gugur"]
// console.log(season)
// console.log(season.reverse()) // membalik urutan item di dalam array

// saya ingin mengitung semua total value yang ada didalam array numbers
// console.log(numbers.reduce((a, b) => a + b))
// console.log(numbers.reduce((a, b) => a - b))
// console.log(season.reduce((a, b) => a + b))
// console.log(season.reduce((a, b) => a - b))

// MUTLIDIMETIONAL ARRAY => ARRAY 2D
// array inside an array
let multiArray = [
    ["Js", "Py", "Java"], 
    ["React", "Vue", "Angular"], 
    ["React-Native", "Flutter", "Ionic"]
]

// get data
console.log(multiArray[0]) // ["Js", "Py", "Java"]
console.log(multiArray[0][2]) // "Java"
console.log(multiArray[2][1])

let multiArray2 = ["Purwadhika", 0, true, ["Hello", "World", [false, 1]], "JavaScript"]
console.log(multiArray2[3][1]) // "World"
console.log(multiArray2[3][2][1]) // 1