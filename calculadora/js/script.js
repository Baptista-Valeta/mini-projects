const mostrar = document.querySelector('.mostrar');
const limparMostrar = document.querySelector('#limparMostrar');
const limparCalculo = document.querySelector('#limparCalculo');
const backspace = document.querySelector('#apagar')
const dividir = document.querySelector('#dividir')
const multiplicar = document.querySelector('#multiplicar')
const adicionar = document.querySelector('#adicionar')
const subtrair = document.querySelector('#subtrair')
const decimal = document.querySelector('#decimal')
const igualdade = document.querySelector('#igual')

const tecla0 = document.querySelector('#tecla0')
const tecla1 = document.querySelector('#tecla1')
const tecla2 = document.querySelector('#tecla2')
const tecla3 = document.querySelector('#tecla3')
const tecla4 = document.querySelector('#tecla4')
const tecla5 = document.querySelector('#tecla5')
const tecla6 = document.querySelector('#tecla6')
const tecla7 = document.querySelector('#tecla7')
const tecla8 = document.querySelector('#tecla8')
const tecla9 = document.querySelector('#tecla9')

const atualizarTela = () => {
    mostrar.textContent += "7"
}

tecla7.addEventListener("click", atualizarTela)