// CASE #1 : n = 7
//     1 2 3 4 5 6 7 => kolom j
// 1 | 1 1 1 1 1 1 1    | 7 - 1 = 6
// 2 | 1 1 1 1 1 2 2    | 7 - 2 = 5
// 3 | 1 1 1 1 3 3 3    | 7 - 3 = 4
// 4 | 1 1 1 4 4 4 4    | 7 - 4 = 3
// 5 | 1 1 5 5 5 5 5
// 6 | 1 6 6 6 6 6 6
// 7 | 7 7 7 7 7 7 7
// i => baris

let n = 7
let pattern = ""
let output = 1
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (j > n - i) {
            output = i
        }
        pattern += `${output} `
    }

    pattern += "\n"
    output = 1
}

console.log(pattern)


// CASE #2 : N = 5
// * * * * a | 5 - 0 - 1    | 1
// * * * b a                | 2, 1
// * * c b a                | 3, 2, 1
// * d c b a                | 4, 3, 2, 1 
// e d c b a | 5 - 4 - 1    | 5, 4, 3, 2, 1

// NOTE : ASCII 97 => "a" => 96 + 1 = "a"

let N = 5
let pattern2 = ""
let output2 = "* "
for(let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (j >= N - i - 1) {
            output2 = String.fromCharCode(96 + (N - j)) + " "
        }
        pattern2 += output2
    }

    pattern2 += "\n"
    output2 = "* "
}

console.log(pattern2)