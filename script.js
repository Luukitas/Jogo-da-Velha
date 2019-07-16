let campos = document.querySelectorAll(".campo");
let jog1 = true;
let jog2 = false; 
let valor;

function jogar(){
    if(jog1 == true && jog2 == false){
        valor = "X";
        jog1 = false;
        jog2 = true;
    }
    else if(jog1 == false && jog2 == true){
        valor = "O"
        jog1 = true;
        jog2 = false;
    }
}

function mudaValor(event) {
    event.target.innerHTML = valor;
}


function clicar() {
    for (let campo of campos) {
        campo.onclick = mudaValor;
    }
    jogar();
}

// function validar() {
//     if (campos[0].innerHTML == "x" && campos[1].innerHTML == "x" && campos[2].innerHTML == "x") {
//         alert("vc")
//     }

// }

