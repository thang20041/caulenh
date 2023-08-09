function check_month() {
  let month = document.getElementById("month").value;
    let result = "";
if (month === thang_1 || month === thang_3 || month === thang_5 || month === thang_7 || month === thang_8 || month === thang_10 || month === thang_12) {
result = "Tháng " + month + " có 31 ngày";
} else if (month === thang_4 || month === thang_6 || month === thang_9 || month === thang_11) {
result = "Tháng " + month + " có 30 ngày"
} else if (month === thang_2) {
result = "Tháng " + month + " có 28 hoặc 29 ngày"
} else {
result = "Vui lòng nhập lại tháng"
 }
}