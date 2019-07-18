let campos = document.querySelectorAll(".campo");
let jog1 = true;
let jog2 = false;
let jogadas = 1;//var p ver o num de jogadas

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
    // if permite que o usuario não mude o X para O depois
    if(event.target.innerHTML == ""){
        event.target.innerHTML = valor;
        jogar();
        validar();
    }
    
}

// codigo verifica se todo array esta cheio 
//usado na condição de empate no jogo - "velha"
function velha(){
    let j = 0;
    for (let i = 0; i <= campos.length - 1; i++){
        if(campos[i].innerHTML != ""){
            j++
            if(j == campos.length){
                alert("velha");
            }
        }
        
    }
}

function clicar() {
    for (let campo of campos) {
        campo.onclick = mudaValor;
    }
    jogar();
}

function validar() {
    if (campos[0].innerHTML == "X" && campos[1].innerHTML == "X" && campos[2].innerHTML == "X") {
        alert("vc")
    } else if (campos[3].innerHTML == "X" && campos[4].innerHTML == "X" && campos[5].innerHTML == "X") {
        alert("vc")
    } else if (campos[6].innerHTML == "X" && campos[7].innerHTML == "X" && campos[8].innerHTML == "X") {
        alert("vc")
    } else if (campos[0].innerHTML == "X" && campos[3].innerHTML == "X" && campos[6].innerHTML == "X") {
        alert("vc")
    } else if (campos[1].innerHTML == "X" && campos[4].innerHTML == "X" && campos[7].innerHTML == "X") {
        alert("vc")
    } else if (campos[2].innerHTML == "X" && campos[5].innerHTML == "X" && campos[8].innerHTML == "X") {
        alert("vc")
    } else if (campos[0].innerHTML == "X" && campos[4].innerHTML == "X" && campos[8].innerHTML == "X") {
        alert("vc")
    } else if (campos[2].innerHTML == "X" && campos[4].innerHTML == "X" && campos[6].innerHTML == "X") {
        alert("vc")
    }
    //  validação bolinha
    else if (campos[0].innerHTML == "O" && campos[1].innerHTML == "O" && campos[2].innerHTML == "O") {
        alert("vc")
    } else if (campos[3].innerHTML == "O" && campos[4].innerHTML == "O" && campos[5].innerHTML == "O") {
        alert("vc")
    } else if (campos[6].innerHTML == "O" && campos[7].innerHTML == "O" && campos[8].innerHTML == "O") {
        alert("vc")
    } else if (campos[0].innerHTML == "O" && campos[3].innerHTML == "O" && campos[6].innerHTML == "O") {
        alert("vc")
    } else if (campos[1].innerHTML == "O" && campos[4].innerHTML == "O" && campos[7].innerHTML == "O") {
        alert("vc")
    } else if (campos[2].innerHTML == "O" && campos[5].innerHTML == "O" && campos[8].innerHTML == "O") {
        alert("vc")
    } else if (campos[0].innerHTML == "O" && campos[4].innerHTML == "O" && campos[8].innerHTML == "O") {
        alert("vc")
    } else if (campos[2].innerHTML == "O" && campos[4].innerHTML == "O" && campos[6].innerHTML == "O") {
        alert("vc")
    }else{
        velha();
    }
}


clicar();