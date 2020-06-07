
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
                <a href="detallehome.html">
                <img class="photo" src="${artista.picture_medium}" alt="FotoOzuna">  </a>
            </div> 
            <h2>${artista.name}</h2>
            <p>Artista</p>
        </article>

            `
        }
      
})
.catch(function(error){
    console.error(error)
})

}