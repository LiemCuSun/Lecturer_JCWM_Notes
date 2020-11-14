// LOOP => PATTERN
// CASE 1 : tampilkan * * * * * (horizontal)
let pattern1 = ""
for (let i = 0; i < 5; i++) {
    // setiap kali looping
    // value di variable pattern1 akan di update
    pattern1 = pattern1 + "* "
}
console.log(pattern1)

// CASE 2 : tampilakn pattern1 secara vertikal
let pattern2 = ""
for (let i = 0; i < 5; i++) {
    pattern2 = pattern2 + "*\n" // \n dipakai untuk membuat line baru (new line)
}
console.log(pattern2)

// CASE 3 : tampilkan pattern berikut ini
// * * * *
// * * * *
// * * * *
// * * * *
let pattern3 = ""
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        pattern3 = pattern3 + " * "
    }

    pattern3 = pattern3 + "\n"
}
console.log(pattern3)

// NOTE : local scope vs global scope
let a = 0 // global variable => variable a dapat 
          // di akses di semua kode yang ada di dalam file ini
let b = 0
{
    let b = 1 // b akan jadi local scope
    // b hanya bisa di akses di dalam {...}
    // console.log(b)
}
// console.log(b)