//Intialiser pour accéder au localStorage

let produitTableau = JSON.parse(localStorage.getItem('panier')); //liste produits

let localPanier = JSON.parse(localStorage.getItem("nombrePanier"));//Quantité total

//Initialisé un tableau 
let panierTableau = [];
   
//Montant initialisé à 0
let totalPrix = 0;

// récupérer l'id "panier" de la page panier.html 
let listePanier = document.getElementById("panier");

//créer div pour mettre les articles sélectionnées
let divPanier = document.createElement("div");
divPanier.setAttribute("class", "elementpanier");
listePanier.appendChild(divPanier);

//afficher si pas de produits dans le panier
if ( produitTableau === null || produitTableau === undefined ){

   let h3Panier = document.createElement("h3");
   h3Panier.setAttribute("class", "element_panierh3");
   h3Panier.innerHTML = " Pas d'articles dans votre Panier!!";
   h3Panier.style.fontSize = "1.8em";
   h3Panier.style.color = "red";
   divPanier.appendChild(h3Panier);
   
}else{
   //Boucle pour récupérer chaque produit dans le panier
   produitTableau.forEach(function(data){
     
   //créer div pour mettre les articles sélectionnées
   let divPanier1 = document.createElement("div");
   divPanier1.setAttribute("class", "elementpanier1");
   listePanier.appendChild(divPanier1);

   //Nom du produit sélectionné
   let h4Panier = document.createElement("h4");
   h4Panier.innerHTML = data.name;
   h4Panier.style.fontSize = "1.3em";
   h4Panier.style.color = "white";
   divPanier1.appendChild(h4Panier);

   //Prix du produit sélectionné
   let paraPanier = document.createElement("p");
   paraPanier.setAttribute("class", "prix_panier"); 
   paraPanier.innerHTML = "<mark> " + data.price + " €</mark>";
   divPanier1.appendChild (paraPanier);

   //Quantité pour chaque produit
   let quantitéPanier = document.createElement("p");
   quantitéPanier.setAttribute("class", "quantite_panier"); 
   quantitéPanier.innerHTML = "Quantité :" + " " + data.quantité;
   divPanier1.appendChild(quantitéPanier);

   //faire un push : price dans le tableau via localstorage
   panierTableau.push(data.price); 
 
   });

   //Afficher le nombre total des articles
   if (localPanier!== null){
      let nombreTotal = document.createElement("p");
      nombreTotal.setAttribute("class", "nombretotal"); 
      nombreTotal.innerHTML = "Quantité Total :" + " " + localPanier ;
      listePanier.appendChild(nombreTotal);
      }


   //MONTANT TOTAL DES PRODUITS - UTILISATION DE LA MÉTHODE RÉDUCE "ACCUMULATEUR"
   let reducer = (acc, curr) => acc + curr;
   let prixTotal = panierTableau.reduce(reducer);
  
   // Affichage du prix total
   let paraPrix = document.createElement("p");
   paraPrix.setAttribute("class", "prixtotal");

   paraPrix.innerHTML = "Total à régler :" + " " + prixTotal + "€";
   listePanier.appendChild(paraPrix);

   
   
}
   
