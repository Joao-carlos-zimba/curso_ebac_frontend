document,addEventListener('DOMContentLoaded', function() {
    const nomeElemento = document.querySelector('#nome');
    const nomeusuarioElemento = document.querySelector('#nomeusuario');
    const avatarElemento = document.querySelector('#avatar');
    const repositorioElemento = document.querySelector('#repositorio');
    const seguidoresElemento = document.querySelector('#seguidores');
    const seguindoElemento = document.querySelector('#seguindo');
    const linkElemento = document.querySelector('#link');

    fetch('https://api.github.com/users/joao-carlos-dev')
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        nomeElemento.innerHTML = json.name;
        nomeusuarioElemento.innerHTML = json.login;
        avatarElemento.src = json.avatar_url;
        seguidoresElemento.innerHTML = json.following;
        seguindoElemento.innerHTML = json.followers;
        repositorioElemento.innerHTML = json.public_repos;
        linkElemento.href = json.html_url;
    })
})