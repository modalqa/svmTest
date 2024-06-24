// Script untuk menampilkan popup dengan username dan password saat tombol di klik
document.getElementById("showCredentialsBtn").addEventListener("click", function() {
    $('#credentialsModal').modal('show'); // Tampilkan modal pop up
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form submit

    // Proses login (contoh sederhana, ganti dengan validasi sesungguhnya)
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if ((username === "sevima" && password === "Password@123") || (username === "" && password === "Password@123")) {
        // Jika login berhasil, redirect ke halaman dashboard
        window.location.href = "dashboard.html";
    }  
    else {
        alert("Login gagal. Coba lagi.");
    }
});
