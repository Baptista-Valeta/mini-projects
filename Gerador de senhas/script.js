
let sliderElement = window.document.querySelector("#slider")
let buttonElement = window.document.querySelector("#button") 

let sizePassword = window.document.querySelector("#valor")
let password = window.document.querySelector("#password")

let containerPassword = window.document.querySelector("#containe-password")

let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#&.0123456789'
let novaSenha;

//Mostrar o tamanho dos caracteres
sizePassword.innerHTML = sliderElement.value 

//Função mostrar dinámicamente o tamanho dos caracteres
sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
}

//Função para gerar a senha
let idbutton = window.document.querySelector("button")
idbutton.addEventListener('click', function() {
    let pass = ''

    for(let i = 0, n = charset.length; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n)) 
        //charAt- para pegar uma posição
        //Math.floor- para gerar números inteiros
        //Math.random- para gerar números aleatórios
    }
    console.log(pass)

    containerPassword.classList.remove('hide') //classList- remove o texto definido na css
    password.innerHTML = pass
    novaSenha = pass
})

function CopyPassword() {
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha) //navigator.clipboard.writeText- serve para copiar a senha que está dentro da variável nova senha
}