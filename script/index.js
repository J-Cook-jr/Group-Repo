const search = document.getElementById('search-form');
const strainList = document.getElementById('strain-holder');
// let strainData = [];
let strainArray;
search.addEventListener('submit', function(e) {
    e.preventDefault();
    const searchString = document.querySelector('input').value;
    const urlEncodedSearchString = encodeURIComponent(searchString);
    axios.get( "http://strainapi.evanbusse.com/Fppxe7R/strains/search/name/" + urlEncodedSearchString)
    .then(function (response) {
        let strainData = response.data;
        console.log('movieData');
        console.log(strainData);
        let strainHtmlArray = strainData.map(function (currentStrain) {
            return `
            <div class="card-body">
                <h3 class="card-text mx-auto" id="text">${currentStrain.name}</h3>
                <p>${currentStrain.race}</p>
                <p>${currentStrain.desc}
                <button type="button" class="btn btn-primary" id="pic" onclick="saveToWatchList('${currentStrain.id}')">Add To Favorites</button>
            </div>`
        });
        strainList.innerHTML = strainHtmlArray.join('')
        strainArray = strainData;
        console.log(strainArray);
        // console.log(movieData);
    })
    // return movieHtmlArray.join(' ');
});