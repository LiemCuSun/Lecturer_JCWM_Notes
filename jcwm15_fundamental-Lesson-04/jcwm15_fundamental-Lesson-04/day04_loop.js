// LOOP : pengulangan
// kadang kita ingin mengeksekusi kode yang sama berulang-ulang

// CASE : tolong buat program untuk menampilkan output "Hello World" 7x
let pesan = "Hello Kucing"
// console.log(pesan)
// console.log(pesan)
// console.log(pesan)
// console.log(pesan)
// console.log(pesan)
// console.log(pesan)
// console.log(pesan)

// 3 macam loop : while, do..while, for(...)
// inital kondition : mulai loop dari angka brp
let i = 0
while (i < 7) { 
    // setiap kali looping, 
    // kondisi dalam () harus true agar kode di {} jalan
    console.log(pesan)
    i++ // increment
}


// CASE : MENAMPILKAN ANGKA 1 - 25
let j = 1
while (j <= 25) {
    console.log(j)
    j++
}
// CASE : MENAMPILKAN ANGKA 1 - 25, naikan angka sebesar 2
let k = 1
while(k <= 25) {
    console.log(k)
    k += 2
}


// 2nd loop : do...while...
let l = 0
do {
    console.log("Hello")
    l++
} while (l < 5)

// while vs do...while
// while, check kondis didalam () jika true baru looping akan jalan
// do...while..., jalan kan kode / perintah, baru check kondisi di dalam while ()

let m = 9
do {
    console.log("Hore")
    m++
} while (m < 9)

// 3th loop : for (...)
// mirip dengan while, tapi kondisi di tulis dalam satu baris di dalam for (...)
for (let o = 0; o < 5; o++) {
    console.log(`loop ke-${o}`)
}


// INFINTE LOOP => kita mau menjalankan program berulang-ulang tanpa berhenti
// sampai user memberhentikan program
// while(true) {
//     console.log("infinite")
// }

// BREAK AND CONTINUE
// BREAK => stop loop 
// CONTINUE => continue looping => program akan di skip langsung check loop condition
let p = 2
while (p < 50) {
    console.log(p)

    // check kondisi
    if (p >= 10) {
        // stop looping jika p >=0
        break
    }

    // increment
    p += 2
}

let q = 0
while (q < 10) {
    
    // chek kondisi
    if (q % 2 != 0) {
        q++
        // chek kondisi
        // jika hasil bagi 2 dari q != 0
        // maka loop akan skip => check kondition
        // program setlah syntax contine akan di skip 
        continue
    }

    console.log(q)
    q++
}

// q = 0 | 0 < 10 | !continue | console.log(0) | 0++ => 1
// q = 1 | 1 < 10 | 1++ => 2 | continue
// q = 2 | 2 < 10 | !continue | console.log(2) | 2++ => 3
// q = 3 | 3 < 10 | 3++ => 4 | continue
// q = 4 |
// ....
// q = 8 | 8 < 10 | !continue | console.log(8) | 8++ => 9
// q = 9 | 9 < 10 | q++ => 10 | continue
// q = 10 | 10 < 10 => false => loop end

// 2nd form using for
for (let r = 0; r < 10; r++) {
    if (r % 2 != 0) {
        continue
    }
    console.log(r)
}

// NESTED LOOP : loop inside loop
for (let a = 0; a < 5; a++) { // outside loop
    for (let b = 0; b < 5; b++) { // inside loop
        console.log(`loop outside ke-${a} dan loop inside ke-${b}`)
    }
}

// NOTE : loop inside akan jalan sampai selesai baru loop ouside lanjut