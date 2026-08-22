const titulo = document.querySelector("#titulo");
const tempo = document.querySelector("#tempo");
const iniciar = document.querySelector("#iniciar");
const pausar = document.querySelector("#pausar");
const voltar = document.querySelector("#voltar");
const finalizar = document.querySelector("#finalizar");
const tema = document.querySelector("#tema");

let intervalo;
let segundos = 0;

let estudando = false;

function tempoestudo() {
        segundos ++;

        estudando = true;
        tempo.value = segundos;
    }

iniciar.addEventListener("click", IniciarEstudo);

function IniciarEstudo() {
    if(titulo.value === "") {
        tema.innerText = "Digite o nome do estudo";
        return;
    }
    
    tema.innerText = "Estudando: " + titulo.value;

    setTimeout(() => {
        tema.innerText = "";
    }, 3000);

    intervalo = setInterval(tempoestudo, 1000);

    iniciar.style.display = "none";
    voltar.style.display = "none";
    finalizar.style.display = "none";
    pausar.style.display = "block";
}

pausar.addEventListener("click", PausarEstudo);

function PausarEstudo() {
    tema.innerText = "Tarefa pausada";

    setTimeout(() => {
        tema.innerText = "";
    }, 3000);

    clearInterval(intervalo);

    voltar.style.display = "block";
    finalizar.style.display = "block";
    pausar.style.display = "none";
}

voltar.addEventListener("click", VoltarEstudo);

function VoltarEstudo() {
    intervalo = setInterval(tempoestudo, 1000);

    voltar.style.display = "none";
    finalizar.style.display = "none";
    pausar.style.display = "block";
}

finalizar.addEventListener("click", FinalizarEstudo);

function FinalizarEstudo() {
    if(estudando === false) {
        tema.innerText = "Nenhum estudo foi iniciado.";
        return;
    }

    clearInterval(intervalo);

    segundos = 0;
    tempo.value = segundos;

    estudando = false;
    tema.innerText = "Seu estudo foi finalizado e registrado.";

    setTimeout(() => {
        tema.innerText = "";
    }, 3000);

    finalizar.style.display = "none";
    voltar.style.display = "none";
    iniciar.style.display = "block";
}