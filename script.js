function tinhLai() {
    const soTien = parseFloat(document.getElementById('soTien').value);
    const laiSuat = parseFloat(document.getElementById('laiSuat').value);
    const kyHan = parseInt(document.getElementById('kyHan').value);
    const tienLai = soTien * (laiSuat / 100) * (kyHan / 12);
    document.getElementById('ketQua').innerText = "Tiền lãi: " + Math.round(tienLai).toLocaleString() + " VND";
}
