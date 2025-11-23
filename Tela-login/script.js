let indexSlide = 1;
showSlides(indexSlide);

function clickPoint(n) {
   showSlides(indexSlide = n);
}

function showSlides(n) {
   let i;
   let slides = document.querySelectorAll(".slide"); // Seleciona todos os elementos com classe "slide"
   let points = document.querySelectorAll(".point-circular"); // Seleciona todos os pontos

   // Ajusta o índice se estiver fora dos limites
   if (n > slides.length) { indexSlide = 1; }
   if (n < 1) { indexSlide = slides.length; }

   // Oculta todos os slides
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }

   // Remove a classe "active" de todos os pontos
   for (i = 0; i < points.length; i++) {
      points[i].className = points[i].className.replace(" active", ""); // Espaço antes de "active" para evitar falsos positivos
   }

   // Exibe o slide atual e ativa o ponto correspondente
   slides[indexSlide - 1].style.display = "block";
   points[indexSlide - 1].className += " active"; // Adiciona a classe "active" ao ponto

}

// Automatiza o slideshow a cada 10 segundos
setInterval(() => {  
   indexSlide++;
   showSlides(indexSlide);
}, 3000); // 3000 milissegundos = 3 segundos


// Mostrar senha do formulario de login

let look = document.querySelector(".icon-look");
let noLook = document.querySelector(".icon-noLook");
let password = document.querySelector("#password");

// Mostrar o texto da caixa de password
noLook.addEventListener("click", ()=> {
   password.type = "text";
   noLook.classList.add("active");
   look.classList.remove('active');
});

// Ocultar o texto da caixa password
look.addEventListener("click", ()=> {
   password.type = "password";
   look.classList.add("active");
   noLook.classList.remove("active");
});


// Mostrar senha do formulario de registrar

let look2 = window.document.querySelector('#icon-look2');
let noLook2 = document.querySelector("#icon-noLook2");

let password2 = document.getElementsByName("senha")[0];

// Mostrar o texto da caixa de password
noLook2.addEventListener("click", ()=> {
   password2.type = "text";
   noLook2.classList.add("active");
   look2.classList.remove('active');
});

// Ocultar o texto da caixa password
look2.addEventListener("click", ()=> {
   password2.type = "password";
   look2.classList.add("active");
   noLook2.classList.remove("active");
});



// Alternar entre ativar o formulario para registrar e o formulario para login
let loginForm = document.querySelector(".login");
let registerForm = document.querySelector('.register');

function register() {
   loginForm.classList.add("active");
   registerForm.classList.remove("active")
}

function login() {
   loginForm.classList.remove("active");
   registerForm.classList.add("active")
}

// Botao register do formulario para registrar

let username = document.querySelector("#username2");

document.querySelector("#btn-register").addEventListener("click", () => {
   if(!username.value) {

   }else {
      alert(`Seja Bem-Vindo ao Sistema, ${username.value}`);

   }
});