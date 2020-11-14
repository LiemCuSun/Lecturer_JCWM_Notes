// DATA COLLECTION => COLLECTION OF OBJECTS INSIDE AN ARRAY => [{...}, {...}, ...]
// CASE : simpanlah data users (username, email, password)
class User {
    constructor(username, email, password) {
        this.username = username,
        this.email = email,
        this.password = password
    }
}

let users = []
users.push({ username : "alee", email : "alee@gmail.com", password : "1234" })
console.log(users)
users.push(new User("olaf", "olaf@gmail.com", "olafa"))
users.push(new User("elsa", "elsa@gmail.com", "olala"))
console.log(users)

// console.log(users[1])
// console.log(users[1].username)
// console.log(users[1].email)

// menampilkan semua data username
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i].username)
// }

// delete password user index ke-2
// delete users[2].password
// console.log(users[1])


// function callbakc () {}
// users.forEach(callbakc)

// console.log(callbakc())