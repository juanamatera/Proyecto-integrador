window.onload = function (){

    var queryString = location.search
    var queryStringObj = new URLSearchParams (queryString);

    var id = queryStringObj.get ("artistID")

    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + id)

    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data);
    })

    .catch(function(error){
        console.error(error)
    })
}