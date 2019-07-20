let campos = document.querySelectorAll(".campo");
let jog1 = true;
let jog2 = false;
let valorX = document.getElementById('valorX');
let valorO = document.getElementById('valorO');
let placar1 = 0;
let placar2 = 0;

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
}

function inicializar(){
    jog1 == true;
    jog2 == false;
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
                alert("Caracolis  deu velha !!!");
            }
        }
        
    }
    jog1 == true;
    jog2 == false;
}

function clicar() {
    for (let campo of campos) {
        campo.onclick = mudaValor;
    }
    jogar();
}

function validar() {
    if (campos[0].innerHTML == "X" && campos[1].innerHTML == "X" && campos[2].innerHTML == "X") {
        alert("jogador X ganhou a partida!!!");
        placar1++;
        valorX.innerHTML = placar1.toString();
        ocultarClick();
    } else if (campos[3].innerHTML == "X" && campos[4].innerHTML == "X" && campos[5].innerHTML == "X") {
        alert("jogador X ganhou a partida!!!");
        placar1++;
        valorX.innerHTML = placar1.toString();
        ocultarClick();
    } else if (campos[6].innerHTML == "X" && campos[7].innerHTML == "X" && campos[8].innerHTML == "X") {
        alert("jogador X ganhou a partida!!!");
        placar1++;
        valorX.innerHTML = placar1.toString();
        ocultarClick();
    } else if (campos[0].innerHTML == "X" && campos[3].innerHTML == "X" && campos[6].innerHTML == "X") {
        alert("jogador X ganhou a partida!!!");
        placar1++;
        valorX.innerHTML = placar1.toString();
        ocultarClick();
    } else if (campos[1].innerHTML == "X" && campos[4].innerHTML == "X" && campos[7].innerHTML == "X") {
        alert("jogador X ganhou a partida!!!");
        placar1++;
        valorX.innerHTML = placar1.toString();
        ocultarClick();
    } else if (campos[2].innerHTML == "X" && campos[5].innerHTML == "X" && campos[8].innerHTML == "X") {
        alert("jogador X ganhou a partida!!!");
        placar1++;
        valorX.innerHTML = placar1.toString();
        ocultarClick();
    } else if (campos[0].innerHTML == "X" && campos[4].innerHTML == "X" && campos[8].innerHTML == "X") {
        alert("jogador X ganhou a partida!!!");
        placar1++;
        valorX.innerHTML = placar1.toString();
        ocultarClick();
    } else if (campos[2].innerHTML == "X" && campos[4].innerHTML == "X" && campos[6].innerHTML == "X") {
        alert("jogador X ganhou a partida!!!");
        placar1++;
        valorX.innerHTML = placar1.toString();
        ocultarClick();
    }
    //  validação bolinha
    else if (campos[0].innerHTML == "O" && campos[1].innerHTML == "O" && campos[2].innerHTML == "O") {
        alert("jogador O ganhou a partida!!!");
        placar2++;
        valorO.innerHTML = placar2.toString();
        ocultarClick();
    } else if (campos[3].innerHTML == "O" && campos[4].innerHTML == "O" && campos[5].innerHTML == "O") {
        alert("jogador O ganhou a partida!!!");
        placar2++;
        valorO.innerHTML = placar2.toString();
        ocultarClick();
    } else if (campos[6].innerHTML == "O" && campos[7].innerHTML == "O" && campos[8].innerHTML == "O") {
        alert("jogador O ganhou a partida!!!");
        placar2++;
        valorO.innerHTML = placar2.toString();
        ocultarClick();
    } else if (campos[0].innerHTML == "O" && campos[3].innerHTML == "O" && campos[6].innerHTML == "O") {
        alert("jogador O ganhou a partida!!!");
        placar2++;
        valorO.innerHTML = placar2.toString();
        ocultarClick();
    } else if (campos[1].innerHTML == "O" && campos[4].innerHTML == "O" && campos[7].innerHTML == "O") {
        alert("jogador O ganhou a partida!!!");
        placar2++;
        valorO.innerHTML = placar2.toString();
        ocultarClick();
    } else if (campos[2].innerHTML == "O" && campos[5].innerHTML == "O" && campos[8].innerHTML == "O") {
        alert("jogador O ganhou a partida!!!");
        placar2++;
        valorO.innerHTML = placar2.toString();
        ocultarClick();
    } else if (campos[0].innerHTML == "O" && campos[4].innerHTML == "O" && campos[8].innerHTML == "O") {
        alert("jogador O ganhou a partida!!!");
        placar2++;
        valorO.innerHTML = placar2.toString();
        ocultarClick();
    } else if (campos[2].innerHTML == "O" && campos[4].innerHTML == "O" && campos[6].innerHTML == "O") {
        alert("jogador O ganhou a partida!!!");
        placar2++;
        valorO.innerHTML = placar2.toString();
        ocultarClick();
    }else{
        velha();
    }
}

function ocultarClick(){
    for(let campo of campos){
        //impede o click dps
        campo.onclick = null;
        jog1 = true;
        jog2 = false;
    } 
}

function limpar(){
    for(let campo of campos){
        campo.innerHTML = "";
        clicar();
    }
    
}

function recomecar(){
    limpar();
    if(placar1 > placar2){
        alert('Jogador X ganhou o jogo');
    }else{
        alert('Jogador O ganhou o jogo');
    }
    placar1 = 0;
    placar2 = 0;
    valorX.innerHTML = placar1.toString();
    valorO.innerHTML = placar2.toString(); 
}

clicar();