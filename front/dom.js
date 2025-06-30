//DOM generales
function getUser() {
    user = document.getElementById("inputUser").value;
    return user
}
function getPassword() {
    password = document.getElementById("inputPassword").value;
    return password
}

// dom modals

const modalJugar = document.getElementById("modalJugar")//encuentra con el modalid el elemento //Accder al elemento
const modalRanking = document.getElementById("modalRanking")//encuentra con el modalid el elemento//Accder al elemento
const modalSesion1 = document.getElementById("modalSesion1")//encuentra con el modalid el elemento//Accder al elemento
const modalSesion2 = document.getElementById("modalSesion2")//encuentra con el modalid el elemento//Accder al elemento
const modalFinal = document.getElementById("modalFinal")//encuentra con el modalid el elemento//Accder al elemento
const modalAdmin = document.getElementById("modalAdmin")//encuentra con el modalid el elemento//Accder al elemento
const modalEleccionPeliculas = document.getElementById("modalEleccionPeliculas")
const modalEleccionUsuarios = document.getElementById("modalEleccionUsuarios")
const modalAgregarPelicula = document.getElementById("modalAgregarPelicula")
const modalModificarPelicula = document.getElementById("modalModificarPelicula")
const modalBorrarPelicula = document.getElementById("modalBorrarPelicula")
const modalAgregarUsuario = document.getElementById("modalAgregarUsuario")
const modalModificarUsuario = document.getElementById("modalModificarUsuario")
const modalBorrarUsuario = document.getElementById("modalBorrarUsuario")

//modal cuenta1
function showModalCuenta() {
    if (id_user == -1 || id_user == undefined) {
        closeModalCuenta2()
        showModalCuenta1()
    } else {
        closeModalCuenta1()
        showModalCuenta2()
    }
}
function showModalCuenta1() {
    modalSesion1.showModal()
}
function closeModalCuenta1() {
    modalSesion1.close()
}
//modal cuenta2
function showModalCuenta2() {
    document.getElementById("userLogued").textContent = usernameLogued
    modalSesion2.showModal()
}
function closeModalCuenta2() {
    modalSesion2.close()
}


//modal ranking
function showModalRanking() {
    modalRanking.showModal()
}
function closeModalRanking() {
    modalRanking.close()
}

// MODAL JUGAR
function showModalPlay() {
    if (usernameLogued == "houses") {
        modalAdmin.showModal()
    } else {
        modalJugar.showModal()
    }
}
function closeModalPlay() {
    modalJugar.close()
}



//modal Final
function replaceandshowModalFinal(maxPoint, point) {
    document.getElementById("pointModalFinal").textContent = point
    document.getElementById("maxpointModalFinal").textContent = maxPoint
    showModalFinal()
}
function showModalFinal() {
    modalFinal.showModal()
}
function closeModalFinal() {
    modalFinal.close()
}


//modal admin
function mostrarModalSeleccionOpcionesPeliculas(){
    modalAdmin.close()
    modalEleccionPeliculas.showModal()
}

function mostrarAgregarPelicula(){
    modalEleccionPeliculas.close()
    modalAgregarPelicula.showModal()
}

function mostrarModificarPelicula(){
    modalEleccionPeliculas.close()
    modalModificarPelicula.showModal()
}

function mostrarEliminarPelicula(){
    modalEleccionPeliculas.close()
    modalBorrarPelicula.showModal()
}

function mostrarModalSeleccionOpcionesUsuarios(){
    modalAdmin.close()
    modalEleccionUsuarios.showModal()
}

function mostrarAgregarUsuario(){
    modalEleccionUsuarios.close()
    modalAgregarUsuario.showModal()
}

function mostrarModificarUsuario(){
    modalEleccionUsuarios.close()
    modalModificarUsuario.showModal()
}

function mostrarEliminarUsuario(){
    modalEleccionUsuarios.close()
    modalBorrarUsuario.showModal()
}
// dom index
function changeScreen() {
    if (menu != 0) {
        document.getElementById("playPart").style.display = ''
        document.getElementById("mainMenu").style.display = 'none'
        menu = 0
    } else {
        closeModalFinal()
        document.getElementById("mainMenu").style.display = ''
        document.getElementById("playPart").style.display = 'none'
        menu = 1
    }
}

function replaceSec1(peliculaSec1) {
    console.log(peliculaSec1[0].titulo)
    document.getElementById("namePeli1_0").innerHTML = peliculaSec1[0].titulo
    document.getElementById("namePeli1_1").innerHTML = peliculaSec1[0].titulo
    //modificar imagen de fondo css
}
function replaceSec2(peliculaSec2) {
    document.getElementById("namePeli2_0").innerHTML = peliculaSec2[0].titulo
    document.getElementById("namePeli2_1").innerHTML = peliculaSec2[0].titulo
    //modificar imagen de fondo css
}