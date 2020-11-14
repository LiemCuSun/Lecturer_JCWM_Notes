// CREATE OBJECT USING FUNCTION
// CONSTRUCTOR FUNCTION => membuat object menggunakan function
// NOTE : function yang buat hanya boleh dipakai dengan kata kunci "new"

let Person = function (nama, usia, hobi) {
    // this = {}, secara tidak langsung bikin object this {}
    
    this.nama = nama
    this.usia = usia
    this.hobi = hobi

    // return this
}

// create object using Person
let orang1 = new Person("anang", 22, "codding")
console.log(orang1)

let orang2 = new Person()
console.log(orang2)

let orang3 = Person()
console.log(orang3)

// add new method
Person.prototype.sayName = function () {
    console.log(`Hello nama saya ${this.nama}`)
}

let orang4 = new Person("Andre", 19, "MC")
console.log(orang4)
orang4.sayName()

// CREATE A CUSTOM FUNCTION THAT RETURN AN OBJECT
function ObjectSepeda (merk, harga, jenis) {
    // create object kosong
    let obj = {}

    // buat prop/key object
    obj.merk = merk
    obj.harga = harga
    obj.jenis = jenis

    // return the object
    return obj
}

let SepedaLipat = ObjectSepeda("Poligon", 12000000, "Sepeda Lipat")
console.log(SepedaLipat)