convertirCelsius = () =>{
    let celsus = document.querySelector(".js-celsus").value;
    if(parseFloat(celsus)){
        celsus = parseFloat(celsus);
        var kelvin = celsus + 273.15;
        var fahrenheit = (9*celsus/5) + 32;
        if(event.key ==='Enter'){
            document.querySelector(".js-kelvin").value = kelvin;
            document.querySelector(".js-fahrenheit").value = fahrenheit;
        }else{
            document.querySelector(".js-kelvin").value = "";
            document.querySelector(".js-fahrenheit").value = "";
        }
    }else{
        document.querySelector(".js-kelvin").value = "";
        document.querySelector(".js-fahrenheit").value = "";
    }
};



convertirKelvin = () =>{
    let kelvin = document.querySelector(".js-kelvin").value;
    if(parseFloat(kelvin)){
        kelvin = parseFloat(kelvin);
        let  celsus = kelvin - 273.15;
        let  fahrenheit = (9*kelvin/5)-459.67;
        if(event.key ==='Enter'){
            document.querySelector(".js-celsus").value = celsus;
            document.querySelector(".js-fahrenheit").value = fahrenheit;
        }else{
            document.querySelector(".js-celsus").value = "";
            document.querySelector(".js-fahrenheit").value = "";
        }
    }else{
        document.querySelector(".js-celsus").value = "";
    }
};



convertirFahrenheit = () =>{
    let fahrenheit = document.querySelector(".js-fahrenheit").value
    if(parseFloat(fahrenheit)){
        fahrenheit = parseFloat(fahrenheit);

        let celsus = (fahrenheit - 32) * 5/9;
        let kelvin = (fahrenheit+459.67) * 5/9;
        if(event.key ==='Enter'){
            document.querySelector(".js-celsus").value = celsus;
            document.querySelector(".js-kelvin").value = kelvin;
        }else{
            document.querySelector(".js-celsus").value = "";
            document.querySelector(".js-kelvin").value = "";
        }

    }else{
        document.querySelector(".js-celsus").value = "";
        document.querySelector(".js-kelvin").value = "";
    }
};
