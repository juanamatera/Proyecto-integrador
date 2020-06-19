
window.onload = function () {


if (window.localStorage.getItem ("listId") === null) {

    
    
} else {

    var playlist = JSON.parse (window.localStorage.getItem ("listId"))

    let track = document.querySelector(".canciones")
    
    
    for (const id of playlist) {

        var cancion = JSON.parse (window.localStorage.getItem (`${id}`))
        console.log(cancion)

        durationMin = Math.floor(cancion.duration/60);
                durationSec = cancion.duration - durationMin*60;
                console.log(durationSec);
                if (durationSec < 10) {
                    durationSec = '0' + durationSec;
                }

        track.innerHTML += `
        <div class="a">
        <p class="heart"><i class="fa fa-heart"></i></p>
        <a href="detalleplaylist.html?IdTrack=${cancion.id}">
        <p class="titulo">${cancion.title}</p>
        </a>
        <p class="artista">${cancion.artist.name}</p>
        <p class="tiempo">${durationMin}: ${durationSec}</p>
        </div> `
        
    }


    
}



}