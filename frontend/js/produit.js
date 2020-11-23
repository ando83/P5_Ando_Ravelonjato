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

    //sauvegarder le produit au clic du bouton 
    let btn = document.getElementById("bouton_produit");
    btn.addEventListener ("click", function(){
       
        let selection = document.getElementById("couleur_select");
        let couleurSelect = couleur_select.selectedIndex;
        if(couleurSelect == "" || couleurSelect== undefined || couleurSelect== 0){
            alertProduit()
        }else{
            //Conversion valeur javascript en chaîne JSON
            let objetTraiter = JSON.stringify({id: data._id, name: data.name, color: couleur_select, price : data.price});
            localStorage.setItem(data._id, objetTraiter);//rajoute clé et valeur pendant l'ajout dans le localStorage
            alertAjouter();
        }
      
    })

})

.catch((error) => {
 console.error(error);
});
   










                   

