//Uliliser la méthode location search pour récupérer l'id de l'url

let urlId = "http://localhost:3000/api/teddies/";

function recupererId(){
    const urlActuel = window.location.search.slice(4);// on récupére seulement l'id du produit
    return urlActuel
}

fetch (urlId + recupererId())
.then(response => response.json())
.then(data=> {
    
    let produit = document.getElementById("produits");
    
    let divProduit = document.createElement("div");
    divProduit.setAttribute("class", "elementproduit");
    produit.appendChild(divProduit);

    let h3Produit = document.createElement("h3");
    h3Produit.style.fontSize = "1.8em";
    h3Produit.style.margin = "10px 0";
    h3Produit.innerHTML = data.name;
    divProduit.appendChild(h3Produit);
    
    let imgProduit = document.createElement("img");
    imgProduit.src = data.imageUrl;
    divProduit.appendChild (imgProduit);

    let h4Produit = document.createElement("h4");
    h4Produit.style.margin = "7px 0";
    h4Produit.innerHTML = data.description;
    divProduit.appendChild(h4Produit);

    let paraProduit = document.createElement("p");
    paraProduit.innerHTML =  "<mark>Prix = " + data.price + " €</mark>";
    divProduit.appendChild(paraProduit);

})

   .catch((error) => {
    console.error(error);
  });
   










                   

