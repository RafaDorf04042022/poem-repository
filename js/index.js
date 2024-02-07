import { connection } from "./Apis_conexion.js";

let obj_global;
export function modificarDivCentral_Comentarios(){
    var title_ofc = document.getElementById('title_ofc');
    title_ofc.innerHTML = "Comentários";
    var poem_ofc = document.getElementById('poem_ofc');
    poem_ofc.innerHTML = '';
    var outrosComentarios = document.createElement('div');
    outrosComentarios.style.display = 'flex';
    outrosComentarios.style.position = 'absolute';
    outrosComentarios.style.width = '94vw';
    outrosComentarios.style.height = '50vh';
    outrosComentarios.style.left = '3vw';
    outrosComentarios.style.top = '32vh';
    outrosComentarios.style.backgroundColor = 'white';
    outrosComentarios.style.borderRadius = '7px';
    document.body.appendChild(outrosComentarios);
    var novoComentario = document.createElement('input');
    novoComentario.type = 'text';
    novoComentario.style.display = 'flex';
    novoComentario.style.position = 'absolute';
    novoComentario.style.width = '40vw';
    novoComentario.style.height = '10vh';
    novoComentario.style.left = '3vw';
    novoComentario.style.top = '83vh';
    novoComentario.style.border = 'none';
    document.body.appendChild(novoComentario);
    var buttomInicio = document.createElement('button');
    var divButtomInicio = document.createElement('div');
    divButtomInicio.style.display = 'flex';
    divButtomInicio.style.position = 'absolute';
    divButtomInicio.style.left = '52vw';
    divButtomInicio.style.top = '85vh';
    buttomInicio.innerHTML = "poema";
    divButtomInicio.appendChild(buttomInicio);
    document.body.appendChild(divButtomInicio);
    var buttomModificado = document.getElementById('modificar');
    buttomModificado.innerHTML = "Comentar";
    function reverse(){
        title_ofc.innerHTML = obj_global.title;
        outrosComentarios.remove();
        novoComentario.remove();
        buttomInicio.remove();
        divButtomInicio.remove();
        buttomModificado.innerHTML = "Comentários";
        poem_ofc.innerHTML = obj_global.poem;
        var author_ofc = document.getElementById('name_ofc');
        author_ofc.innerHTML = obj_global.author;
    }
    buttomInicio.onclick = reverse;
}
export function request_poem(){
    let connection_obj = new connection;
    let promisePoem = connection_obj.retornar_AllPoemas();
    promisePoem.then(resultado =>{

        let random = Math.floor(Math.random()*(resultado.length - 0)+0);
        var obj = resultado[random];
        var poem_ofc = document.getElementById('poem_ofc');
        var author_ofc = document.getElementById('name_ofc');
        var title_ofc = document.getElementById('title_ofc');
        poem_ofc.innerHTML = obj.poem;
        author_ofc.innerHTML = obj.author;
        title_ofc.innerHTML = obj.title;
        obj_global = obj;

    }).catch(error => {
        console.error("Ocorreu um erro: ", error);
    });
}
window.onload = request_poem;
window.modificarDivCentral_Comentarios = modificarDivCentral_Comentarios;
window.request_poem = request_poem;