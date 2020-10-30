// Requête ajax (GET) + modifier structure de la page (DOM)

const article = document.getElementById("articles");
      url = "http://localhost:3000/api/teddies";
     
fetch(url)
    .then(response => response.json())
    .then(json =>{
        json.forEach(({_id, name, description, price, imageUrl}) =>{
            const div = document.createElement("div");
            div.setAttribute("class", "elements")
            const h3 = document.createElement("h3")
            const h4 = document.createElement("h4")
            const img = document.createElement("img")
            const lien = document.createElement("a")
            
            const newName = document.createTextNode (name)
            const newPrice = document.createTextNode ("Prix : " + " " + price + " €")
            const newDescription = document.createTextNode (description)
            img.src = imageUrl
            lien.href = 'produit.html?id=' + _id;
            lien.textContent = "Détails";
            
            articles.appendChild (div)
            div.appendChild (h3)
            div.appendChild (h4)
          
            div.appendChild (img)
            div.appendChild (lien)

            h3.appendChild(newName)
            h4.appendChild(newPrice)
        })
    })
    .catch(err =>{
        alert("Le serveur ne répond pas !");
        console.error(err)
})



