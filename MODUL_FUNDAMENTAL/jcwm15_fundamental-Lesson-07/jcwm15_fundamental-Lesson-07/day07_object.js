// OBJECT => {...}
// CASE : simpanlah 3 data users yang isinya ada username, age, hobby
// SOLVE 1# : variable => not effective dan susah di maintain
let users1 = "lia"
let ageUser1 = 19
let hobbyUser1 = "Menulis"

let users2 = "elsa"
let ageUser2 = 25
let hobbyUser2 = "Menyanyi"

let users3 = "Lisa"
let ageUser3 = 24
let hobbyUser3 = "Menari"

// SOLVE 2# : array => [...]
let users = ["lia", "elsa", "lisa"]
let ages = [19, 25, 24]
let hobbies = ["Menulis", "Menyanyi", "Menari"]

// SOLVE 3# : object => {...} => collection of object atau object di dalam array
// mengkelompokan data yang punya hubungan menjadi satu kelompok object
let user = [
    {
        name : "lia", 
        age : 19,
        hobby : "Menulis"
    },
    {
        name : "elsa", 
        age : 25,
        hobby : "Menyanyi"
    },
    {
        name : "lisa", 
        age : 24,
        hobby : "Menari"
    }
]

// HOW TO CREATE AN OBJECT
// CRUD OPERATION : GET, ADD, EDIT/UPDATE, DELETE
// OBJECT USING CLASS AS OBJECT CONSTRUCTOR
// PROPERTIES AND METHOD 
// ...