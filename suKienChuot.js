let imgObj = "" ;
let conchut = "";
imgObj = document.getElementById('myImage');
function init() {
    conchut = document.getElementById('myImage1');
    conchut.style.position = 'relative';
    conchut.style.left = '20px';
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}
function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
    conchut.style.left = parseInt (conchut.style.left) + 10 + 'px';
}

window.onload = init;