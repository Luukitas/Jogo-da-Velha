let campos = document.querySelectorAll(".campo");
let jog1 = true;
let jog2 = false;
let jogadas = 0;//var p ver o num de jogadas

function jogar() {
    if (jog1 == true && jog2 == false) {
        valor = "X";
        jog1 = false;
        jog2 = true;
    }
    else if (jog1 == false && jog2 == true) {
        valor = "O"
        jog1 = true;
        jog2 = false;
    }
    jogadas++;
}


function mudaValor(event) {
    if(jogadas < 10){
        event.target.innerHTML = valor;
        event.target.onclick = null;
        jogar();
        validar();
    }
    if(jogadas >= 10 && validar.call() == false){
        alert('Deu velha');
        limpar();
    }
}

function clicar() {
    for (let campo of campos) {
        campo.onclick = mudaValor;
    }
    jogar();
}

function validar(bloquado) {
    bloquado = false;
    if (campos[0].innerHTML == "X" && campos[1].innerHTML == "X" && campos[2].innerHTML == "X") {
        alert("vc")
        bloquado = true;
    } else if (campos[3].innerHTML == "X" && campos[4].innerHTML == "X" && campos[5].innerHTML == "X") {
        alert("vc")
        bloquado = true;
    } else if (campos[6].innerHTML == "X" && campos[7].innerHTML == "X" && campos[8].innerHTML == "X") {
        alert("vc")
        bloquado = true;
    } else if (campos[0].innerHTML == "X" && campos[3].innerHTML == "X" && campos[6].innerHTML == "X") {
        alert("vc")
        bloquado = true;
    } else if (campos[1].innerHTML == "X" && campos[4].innerHTML == "X" && campos[7].innerHTML == "X") {
        alert("vc")
        bloquado = true;
    } else if (campos[2].innerHTML == "X" && campos[5].innerHTML == "X" && campos[8].innerHTML == "X") {
        alert("vc")
        bloquado = true;
    } else if (campos[0].innerHTML == "X" && campos[4].innerHTML == "X" && campos[8].innerHTML == "X") {
        alert("vc")
        bloquado = true;
    } else if (campos[2].innerHTML == "X" && campos[4].innerHTML == "X" && campos[6].innerHTML == "X") {
        alert("vc")
        bloquado = true;
    }
    //  validação bolinha
    if (campos[0].innerHTML == "O" && campos[1].innerHTML == "O" && campos[2].innerHTML == "O") {
        alert("vc")
        bloquado = true;
    } else if (campos[3].innerHTML == "O" && campos[4].innerHTML == "O" && campos[5].innerHTML == "O") {
        alert("vc")
        bloquado = true;
    } else if (campos[6].innerHTML == "O" && campos[7].innerHTML == "O" && campos[8].innerHTML == "O") {
        alert("vc")
        bloquado = true;
    } else if (campos[0].innerHTML == "O" && campos[3].innerHTML == "O" && campos[6].innerHTML == "O") {
        alert("vc")
        bloquado = true;
    } else if (campos[1].innerHTML == "O" && campos[4].innerHTML == "O" && campos[7].innerHTML == "O") {
        alert("vc")
        bloquado = true;
    } else if (campos[2].innerHTML == "O" && campos[5].innerHTML == "O" && campos[8].innerHTML == "O") {
        alert("vc")
        bloquado = true;
    } else if (campos[0].innerHTML == "O" && campos[4].innerHTML == "O" && campos[8].innerHTML == "O") {
        alert("vc")
        bloquado = true;
    } else if (campos[2].innerHTML == "O" && campos[4].innerHTML == "O" && campos[6].innerHTML == "O") {
        alert("vc")
        bloquado = true;
    }

    if(bloquado == true){
        impedeClick();
    }

}

function impedeClick(){
    for(let campo of campos){
        campo.onclick = null;
    }
}

function limpar(){
    for(let campo of campos){
        campo.onclick = initial;
    }
}



function val() {
    if (jogadas = 10) {
        validar();
    } else {
        alert('Deu velha');
    }
}


clicar();