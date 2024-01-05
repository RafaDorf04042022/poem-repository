function modificarDivCentral_Comentarios(){
    var title_ofc = document.getElementById('title_ofc');
    title_ofc.innerHTML = "Comentários";
    var poem_ofc = document.getElementById('poem_ofc');
    poem_ofc.remove();
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
    buttomInicio.innerHTML = "Inicio";
    buttomInicio.onclick = "redirecionarParaOutroArquivo()";
    function redirecionarParaOutroArquivo() {
        window.location.href = '';
    }
    divButtomInicio.appendChild(buttomInicio);
    document.body.appendChild(divButtomInicio);
    var buttomModificado = document.getElementById('modificar');
    buttomModificado.innerHTML = "Comentar";
}