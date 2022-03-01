fetch('http://localhost:3000/api/products')
    .then((item) => item.json())
    .then((item) => {
        for(kanap of item){
            document.getElementById('items').innerHTML += `<a href="./product.html?id=${kanap['_id']}"><article><img src="${kanap['imageUrl']}" alt="${kanap['altTxt']}">${kanap['name']}</h3><p class="productDescription">${kanap['description']}</p></article></a>`;
        }
        console.log(item)
    });




