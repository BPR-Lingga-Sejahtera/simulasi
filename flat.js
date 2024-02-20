function calculateFlatLoan() {
    var metode = document.getElementById('metode').value;
    var loanAmount = parseFloat(document.getElementById("loanAmount").value.replace(/[^\d]/g, '').toString());
    var interestRate = parseFloat(document.getElementById("interestRate").value);
    var loanTerm = parseInt(document.getElementById("loanTerm").value);

    var monthlyInterestRate = interestRate / 100;
    var totalInterest = loanAmount * monthlyInterestRate * loanTerm;
    var totalPayment = loanAmount + totalInterest;
    var monthlyPayment = totalPayment / (loanTerm * 12);
    var principalPayment = loanAmount / (loanTerm * 12);

    if(metode == 'flat'){
        displayFlatResult(monthlyPayment, principalPayment, (monthlyPayment - principalPayment), loanAmount);
    } else {
        metode_efektif(loanAmount, loanTerm * 12, monthlyInterestRate, principalPayment);
    }

}

function displayFlatResult(monthlyPayment, principalPayment, interestPayment, sisa) {
    console.log('test2')
    var resultDiv = document.getElementById("result");
    var tableContent = "<div class='table-responsive'>";
    tableContent += "<table class='table'><thead><tr><th>Bulan</th><th>Angsuran Pokok</th><th>Bunga</th><th>Total Angsuran</th><th>Sisa Pinjaman</th></tr></thead><tbody>";

    var loanTerm = parseInt(document.getElementById("loanTerm").value);
    var totalPayments = loanTerm * 12;
    var totalAmount = 0;

    for (var i = 1; i <= totalPayments; i++) {
        var sisa = parseFloat(sisa - principalPayment);
        tableContent += "<tr><td>" + i + "</td><td>" + formatRupiahIDR(principalPayment)+ "</td><td>" + formatRupiahIDR(interestPayment) + "</td><td>" + formatRupiahIDR(monthlyPayment) + "</td><td>" +  formatRupiahIDR(sisa) + "</td></tr>";
        totalAmount += parseFloat(monthlyPayment);
    }

    tableContent += "</tbody></table></div>";
    resultDiv.innerHTML = tableContent;
}

function formatRupiahIDR(angka) {
    return angka.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}

function metode_efektif(jumlahPinjaman, jangkaWaktu, sukuBunga, pokok){
    var resultDiv = document.getElementById("result");

    var totalBunga = 0;
    var totalAngsuran = 0;
    var totalPinjaman = jumlahPinjaman;

    var tableContent = "<div class='table-responsive'>";
    tableContent += "<table class='table'><thead><tr><th>Bulan</th><th>Angsuran Pokok</th><th>Bunga</th><th>Total Angsuran</th><th>Sisa Pinjaman</th></tr></thead><tbody>";

    for (var i = 1; i <= jangkaWaktu; i++) {
        var bunga = parseFloat(jumlahPinjaman * sukuBunga * (30 / 360));
        var jumlahAngsuran = parseFloat(pokok + bunga);
        var jumlahPinjaman = parseFloat(jumlahPinjaman - pokok);

        totalBunga = parseFloat(totalBunga + bunga);
        totalAngsuran = parseFloat(totalAngsuran + jumlahAngsuran);

        tableContent += "<tr><td>" + i + "</td><td>" + formatRupiahIDR(pokok)+ "</td><td>" + formatRupiahIDR(bunga) + "</td><td>" + formatRupiahIDR(jumlahAngsuran) + "</td><td>" +  formatRupiahIDR(jumlahPinjaman) + "</td></tr>";
    }

    tableContent += "<tr><td>Total</td><td>" + formatRupiahIDR(totalPinjaman)+ "</td><td>" + formatRupiahIDR(totalBunga) + "</td><td>" + formatRupiahIDR(totalAngsuran) + "</td><td></td></tr>";

    console.log(totalBunga)
    console.log(totalAngsuran)

    tableContent += "</tbody></table></div>";
    resultDiv.innerHTML = tableContent;
}