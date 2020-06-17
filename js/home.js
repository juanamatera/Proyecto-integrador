
window.onload = function () {

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0")

.then(function(response){
    return response.json()
}).then(function(data){
    console.log(data);
    
        let artistas = data.artists.data
        let contenedorArtistas = document.querySelector(".Lista-artistas");
        
        for (const artista of artistas) {
            contenedorArtistas.innerHTML +=`
             
        <article class="artista">
            <div class="photo-container">
                <a href="detallehome.html?artistID=${artista.id}">
                <img class="photo" src="${artista.picture_medium}" alt="FotoOzuna">  </a>
            </div> 
            <h2>${artista.name}</h2>
            <p>Artista</p>
        </article>

            `
        }
    
        let albums = data.albums.data
        let contenedorAlbums = document.querySelector(".Lista-albums");
        
        for (const album of albums) {
            contenedorAlbums.innerHTML += `
             
        <article class="artista">
            <div class="photo-container2">
                <a href="detalleAlbum.html?IdAlbum=${album.id}">
                <img class="photo" src="${album.cover_medium}" alt="FotoOzuna">  </a>
            </div> 
            <h2>${album.title}</h2>
            <p>${album.artist.name}</p>
        </article>

            `
        }
    
        let tracks = data.tracks.data
        let contenedorTracks = document.querySelector(".Lista-tracks");
        
        for (const track of tracks) {
            contenedorTracks.innerHTML +=`
             
        <article class="artista">
            <div class="photo-container">
                <a href="detalleTracks.html?IdTrack=${track.id}"> 
                <img class="photo" src="${track.album.cover_medium}" alt="FotoOzuna">  </a>
            </div> 
            <h2>${track.title}</h2>
            <p>${track.artist.name}</p>
        </article>

            `
        }
      
})
.catch(function(error){
    console.error(error)
})


}