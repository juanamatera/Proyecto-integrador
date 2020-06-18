window.onload = function () {
    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")

    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        var generos = data.data
        var contenedorGeneros = document.querySelector(".generos")
        
        for (let i = 1; i < generos.length; i++) {

            const genero = generos[i];
            
            contenedorGeneros.innerHTML += `
            <div class="photo">
				<a href="detalleGenero.html?genreID=${genero.id}">
                    <img src="${genero.picture_big}">
                </a>
                <h2 class="textoGenero">${genero.name}</h2>
			</div>`
            
        }
    })
    .catch(function(error){
        console.error(error)
    })
    

}