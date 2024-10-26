let heartCount = 0; // Menyimpan jumlah hati yang ditambahkan
let resetTimeout; // Menyimpan timer untuk reset hati

document.getElementById('submitBtn').addEventListener('click', function() {
    const outputDiv = document.getElementById('output');
    const inputText = document.getElementById('inputText').value;

    // Clear previous output
    outputDiv.innerHTML = '';

    // Cek apakah input tidak kosong
    if (inputText.trim() === '') {
        alert('Masukkin dulu teks nya baru kirim, sayang!');
        return; // Hentikan eksekusi jika input kosong
    }

    // Menampilkan jawaban otomatis
    const response = "iya aku sayang Yudha";
    const p = document.createElement('p');
    p.textContent = response;
    outputDiv.appendChild(p);

    // Clear the input field
    document.getElementById('inputText').value = '';

    // Tampilkan tombol "Coba pencet!"
    document.getElementById('funBtn').style.display = 'inline-block';

    // Hapus output setelah 1 detik
    setTimeout(function() {
        outputDiv.innerHTML = '';
    }, 1000); // 1000 ms = 1 detik
});

// Fungsi untuk tombol penggangu
document.getElementById('funBtn').addEventListener('click', function() {
    const outputDiv = document.getElementById('output');

    // Clear previous output
    outputDiv.innerHTML = '';

    // Tampilkan instruksi
    const instruction = `Ayo sayang, tekan tombol ini terus! (Sekarang sudah ${heartCount} hati yang ditambahkan)`;
    const p = document.createElement('p');
    p.textContent = instruction;
    p.className = 'instruction';
    outputDiv.appendChild(p);

    // Tambahkan animasi cinta yang meriah
    createHearts();

    // Reset timer jika tombol ditekan
    resetTimer();
});

// Fungsi untuk membuat hati
function createHearts() {
    const body = document.body;
    const heartCountIncrement = 5; // Menentukan berapa banyak hati yang akan ditambahkan setiap kali tombol diklik

    for (let i = 0; i < heartCountIncrement; i++) { // Menampilkan hati sesuai dengan jumlah yang ditentukan
        const heart = document.createElement('div');
        heart.className = 'heart love';
        heart.textContent = '💖'; // Hati berwarna pink
        body.appendChild(heart);

        // Set posisi acak
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = Math.random() * window.innerHeight + 'px';
        
        // Atur ukuran acak
        const size = Math.random() * 30 + 20; // Ukuran antara 20px dan 50px
        heart.style.fontSize = size + 'px';

        // Animasi menghilang
        heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Durasi acak antara 3s dan 5s
        heart.style.opacity = '1';

        // Animasi untuk menghilangkan hati
        setTimeout(function() {
            heart.style.opacity = '0';
            heart.style.transform = `translateY(-100px)`; // Menggerakkan hati ke atas
        }, 1000);

        // Hapus hati setelah animasi selesai
        setTimeout(function() {
            body.removeChild(heart);
        }, 5000); // Hati dihapus setelah 5 detik
    }

    heartCount += heartCountIncrement; // Menambahkan jumlah hati yang telah ditambahkan
}

// Fungsi untuk reset jumlah hati
function resetTimer() {
    clearTimeout(resetTimeout); // Clear existing timer
    resetTimeout = setTimeout(function() {
        heartCount = 0; // Reset heart count
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = ''; // Clear output
        const resetMessage = `Hati sudah direset, sayang. Ayo tekan lagi!`;
        const p = document.createElement('p');
        p.textContent = resetMessage;
        p.className = 'instruction';
        outputDiv.appendChild(p);
        document.getElementById('funBtn').style.display = 'none'; // Sembunyikan tombol jika direset
    }, 5000); // Reset setelah 5 detik
}
