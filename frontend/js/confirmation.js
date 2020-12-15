// Récupérer les données du localStorage pour afficher sur la page confirmation

let orderData = localStorage.getItem("order");

let contacts = JSON.parse(localStorage.getItem("contact"))

let prix = localStorage.getItem("prixTotal")