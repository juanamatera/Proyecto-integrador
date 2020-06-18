window.onload = function () {

    var queryString = location.search;
    var queryStringObj = new URLSearchParams(queryString);

    var loQueBuscoElUsuario = queryStringObj.get('buscador');

    var spinner = document.querySelector(".contenedor-busqueda").style.display = "block";

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=" + loQueBuscoElUsuario)
        .then(function (data) {
            return data.json();
        })

        .then(function (resultados) {

            var spinner = document.querySelector(".cargando");

            spinner.style.display = 'none';


            console.log(resultados);
            var contenido = "";

            for (var i = 0; i < 5; i++) {
                var artistas = resultados.data[i];

                contenido += ` <a href="" class="artista">
                <div class="photo-container"> 
                    <img src="${artistas.picture_big}" alt="">
                </div>
                <h3>${artistas.name}</h3>
            </a>
         `
            }

            var contenedor = document.querySelector('.ListaArtistas')
            contenedor.innerHTML = contenido

        })

        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=" + loQueBuscoElUsuario)
        .then(function (data) {
            return data.json();
        })

        .then(function (resultados) {

            console.log(resultados);
            var contenido = "";

            for (var i = 0; i < 5; i++) {
                var albums = resultados.data[i];

                contenido += ` <a href="" class="album">
                <div class="photo-container"> 
                    <img src="${albums.cover_big}" alt="">
                </div>
                <h3>${albums.title}</h3>
            </a>
         `
            }

            var contenedor = document.querySelector('.ListaAlbums')
            contenedor.innerHTML = contenido

        })

        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=" + loQueBuscoElUsuario)
        .then(function (data) {
            return data.json();
        })

        .then(function (resultados) {

            console.log(resultados);
            var contenido = "";

            for (var i = 0; i < 5; i++) {
                var tracks = resultados.data[i];

                contenido += ` <a href="" class="track">
                <div class="photo-container"> 
                    <img src="${tracks.album.cover_big}" alt="">
                </div>
                <h3>${tracks.title}</h3>
            </a>
         `
            }

            var contenedor = document.querySelector('.ListaTracks')
            contenedor.innerHTML = contenido

        })

        .catch(function (error) {
            console.log(error)
        })

}