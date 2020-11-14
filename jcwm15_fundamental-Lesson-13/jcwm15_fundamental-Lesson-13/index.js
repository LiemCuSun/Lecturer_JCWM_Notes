// CASE : n = 5
// *
// * 1 *
// * 1 2 1 *
// * 1 2 3 2 1 *
// * 1 2 1 *
// * 1 *
// *

let n = 5
let pattern = ""
let output =  1

for (let i = 0; i <n; i++) {
    if (i < 3) {
        for (let j = 0; j < (2 * 1) + 1; j++) {
            pattern += `*`
        }
    }
}