'use strict'

const display = document.querySelector("#display");
const numeros = document.querySelectorAll('[id*=tecla]'); // Selecione todos os elementos que contenham parte de seu id como tecla
const operadores = document.querySelectorAll('[id*=operador]');
const operDisplay = document.querySelector(".oper");

let novoNumero = true;
let storageOperador;
let storageNumeros;

const atualizarDisplay = (texto) => {
    if(novoNumero) {
        display.textContent = texto;
        novoNumero = false;
    }else
        display.textContent += texto;
}

const inserirNumero = (event) => atualizarDisplay(event.target.textContent);

numeros.forEach (numero => 
    numero.addEventListener('click', inserirNumero) // Para todos os números adiciona um envento de click
)

const atualizarOperador = (o) => {
    operDisplay.textContent = o;
}

const selecionarOperador = (event) => {
    if (!novoNumero) {        
        atualizarOperador(event.target.textContent);
        novoNumero = true
        storageOperador = event.target.textContent; 
        storageNumeros = display.textContent
        console.log(storageOperador, storageNumeros)
    }else {
        
    }
}

operadores.forEach (operador => 
    operador.addEventListener('click', selecionarOperador) // Para todos os números adiciona um envento de click
)
