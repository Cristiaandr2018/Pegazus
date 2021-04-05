window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'),{
        
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel__indicadores',
        
      });
   
});

// Temporizador

let dias = 9
let horas = 3
let minutos = 0
let segundos = 0
cargarSegundo()

// Definimos y ejecutamos los segundos
function cargarSegundo() {
    let txtSegundos;

    if (segundos < 0) {
        segundos = 59
    }

    if (segundos < 10) {
        txtSegundos = `0${segundos}`;
    } else {
        txtSegundos= segundos;
    }
    document.getElementById('segundos').innerHTML = txtSegundos;
    segundos --;

    cargarMinutos(segundos)
}

// Definimos y ejecutamos los minutos
function cargarMinutos(segundos) {
    let txtMinutos;

    if (segundos == -1 && minutos !== 0) {
        setTimeout(()=>{
            minutos--;
        },500)
            
    }else if(segundos == -1 && minutos == 0)
        setTimeout(()=>{
            minutos=59;
        },500)

    if (minutos < 10) {
        txtMinutos = `0${minutos}`;
    }else{
        txtMinutos = minutos;
    }
    document.getElementById('minutos').innerHTML = txtMinutos;
    cargarHoras(segundos,minutos)

}

// Definimos y ejecutamos las horas
function cargarHoras(segundos,minutos) {
    let txtHoras;

    if (segundos == -1 && minutos == 0 && horas !== 0) {
        setTimeout(()=>{
            horas--;
        },500)
            
    }else if(segundos == -1 && minutos == 0 && horas == 0)
        setTimeout(()=>{
            horas = 2;
        },500)

    if (horas < 10) {
        txtHoras = `0${horas}`;
    }else{
        txtHoras = horas;
    }
    document.getElementById('horas').innerHTML = txtHoras;
    cargarDias(segundos,minutos,horas)

}
// Definimos y ejecutamos los dias
function cargarDias(segundos,minutos,horas) {
    let txtDias;

    if (segundos == -1 && minutos == 0 && horas == 0 && dias!== 0) {
        setTimeout(()=>{
            horas--;
        },500)
            
    }else if(segundos == -1 && minutos == 0 && horas == 0 && dias == 0)
        setTimeout(()=>{
            dias = 1;
        },500)

    if (dias < 10) {
        txtDias = `0${dias}`;
    }else{
        txtDias = dias;
    }
    document.getElementById('dias').innerHTML = txtDias;

}

setInterval(cargarSegundo, 1000);


// GENERAR NÚMEROS ALEATORIOS-----------------------

function generarNumeros(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random()*(1 + max - min) + min);
    
}
function Numeros() {
    
    document.getElementById('numero1').innerHTML = (generarNumeros(1,9));
    document.getElementById('numero2').innerHTML = (generarNumeros(1,9));
    document.getElementById('numero3').innerHTML = (generarNumeros(1,9));
    document.getElementById('numero4').innerHTML = (generarNumeros(1,9));

}


