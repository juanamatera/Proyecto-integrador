window.onload = function () {
    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")

    .then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data);
        var generos = data.data
        var contenedorGeneros = document.querySelector(".generos")
        
        generos.forEach(genero=> {
            contenedorGeneros.innerHTML += `
            <div class="photo">
				<a href="detalleGenero.html">
                    <img src="${genero.picture_big}">
                </a>
                <p class="textoGenero">${genero.name}</p>
			</div>
				
            `
            
        });
    })
    .catch(function(error){
        console.error(error)
    })
    

}