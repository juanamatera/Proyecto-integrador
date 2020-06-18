window.onload = function() {

    var queryString = location.search;
    var queryStringObj = new URLSearchParams(queryString) ;

    var loQueBuscoElUsuario = queryStringObj.get('buscador');

    display:block

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=" + loQueBuscoElUsuario)
    .then(function(data){
        return data.json();
    })

    .then(function(resultados){

        //lo que yo quiera con los resultados

        var spinner = document.querySelector(".cargando");

        setTimeout(function(){spinner.style.display = 'none';}, 2000);

    });

    console.log(resultados);
    var contenido = "";

    for (var i = 0; i < 5; i++) {
        var tracks = resultados.data[i];

        contenido += `
        <ul class="resultadosBusqueda">
            <li>${tracks.title}</li>
        </ul> ` 
    }

    var contenedor = document.querySelector('.resultadosBusqueda')
    contenedor.innerHTML = contenido


.catch(function(error){
    console.log(error)
})

}