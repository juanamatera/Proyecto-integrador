window.onload = function () {

var queryString = location.search;
var queryStringObj = new URLSearchParams(queryString);
var id = queryStringObj.get ("IdAlbum")

fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + id)

.then(function(response){
    return response.json()
})

.then(function(resultados){
    console.log(resultados);
        let contenedorAlbum = document.querySelector(".DetalleArtista")
        var detalleAlbum = `<article class="artista">
        <div class="photo-container">
            <img class="photo" src="${resultados.cover_big}" alt="AlbumBadBunny">
        </div> 
        <div>
            <p>ALBUM</p> 
        <div class="artistaClick"> 
                <h2><a href="detallehome.html" class="nombreArtista">${resultados.title}</a> </h2>
        </div>
                <p>${resultados.artist.name}</p>
                <p class="fecha">${resultados.release_date}</p>
                <p class="Seguir">SEGUIR</h2>
        </div>
    </article>`

    contenedorAlbum.innerHTML = detalleAlbum


    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + id + "/tracks")

    .then(function(response){
        return response.json()
    })
    .then(function(resultados){
        console.log(resultados);

        let cancionesArray = resultados.data
        let contenedorCanciones = document.querySelector(".canciones");
        let DivPhotoContainer = '';

        console.log(cancionesArray);

        for (let i = 0; i < 5; i++) {
            let cancion = cancionesArray[i];

            console.log(cancion.duration);
            
            durationMin = Math.floor(cancion.duration/60);
                durationSec = cancion.duration - durationMin*60;
                console.log(durationSec);
                if (durationSec < 10) {
                    durationSec = '0' + durationSec;
                }
            DivPhotoContainer += `
            <div class="a">
            <p class="heart"><i class="fa fa-heart"></i></p>
            <a href="detalletracks.html?IdCancion=${cancion.id}"><p class="titulo">${cancion.title}</p></a>
            <p>${durationMin}: ${durationSec} </p> 
             </div>
            `;
        }        

        contenedorCanciones.innerHTML += DivPhotoContainer
    })
})

.catch(function(error){
    console.error(error)
})


}


