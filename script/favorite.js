let strainArray;

function saveToShoppingCart(id) {
    let cartItem = strainArray.find(currentStrain => currentStrain.id == id);
    let strainListJSON = localStorage.getItem('strainList');

    let strainList = JSON.parse(strainListJSON);

    if (strainList == null) {
        strainList = [];
    }
    strainList.push(cartItem);

    strainListJSON = JSON.stringify(strainList);

    localStorage.setItem('strainList', strainListJSON);
    console.log(strainListJSON);
}

