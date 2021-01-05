// Bai tap 1
function ketQuaThi(event) {
  event.preventDefault();

  //Input
  var bt1Mon1 = +document.getElementById("bt1Mon1").value;
  var bt1Mon2 = +document.getElementById("bt1Mon2").value;
  var bt1Mon3 = +document.getElementById("bt1Mon3").value;
  var bt1KhuVuc = +document.getElementById("bt1KhuVuc").value;
  var bt1DoiTuong = +document.getElementById("bt1DoiTuong").value;
  var bt1Chuan = +document.getElementById("bt1Chuan").value;

  //Processing
  var bt1Tong = bt1Mon1 + bt1Mon2 + bt1Mon3 + bt1KhuVuc + bt1DoiTuong;
  if (bt1Mon1 <= 0 || bt1Mon2 <= 0 || bt1Mon3 <= 0) {
    document.getElementById("bt1Footer").innerHTML = "Không đậu do điểm liệt";
  } else if (bt1Tong < bt1Chuan) {
    document.getElementById("bt1Footer").innerHTML =
      "Không đậu do điểm tổng " + bt1Tong + " nhỏ hơn điểm chuẩn " + bt1Chuan;
  } else {
    document.getElementById("bt1Footer").innerHTML =
      "Chúc mừng trúng tuyển. Điểm tổng " +
      bt1Tong +
      " cao hơn điểm chuẩn " +
      bt1Chuan;
  }
}

// Bai tap 2
function tinhTienDien(event) {
  event.preventDefault();

  //Input
  var bt2Ten = document.getElementById("bt2Ten").value;
  var bt2KW = +document.getElementById("bt2KW").value;

  //Processing
  var tienDien = 0;
  if (bt2KW >= 0 && bt2KW <= 50) {
    tienDien = bt2KW * 500;
  } else if (bt2KW > 50 && bt2KW <= 100) {
    tienDien = 50 * 500 + (bt2KW - 50) * 650;
  } else if (bt2KW > 100 && bt2KW <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (bt2KW - 100) * 850;
  } else if (bt2KW > 200 && bt2KW <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (bt2KW - 200) * 1100;
  } else if (bt2KW > 350) {
    tienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (bt2KW - 350) * 1300;
  }
  //Output
  document.getElementById("bt2Footer").innerHTML =
    "Số tiền điện tháng này của chủ hộ " + bt2Ten + " là " + tienDien;
}

//Bai tap 3
function tinhTienCap(event) {
  event.preventDefault();

  //Input
  var bt3KhachHang = +document.getElementById("bt3KhachHang").value;
  var bt3SoTaiKhoan = document.getElementById("bt3SoTaiKhoan").value;
  var bt3SoKetNoi = +document.getElementById("bt3SoKetNoi").value;
  var bt3SoKenh = +document.getElementById("bt3SoKenh").value;

  //Processing
  var tienCap = 0;
  if (bt3KhachHang == 1) {
    tienCap = tienCapCaNhan(bt3SoKenh);
  } else if (bt3KhachHang == 2) {
    tienCap = tienCapDoanhNghiep(bt3SoKetNoi, bt3SoKenh);
  }

  //Output
  document.getElementById("bt3Footer").innerHTML =
    "Số tiền cáp khách hàng có số tài khoản " +
    bt3SoTaiKhoan +
    " phải trả là " +
    tienCap +
    " $";
}

function tienCapCaNhan(soKenh) {
  var tongPhiCaNhan = 25 + 7.5 * soKenh;
  return tongPhiCaNhan;
}

function tienCapDoanhNghiep(soKetNoi, soKenh) {
  var tongPhiDichVu = 0;
  if (soKetNoi > 0 && soKetNoi <= 10) {
    tongPhiDichVu = 75;
  } else if (soKetNoi > 10) {
    tongPhiDichVu = 75 + (soKetNoi - 10) * 5;
  }
  var tongPhiDoanhNghiep = 15 + tongPhiDichVu + 50 * soKenh;
  return tongPhiDoanhNghiep;
}
