const titulo = document.querySelector("#titulo");
const tempo = document.querySelector("#tempo");
const iniciar = document.querySelector("#iniciar");
const parar = document.querySelector("#parar");
const pausar = document.querySelector("#pausar");
const tema = document.querySelector("#tema");

let intervalo;
let segundos = 0;

function tempoestudo() {
        segundos ++;

        tempo.value = segundos;
    }

iniciar.addEventListener("click", () => {

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
    pausar.style.display = "none";
    parar.style.display = "block";
});

parar.addEventListener("click", () => {

    tema.innerText = "Tarefa parada";

    setTimeout(() => {
        tema.innerText = "";
    }, 3000);

    clearInterval(intervalo);

    pausar.style.display = "block";
    parar.style.display = "none";
});

pausar.addEventListener("click", () => {

    intervalo = setInterval(tempoestudo, 1000);

    pausar.style.display = "none";
    parar.style.display = "block";
});