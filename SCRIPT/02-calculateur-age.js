calculAge = () =>{
    //Recuperer la date du système
    var dateSystem = new Date;
    anneeSystem = dateSystem.getFullYear();

    //Recuperer la date de l'utilisateur
    var dateUser = document.querySelector(".js-date").value;


    //Convertir la chainne de caractere en date avec le conctructeur Date
    var dateUser = new Date(dateUser);
    anneeUser = dateUser.getFullYear();

    var age = anneeSystem - anneeUser;
    document.querySelector(".js-age").innerHTML = `Vous avez ${age} ans`;
    
}