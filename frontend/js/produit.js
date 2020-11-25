//l'url de l'API

let urlId = "http://localhost:3000/api/teddies/";

//Uliliser la méthode location search pour récupérer l'id de l'url + modifier la structure de la page produit

function recupererId(){
    const urlActuel = window.location.search.slice(4);// on récupére seulement l'id du produit
    return urlActuel;
}

fetch (urlId + recupererId())
.then(response => response.json())
.then(data=> {

    //récupérer id "produits" de la page html produit
    let produit = document.getElementById("produits");

    //Créer div produit
    let divProduit = document.createElement("div");
    divProduit.setAttribute("class", "elementproduit");
    produit.appendChild(divProduit);

    //créer h3, le nom des oursons
    let h3Produit = document.createElement("h3");
    h3Produit.style.fontSize = "1.8em";
    h3Produit.style.margin = "10px 0";
    h3Produit.innerHTML = data.name;
    divProduit.appendChild(h3Produit);

    //rajouter image
    let imgProduit = document.createElement("img");
    imgProduit.src = data.imageUrl;
    divProduit.appendChild (imgProduit);

    //créer h4, le prix des oursons
    let h4Produit = document.createElement("h4");
    h4Produit.style.margin = "7px 0";
    h4Produit.innerHTML = data.description;
    divProduit.appendChild(h4Produit);

    //créer un paragraphe, description des oursons
    let paraProduit = document.createElement("p");
    paraProduit.innerHTML =  "<mark>Prix = " + data.price + " €</mark>";
    divProduit.appendChild(paraProduit);
    
    //créer une liste pour le choix des couleurs + boucle
         
    for(let i = 0; i < data.colors.length; i++){
        let option = document.createElement("option");
        option.innerHTML=data.colors[i];
        document.getElementById("couleur_select").appendChild(option);
        }
    
    //Messages d'alerte lors de l'ajout du produit 
    function alertProduit(){
        alert("Sélectionner une couleur");
    }
    
    function alertAjouter(){
        alert("Article ajouté au panier")
    }
    
    //sauvegarder le produit au clic du bouton pour mettre au panier
    let btn = document.getElementById("bouton_produit");
    btn.addEventListener ("click", function(event){
     event.preventDefault();  
        let selection = document.getElementById("couleur_select");
        let couleurSelect = couleur_select.selectedIndex;
        if( couleurSelect == 0 || couleurSelect < 1){
            alertProduit()
            
                 
            
        }else{
            //Conversion valeur javascript en chaîne JSON - via localstorage
            
            let produits = {id: data._id, name: data.name, color: couleurSelect, price : data.price};  
            let objetTraiter = JSON.stringify(produits);
            let dataId = data._id;
            localStorage.setItem(dataId, objetTraiter);//rajoute clé et valeur pendant l'ajout dans le localStorage
            alertAjouter();
            nombrePanier(); 
            chargePanier()
           
        }
       
  /*}else{
        //Conversion valeur javascript en chaîne JSON - via localstorage
        let tableauProduit =[];
        let produits = {id: data._id, name: data.name, color: couleurSelect, price : data.price};
        tableauProduit.push(produits); //ajoute nouveau élément à la fin du tableau tableau 
        let objetTraiter = JSON.stringify(tableauProduit);
        let dataId = data._id;
        localStorage.setItem(dataId, objetTraiter);//rajoute clé et valeur pendant l'ajout dans le localStorage
        alertAjouter();
        nombrePanier()

        }*/
    })

})

.catch((error) => {
 console.error(error);
});


    
//Le nombre d'article sur l'icône panier est sauvegardé même en actualisant la page
function chargePanier(){
    let localPanier = localStorage.getItem("nombrePanier");

    if(localPanier){
        document.querySelector(".panier span").textContent = localPanier;
    }
}

//FONCTION POUR AVOIR LE NOMBRE TOTAL DES PRODUITS SELECTIONNÉS DANS LE PANIER//
function nombrePanier(){
    let localPanier = localStorage.getItem("nombrePanier");
    
    localPanier = parseInt(localPanier);

    if(localPanier){
        localStorage.setItem("nombrePanier", localPanier + 1);
        document.querySelector(".panier span").textContent = + 1;
    }else{
        localStorage.setItem("nombrePanier", 1); 
        document.querySelector(".panier span").textContent = 1;
    }
}

chargePanier();








                   

