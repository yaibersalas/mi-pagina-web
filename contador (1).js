let contador = 0;
const valorContador = document.getElementById('contador');

document.getElementById('btnSumar').addEventListener('click', () => {
    contador++;
    valorContador.innerText = contador;
});

document.getElementById('btnRestar').addEventListener('click', () => {
    contador--;
    valorContador.innerText = contador;
});
document.getElementById('cambio').addEventListener('click', () => {
     document.getElementById('MiImagen').src='2.jpg';
});