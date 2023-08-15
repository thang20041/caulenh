let Sym = "";

function out(a) {
    let Sum = a.target.value
    Sym += Sum;
    document.getElementById('ketqua').value = Sym ;
}

function del() {
    Sym = "";
    document.getElementById('ketqua').value = Sym ;
}

function calculator() {
    Sym = eval(Sym);
    document.getElementById('ketqua').value = Sym;
}