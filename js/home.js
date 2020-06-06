
window.onload = function () {

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists")

.then(function(response){
    return response.json()
}).then(function(data){
    console.log(data);
    
        let artistas = data.data.artistas
        let contenedorArtistas = document.querySelector(".artista");
        
        for (const artista of artistas) {
            contenedorArtistas.innerHTML +=`
             
        <div>
        <a href="detallehome.html"> <img class="photo" src="${artista.picture_big}" alt=""></a>
             <div>
                <h2>${artista.name}</h2> </a>
             </div>
        </div>
             
            `
        }
      
})
.catch(function(error){
    console.error(error)
})

}