// HIGH ORDER FUNCTION => ARRAY METHOD
// .map(), .filter(), .forEach()

// LOOPING di dalam array
let users = ["alee", "olaf", "jennie", "rose", "elsa"]
// console.log(users[0])
// console.log(users[1])
// console.log(users[2])
// console.log(users[3])
// console.log(users[4])

// gunakan looping
for (let i = 0; i < users.length; i++) {
    users[i] = users[i].toUpperCase()
    console.log(users[i])
}
console.log(users)

// cara looping menggunakan method
users.forEach((element, index) => {
    console.log(index)
    element = element.toLowerCase()
    console.log(element)

    // modified array
    users[index] = element.toLowerCase()
})

// NOTE : metode .forEach() hanya melooping tetapi
// tidak merubah isi array / array utama
console.log(users)

// .map() dan .filter()
// keduanya mirip dengan .forEach(), tujuannya untuk looping
// didalam array, namun bedanya methode .forEach() tidak menghasilkan return
// tapi kalau di .map() & .filter() menghasilkan return berupa array baru
// keduanya juga tidak merubah array utama

let randomNumbers = [6, 4, 5, 2, 1, 0, 9, 7, 8]
console.log(randomNumbers)


// .forEach()
let result1 = randomNumbers.forEach((item) => {
    console.log(item)
    return item * 2 // hasil dari callback function tidak akan di tampung
})
console.log(result1)

// .map() => looping dengan return
let result2 = randomNumbers.map((item) => {
    console.log(item)
    return item * 2 
    // hasil return akan di tampung kedalam array baru
    // dengan panjang yang sama dengan panjang array original
})
console.log(result2)
console.log(randomNumbers)

// .filter() => mirip dengan .map()
// sama2 menghasilkan array baru tetapi hasil array barunya
// panjangnya belom tentu sama dengan array original
const result3 = randomNumbers.filter((item) => {
    console.log(item)
    return item % 2 === 0 // genap
    // kalau hasil return true maka item akan disimpan di array baru
    // jika false maka item tidak akan disimpan
})

console.log(result3)
