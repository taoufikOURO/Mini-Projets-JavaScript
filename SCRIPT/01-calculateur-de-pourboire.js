var calculPourboire = () => {
    //Recuperer les valeurs dans les champs
    var prixFacture = document.querySelector(".js-prix-facture").value;    
    var pourcentagePourboire = document.querySelector(".js-prix-pourboire").value;

    //Vérifier que les champs sont renseignés
    if (parseFloat(prixFacture) && parseFloat(pourcentagePourboire)) {

        //Convertir les valeurs
        prixF = parseFloat(prixFacture);
        pourcentageP = parseFloat(pourcentagePourboire);

        var prixP = prixF * pourcentageP / 100;

        var prixTotal = prixF + prixP;
        document.querySelector(".js-prix-total").innerHTML = `$ ${prixTotal}`;
    } else {
        alert("Veuillez saisir un prix et non du texte");
    }
}
