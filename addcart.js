let data = {};
let hasil = 0;

function tambahData(dapatkanBarang) {
    if (dapatkanBarang.nama in data) {
        data[dapatkanBarang.nama].jumlah++;
    } else {
        data[dapatkanBarang.nama] = {
            harga: dapatkanBarang.harga,
            jumlah: 1
        };
    }

    kiraHasil();
    renderTroli();
    console.log(data);
    console.log("Jumlah: RM" + hasil.toFixed(2));
    return data;
}

function kiraHasil() {
    hasil = 0;
    for (let key in data) {
        hasil += data[key].harga * data[key].jumlah;
    }
}

function kosongkanElement(elemen) {
    while (elemen.firstChild) {
        elemen.removeChild(elemen.firstChild);
    }
}

function renderTroli() {
    let troli = document.querySelector("#troli");
    if (!troli) return;

    kosongkanElement(troli);

    for (let key in data) {
        let itemContainer = document.createElement("div");
        itemContainer.classList.add("kandungan-kedua");

        let divBarang = document.createElement("div");
        divBarang.textContent = `${key} (${data[key].jumlah}x)`;

        let divButton = document.createElement("div");
        let button = document.createElement("button");
        button.classList.add("buang");

        let icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-trash-can");

        button.appendChild(icon);
        button.appendChild(document.createTextNode(" Buang"));

        // Buang item bila klik
        button.onclick = function() {
            buangItem(key);
        };

        divButton.appendChild(button);

        itemContainer.appendChild(divBarang);
        itemContainer.appendChild(divButton);

        troli.appendChild(itemContainer);
    }

    // Jumlah total
    let jumlahContainer = document.createElement("div");
    jumlahContainer.classList.add("jumlah");

    let pJumlah = document.createElement("p");
    pJumlah.textContent = "Jumlah";

    let pTotal = document.createElement("p");
    pTotal.classList.add("bold");
    pTotal.textContent = "RM" + hasil.toFixed(2);

    jumlahContainer.appendChild(pJumlah);
    jumlahContainer.appendChild(pTotal);

    troli.appendChild(jumlahContainer);
}

function buangItem(nama) {
    if (data[nama]) {
        if (data[nama].jumlah > 1) {
            data[nama].jumlah--;
        } else {
            delete data[nama];
        }
        kiraHasil();
        renderTroli();
    }
}
