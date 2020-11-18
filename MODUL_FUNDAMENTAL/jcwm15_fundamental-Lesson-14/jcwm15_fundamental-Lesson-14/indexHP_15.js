// menampilkan data ke table => access table
function ShowProducts (idx) {
    console.log("index", idx)
    let table = document.getElementById("daftar-produk")
    console.log(table)

    let tbody = table.getElementsByTagName("tbody")[0]
    console.log(tbody)

    let tr = ""
    for (let i = 0; i < dataProduk.length; i++) {
        if (idx === i) {
            tr += `
                <tr>
                    <td>#</td>
                    <td>
                        <input id="edit-nama" type="text" value="${dataProduk[i].name}">
                    </td>
                    <td>
                        <input id="edit-img" type="text" value="${dataProduk[i].img}">
                    </td>
                    <td>
                        <input id="edit-harga" type="number" value="${dataProduk[i].harga}">
                    </td>
                    <td>
                        <input id="edit-stock" type="number" value="${dataProduk[i].stok}">
                    </td>
                    <td>
                        <button onclick="OnButtonSave(${i})">SAVE</button>
                        <button onclick="OnButtonCancel()">CANCEL</button>
                    </td>
                </tr>
            `
        } else {
            tr += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${dataProduk[i].name}</td>
                    <td>
                        <img src="${dataProduk[i].img}" height="60px">
                    </td>
                    <td>${dataProduk[i].harga}</td>
                    <td>${dataProduk[i].stok}</td>
                    <td>
                        <button onclick="OnButtonDelete(${i})">DELETE</button>
                        <button onclick="OnButtonEdit(${i})">EDIT</button>
                        <button onclick="OnButtonAddToCart(${i})">ADD TO CART</button>
                    </td>
                </tr>
            ` 
        }
    }
    tbody.innerHTML = tr
}
ShowProducts()

// add new produk saat button add di klik
// dataProduk.push(new Produk(dataProduk.length + 1, "Samsung Galaxy Fold 2", "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-fold2-5g-2.jpg", 29000000, 2))
// console.log(dataProduk)
// ShowProducts()

function OnButtonAdd (e) {
    console.log("event", e)
    e.preventDefault()
    console.log("add button di klik")

    // get input value
    let form = document.getElementById("produk-baru")
    console.log(form)
    console.log(form["nama"].value)
    

    // check input value => tidak boleh ada value yang kosong
    // check value dari harga dan stok tidak boleh < 0 atau negatif
    let nama = form["nama"].value
    let img = form["img"].value
    let harga = form["harga"].value
    let stok = form["stok"].value

    if (nama === "" || img === "" || harga === "" || stok === "") {
        alert("input tidak boleh kosong")
    } else {
        // masukan semua value ke daftar produk dalam bentuk object
        dataProduk.push(new Produk(
            dataProduk.length + 1, 
            form["nama"].value, 
            form["img"].value, 
            parseInt(form["harga"].value), 
            parseInt(form["stok"].value)
        ))
        console.log(dataProduk)

        // tampilkan ulang produk
        ShowProducts()

        // reset value di form
        form["nama"].value = ""
        form["img"].value = ""
        form["harga"].value = ""
        form["stok"].value = ""
    }

}

// delete produk
// dataProduk.splice(2, 1)
// console.log(dataProduk)

// ShowProducts()
function OnButtonDelete (index) {
    console.log(`button index ke-${index} di klik`)

    // delete produk
    dataProduk.splice(index, 1)

    // tampikan ulang produk
    ShowProducts()
}

// edit produk
function OnButtonEdit (index) {
    console.log(`button edit index ke-${index}`)
    
    // tampilkan table
    ShowProducts(index)
}

// save edited produk
function OnButtonSave (index) {
    console.log("button save di klik")

    // get value dari input data yang mau di edit
    let editNama = document.getElementById("edit-nama").value
    let editImg = document.getElementById("edit-img").value
    let editHarga = parseInt(document.getElementById("edit-harga").value)
    let editStock = parseInt(document.getElementById("edit-stock").value)
    console.log(editNama)
    console.log(editImg)
    console.log(editHarga)
    console.log(editStock)

    // edit daftar produk dengan value baru
    dataProduk[index].name = editNama
    dataProduk[index].img = editImg
    dataProduk[index].harga = editHarga
    dataProduk[index].stok = editStock
    console.log(dataProduk)

    // tampilkan ulang table produk
    ShowProducts()
}

// cancel edit
function OnButtonCancel () {
    console.log("button cancel di klik")

    // tampilkan ulang table produk
    ShowProducts()
}

// add to cart
function OnButtonAddToCart (index) {
    // console.log(`button ke-${index} add to cart di klik`)
    console.log("data yang mau dimasukan", dataProduk[index].name)
    let produk = {...dataProduk[index]} 
    // saya mau copy semua properties dari dataProduk[index]
    console.log(produk)
    let cartIndex // variable ini akan dipakai untuk menampung index dari data produk yang sudah ada di cart

    // cari data produk yang sama di user cart
    for (let i = 0; i < userCart.length; i++) {
        if (userCart[i].name === produk.name) {
            cartIndex = i
        }
    }

    // add produk ke cart
    if (cartIndex !== undefined) {
        userCart[cartIndex].quantity += 1
    } else {
        userCart.push(
            new ProdukCart (
                userCart.length + 1,
                dataProduk[index].name, 
                dataProduk[index].img, 
                dataProduk[index].harga,
                1
            )
        )
    }

    console.log("cart setelah di add", userCart)

    // tampilkan data userCart di HTML
    ShowUserCart()
}

// show user cart
function ShowUserCart () {
    // get access table body
    let table = document.getElementById("user-cart")
    let tbody = table.getElementsByTagName("tbody")[0]
    // console.log(table)
    // console.log(tbody)

    // tambahkan baris baru sesuai banyaknya produk di userCart
    let tr = ""
    for (let i = 0; i < userCart.length; i++) {
        tr += `
            <tr>
                <td>${i + 1}</td>
                <td>${userCart[i].name}</td>
                <td>
                    <img src="${userCart[i].img}" height="60px">
                </td>
                <td>${userCart[i].harga}</td>
                <td>${userCart[i].quantity}</td>
                <td>${userCart[i].total()}</td>
                <td>
                    <button onclick="OnButtonDeleteCart(${i})">DELETE</button>
                </td>
            </tr>
        `
    }

    // tambahkan ke tbody
    tbody.innerHTML = tr
}

// delete produk di cart
function OnButtonDeleteCart (index) {
    console.log(`button ke-${index} delete cart di klik`)

    // delete produk yang ada id cart
    userCart.splice(index, 1)

    // tampilkan ulang cart
    ShowUserCart()
}

// cetak receipt
function OnButtonCetak () {
    console.log("button cetak di klik")
    let receipt = document.getElementById("receipt")

    // cetak receipt
    let output = "Receipt : <br>"
    let total = 0
    for(let i = 0; i < userCart.length; i++) {
        output += `${i + 1}. ${userCart[i].name} x ${userCart[i].quantity} = ${userCart[i].total()} <br>`
        total += userCart[i].total()
    }

    output += `<br> Total belanja : Rp ${total},00`

    // tampilkan di HTML
    receipt.innerHTML = output
}