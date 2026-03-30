const tax_rate = 0.10;
const shipping_threshold = 1000;
let subtotal = 0;
let tax = 0;
let shipping = 0;
let grand = 0;

function calculateTotal(q, p) { return q * p; }
function calculateTax(s, r) { return s * r; }
function calculateShipping(s, t) { return (s > t) ? 0 : 40; }
function calculateGrandTotal(s, t, sh) { return s + t + sh; }

function renderCart() {
    const cartBody = document.getElementById("cart-body");
    cartBody.innerHTML = "";
    subtotal = 0;

    for (let i = 0; i < filenames.length; i++) {
        let total = calculateTotal(quantities[i], prices[i]);
        subtotal += total;

        let row = `
        <tr>
            <td><img src="${filenames[i]}" alt="${titles[i]}"></td>
            <td>${titles[i]}</td>
            <td class="center">
                <button onclick="decreaseQuantity(${i})">-</button>
                <span id="qty-${i}">${quantities[i]}</span>
                <button onclick="increaseQuantity(${i})">+</button>
            </td>
            <td class="right">RM${prices[i].toFixed(2)}</td>
            <td class="right" id="total-${i}">RM${total.toFixed(2)}</td>
        </tr>`;
        cartBody.innerHTML += row;
    }

    tax = calculateTax(subtotal, tax_rate);
    shipping = calculateShipping(subtotal, shipping_threshold);
    grand = calculateGrandTotal(subtotal, tax, shipping);

    document.getElementById("subtotal").innerText = "RM" + subtotal.toFixed(2);
    document.getElementById("tax").innerText = "RM" + tax.toFixed(2);
    document.getElementById("shipping").innerText = "RM" + shipping.toFixed(2);
    document.getElementById("grand").innerText = "RM" + grand.toFixed(2);
}

function increaseQuantity(index) {
    quantities[index]++;
    renderCart();
}

function decreaseQuantity(index) {
    if (quantities[index] > 0) {
        quantities[index]--;
        renderCart();
    }
}

// Initial render
window.onload = renderCart;
