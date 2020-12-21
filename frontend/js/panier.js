//Intialiser pour accéder au localStorage

let produitTableau = JSON.parse(localStorage.getItem('panier')); //tableau de liste produits

let localPanier = localStorage.getItem("nombrePanier");//Quantité total

//Initialisé un tableau pour récup prix pour chaque produit dans le localStorage
let montantProduit = [];  

 //Montant initialisé à 0 qu'on va utiliser après
 let totalPrix = 0;

// récupérer l'id "panier" de la page panier.html 
let listePanier = document.getElementById("panier");

//création variable pour récupérer la valeur saisie à envoyer au serveur (partie formulaire)
let nom = document.getElementById('nom');
let prénom =document.getElementById('prénom');
let email = document.getElementById('email');
let adresse = document.getElementById('adresse');
let code = document.getElementById('code');
let ville = document.getElementById('ville');

//créer div pour mettre les articles sélectionnées
let divPanier = document.createElement("div");
divPanier.setAttribute("class", "elementpanier");
listePanier.appendChild(divPanier);

//afficher , si pas de produits dans le panier
if ( produitTableau === null || produitTableau === undefined ){

   let h3Panier = document.createElement("h3");
   h3Panier.setAttribute("class", "element_panierh3");
   h3Panier.innerHTML = " Pas d'articles dans votre Panier!!";
   h3Panier.style.fontSize = "1.5em";
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
   let h3Panier1 = document.createElement("h3");
   h3Panier1.innerHTML = data.name;
   h3Panier1.style.fontSize = "1.3em";
   h3Panier1.style.color = "white";
   divPanier1.appendChild(h3Panier1);

   //Option du produit
   let optionPanier = document.createElement("p");
   optionPanier.innerHTML = data.colors;
   divPanier1.appendChild (optionPanier);

   //Prix du produit sélectionné
   let paraPanier = document.createElement("p");
   paraPanier.innerHTML = "<mark> " + data.price + " €</mark>";
   divPanier1.appendChild (paraPanier);

   //Quantité pour chaque produit
   let quantitéPanier = document.createElement("p");
   quantitéPanier.innerHTML = "Quantité :" + " " + data.quantité;
   divPanier1.appendChild(quantitéPanier);

   //faire un push  dans le tableau via localstorage
   montantProduit.push(data.price); 

   });

   //Affiche le nombre total des articles
   if (localPanier!== null){
      let nombreTotal = document.createElement("p");
      nombreTotal.setAttribute("class", "nombretotal"); 
      nombreTotal.innerHTML = "Quantité Total :" + " " + localPanier ;
      listePanier.appendChild(nombreTotal);
      }

   //MONTANT TOTAL DES PRODUITS - UTILISATION DE LA MÉTHODE RÉDUCE "ACCUMULATEUR"
  
   totalPrix = montantProduit.reduce(function (accumulator, currentValue){
      return accumulator + currentValue
   }) 
   
   //Montant total envoyer au localStorage
   localStorage.setItem('prixTotal', totalPrix);
   localStorage.getItem('prixTotal');
   
   // Affichage du prix total
   let paraPrix = document.createElement("p");
   paraPrix.setAttribute("class", "prixtotal");

   paraPrix.innerHTML = "Total à régler :" + " " + "<mark>"+totalPrix+"<mark>"+ "€";
   listePanier.appendChild(paraPrix);

   // DIV conteneur bouton pour vider le panier
   let boutonConteneur = document.createElement("div");
   boutonConteneur.setAttribute("class", "conteneur_btn");
   listePanier.appendChild(boutonConteneur);

   //BOUTON POUR VIDER LE PANIER
   let btnSupprime = document.createElement("button");
   btnSupprime.setAttribute("class", "bouton_supprime")
   btnSupprime.innerHTML = "Vider le panier";
   boutonConteneur.appendChild(btnSupprime);

   btnSupprime.addEventListener('click', function () {
   swal("Votre panier est vide!", "","warning").then( () => {
      location.href = 'panier.html'
  })
   window.localStorage.clear();//vide toutes les clés stockées
   })

}

//Lien pour revenir à la page d'accueil
let conteneurLienProduit = document.createElement("div");
conteneurLienProduit .setAttribute("class", "conteneurLien");
listePanier.appendChild(conteneurLienProduit);

let lienProduit = document.createElement("a");
lienProduit.className ='btn_produit';
lienProduit.href = "index.html";
lienProduit.innerHTML = "Poursuivre vos achats?";
conteneurLienProduit.appendChild(lienProduit);
   
//-----PARTIE FORMULAIRE-----//

//mise en place d'une fonction pour alerter si les champs ne sont pas complétés
document.querySelector("input").oninvalid = function() {maFonction()};

function maFonction() {
   swal("Les champs sont vides ","", "warning");
 }
 
let form = document.getElementById("formulaire")
form.addEventListener("submit", function(event){
   event.preventDefault();
   
   //Alert si le panier est vide
   if(produitTableau == null){
      swal("Votre panier est vide ","", "warning");
      return false;
   }

   //Initialiser un tableau et récupérer les id des produits dans le localStorage
   let products = []; 
   let panierS = JSON.parse(localStorage.getItem('panier'));
   //console.log(panierS);
   for(let i=0; i<panierS.length; i++){
      products.push(panierS[i].id)
   }
   
   //Objet et valeur saisie à envoyer au serveur

   let contact = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      address: address.value,
      city: city.value,
   }
    
   //L'ensemble des objets contact et products à envoyer au serveur
   let order = {
     contact : contact,
     products : products,
   };

  //Requete post avec méthode fetch
  fetch("http://localhost:3000/api/teddies/order", {
     method: 'POST',
     headers: {
      'Content-Type': 'application/json',
     },
     body: JSON.stringify(order),
   })
   .then((response) => response.json())
   
   .then((order) => {
      localStorage.clear();
      localStorage.setItem("order", order.orderId);
      localStorage.setItem("contact",  JSON.stringify(contact));
      localStorage.setItem("prixTotal", JSON.stringify(totalPrix))
      
      window.location.href = "confirmation.html";
      console.log('Success:', order);
   })
   
   .catch((error) => {
   console.error(error);
});

});