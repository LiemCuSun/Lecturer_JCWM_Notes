// ARRAY & STRING
// CONVERT FROM STRING TO AN ARRAY ?
let str = "Hello"
// split string to an array by an "" empty string
console.log(str.split(""))
console.log(str)

let kenalan = "Hello, nama saya ali"
console.log(kenalan.split(" ")) // split string to an array by an " " space
console.log(kenalan.split(""))
console.log(kenalan)

// CONVERT FROM ARRAY TO STRING ?
let arr = ["Hello", "World", "JavaScript"]
console.log(arr.join(""))
console.log(arr.join(" "))
console.log(arr)

// LOOPING INSIDE ARRAY
let users = ["alee", "olaf", "inosuke", "megumin", "kazuma"]
// CASE : tampilkan semua nama di array users
// console.log(users[0])
// console.log(users[1])
// console.log(users[2])

for (let i = 0; i < users.length; i++) {
    console.log(users[i])
}

// CASE : tolong tampilkan nilai ganjil di array numbers
let numbers = [0, 9, 1, 3, 5, 2, 6, 7, 8]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        console.log(numbers[i])
    }
}


// CASE : ambil nilai yang tipe data string dari array berikut
let arr2 = ["hello", 1, true, ["hay"], "wolrd", "react-js", 9, 11]
for (let i = 0; i < arr2.length; i++) {
    if (typeof arr2[i] == "string") {
        console.log(arr2[i])
    }
}

// console.log(typeof [])


// LOOP using special METHODS => .map(), .filter(), & .forEach()
let arr3 = [1, 2, 3, 4, 5]
for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i])
}

// .forEach() => untuk looping setiap item di dalam array
// .forEach() tidak menghasilkan array baru
arr3.forEach(item => console.log(item))
let modArr1 = arr3.forEach(item => console.log(item))
console.log(modArr1)

// .map() => looping setiap item di dalam array 
// yang tujuanya untuk memodifikasi item di dalam array
// NOTE : .map() => tidak merubah array original 
// tetapi menghasilkan array baru hasil modifikasi dengan .map() 
// dengan panjang yang sama
let modArr2 = arr3.map(item => item * 2)
console.log(modArr2)
console.log(arr3)


// .filter() => tujuannya sama dengan .map()
// tetapi dia akan menghasilkan array baru dengan panjang yang
// tidak harus sama dengan array original 
// / panjang array baru bisa kurang dari panjang array original
// .filter() => biasanya dipakai untuk memfilter / menyaring item yang ada
// di dalam array

let arrStr = arr2.filter(item => typeof item == "string")
console.log(arrStr)
console.log(arr2)