// LOOP PART-2 : PATTERN => nested loop (loop di dalam loop)
// CASE #1 : tampilkan pattern berikut ini untuk n-baris, n = 4
// *            | i = 0, j = 0, \n
// * *          | i = 1, j = 0, 1, \n
// * * *        | i = 2, j = 0, 1, 2, \n
// * * * *      | i = 3, j = 0, 1, 2, 3, \n

// solution
let n = 4
let pattern = ""
for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        pattern += " * "
    }
    pattern += "\n"
}
console.log(pattern)
// PATTERN => "*\n**\n***\n****\n"

// CASE #2 : n = 4
// * * * *      | i = 4; j = 0, 1, 2, 3
// * * *        | i = 3, j = 0, 1, 2
// * *          | i = 2, j = 0, 1
// *            | i = 1, j = 0

let pattern2 = ""
for (let i = n; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        pattern2 += " * "
    }
    pattern2 += "\n"
}
console.log(pattern2)


// CASE #3 : n = 4
//    *
//   ***
//  *****
// *******

let pattern3 = ""
for (let i = 0; i < n; i++) {
    // looping untuk isi spasi
    for (let j = 0; j < n - i - 1; j++) {
        pattern3 += " "
    }

    // looping untuk isi bintang
    for (let k = 0; k < 2 * i + 1; k++) {
        pattern3 += "*"
    }

    // buat baris baru
    pattern3 += "\n"
}
console.log(pattern3)

// LABELING LOOP
// nama label bebas
outside : for (let i = 0; i < n; i++) {
    inside : for (let  j = 0; j < n; j++) {
        console.log(`${i} ${j}`)
        // break tanpa pake label
        // otomatis break akan memberhentikan loop yang membukusnya
        // break

        // saya may break loop yang paling luar
        break outside

        // NOTES : jika loop yang paling luar kita break otomatis semua loop akan break
    }
}
