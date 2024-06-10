document.addEventListener('DOMContentLoaded', function () {
    const salaryForm = document.getElementById('salary-form') || document.getElementById('net-salary-form');
    if (salaryForm) {
        salaryForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Ambil nilai input
            const grossSalaryValue = document.getElementById('gross-salary').value.replace(/[^,\d]/g, '').replace(',', '.');
            const taxValue = document.getElementById('tax').value;
            const otherDeductionsValue = document.getElementById('other-deductions').value.replace(/[^,\d]/g, '').replace(',', '.');

            const grossSalary = grossSalaryValue ? parseFloat(grossSalaryValue) : 0;
            const tax = taxValue ? parseFloat(taxValue) / 100 : 0;
            const otherDeductions = otherDeductionsValue ? parseFloat(otherDeductionsValue) : 0;

            // Hitung potongan pajak
            const taxAmount = grossSalary * tax;

            // Hitung gaji bersih
            const netSalary = grossSalary - taxAmount - otherDeductions;

            // Format ke Rupiah
            const formatter = new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR'
            });

            // Tampilkan hasil
            document.getElementById('net-salary').value = formatter.format(netSalary);
            document.getElementById('results').style.display = 'block';
        });
    }

    // Format input ke Rupiah saat pengguna mengetik
    function formatCurrencyInput(input) {
        const value = input.value.replace(/[^,\d]/g, '');
        const number = new Intl.NumberFormat('id-ID').format(parseFloat(value.replace(',', '.')));
        input.value = number ? `Rp${number}` : '';
    }

    const grossSalaryInput = document.getElementById('gross-salary');
    const otherDeductionsInput = document.getElementById('other-deductions');

    if (grossSalaryInput) {
        grossSalaryInput.addEventListener('input', function () {
            formatCurrencyInput(this);
        });
    }

    if (otherDeductionsInput) {
        otherDeductionsInput.addEventListener('input', function () {
            formatCurrencyInput(this);
        });
    }
});
