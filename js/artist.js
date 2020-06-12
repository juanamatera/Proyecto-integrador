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
    
    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + id + "/top")

    .then(function(response){
        return response.json()
    })
    .then(function(resultados){
        console.log(resultados);

        let canciones = resultados.data
        let contenedorPopulares = document.querySelector(".canciones");

        for (const cancion of canciones) {
            contenedorPopulares.innerHTML += `<a href="detalletracks.html">
            <div class="a">
                <p class="heart"><i class="fa fa-heart"></i></p>
                <p class="titulo"> ${cancion.title}</p>
                <p class="tiempo">${cancion.duration}</p>
            </div>
            </a>`
        }

    })

    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + id + "/albums")


    .then(function(response){
        return response.json()
    })
    .then(function(resultados){
        console.log(resultados);

        let albumesArray = resultados.data
        let contenedorAlbumes = document.querySelector(".TodosLosAlbums");
        let DivPhotoContainer = '';

        console.log(albumesArray);

        for (let i = 0; i < 3; i++) {
            DivPhotoContainer += '<div class="photo-container">';
            DivPhotoContainer +=    '<img class="photo" src="'+ albumesArray[i].cover_big +'" alt="Nibiru"></img>';
            DivPhotoContainer +=    '<h2> '+ albumesArray[i].title +' </h2>';
            DivPhotoContainer +=    '<p>'+ albumesArray[i].release_date +'</p>';
            DivPhotoContainer += '</div>';
        }        

        contenedorAlbumes.innerHTML += DivPhotoContainer
    })

    .catch(function(error){
        console.error(error)
    })



}