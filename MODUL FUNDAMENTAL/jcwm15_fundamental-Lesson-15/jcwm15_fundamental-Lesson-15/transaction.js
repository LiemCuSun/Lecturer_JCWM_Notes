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

    // disable button delete and add to cart
    let btnDelete = document.body.getElementsByClassName("delete-cart") // HTML collection
    let btnAddToCart = document.body.getElementsByClassName("add-to-cart") // HTML Collection
    for (let i = 0; i < btnDelete.length; i++) {
        btnDelete[i].disabled = true
    }

    // bentuk looping kedua
    for (let item of btnAddToCart) {
        // console.log(item)
        item.disabled = true
    }

    // show checkout
    let uang = document.getElementById("uang")
    let checkout = document.getElementById("checkout")
    uang.hidden = false
    checkout.hidden = false
}

// checkout
function OnButtonCheckOut () {
    console.log("button checkout di klik")

    // get value dari input
    let uang = document.getElementById("uang") // string
    let uangDariClient = parseInt(uang.value)

    // hitung total belanja
    let total = 0
    for (let item of userCart) {
        total += item.total()
    }

    // check kembalian
    let kembalian = uangDariClient - total

    // bandingkan total dengan uang dari client
    if (uangDariClient < total) {
        alert("Uang tidak cukup.")
    } else if (isNaN(uangDariClient)) {
        alert("Masukan jumlah uang yang mau di bayarkan.")
    } else if (kembalian > 0) {
        alert(`Terima kasih sudah berbelanja \n uang kembalian : Rp ${kembalian},00 .`)
        reset()
    } else {
        alert("Terima kasih sudah berbelanja.")
        reset()
    }

    // setelah prosess checkout, reset semua kondisi
    uang.value = ""
}

// reset
function reset () {
    // kosongkan cart
    userCart = []

    // reset button delete and add to cart
    let btnDelete = document.body.getElementsByClassName("delete-cart") // HTML collection
    let btnAddToCart = document.body.getElementsByClassName("add-to-cart") // HTML Collection
    let btnCetak = document.getElementById("cetak")
    btnCetak.disabled = true
    for (let item of btnDelete) {
        item.disabled = false
    }
    
    for (let item of btnAddToCart) {
        // console.log(item)
        item.disabled = false
    }
    
    // hapus receipt
    let receipt = document.getElementById("receipt")
    receipt.textContent = `Receipt :`
    
    // hide checkout
    let checkout = document.getElementById("checkout")
    uang.hidden = true
    checkout.hidden = true
    
    // tampilkan ulang tablenya
    ShowProducts()
    ShowUserCart()
}