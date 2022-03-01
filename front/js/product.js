let url = new URL(window.location.href);
let id_produit = url.searchParams.get('id');

let urlApi = `http://localhost:3000/api/products/${id_produit}`;
fetch(urlApi)
    .then((item) => item.json())
    .then((item) => {
        document.querySelector('.item__img').innerHTML += `<img src="${item['imageUrl']}" alt="Photographie d'un canapé"></img>`;
        document.querySelector('#price').innerHTML += item.price;
        document.querySelector('#title').innerHTML += item.name;
        document.querySelector('#description').innerHTML += item.description;
        for (i = 0; i < item.colors.length; i++) {
            document.querySelector('#colors').innerHTML += '<option>' + item.colors[i] + '</option>';
        }
    });

document.getElementById('addToCart').addEventListener('click', addtocart);

function addtocart() {

    let ProduitEnregistreDansLeLocalStorage = JSON.parse(localStorage.getItem('produit'));

    let couleur_produit = document.getElementById('colors').value;

    let quantite_produit = parseInt(document.getElementById('quantity').value);

    let OptionsProduit = {
        'id_produit': id_produit,
        'couleur': couleur_produit,
        'quantite': quantite_produit
    }

    if (couleur_produit != '' && quantite_produit != '') {
        console.log(ProduitEnregistreDansLeLocalStorage);
        if(ProduitEnregistreDansLeLocalStorage == null){
            ProduitEnregistreDansLeLocalStorage = [];
        }
            console.log(ProduitEnregistreDansLeLocalStorage);
            let produit_existant = 0;
            ProduitEnregistreDansLeLocalStorage.forEach(element => {
                if (element.id_produit == id_produit && element.couleur == couleur_produit) {
                    element.quantite += quantite_produit;
                    produit_existant++;
                }
            });
            if(produit_existant == 0){
                ProduitEnregistreDansLeLocalStorage.push(OptionsProduit);
            }
            localStorage.setItem('produit', JSON.stringify(ProduitEnregistreDansLeLocalStorage));
    }
}