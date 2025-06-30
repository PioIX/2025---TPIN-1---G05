//DOM generales
function getUser() {
    user = document.getElementById("inputUser").value;
    return user
}

function getPassword() {
    password = document.getElementById("inputPassword").value;
    return password
}

function getIdPeliculas(){
    let id_pelicula = document.getElementById("opcionesPeliculas").value
    return id_pelicula
}

function getIdUsuario(){
    let id_usuario = document.getElementById("opcionesUsuarios").value
    return id_usuario
}

function getTitle(){
    let title = document.getElementById("title").value
    return title
}

function getGanancia(){
    let ganancia = document.getElementById("ganancia").value
    return ganancia
}

function getVotoEspectadores(){
    let voto_espectadores = document.getElementById("voto_espectadores").value
    return voto_espectadores
}

function getAño(){
    let año = document.getElementById("año").value
    return año
}

function getLink(){
    let link = document.getElementById("link").value
    return link
}

function getUsername(){
    let username = document.getElementById("username").value
    return username
}

function getPasswordAdmin(){
    let password = document.getElementById("password").value
    return password
}

function getRecord(){
    let record = document.getElementById("record").value
    return record
}
// dom modals

const modalJugar = document.getElementById("modalJugar")//encuentra con el modalid el elemento //Accder al elemento
const modalRanking = document.getElementById("modalRanking")//encuentra con el modalid el elemento//Accder al elemento
const modalSesion1 = document.getElementById("modalSesion1")//encuentra con el modalid el elemento//Accder al elemento
const modalSesion2 = document.getElementById("modalSesion2")//encuentra con el modalid el elemento//Accder al elemento
const modalFinal = document.getElementById("modalFinal")//encuentra con el modalid el elemento//Accder al elemento
const modalAdmin = document.getElementById("modalAdmin")
const administerPelicula = document.getElementById("administerPelicula")
const administerUser = document.getElementById("administerUser")

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
function openAdministerPelicula(){
    closemodalAdmin()
    administerPelicula.showModal()
}

function openAdministerUser(){
    closemodalAdmin()
    administerUser.showModal()
}
function openModalAdmin(){
    modalAdmin.showModal()
}
function closeAdministerPelicula(){
    administerPelicula.close()
}

function closeAdministerUser(){
    closemodalAdmin()
    administerUser.close()
}
function closemodalAdmin(){
    modalAdmin.close()
}
// dom index
function changeScreen() {
    if(id_user<0){
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
    }else{
        alert("Inicie Sesion para poder jugar")
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