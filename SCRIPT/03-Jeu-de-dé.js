jeu = () =>{
    var n = Math.random();
    console.log(n);
    if(n>=0 && n<1/6){
        document.querySelector(".js-de-image").setAttribute("src","../IMAGES/DE/de1.jpg");
    }else if(n>=1/6 && n<2/6){
        document.querySelector(".js-de-image").setAttribute("src","../IMAGES/DE/de2.jpg");

    }else if(n>=2/6 && n<3/6){
        document.querySelector(".js-de-image").setAttribute("src","../IMAGES/DE/de3.jpg");

    }else if(n>=3/6 && n<4/6){
        document.querySelector(".js-de-image").setAttribute("src","../IMAGES/DE/de4.jpg");

    }else if(n>=4/6 && n<5/6){
        document.querySelector(".js-de-image").setAttribute("src","../IMAGES/DE/de4.jpg");

    }else if(n>=5/6 && n<1){
        document.querySelector(".js-de-image").setAttribute("src","../IMAGES/DE/de6.jpg");

    }
}