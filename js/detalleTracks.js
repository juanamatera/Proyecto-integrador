window.onload = function(){

    var queryString = location.search
    var queryStringObj = new URLSearchParams (queryString);

    var id = queryStringObj.get ("IdTrack")

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + id)

    .then(function(response){
        return response.json()
    })

    .then(function(resultados){

        console.log(resultados);
        let contenedorTracks = document.querySelector(".DetalleArtista");

        console.log(resultados.duration);
            
            durationMin = Math.floor(resultados.duration/60);
                durationSec = resultados.duration - durationMin*60;
                console.log(durationSec);
                if (durationSec < 10) {
                    durationSec = '0' + durationSec;
                }

        var DetalleArtista = 
        `<article class="artista">
        <div class="photo-container">
        <a href="detalleAlbum.html?IdAlbum=${resultados.album.id}">
            <img class="photo" src="${resultados.album.cover_big}" alt="PORFA">
        </a>
        </div> 
        <div class="info">
            <p class="cancion">TRACK</p>
            <h1>${resultados.title}</h1> 
            <a href="detallehome.html?artistID=${resultados.artist.id}">
                <p class="artist">${resultados.artist.name}</p>
            </a>
            <p class="duracion">${durationMin}: ${durationSec}</p>
            <a href="detalleAlbum.html?IdAlbum=${resultados.album.id}">
                <p class="nombreAlbum">${resultados.album.title}</p>
            </a>
            <p class="agregar">AÑADIR A PLAYLIST</h2>
            
        </div>
    </article>`

    contenedorTracks.innerHTML = DetalleArtista

    })

    
}