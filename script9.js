/* lab9.js */
const tax_rate = 0.10;
const shipping_threshold = 1000;
var subtotal = 0;

/* Functions */
function calculateTotal(q, p) { return q * p; }
function calculateTax(s, r) { return s * r; }
function calculateShipping(s, t) { return (s > t) ? 0 : 40; }
function calculateGrandTotal(s, t, sh) { return s + t + sh; }

function outputCurrency(num) {
    document.write("RM" + num.toFixed(2));
}

function outputCartRow(file, title, quantity, price, total) {
    document.write('<tr>');
    // SAYA DAH BUANG "images/" KAT BAWAH NI SUPAYA GAMBAR LILY KELUAR
    document.write('<td><img src="' + file + '" width="80" style="border:1px solid #ddd;"></td>');
    document.write('<td>' + title + '</td>');
    document.write('<td class="center">' + quantity + '</td>');
    document.write('<td class="right">RM' + price.toFixed(2) + '</td>');
    document.write('<td class="right">RM' + total.toFixed(2) + '</td>');
    document.write('</tr>');
}

/* Loop data */
for (var i = 0; i < filenames.length; i++) {
    let total = calculateTotal(quantities[i], prices[i]);
    subtotal += total;
    outputCartRow(filenames[i], titles[i], quantities[i], prices[i], total);
}

var tax = calculateTax(subtotal, tax_rate);
var shipping = calculateShipping(subtotal, shipping_threshold);
var grand = calculateGrandTotal(subtotal, tax, shipping);

