document.addEventListener('DOMContentLoaded', function () {
    const taxCalculatorForm = document.getElementById('tax-calculator-form');

    if (taxCalculatorForm) {
        taxCalculatorForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Ambil nilai input
            const grossSalaryValue = document.getElementById('gross-salary').value.replace(/[^,\d]/g, '').replace(',', '.');
            const taxValue = document.getElementById('tax').value;

            const grossSalary = grossSalaryValue ? parseFloat(grossSalaryValue) : 0;
            const tax = taxValue ? parseFloat(taxValue) / 100 : 0;

            // Hitung jumlah pajak
            const taxAmount = grossSalary * tax;

            // Format ke Rupiah
            const formatter = new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR'
            });

            // Tampilkan hasil
            document.getElementById('tax-amount').value = formatter.format(taxAmount);
            document.getElementById('results').style.display = 'block';
        });
    }
});
