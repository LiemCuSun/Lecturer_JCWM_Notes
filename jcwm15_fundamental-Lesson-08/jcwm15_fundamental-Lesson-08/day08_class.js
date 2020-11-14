// 2nd method to create an object
// CLASS => cetakan untuk membuat object yang sama
// CASE : kalau misal saya ingin membuat object dengan bentuk, props/key dan methods
// yang sama persis maka saya bikin object pakai CLASS

// HOW TO CREATE OBJECT USING CLASS ?
// syntax : key class
class Manusia {
    // create object properties
    constructor(nama, hobby, tahun) {
        this.nama = nama,
        this.hobby = hobby,
        this.tahun = tahun
    }
}

// create object using class
let orang1 = new Manusia("alee", "dance", 1998)
console.log(orang1)
let orang2 = new Manusia("elsa", "menyayi", 1997)
console.log(orang2)
let orang3 = new Manusia("olaf", "ngerusuh")
console.log(orang3)

// class with method ?
class Student {
    constructor(namaDepan,namaBelakang, tahun, alamat, program) {
        this.namaDepan = namaDepan,
        this.namaBelakang = namaBelakang,
        this.tahun = tahun,
        this.alamat = alamat,
        this.program = program
    }

    // create method
    namaLengkap = function () {
        console.log("nama lengkap : " + this.namaDepan + " " + this.namaBelakang)
    }
    umur = function () {
        let today = new Date().getFullYear()
        let age = today - this.tahun
        console.log("umur : " + age)
        return age
    }
}

let Student1 = new Student("andre", "taulani", 1990, "BSD", "JCWM")
console.log(Student1)
Student1.namaLengkap()
Student1.umur()

// insert new properties
Student1.hobby = "codding"
console.log(Student1)

// delete props
delete Student1.alamat
console.log(Student1)

// inheritance ? PEWARISAN
// OBJECT SECARA UMUM : manusia
// manusia ada dua jenis : laki-laki & prempuan
class Human {
    constructor () {
        this.kepala = true
        this.mata = 2
        this.telinga = 2
        this.kaki = 2
    }
}

// JIKA saya ingin object yang saya buat menggunakan class LakiLaki mempunyai 
// props/key dan method yang ada di class Human, maka saya bisa mewariskan / memberi 
// pros/key & method tersebut ke class LakiLaki dengan teknik inheritance

class LakiLaki extends Human {
    constructor() {
        super()
        this.gender = "Laki-laki",
        this.berkumis = true
    }
}

let Andre = new LakiLaki()
Andre.kaki = "Ada"
console.log(Andre)

// CLASS UMUM : MOBIL
class Mobil {
    constructor(merk, warna) {
        this.merk = merk,
        this.warna = warna,
        this.roda = 4,
        this.spion = 2
    }
}

class MobilSport extends Mobil {
    constructor(merk, warna) {
        super(merk, warna)
        this.pintu = 2
    }
}

let SportCar1 = new MobilSport("Ferarri", "Red")
console.log(SportCar1)
let SportCar2 = new MobilSport("Lamborghini", "Black")
console.log(SportCar2)
let Car = new Mobil("Audi", "Blue")
console.log(Car)