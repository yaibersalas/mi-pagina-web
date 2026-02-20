
const contenido = [
    { url: "https://picsum.photos/id/1/800/400", texto: "IA: ¿El fin de la creatividad humana?" },
    { url: "https://picsum.photos/id/2/800/400", texto: "Algoritmos que aprenden de nosotros" },
    { url: "https://picsum.photos/id/3/800/400", texto: "El futuro del diseño es colaborativo" }
];

let indice = 0;
const imagen = document.getElementById("imagen-slider");
const texto = document.getElementById("texto-slider");

function rotarSlider() {
    indice = (indice + 1) % contenido.length;
    imagen.src = contenido[indice].url;
    texto.textContent = contenido[indice].texto;
}
setInterval(rotarSlider, 3000);


let contador = 0;
const contadorSpan = document.getElementById('contador');
const valorContador = document.getElementById('valorContador');

function actualizarContador() {
    contadorSpan.textContent = contador;
    valorContador.textContent = contador;
}

document.getElementById('btnSumar')?.addEventListener('click', () => {
    contador++;
    actualizarContador();
});

document.getElementById('btnRestar')?.addEventListener('click', () => {
    contador--;
    actualizarContador();
});


document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector(".wrapper");
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel img");
    const buttons = document.querySelectorAll(".button");

    if (!carousel || images.length === 0) return;

    let imageIndex = 1;
    let intervalId;

    const slideImage = () => {
        imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
        carousel.style.transform = `translate(-${imageIndex * 100}%)`;
    };

    const autoSlide = () => {
        intervalId = setInterval(() => {
            imageIndex = (imageIndex + 1) % images.length;
            slideImage();
        }, 2000);
    };

    const updateClick = (e) => {
        clearInterval(intervalId);
        imageIndex += e.target.id === "next" ? 1 : -1;
        slideImage();
        autoSlide();
    };

    autoSlide();


    buttons.forEach((button) => {
        button.addEventListener("click", updateClick);
    });

 
    if (wrapper) {
        wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
        wrapper.addEventListener("mouseleave", autoSlide);
    }
});


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});