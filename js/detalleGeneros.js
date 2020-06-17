window.onload = function (){

    var queryString = location.search
    var queryStringObj = new URLSearchParams (queryString);

    var id = queryStringObj.get ("genreID")

    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + id)

    .then(function(response){
        return response.json()
    })
    .then(function(resultados){

        console.log(resultados);
        let contenedorGenero = document.querySelector(".DetalleGenero");

       var detalleGenero =  ` 
       <div class="genero">
       <img class="photo" src="${resultados.picture_big}" alt="FotoGenero">
         </div>
         <div class="NombreGenero">
         <p>GENERO</p> 
         <h2>${resultados.name}</h2>
         </div>`
        
        contenedorGenero.innerHTML = detalleGenero

        fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + id + '/artist')

        .then(function(response){
            return response.json()
        })

        .then(function(resultados){
            console.log(resultados);
           
            let contenedorArtistas = document.querySelector(".Lista-artistas")

            var detalleArtista =

            `<article class="artista">

            <div class="photo-container">
                    <a href="detalleHome.html?artistID">
                    <img class="photo" src="${resultados.data.picture_big}" alt="amarAzul"> </a>
            </div>

            <div class="Titulo"> 
                    <h2>${resultados.data.name}</h2>
                    <p>Artista</p>
            </div>

            </article>`
        })


        
    })


    .catch(function(error){
        console.error(error)
    })
    
}