const img = document.querySelector("#lampada");
const texto = document.getElementsByTagName("span")[0];
let estado = "activa";

const lampadaOnClick = (e) => {
    if (e.type === 'click') {
        if (estado === 'activa') onLampada();
    }
}

const lampadaOnHover = (e) => {
    if (e.type === 'mouseenter' || e.type === 'mouseout') {
        if (estado === 'activa') onLampada();
    }
}

const onLampada = () => {
    if (texto.textContent === "Ligar") {
        texto.innerHTML = `Desligar`;
        img.src = "./imgs/ligada.jpg"
    }else {
        texto.innerHTML = `Ligar`;
        img.src = "./imgs/desligada.jpg"
    }
}

const statusLamp = () => {
    estado = "quebrada";
    texto.textContent = "Quebrada";
    img.src = "./imgs/quebrada.jpg";
}


document.getElementById("ligar").addEventListener('click', lampadaOnClick);
img.addEventListener('dblclick', statusLamp);
img.addEventListener('mouseenter', lampadaOnHover);
img.addEventListener('mouseout', lampadaOnHover);
