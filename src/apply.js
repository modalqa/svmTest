document.getElementById("applicationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form submit

    // Validasi email
    var emailInput = document.getElementById("email").value;
    if (!validateEmail(emailInput)) {
        document.getElementById("email").classList.add("is-invalid");
        return;
    } else {
        document.getElementById("email").classList.remove("is-invalid");
    }

    // Validasi URL
    var urlInput = document.getElementById("cv").value;
    if (!validateURL(urlInput)) {
        document.getElementById("cv").classList.add("is-invalid");
        return;
    } else {
        document.getElementById("cv").classList.remove("is-invalid");
    }

    // Simulasi pengiriman data, bisa diganti dengan AJAX untuk pengiriman yang sebenarnya
    setTimeout(function() {
        alert("Terima kasih! Aplikasi Anda berhasil dikirim.");
        window.location.href = "dashboard.html"; // Redirect ke halaman utama setelah mengirim
    }, 1000); // Menggunakan setTimeout untuk simulasi, 1000ms = 1 detik
});

// Fungsi validasi email
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Fungsi validasi URL
function validateURL(url) {
    var re = /(ftp|http|https):\/\/[^ "]+/;
    return re.test(url);
}