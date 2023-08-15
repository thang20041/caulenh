let a = prompt ("Hãy nhập tên của bạn");
let b = +prompt ("Nhập số thu nhập cá nhân (.000.000 VND)");
let c = b*5/100;
let d = b*10/100;
let e = b*15/100;
let f = b*20/100;
let g = b*25/100;
let h = b*30/100;
let j = b*35/100;
if (b<=5000000){
alert ("Thuế thu nhập cá nhân của " + a + " là "  + c + " .VND");
}else if (b>5000000 && b <=10000000){
    alert ("Thuế thu nhập cá nhân của " + a + " là "  + d + " .VND");
}else if (b>10000000 && b<=18000000){
    alert ("Thuế thu nhập cá nhân của " + a + " là "  + e + " .VND");
}else if (b>18000000 && b<=32000000){
    alert ("Thuế thu nhập cá nhân của " + a + " là "  + f + " .VND");
}else if (b>32000000 && b<=52000000){
    alert ("Thuế thu nhập cá nhân của " + a + " là "  + g + " .VND");
}else if (b>52000000 && b<=80000000){
    alert ("Thuế thu nhập cá nhân của " + a + " là "  + h + " .VND");
}else {
    alert ("Thuế thu nhập cá nhân của " + a + " là "  + j + " .VND");
}

