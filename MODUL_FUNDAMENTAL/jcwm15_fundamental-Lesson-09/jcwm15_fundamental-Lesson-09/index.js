// CASE #1
// input : n = 9
// 1 -9 2 -8 3 -7 4 -6 5
let n = 9
let out = -9
let out2 = 1
let pattern = ""
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        pattern += out + " "
        out += 1
    } else {
        pattern += out2 + " "
        out2 += 1
    }
}

console.log(pattern)