
// Requête API Fetch pour récupérer les données  + modifier structure de la page (DOM)

let url = "http://localhost:3000/api/teddies";

// récupérer id ="articles" de la page index.html     
let article = document.getElementById("articles");

//déclarer les variables
let divTitre, h3Titre, h4Titre,imgTitre,lien;

fetch(url)
    .then(response => response.json())
    .then(data =>{
    console.log(data)
    for(let i = 0; i < data.length; i++){
    
    //Créer div elements
    divTitre = document.createElement("div");
    divTitre.setAttribute("class", "elements");
    article.appendChild(divTitre);
       
    //créer h3, le nom des oursons
    h3Titre = document.createElement("h3");
    h3Titre.style.color = "rgba(255, 255, 255)";
    h3Titre.style.fontSize = "1.8em";
    h3Titre.style.margin = "10px 0";
    h3Titre.innerHTML = data[i].name;
    divTitre.appendChild (h3Titre);

    //créer h4, le prix des oursons
    h4Titre = document.createElement("h4");
    h4Titre.style.fontSize = "1.3em";
    h4Titre.style.margin = "0px 0px 10px 0px";
    h4Titre.innerHTML = "<mark>Prix = " + data[i].price + " €</mark>";
    divTitre.appendChild (h4Titre);

    //rajouter image
    imgTitre = document.createElement("img");
    imgTitre.src = data[i].imageUrl;
    divTitre.appendChild (imgTitre);

    //créer lien du produit
    lien = document.createElement("a");
    lien.className ='btn';
    lien.href = "produit.html?id=" + data[i]._id;
    lien.innerHTML = "Voir le produit";
    divTitre.appendChild (lien);
    
       }  
   })
    
    .catch((error) => {
        console.error(error);
    });