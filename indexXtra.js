let data = {}
let hasil = 0

let troli = document.querySelector("#troli")
let paparjumlah = document.querySelector("#paparjumlah")

function tambahData(dapatkanBarang) {

    if(dapatkanBarang.nama in data){
        data[dapatkanBarang.nama].jumlah++
    } 
    else{
        data[dapatkanBarang.nama] = {
            harga: dapatkanBarang.harga,
            jumlah: 1
        }
    }

    kiraHasil()
    renderTroli()
    paparJumlah()
}

function paparJumlah() {
    kosongkanElemen(paparjumlah)

    let p = document.createElement("p")
    p.classList.add("bold")
    p.innerHTML = `RM${hasil}`

    paparjumlah.appendChild(p)
}

function buangBarang(barangUntukDibuang) {

    delete data[barangUntukDibuang]

    kiraHasil()
    renderTroli()
    paparJumlah()
}

function kiraHasil() {
    hasil = 0

    for(let key in data){
        hasil += data[key].harga * data[key].jumlah
    }
}

function renderTroli() {
    kosongkanElemen(troli)
    for(let key in data){
        let div_barang = document.createElement("div")
        let butang = document.createElement("button")
        let i = document.createElement("i")
        div_barang.classList.add("kedua-padding")
        butang.classList.add("buang")
        butang.setAttribute("onclick", `buangBarang('${key}')`)
        i.classList.add("fa-solid")
        i.classList.add("fa-trash")
        butang.appendChild(i)
        i.insertAdjacentHTML("afterend", " Buang")
        div_barang.innerHTML = `${key} (${data[key].jumlah}x) `
        div_barang.appendChild(butang)
        troli.appendChild(div_barang)
    }
}

div
function kosongkanElemen(elemen) {
    while(elemen.firstChild){
        elemen.removeChild(elemen.firstChild)
    }
}