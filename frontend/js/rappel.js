//Fonction pour simplifier la création de mes éléments
export function createElement(element) {
    return document.createElement(element); 
}

export function appendChild(parent, el) {
    return parent.appendChild(el); 
}

//Message d'alerte
export function alertProduit(){
        swal("Sélectionnez une couleur!","", "warning");
}
    
export function alertAjouter(){
        swal("Article ajouté au panier!", "cliquez sur l'icône Panier pour voir les détails", "success"); 
} 

export function maFonction() {
    swal("Les champs sont vides ","", "warning");
}

