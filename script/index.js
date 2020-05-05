
const search = document.getElementById('search-form');
const strainList = document.getElementById('strain-holder');
let strainData = [];
let strainArray;

search.addEventListener('submit', function(e) {
    e.preventDefault();
    const searchString = document.querySelector('input').value;
    const urlEncodedSearchString = encodeURIComponent(searchString);
    axios.get("http://www.strainapi.evanbusse.com/Fppxe7R/strains/search/name/" + urlEncodedSearchString)
    .then(function (response) {
        strainData = response.data.search
        console.log('strainData');
        console.log(strainData);
        let strainHtmlArray = strainData.map(function (currentStrain) {
            return `
            <div class="card-body">
                <h3 class="card-text mx-auto" id="text">${currentStrain.name}</h3>
                <p>${currentMovie.race}</p>
                <p>${currentStrain.desc}</p>
                <button type="button" class="btn btn-primary" id="pic" onclick="saveToWatchList('${currentMovie.imdbID}')">Add To Favorites</button>
            </div>`
        });
        strainList.innerHTML = strainHtmlArray.join('')
        strainArray = movieData;
        console.log(strainArray);
    })
})