// Requete ajax

/*const articles = document.getElementById("articles");
      url = "http://localhost:3000/api/teddies";

fetch(url)
    .then(response => response.json())
    .then(json =>{
        //console.log(json)
        json.forEach(({_id, name, description, price, imageUrl}) =>{
            const div = document.createElement("div")
            const h3 = document.createElement("h3")
            const h4 = document.createElement("h4")
            const p = document.createElement("p")
            const img = document.createElement("img")
            const lien = document.createElement("a")
            

            const nodeName = document.createTextNode (name)
            const nodePrice = document.createTextNode (price + " €")
            const nodeDescription = document.createTextNode (description)
            img.src = imageUrl
            lien.href = 'produit.html?id=' + _id;
            lien.textContent = "détails";


            articles.appendChild (div)
            div.appendChild (h3)
            div.appendChild (h4)
            div.appendChild (p)
            div.appendChild (img)
            div.appendChild (lien)

            h3.appendChild(nodeName)
            h4.appendChild(nodePrice)
            p.appendChild(nodeDescription)

           
        })
    })
    .catch(err =>{
        alert("Le serveur ne répond pas !");
        console.error(err)
})*/







// Requête ajax (GET) + modifier structure de la page (DOM)

const article = document.getElementById("articles");
      url = "http://localhost:3000/api/teddies";
     

fetch(url)
    .then(response => response.json())
    .then(json =>{
        json.forEach(({_id, name, description, price, imageUrl}) =>{
            const div = document.createElement("div");
            const h3 = document.createElement("h3")
            const h4 = document.createElement("h4")
            const p = document.createElement("p")
            const img = document.createElement("img")
            const lien = document.createElement("a")
            

            const nodeName = document.createTextNode (name)
            const nodePrice = document.createTextNode (price + " €")
            const nodeDescription = document.createTextNode (description)
            img.src = imageUrl
            lien.href = 'produit.html?id=' + _id;
            lien.textContent = "détails";


            articles.appendChild (div)
            div.appendChild (h3)
            div.appendChild (h4)
            div.appendChild (p)
            div.appendChild (img)
            div.appendChild (lien)

            h3.appendChild(nodeName)
            h4.appendChild(nodePrice)
            p.appendChild(nodeDescription)

           
        })
    })
    .catch(err =>{
        alert("Le serveur ne répond pas !");
        console.error(err)
})



