/* VARIABLES */
var coins = 0;
var x;
var y;
var z;

/* INSERT COIN */
$(document).ready(function () {
		$("#add").click(function() {
            /* Lee el número de monedas insertado en el input y lo imprime en pantalla*/
            coins  = Number($('#insertedCoins').val());
            
            /* Al añadir las monedas se desactiva el botón de añadir */
            $('#add').prop('disabled', true);
            
            $("#coins").html(coins);
            
            /* Al tener monedas se activa el botón de tirar */
            $('#tirar').prop('disabled', false);
		});	
	});

/* RANDOM FRUIT */
$(document).ready(function () {
    
    /* Array con todas las imágenes posibles*/
    var fruit = new Array ();
    fruit[0] = "./img/aguacate.png";
    fruit[1] = "./img/ajo.png";
    fruit[2] = "./img/cebolla.png";
    fruit[3] = "./img/pepino.png";
    fruit[4] = "./img/puerro.png";
    fruit[5] = "./img/tomate.png";
    fruit[6] = "./img/zanahoria.png";
    var size = fruit.length;
    
    /* Crea un valor aleatorio para mostrar una imágen en cada cuadrado de la tragaperras */
    $("#tirar").click(function() {
        x = Math.floor(size*Math.random()); $('#randomFruit1').attr('src',fruit[x]);
    
        y = Math.floor(size*Math.random()); $('#randomFruit2').attr('src',fruit[y]);
    
        z = Math.floor(size*Math.random()); $('#randomFruit3').attr('src',fruit[z]); 
    });
});

/* WIN COINS & RECORD */
$(document).ready(function () {
    $("#tirar").click(function() {
        
        /* Se suman las monedas correspondientes a cada combinación posible */
        /* 3 ZANAHORIAS */
        if ( x == 6 && y == 6 && z == 6) {
            coins = coins + 10;
            $( "#record" ).append( "<li><b>Ganaste</b> 10 monedas.</li>" );
        }
        
            /* 3 HORTALIZAS IGUALES DIFERENTES DE ZANAHORIA*/
        else if (x == y && y == z) {
            coins = coins + 5;
            $( "#record" ).append( "<li><b>Ganaste</b> 5 monedas</li>" );
        }
        
        /* 2 ZANAHORIAS */
        else if (x == 6 && y == 6 || x == 6 && z == 6 || y == 6 && z == 6) {
            coins = coins + 4;
            $( "#record" ).append( "<li><b>Ganaste</b> 4 monedas</li>" );
        }
        
        /* 1 ZANAHORIA Y 2 HORTALIZAS IGUALES DIFERENTES DE ZANAHORIA*/
        else if (x == 6 && y == z|| y == 6 && x == z || z == 6 && x == y) {
            coins = coins + 3;
            $( "#record" ).append( "<li><b>Ganaste</b> 3 monedas</li>" );
        }
        
        /* 2 HORTALIZAS IGUALES DIFERENTES DE ZANAHORIA*/
        else if (y == z|| x == z || x == y) {
            coins = coins + 2;
            $( "#record" ).append( "<li><b>Ganaste</b> 2 monedas</li>" );
        }
        
        /* 1 ZANAHORIA */
        else if (x == 6 || y == 6 || z == 6) {
            coins = coins + 1;
            $( "#record" ).append( "<li><b>Ganaste</b> 1 moneda</li>" );
        }
        
        /* NO PRIZE */
        else {
            $( "#record" ).append( "<li><b>Perdiste</b> 1 moneda</li>" );
        }
        
    });
    
});

/* TIRAR */
$(document).ready(function () {
    
    /* El botón de tirar está desactivado por defecto */
    $('#tirar').prop('disabled', true);
    
        /* Gasta una moneda al hacer click en tirar, actualiza las monedas y desactiva el botón de tirar si llega a 0 */
		$("#tirar").click(function() {
            coins = coins - 1;
            $("#coins").html(coins);
            if (coins == 0) {
            $('#tirar').prop('disabled', true);
            
                /* Se asigna un valor aleatorio comprendido entre los índices del array fruit y se utiliza para mostrar una imágen aleatoria asignando al atributo src la URL de una imágen del array */
            x = Math.floor(size*Math.random()); $('#randomFruit1').attr('src',fruit[x]);
            y = Math.floor(size*Math.random()); $('#randomFruit2').attr('src',fruit[y]);
            z = Math.floor(size*Math.random()); $('#randomFruit3').attr('src',fruit[z]); 
            }
		});	   
	});

/* EXIT */
$(document).ready(function () {
    
    /* Desactiva el botón de tirar al salir del juego */
    $('#tirar').prop('disabled', true);
    
		$("#exit").click(function() {
            /* Muestra en una alerta las monedas totales */
            alert("MONEDAS TOTALES: " + coins)
            
            /* Resetea las monedas a 0, activa el botón de añadir monedas y desactiva el botón de tirar */
            coins = 0;
            $('#add').prop('disabled', false);
            $('#tirar').prop('disabled', true);
            $("#coins").html(coins);
		});	
    
        
	});