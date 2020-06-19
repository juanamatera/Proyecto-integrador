window.onload = function(){

    var queryString = location.search
    var queryStringObj = new URLSearchParams (queryString);

    var id = queryStringObj.get ("IdTrack")

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + id)

    .then(function(response){
        return response.json()
    })

    .then(function(resultados){
        console.log(resultados)
        var contenedorArtista = document.querySelector(".DetalleArtista") 
        
        durationMin = Math.floor(resultados.duration/60);
        durationSec = resultados.duration - durationMin*60;
        console.log(durationSec);
        if (durationSec < 10) {
            durationSec = '0' + durationSec;
        }

        
        contenedorArtista.innerHTML = `
        <article class="artista">
                <div class="photo-container">
                    <iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=true&width=300&height=300&color=F7BFBE&layout=dark&size=medium&type=tracks&id=${resultados.id}&app_id=1" width="300" height="300"></iframe>
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
                    <p class="eliminar">ELIMINAR CANCION</p>
                
                    
                </div>
            </article>`

    })


    

   
   
   
   
    
}