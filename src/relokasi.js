function hitungTotalBiaya() {
    var lokasiAsal = document.getElementById("lokasiAsal").value;
    var lokasiTujuan = document.getElementById("lokasiTujuan").value;
    var jarak = parseFloat(document.getElementById("jarak").value.replace(/\./g, '').replace(',', '.')) || 0;
    var biayaRelokasi = document.getElementById("biayaRelokasi").value.replace(/\D/g, '');
    var estimasiBiayaHidup = document.getElementById("estimasiBiayaHidup").value.replace(/\D/g, '');

    // Validasi input kosong atau non-angka
    if (!lokasiAsal || isNaN(jarak) || isNaN(biayaRelokasi) || isNaN(estimasiBiayaHidup)) {
        document.getElementById("hasil").innerHTML = "<p class='text-danger'>Mohon isi semua field dengan angka!</p>";
        return;
    }

    // Konversi ke angka
    biayaRelokasi = parseFloat(biayaRelokasi);
    estimasiBiayaHidup = parseFloat(estimasiBiayaHidup);

    // Hitung total biaya
    var totalBiaya = biayaRelokasi + (estimasiBiayaHidup * 12);

    // Format ke rupiah
    var formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });

    // Tampilkan hasil
    document.getElementById("hasil").innerHTML = `
        <h4>Hasil Perhitungan:</h4>
        <p><strong>Lokasi Asal:</strong> ${lokasiAsal}</p>
        <p><strong>Lokasi Tujuan:</strong> ${lokasiTujuan}</p>
        <p><strong>Jarak:</strong> ${jarak.toLocaleString()} km</p>
        <p><strong>Biaya Relokasi:</strong> ${formatter.format(biayaRelokasi)}</p>
        <p><strong>Estimasi Biaya Hidup per Bulan:</strong> ${formatter.format(estimasiBiayaHidup)}</p>
        <p><strong>Total Biaya:</strong> ${formatter.format(totalBiaya)}</p>
    `;
}

function tampilkanRumus() {
    document.getElementById("rumusPopup").style.display = "block";
}

function tutupRumus() {
    document.getElementById("rumusPopup").style.display = "none";
}

// Tutup pop-up jika klik di luar area pop-up
window.onclick = function(event) {
    var popup = document.getElementById("rumusPopup");
    if (event.target == popup) {
        popup.style.display = "none";
    }
}