// Variables
const discover = document.querySelector('#discover');
const carrito = document.querySelector('#carrito')
const favorito = document.querySelector('#favorito')
const buscador = document.querySelector('input[type="search"]')
const librosTop = document.querySelector('#libros-top')

document.addEventListener('DOMContentLoaded', () => {

    obtenerLibros();
    mostrarLibrosMain();

})

// Eventos
addEventListeners();
function addEventListeners() {
}

// Funciones

function obtenerLibros() {
    const url = 'https://openlibrary.org/search.json?q=book';

    fetch(url) 
        .then(respuesta => {
            return respuesta.json();
        })
        .then(datos => {
            mostrarLibrosMain(datos.docs)
            console.log(datos.docs)
        })
        .catch(error => {console.log(error)})
    
}

function mostrarLibrosMain(datos){
    
    datos.forEach((dato, index)=> {
        const contenedorHTML = document.createElement('div')
        const {title, author_name,cover_i} = dato;
        contenedorHTML.classList.add = 'books-month';

        if(index < 5) {
            contenedorHTML.innerHTML = `
                <img class="img-card" src="https://covers.openlibrary.org/b/id/${cover_i}-M.jpg">
                <div class="text-card">
                    <h3>${title}</h3>
                    <p>${author_name}<p>
                    <p>$24.99<span class="span-precio"> $56.99</span></p>
                <div>
                
            `;
            librosTop.appendChild(contenedorHTML)
        }

    })

}


// <img src="https://covers.openlibrary.org/b/isbn/9780385533225-S.jpg" />
// https://covers.openlibrary.org/b/$key/$value-$size.jpg