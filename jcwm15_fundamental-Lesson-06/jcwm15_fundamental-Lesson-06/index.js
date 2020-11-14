// CASE : SHOW THIS PATTERN, input n = 5
// A
// AB
// ABC
// ABCD
// ABCDE

let n = 5
let aplabet = "ABCDE"
let pattern = ""

// STRING => METHOD => .chartAt(index), untuk mencari chart pada index yg diberikan
for (let baris = 0; baris < n; baris++) {
    for (let kolom = 0; kolom <= baris; kolom++) {
        pattern += aplabet.charAt(kolom)
    }

    if (baris !== n - 1) {
        pattern += "\n"
    }
}
// console.log(pattern)

// 2nd METHOD : String.fromCharCode(), convert ASCII symbol code to string
// console.log(String.fromCharCode(65)) // "A"
// console.log(String.fromCharCode(97)) // "a"
// NOTE : kebalikan dari String.fromCharCode() <=> String.charCodeAt()
// console.log("A".charCodeAt(0)) // 65
// console.log("a".charCodeAt(0)) // 97


let pattern2 = ""
for (let baris = 0; baris < n; baris++) {
    for (kolom = 0; kolom <= baris; kolom++) {
        pattern2 += String.fromCharCode(65 + kolom)
    }

    if (baris !== n - 1) {
        pattern2 += "\n"
    }
}

// console.log(pattern2)

// CASE : n = 5
// 1
// 1 2
// 1 2 3
// 1 2 3 5
// 1 2 3 5 8

let pattern3 = ""
let initial = 0
let current = 1
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        let temp = current
        current += initial
        initial = temp
        pattern3 += `${current} `
    }

    pattern3 += "\n"
    // reset current value
    initial = 0
    current = 1
}

console.log(pattern3)

// 0, 1, 1, 2, 3, 5, 8, 13, ...

// i = 0 | j = 0 | j <= i | temp = 1, current = 0 + 1 = 1, inital = 1 | pattern += "..."
// i = 0 | j = 1 | j <= i | break | patern += "\n" | initial = 0, current = 1
// i = 1 | j = 0 | j <= i | temp = 1, current = 0 + 1 = 1, inital = 1 | pattern += "..."
// i = 1 | j = 1 | j <= i | temp = 1, current = 1 + 1 = 2, inital = 1 | pattern += "..."
// i = 1 | j = 2 | j <= i | break | patern += "\n" | initial = 0, current = 1
// i = 2 | .....