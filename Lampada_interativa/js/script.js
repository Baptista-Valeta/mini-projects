const img = document.querySelector("#lampada");

const lampada = (e) => {
    // Quando clicar no botão
    if (e.type === 'click') {
        // Alternar o texto do botão
        onLampada();
    }

}

const lampadaOnHover = (e) => {
    if (e.type === 'mouseenter') {
        onLampada();
    }
}

const onLampada = () => {
    const texto = document.getElementsByTagName("span")[0];
        
    if (texto.textContent === "Ligar") {
        texto.innerHTML = `Desligar`;
        img.src = "../imgs/ligada.jpg"
    }else {
        texto.innerHTML = `Ligar`;
        img.src = "../imgs/desligada.jpg"

    }
}

document.getElementById("ligar").addEventListener('click', lampada);
img.addEventListener('mouseenter', onLampada);
img.addEventListener('mouseout', onLampada);