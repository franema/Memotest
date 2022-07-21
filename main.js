const $boton = document.querySelector("#boton")
const $imagenes = document.querySelectorAll(".img-thumbnail")
const $form = document.querySelector("form")

$boton.onclick = iniciar


function iniciar() {
    imagenFront = []
    generarOrdenAleatorio()
    clickearImagen()
    setInterval(timer, 1000)
    cambiarImagenBack()
}



function inhabilitarUsuario() {
    document.querySelectorAll(".img-thumbnail").forEach(function ($imagen) {
        $imagen.onclick = function () {

        }
    })
}



function clickearImagen() {
    document.querySelectorAll(".img-thumbnail").forEach(function ($imagen) {
        $imagen.onclick = cambiarImagenFront
    })

}
let imagenViendo = null

function cambiarImagenFront(e) {
    const imagen = e.target
    imagen.src = imagenFront[imagen.id]
    inhabilitarUsuario()

    if (imagenViendo === null) {
        imagenViendo = imagen
        setTimeout(function () {
            clickearImagen()
        }, 500)
        return
    } else if (imagenViendo === imagen) {
        setTimeout(function () {
            clickearImagen()
        }, 500)
        return
    } else if (imagenesSonIguales(imagenViendo, imagen)) {

        setTimeout(function () {
            borrarCorrectas(imagenViendo)
            borrarCorrectas(imagen)
            comprobarSiGane()
            clickearImagen()
            imagenViendo = null
        }, 500)

    } else {
        setTimeout(function () {
            cambiarImagenBack()
            clickearImagen()
        }, 1000)

        imagenViendo = null
    }







}


function cambiarImagenBack() {
    document.querySelectorAll(".img-thumbnail").forEach(function ($imagen) {
        $imagen.src = "img/gatoasesino.jpg"
    })
}

let segundos = 0
function timer() {
    segundos++
    document.querySelector("#reloj").textContent = `Tiempo: ${segundos}`
}

let imagenes = ["img/Suribidet.jpg", "img/Surifabulosa.jpg", "img/Surifall.jpg", "img/Surifutbolista.jpg", "img/Surilangostino.jpg", "img/Suriorigin.jpg", "img/Surisepia.jpg", "img/Suriseria.jpg"]
let imagenesRepetidas = imagenes.concat(imagenes)
let imagenFront = []

function generarOrdenAleatorio() {
    const imagenesAleatorias = imagenesRepetidas.sort(function () {
        return 0.5 - Math.random()
    })

    imagenesAleatorias.forEach(function (imagen, indice) {
        imagenFront.push(imagen)
    })


}


function imagenesSonIguales(imagen1, imagen2) {
    return imagen1.src === imagen2.src
}

function borrarCorrectas(imagen) {
    imagen.id = "oculto"
    imagen.classList.remove("imagen")
}

function comprobarSiGane() {
    if (document.querySelectorAll(".imagen").length === 0) {
        $form.style.display = "none"
        document.querySelector("strong").id = ""
    }

}