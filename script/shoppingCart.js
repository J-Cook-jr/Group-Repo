
const strainList = document.getElementById('strain-holder2');
const message = document.getElementById('message');
const checkoutButton = document.getElementById('checkout');

function removeFromCart(id) {
    newid = parseInt(id);
    let cartJSON = localStorage.getItem('strainList');
    
    let cartItem = JSON.parse(cartJSON);
    console.log(cartItem);


    cartItem = cartItem.filter(function (item){
        console.log(item.id);
        if(newid !== item.id) {
            return true;
        }
        else {
            return false;
        }
    })
    if (cartItem.length === 0) {
        message.innerHTML = 'Your cart is empty'
    }

    cartJSON = JSON.stringify(cartItem);
    localStorage.setItem('strainList', cartJSON);
    console.log(cartJSON);

}


document.addEventListener('DOMContentLoaded', function() {
    let shoppingCartJSON = localStorage.getItem('strainList');
    let shoppingCart = JSON.parse(shoppingCartJSON)
    console.log(shoppingCart);
    let strainHtmlArray = shoppingCart.map(function (currentStrain) {
        if (currentStrain.desc === null) {
            return `
            <div class="card-body">
                <h3 class="card-text mx-auto" id="text">${currentStrain.name}</h3>
                <p>${currentStrain.race}</p>
                <p>No description available</p>
                <button type="button" class="btn btn-primary" id="pic" onclick="removeFromCart('${currentStrain.id}')">Remove From Cart</button>
                </div>`
        }
        else {
            return `
            <div class="card-body">
                <h3 class="card-text mx-auto" id="text">${currentStrain.name}</h3>
                <p>${currentStrain.race}</p>
                <p>${currentStrain.desc}</p>
                <button type="button" class="btn btn-primary" id="pic" onclick="removeFromCart('${currentStrain.id}')">Remove From Cart</button>
            </div>`
        }
    });
    strainArray = strainData;
    strainList.innerHTML = strainHtmlArray.join('')
    console.log(strainArray);


    if (shoppingCart.length > 0) {
        message.innerHTML = ('')
    }
    // strainArray = strainData;
    // console.log(strainArray);
});


checkoutButton.addEventListener('click', function(){
    let shoppingCartJSON = localStorage.getItem('strainList');

    shoppingCartJSON = null;


    localStorage.setItem('strainList', shoppingCartJSON);
});