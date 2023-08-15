function kiemtra() {
    let can_nang = +document.getElementById("cannang").value;
    let chieu_cao = +document.getElementById("chieucao").value;
    let result = "";
    if (can_nang === ""&& chieu_cao === "") {
        alert("Bạn cần nhập cân nặng và chiều cao");}
        else if (can_nang !== "" && chieu_cao === ""){
        alert("Nhập chiều cao");}
        else if (can_nang ==="" && chieu_cao !==""){
        alert ("Nhập cân nặng");
    }else {let  bmi = can_nang / (Math.pow(chieu_cao, 2));
     if (bmi < 18.5) {
        result = "Thiếu cân . Ăn thật nhiều vào nhé" + "<img src = 'https://qoobee.com/wp-content/uploads/licking.gif' width='100' height= '100'>";
    } else if (bmi >= 18.5 && bmi < 25.0) {
        result = "Bình thường . Duy Trì nha" + "<img src = 'https://qoobee.com/wp-content/uploads/Love_Emoji_Animated_QooBee_Agapi_2.png' width='100' height= '100'>";
    } else if (bmi >= 25.0 && bmi < 30.0) {
        result = "Thừa cân . Bạn cần điều độ lại" + "<img src = 'https://qoobee.com/wp-content/uploads/Choking_Emoji.gif' width='100' height= '100'>";
    } else {
        result = "Béo phì . Bạn cần giảm cân lại" + "<img src = 'https://qoobee.com/wp-content/uploads/EMO_1231.gif' width='100' height= '100'>";
    }
    document.getElementById("result").innerHTML = "Chỉ số BMI là: " + bmi + ". Bạn " + "<b>"+ result + "</b>";
     document.getElementById ("cannang").value = '';
     document.getElementById ("chieucao").value = '';

}}