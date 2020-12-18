// Récupérer et lecture des données du localStorage pour afficher sur la page confirmation

let orderData = localStorage.getItem("order");

let contacts = JSON.parse(localStorage.getItem("contact"))//lecture tableau du localStorage

let prix = localStorage.getItem("prixTotal")

// récupérer l'id "panier" de la page confirmation.html 
let confirmation = document.getElementById("nom-confirmation");

//créer div conteneur
let divConfirmation = document.createElement("div");
divConfirmation.setAttribute("class", "element-commande");
confirmation.appendChild(divConfirmation);


let paraDetail = document.createElement("p");
paraDetail .setAttribute("class", "para-detail");
paraDetail.innerHTML = "Merci"+ " "+ "<span>"+contacts.firstName+"</span>" +", votre commande à bien été enregistrée.";
divConfirmation.appendChild(paraDetail);

let paraDetaildeux = document.createElement("p");
paraDetaildeux .setAttribute("class", "para-detail1");
paraDetaildeux.innerHTML = "Votre numéro de commande est le :"+ " "+ "<span>"+orderData+"</span>" +" "+ "pour un montant total de " +"<span>"+prix+"Euros"+"</span>";
divConfirmation.appendChild(paraDetaildeux);

let paraDetailtrois= document.createElement("p");
paraDetailtrois .setAttribute("class", "para-detail1");
paraDetailtrois.innerHTML = "Vous allez récevoir un email récapitulatif de votre commande à l'adresse"+ " "+ "<span>"+contacts.email+"</span>";
divConfirmation.appendChild(paraDetailtrois);