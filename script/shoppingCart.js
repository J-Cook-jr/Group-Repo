document.addEventListener('DOMContentLoaded', function() {
    let favoritesListJSON = localStorage.getItem('watchlist');
    let favoritesList = JSON.parse(favoritesListJSON)
    let movieHtmlArray = favoritesList.map(function (currentMovie) {
        return `
        <div class="card-body">
            <img src="${currentMovie.Poster}">
            <h3 class="card-text mx-auto">${currentMovie.Title}</h3>
            <p>${currentMovie.Year}</p>
            <button type="button" class="btn btn-primary" id="pic" onclick="removeFavorites('${currentMovie.imdbID}')">remove from favorites</button>
        </div>`
    });
    movieArray = movieData;
    list.innerHTML = movieHtmlArray.join('')
});