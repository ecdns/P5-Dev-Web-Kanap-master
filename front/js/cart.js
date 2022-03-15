let cart = JSON.parse(localStorage.getItem('produit'));
cart.forEach(element => {
            document.querySelector('#cart__items').innerHTML += `<article class="cart__item" data-id=${element.id_produit} data-color=${element.couleur}><div class="cart__item__img">
            <img src=${element.imageUrl} alt="Photographie d'un canapé"></div><div class="cart__item__content">
            <div class="cart__item__content__description"><h2>${element.name}</h2><p>${element.couleur}</p>
            <p>${element.price} €</p></div><div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity"><p>Qté : ${element.quantite}</p>
            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
            </div><div class="cart__item__content__settings__delete"><p class="deleteItem">Supprimer</p>
            </div></div></div></article>`;

});

function total_price(){
    let cart = JSON.parse(localStorage.getItem('produit'));
    let total_price = 0;
    cart.forEach(element =>{
        total_price = total_price + parseInt(element.price * element.quantite);
    });
    document.querySelector('#totalPrice').innerHTML += total_price;
}
total_price();

var boutons = document.querySelectorAll('.deleteItem');
boutons.forEach(element => {
    element.addEventListener('click', deleteItem);
});



function deleteItem(e){
    delete_id = e.target.closest('.cart__item').dataset.id;
    delete_color = e.target.closest('.cart__item').dataset.color;
    let cart = JSON.parse(localStorage.getItem('produit'));
    index = 0;
    cart.forEach(element => {
        if(element.id_produit == delete_id && element.couleur == delete_color){
            cart.splice(index, 1);
        }
        index++;
    });
    localStorage.setItem('produit', JSON.stringify(cart));

    let articles = document.querySelectorAll('.cart__item');
    articles.forEach(element => {
        if(element.dataset.id == delete_id){
            element.remove();
        }
    });
}



