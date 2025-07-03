async function fetchGetPeliculas(id_pelicula, parametro) {
    try {
        response = await fetch(`http://localhost:4000/peliculas?id_pelicula=${id_pelicula}&parametro=${parametro}`, {
            method: "GET", //GET, POST, PUT o DELETE
            headers: {
                "Content-Type": "application/json",
            },
        })
        let result = await response.json();
        return result
    } catch (error) {
        alert("Hubo un error: ")
    }

}

async function fetchPostPeliculas(titulo, ganancia, link, voto_espectadores, año) {
    let datos = {
        titulo: titulo,
        ganancia: ganancia,
        link: link,
        voto_espectadores: voto_espectadores,
        año: año
    };
    try {
        response = await fetch(`http://localhost:4000/insertarPeliculas`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),
        });
        console.log(response);
        let result = await response.json();
        console.log(result);
        alert(result.mensaje);
    } catch (error) {
        alert("Hubo un error: ");
    }
}

async function fetchBorrarPeliculas(id_pelicula) {
    let datos = {
        id_pelicula: id_pelicula
    };
    try {
        response = await fetch(`http://localhost:4000/borrarPeliculas`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),
        });
        console.log(response);
        let result = await response.json();
        console.log(result);
        alert("Se borró");
    } catch (error) {
        alert("Hubo un error: ");
    }
}

// Fetchs de los usuarios

async function fetchGetUsersId(username, password) {
    try {
        response = await fetch(`http://localhost:4000/users?username=${username}&password=${password}`, {
            method: "GET", //GET, POST, PUT o DELETE
            headers: {
                "Content-Type": "application/json",
            },
        })
        let result = await response.json();
        console.log(result)

        return result.res
    } catch (error) {
        alert("Hubo un error: ")
    }

}

async function fetchGetUsersRanking() {
    try {
        response = await fetch(`http://localhost:4000/usersRanking`, {
            method: "GET", //GET, POST, PUT o DELETE
            headers: {
                "Content-Type": "application/json",
            },
        })
        let result = await response.json();
        return result
    } catch (error) {
        alert("Hubo un error: ")
    }

}


async function llenarDatosRanking() {
    let tabla = document.getElementById("tabla").innerHTML
    let resulto = await fetchGetUsersRanking();
    for (let i = 0; i < resulto.length; i++) {
        tabla += `<tr>
            <td><p>${resulto[i].username}</p></td>
            <td><p>${resulto[i].record}</p></td>
            </tr>`
    }
    document.getElementById("tabla").innerHTML = tabla;
}
llenarDatosRanking()

async function fetchPostInsertUser(username, password) {
    let datos = {
        username: username,
        password: password
    };
    try {
        response = await fetch(`http://localhost:4000/insertUser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),
        });
        let result = await response.json();
        console.log(result);
        return result
    } catch (error) {
        alert("Hubo un error: ");
    }
}

async function fetchGetRecordPuntaje(id) {
    try {
        response = await fetch(`http://localhost:4000/recordPuntaje?id_usuario=${id}`, {
            method: "GET", //GET, POST, PUT o DELETE
            headers: {
                "Content-Type": "application/json",
            },
        })
        let result = await response.json();
        return result
    } catch (error) {
        alert("Hubo un error: ")
    }

}

async function llenarDatosPersonal(id_user) {   //Recibe el id de usuario del jugador logueado
    let puntajeJugador = await fetchGetRecordPuntaje(id_user);
    document.getElementById("puntajePropio").innerText = puntajeJugador[0].record
}

async function fetchPutRecord(puntaje, id_usuario) {
    try {
        let datos = {
            puntaje: puntaje,
            id_usuario: id_usuario
        }
        response = await fetch(`http://localhost:4000/record`, {
            method: "PUT", //GET, POST, PUT o DELETE
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos)
        })
        let result = await response.json();
        alert("Se modifico")
        return result
    } catch (error) {
        alert("Hubo un error: ")

    }
}

async function fetchGetAllMovies() {
    try {
        response = await fetch(`http://localhost:4000/getAllMovies`, {
            method: "GET", //GET, POST, PUT o DELETE
            headers: {
                "Content-Type": "application/json",
            },
        })
        let result = await response.json();
        return result
    } catch (error) {
        alert("Hubo un error: ")
    }
}

async function fetchGetAllUsers() {
    try {
        response = await fetch(`http://localhost:4000/getAllUsers`, {
            method: "GET", //GET, POST, PUT o DELETE
            headers: {
                "Content-Type": "application/json",
            },
        })
        let result = await response.json();
        return result
    } catch (error) {
        alert("Hubo un error: ")
    }
}

async function llenarDatosPeliculasPut() {
    let opciones = document.getElementById("opcionesPeliculasPut").innerHTML
    let result = await fetchGetAllMovies()
    for (let i = 0; i < result.length; i++) {
        opciones += `<option value = ${result[i].id_pelicula}>"${result[i].titulo}"</option>`
    }
    document.getElementById("opcionesPeliculasPut").innerHTML = opciones
}

async function llenarDatosPeliculasDelete() {
    let opciones = document.getElementById("opcionesPeliculasDelete").innerHTML
    let result = await fetchGetAllMovies()
    for (let i = 0; i < result.length; i++) {
        opciones += `<option value = ${result[i].id_pelicula}>"${result[i].titulo}"</option>`
    }
    document.getElementById("opcionesPeliculasDelete").innerHTML = opciones
}

async function llenarDatosUsuariosPut() {
    let opciones = document.getElementById("opcionesUsuariosPut").innerHTML
    let result = await fetchGetAllUsers()
    console.log(result)
    for (let i = 0; i < result.length; i++) {
        opciones += `<option value = ${result[i].id_usuario}>${result[i].username}</option>`
    }
    console.log(opciones)
    document.getElementById("opcionesUsuariosPut").innerHTML = opciones
}

async function llenarDatosUsuariosDelete() {
    let opciones = document.getElementById("opcionesUsuariosDelete").innerHTML
    let result = await fetchGetAllUsers()
    console.log(result)
    for (let i = 0; i < result.length; i++) {
        opciones += `<option value = ${result[i].id_usuario}>${result[i].username}</option>`
    }
    console.log(opciones)
    document.getElementById("opcionesUsuariosDelete").innerHTML = opciones
}

async function fetchPutUsuarios(id_usuario, username, password, record) {
    try {
        let datos = {
            id_usuario: id_usuario,
            username: username,
            password: password,
            record: record
        }
        response = await fetch(`http://localhost:4000/changeUser`, {
            method: "PUT", //GET, POST, PUT o DELETE
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos)
        })
        let result = await response.json();
        alert("Se modifico")
        return result
    } catch (error) {
        alert("Hubo un error: ")

    }
}

async function fetchPostUsuarios(username, password, record) {
    let datos = {
        username: username,
        password: password,
        record: record
    };
    try {
        response = await fetch(`http://localhost:4000/insertUserAdmin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),
        });
        let result = await response.json();
        console.log(result);
        return result
    } catch (error) {
        alert("Hubo un error: ");
    }
}

async function fetchDeleteUsuarios(id_usuario){
    let datos = {
        id_usuario: id_usuario
    }
    try {
        response = await fetch(`http://localhost:4000/deleteUser`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),
        });
        let result = await response.json();
        console.log(result);
        return result
    } catch (error) {
        alert("Hubo un error: ");
    }
}

async function fetchPutPeliculas(id_pelicula, titulo, ganancia, link, voto_espectadores, año) {
    try {
        let datos = {
            id_pelicula: id_pelicula,
            titulo: titulo,
            ganancia: ganancia,
            link: link,
            voto_espectadores: voto_espectadores,
            año: año

        }
        response = await fetch(`http://localhost:4000/changeMovie`, {
            method: "PUT", //GET, POST, PUT o DELETE
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos)
        })
        let result = await response.json();
        alert("Se modifico")
        return result
    } catch (error) {
        alert("Hubo un error: ")

    }
}

//El pedido para borrar y añadir peliculas ya están hechos