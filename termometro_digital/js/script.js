const text = document.querySelector("#texto");
const barra = document.querySelector("#barra");

let estado = 'apagado';

const alterarInterface = () => {

    barra.classList.remove("frio", "normal", "quente")

    switch(estado) {
        case "apagado":
            text.textContent = "Apagado"
            document.body.style.backgroundColor = "grey";
            break ;
        case "frio":
            text.textContent = "Temperatura Fria"
            barra.classList.add('frio');
            document.body.style.backgroundColor = "#4da6ff9a";        
            break;
        case "normal": 
            text.textContent = "Temperatura Normal"
            barra.classList.add('normal');
            document.body.style.backgroundColor = "#5cd65ca8";
            break;
        case "quente":
            text.textContent = "Temperatura Quente"
            barra.classList.add("quente");
            document.body.style.backgroundColor = "#ff50508f";        
            break;
    }
}

const frio = () => {
    estado = "frio";
    alterarInterface();
}

const normal = () => {
    estado = "normal";
    alterarInterface();
}

const quente = () => {
    estado = "quente";
    alterarInterface();
}

const apagado = () => {
    estado = "apagado";
    alterarInterface();
}

alterarInterface()

document.querySelector("#frio")
    .addEventListener("mouseenter", frio);

document.querySelector("#normal")
    .addEventListener("mouseenter", normal);

document.querySelector("#quente")
    .addEventListener("mouseenter", quente);

document.querySelector(".containerBarra")
    .addEventListener("dblclick", apagado);

