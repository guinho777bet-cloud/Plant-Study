const titulo = document.querySelector("#titulo");
const tempo = document.querySelector("#tempo");
const iniciar = document.querySelector("#iniciar");
const tema = document.querySelector("#tema");

let intervalo;

iniciar.addEventListener("click", () => {

    let segundos = 0;

    if(titulo.value === "") {
        tema.innerText = "Digite o nome do estudo";
        return;
    }

    tema.innerText = "Estudando: " + titulo.value;

    setTimeout(() => {
        tema.innerText = "";
    }, 3000);

    intervalo = setInterval(tempoestudo, 1000);

    function tempoestudo() {
        segundos ++;

        tempo.value = segundos;
    }

    iniciar.style.display = "none";
    parar.style.display = "block";
});