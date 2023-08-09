function dangnhap() {
    let a = document.getElementById("tk").value;
    let b = document.getElementById("mk").value;
    if (a === "" && b === "") {
        alert("Bạn nhập tài khoản và mật khẩu");
    } else if (a === "admin" && b === "123") {
        alert("Xin chào bạn");
    }else if(b!="123"){
        alert ("Sai mật khẩu");
    }
    else if (a === "") {
        alert("Bạn cần nhập tài khoản");
    } else if (b === "") {
        alert("Nhập mật khẩu");
    } else {
        alert("Bạn chưa có tài khoản");
    }

}
function chuyen(event){
    if (event.target.value === "admin" ){
        document.getElementById ("mk").focus ();
    }
}
