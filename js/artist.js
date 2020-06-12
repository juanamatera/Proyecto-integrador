window.onload = function (){

    var queryString = location.search
    var queryStringObj = new URLSearchParams (queryString);

    var id = queryStringObj.get ("artistID")

    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + id)

    .then(function(response){
        return response.json()
    })
    .then(function(resultados){

        console.log(resultados);
        let contenedorArtista = document.querySelector(".DetalleArtista");

       var detalleArtista =  `<article class="artista">
                    <div class="photo-container">
                        <img class="photo" src="${resultados.picture_big}" alt="FotoOzuna">
                    </div> 
                    <div>
                        <p>ARTISTA</p> 
                        <h2>${resultados.name}</h2>
                        <p>SEGUIDORES: ${resultados.nb_fan}</p>
                        <p class="Seguir">SEGUIR</h2>
                    </div>
                </article>`
        
        contenedorArtista.innerHTML = detalleArtista

    })

    /*
    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + id + "/top")

    .then(function(response){
        return response.json()
    })
    .then(function(resultados){
        console.log(resultados);

        let cancion = data.resultados.data
        let contenedorPopulares = document.querySelector(".canciones");

        for (const cancion of canciones) {
            contenedorPopulares.innerHTML += `<div class="a">
                    <p class="heart"><i class="fa fa-heart"></i></p>
                    <a href="detalleTracks.html" class="titulo">${resultados.title}</a>
                    <p class="tiempo">${resultados.duration}</p>
                </div>`

    }
*/
   

.catch(function(error){
    console.error(error)
})

}