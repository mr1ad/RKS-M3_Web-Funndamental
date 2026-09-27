const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    const nama = document.getElementById("nama").value.trim();
    const lahir = document.getElementById("tanggalLahir").value;
    const alamat = document.getElementById("alamat").value.trim();
    const telp = document.getElementById("telepon").value.trim();

    document.querySelectorAll("p").forEach(p => p.textContent = "");

    if (user === "")
        usernameError.textContent = "Username wajib diisi.";
    else if (user.length < 3)
        usernameError.textContent = "Username minimal 3 karakter.";

    if (user === "" || user.length < 3) valid = false;

    if (pass === "")
        passwordError.textContent = "Password wajib diisi.";
    else if (pass.length < 8)
        passwordError.textContent = "Password minimal 8 karakter.";

    if (pass === "" || pass.length < 8) valid = false;

    if (nama === "") {
        namaError.textContent = "Nama wajib diisi.";
        valid = false;
    }

    if (lahir === "") {
        tanggalLahirError.textContent = "Tanggal lahir wajib diisi.";
        valid = false;
    } else if (new Date(lahir) > new Date()) {
        tanggalLahirError.textContent = "Tanggal tidak boleh future.";
        valid = false;
    }

    if (alamat === "") {
        alamatError.textContent = "Alamat wajib diisi.";
        valid = false;
    }

    if (telp === "") {
        teleponError.textContent = "Nomor telepon wajib diisi.";
        valid = false;
    } else if (!telp.startsWith("62")) {
        teleponError.textContent = "Nomor harus diawali 62.";
        valid = false;
    }

    if (valid) window.location.href = "dashboard.html";
});