// TIPOS DE DATOS

/*
NODO = cualquier elemento del DOM

Existen los nodos document y element, y comparten dos propiedades

ParentEl = devuelve el elemento padre 
Children = devuelve un listado de los elementos hijos que tenga el elemento seleccionado
*/

/* ------Acceso al documento----------*/
console.log(document);

/*Element del documento*/
const elemento = document.getElementById('cabecera');

// SELECTORES DE NODOS 

/*------------Selector por id---------------------*/
/* getElementById es un método que admite String */

console.log(document.getElementById("cabecera"));

/*------------Selector por clase--------------*/
/* Devuelve un listado del tipo HTMLCollection  de todos los elementos del DOM que tienen esa clase */

console.log(document.getElementsByClassName("border-grey"));

/*------------Selector por etiqueta--------------*/
/*Devuelve un listado de elementos*/

console.log(document.getElementsByTagName("nav"));

/*------------Selector por propiedad-name--------------*/
/* Permite filtrar por las etiquetas cuya propiedad name tenga un valor */

console.log(document.getElementsByName("cabecera"));

// SELECTORES QUERY
/*Admiten como parametros selectores de CSS*/

/*-------------Query Selector----------------- */
/*Selecciona de forma individual (La primera que encuentra de arriba hacia abajo)*/

/*Query selector para id*/
console.log(document.querySelector("#cabecera"));

/*Query selector para clase*/
console.log(document.querySelector(".border-grey"));

/*Query selector para etiqueta*/
console.log(document.querySelector("li"));

/*Query selector byName */
console.log(document.querySelector("[name = cabecera]"));

/*-------------Query Selector All---------------*/
/*Devuelve un listado*/

/*Query selector para id*/
console.log(document.querySelectorAll("#cabecera"));

/*Query selector para clase*/
console.log(document.querySelectorAll(".border-grey"));

/*Query selector para etiqueta*/
console.log(document.querySelectorAll("li"));

/*Query selector byName */
console.log(document.querySelectorAll("[name = cabecera]"));

// TIPOS DE LISTAS 

/*
HTMLCollection es un listado dinámico, por ejemplo:
console.log(document.getElementsByClassName("border-grey"));

NodeList es un listado estático, por ejemplo:
console.log(document.querySelectorAll(".border-grey"));
*/

// CONVERSIÓN DE LISTA A ARRAY 

/*
(Si inspeccionamos en el HTML, dentro de console, se hace lo siguiente)
const listaArray = [...lista1]

Esto convierte un HTMLCollection o un NodeList de una lista a un array de JavaScript
*/

// CREANDO ELEMENTOS 

const titulo = document.createElement('h2');

const textoTitulo2 = document.createTextNode('Nuevo titulo creado para el video');

const comentario = document.createComment('Comentario random');


// CLONANDO ELEMENTOS

const articulo = document.querySelector('article');

const articulo2 = articulo.cloneNode(true);
const articulo1 = articulo.cloneNode(true);
const articulo3 = articulo.cloneNode(true);
const articulo4 = articulo.cloneNode(true);

/*
articulo.cloneNode(true) para clonar el elemento, es decir, 
hacer una copia en memoria en profundidad con todos los 
hijos que contenga, pero no está insertado en el código   
*/

// INSERTANDO ELEMENTOS

//Bloque de referencia, desde este bloque elijo donde lo quiero insertar
const section = document.getElementById('section');

//Inserta el elemento como hijo al final del bloque 
const sectionIns = section.appendChild(articulo1);

//Con este metodo elijo en que posicion lo quiero insertar 

/*BeforeBegin antes de section */
section.insertAdjacentElement('beforebegin', articulo1);

/*BeforeEnd antes de que acabe section, como hijo al final del bloque */
section.insertAdjacentElement('beforeend', articulo2);

/*AfterBegin despues de que comience section, como primer hijo del bloque*/
section.insertAdjacentElement('afterbegin', articulo3);

/*AfterEnd despues de section */
section.insertAdjacentElement('beforeend', articulo4);


// INSERTANDO TEXTO Y CONTENIDO HTML (en este caso titulo) 
section.insertAdjacentHTML("beforebegin", "<h3>Título Clase Hermana Beforebegin</h3>");
section.insertAdjacentText("beforebegin", "Texto Clase Hermana Beforebegin");

section.insertAdjacentHTML("beforeend", "<h3>Título Clase Ultima Hija Beforeend</h3>");
section.insertAdjacentText("beforeend", "Texto Clase Ultima Hija Beforeend");
section.insertAdjacentText("afterbegin", "Texto Clase Primera Hija Afterbegin");
section.insertAdjacentHTML("afterbegin", "<h3>Título Clase Primera Hija Afterbegin</h3>");
section.insertAdjacentText("afterend", "Texto Clase Hermana Afterend");
section.insertAdjacentHTML("afterend", "<h3>Título Clase Hermana Afterend</h3>");


/*--------------------------ELIMINANDO ELEMENTOS-----------------------*/

// ELIMINA EL ELEMENTO ENTERO: section.remove();

/*-------------------------MODIFICANDO ELEMENTOS-----------------------*/ 

// Reemplazo todo contenido dentro de la seccion: section.innerHTML = '<h2>Nuevo titulo</h2>';

// Reemplaza la seccion: section.outerHTML = '<h2>Nuevo titulo</h2>';

// Reemplaza solo la parte que le indico de la seccion: section.children[0].textContent = 'Otro Título Más';
// (en este ejemplo, en la posicion [0] se encuentra la primer clase hija) 


/*--------------------------- MODIFICANDO PROPIEDADES DE ELEMENTOS --------------------------*/
//                               (desde la consola en inspect)


// OBTENER CUALQUIER ATRIBUTO QUE TENGA EL ELEMENTO (ej: del elemento section obtengo el id, que es 'section')

//                           section.getAttribute('id');  Ó    section.id;


// PASAR DOS PARAMETROS PARA CAMBIAR EL VALOR (ej: el id en vez de ser section, será seccion)

//                              section.setAttribute('id', 'seccion');



/*------------------- MODIFICANDO PROPIEDADES DE ELEMENTOS - CSS--------------- */
//                          (desde la consola en inspect)

/*
DEVUELVE UN LISTADO DE LAS CLASES DEL ELEMENTO : section.classList

AGREGO UNA CLASE AL ELEMENTO: section.classList.add('nuevaClase')

ELIMINA UNA CLASE AL ELEMENTO: section.classList.remove('nuevaClase')

INTERRUPTOR - SI NO EXISTE CREARLA, Y SI EXISTE ELIMINARLA: section.classList.toggle('nuevaClase')

DEVUELVE EL STRING DE LA CLASE: section.className
(se suele usar para ver en formato String, no para modificar)

*/


/*------------------------------ AÑADIENDO LISTENERS -------------------------------- */

const clickTitulo = () => {
    console.log("El usuario hizo click en el titulo");
}

const titulo2 = document.getElementById('tituloForm');

titulo2.addEventListener('click', clickTitulo)


/*----------------------------------- EVENTOS --------------------------------------- */

// Evento DOMContentLoaded

/*Se utiliza para detectar cuándo el HTML ha sido completamente cargado y analizado por el 
navegador, lo que significa que todos los elementos HTML han sido descargados y están 
disponibles para su manipulación a través del DOM*/

document.addEventListener('DOMContentLoaded', () =>{
    console.log("El documento se ha cargado");
});


// Evento SUBMIT y elimino comportamiento nativo

/* Se utiliza para detectar cuándo se envía un formulario. */

const form = document.querySelector('#formulario');

const enviarFormulario = (event) => {
    event.preventDefault();

    const {name, email, password} = event.target;
   
    console.log(
        name.value, 
        email.value, 
        password.value
    );

    if (name.value.length === 0) {
        alert("Nombre es un campo obligatorio");
        return; // Detiene la validación si el nombre está vacío
    }
    
    const nombreRegex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/; // Expresión regular para nombre
    if (!nombreRegex.test(name.value)) {
        alert("El nombre contiene caracteres no válidos.");
        return; // Detiene la validación si el nombre contiene caracteres no válidos
    }

    if (email.value.length === 0) {
        alert("Email es un campo obligatorio");
        return; // Detiene la validación si el correo electrónico está vacío
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el correo electrónico
    if (!emailRegex.test(email.value)) {
        alert("El formato del correo electrónico no es válido.");
        return; // Detiene la validación si el correo electrónico no es válido
    }

    if (password.value.length === 0) {
        alert("La contraseña es un campo obligatorio");
        return; // Detiene la validación si la contraseña está vacía
    }
};

form.addEventListener('submit', enviarFormulario);


// Evento Bubbling
/* Describe cómo se propaga un evento a través de los elementos DOM en el árbol de documentos, 
desde el elemento de destino hasta el elemento raíz  */

const seccion = document.querySelector("#seccion");
const tituloForm = document.querySelector("#tituloForm");

tituloForm.addEventListener("click", (event) => {
    console.log(event.bubbles, event.cancelBubble);
    event.stopPropagation();
    console.log(event.bubbles, event.cancelBubble);
    console.log("CLICK EN EL TITULO");
});

seccion.addEventListener("click", () => {
    console.log("CLICK EN LA SECCION");
});

