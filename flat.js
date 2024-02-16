function calculateFlatLoan() {
    var loanAmount = parseFloat(document.getElementById("loanAmount").value.replace(/[^\d]/g, '').toString());
    var interestRate = parseFloat(document.getElementById("interestRate").value);
    var loanTerm = parseInt(document.getElementById("loanTerm").value);

    var monthlyInterestRate = interestRate / 100;
    var totalInterest = loanAmount * monthlyInterestRate * loanTerm;
    var totalPayment = loanAmount + totalInterest;
    var monthlyPayment = totalPayment / (loanTerm * 12);
    var principalPayment = loanAmount / (loanTerm * 12);

    displayFlatResult(monthlyPayment, principalPayment, (monthlyPayment - principalPayment), loanAmount);
}

function displayFlatResult(monthlyPayment, principalPayment, interestPayment, sisa) {
    var resultDiv = document.getElementById("result");
    var tableContent = "<div class='table-responsive'>";
    tableContent += "<table class='table'><thead><tr><th>Bulan</th><th>Angsuran Pokok</th><th>Bunga</th><th>Total Angsuran</th><th>Sisa Pinjaman</th></tr></thead><tbody>";

    var loanTerm = parseInt(document.getElementById("loanTerm").value);
    var totalPayments = loanTerm * 12;
    var totalAmount = 0;

    for (var i = 1; i <= totalPayments; i++) {
        var sisa = parseFloat(sisa - principalPayment);
        console.log(sisa)
        tableContent += "<tr><td>" + i + "</td><td>" + formatRupiahIDR(principalPayment)+ "</td><td>" + formatRupiahIDR(interestPayment) + "</td><td>" + formatRupiahIDR(monthlyPayment) + "</td><td>" +  formatRupiahIDR(sisa) + "</td></tr>";
        totalAmount += parseFloat(monthlyPayment);
    }

    tableContent += "</tbody></table></div>";
    resultDiv.innerHTML = tableContent;
}

function formatRupiahIDR(angka) {
    return angka.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}