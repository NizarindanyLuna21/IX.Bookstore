// Variables
const discover = document.querySelector('#discover');
const carrito = document.querySelector('#carrito')
const favorito = document.querySelector('#favorito')
const buscador = document.querySelector('input[type="search"]')
const librosTop = document.querySelector('#libros-top')
const librosRecomendados = document.querySelector('#libros-recomendados')

document.addEventListener('DOMContentLoaded', () => {

    obtenerLibros();
    obtenerLibrosRec();
    mostrarLibrosMain();
})

// Eventos
addEventListeners();
function addEventListeners() {
}

// Funciones

function obtenerLibros() {
    const url = 'https://openlibrary.org/search.json?q=book';
    const contenedor = librosTop;

    fetch(url) 
        .then(respuesta => { return respuesta.json(); })
        .then(datos => { mostrarLibrosMain(datos.docs,contenedor) })
        .catch(error => {console.log(error)})
}

function obtenerLibrosRec() {
    const url = 'https://openlibrary.org/search.json?q=brandon+sanderson';
    const contenedor = librosRecomendados;

    fetch(url) 
        .then(respuesta => { return respuesta.json(); })
        .then(datos => { 
            console.log(datos.docs)
            mostrarLibrosMain(datos.docs, contenedor) })
        .catch(error => {console.log(error)})
    
}

function mostrarLibrosMain(datos,contenedor) {
    datos.forEach((dato, index)=> {
        const contenedorRec = document.createElement('div')
        const {title, author_name,cover_i} = dato;
        contenedorRec.classList.add ('books-month');

        if(index < 5) {
            contenedorRec.innerHTML = `
                <img class="img-card" src="https://covers.openlibrary.org/b/id/${cover_i}-M.jpg">
                <div class="text-card">
                    <h3>${title}</h3>
                    <p>${author_name}</p>
                    <p>$24.99<span class="span-precio"> $56.99</span></p>
                </div>
                
            `;
            contenedor.appendChild(contenedorRec)
        }

    })
}
