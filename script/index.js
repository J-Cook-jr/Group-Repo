
const search = document.getElementById('search-form');

search.addEventListener('submit', function(e) {
    e.preventDefault();
    const searchString = document.querySelector('input').value;
    const urlEncodedSearchString = encodeURIComponent(searchString);
    axios.get('http://www.strainapi.evanbusse.com/Fppxe7R/strains/search/name/' + urlEncodedSearchString)
    .then(function (response) {
        
    })
})