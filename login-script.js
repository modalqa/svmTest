document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Ambil nilai input
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Periksa username dan password
            if (username === 'sevima' && password === 'password') {
                // Jika username dan password benar, redirect ke halaman utama
                window.location.href = 'modul.html';
            } else {
                // Jika username atau password salah, tampilkan pesan kesalahan
                alert('Username or password is incorrect. Please try again.');
            }
        });
    }
});
