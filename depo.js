function calculateDepo() {
    var jumlahStoran = parseFloat(document.getElementById("jumlahStoran").value.replace(/[^\d]/g, '').toString());
    var jumlahHari = parseFloat(document.getElementById("jumlahHari").value);
    var sukuBungaDepo = parseFloat(document.getElementById("sukuBungaDepo").value);

    console.log(jumlahHari)

    displayDepoResult(sukuBungaDepo, jumlahStoran, jumlahHari);
}

function displayDepoResult(sukuBungaDepo, jumlahStoran, jumlahHari) {
    var resultDiv = document.getElementById("depo");
    var tableContent = "<div class='table-responsive'>";
    tableContent += "<table class='table'><tbody>";

    var hasil = parseFloat((jumlahStoran * (sukuBungaDepo / 100) * 0.8 * jumlahHari ) / 365);

    tableContent += "<tr><td>Jumlah Storan</td><td>" + formatRupiahIDR(jumlahStoran)+ "</td></tr>";
    tableContent += "<tr><td>Suku Bunga</td><td>" + sukuBungaDepo + "%</td></tr>";
    tableContent += "<tr><td>Tenor (Hari)</td><td>" + jumlahHari + "</td></tr>";
    tableContent += "<tr><td>Bunga Perbulan</td><td>" + formatRupiahIDR(hasil) + "</td></tr>";

    tableContent += "</tbody></table></div>";
    resultDiv.innerHTML = tableContent;
}

function formatRupiahIDR(angka) {
    return angka.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}