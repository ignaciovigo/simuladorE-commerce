
function obtenerFruta(){ //pide y retorna un nombre de fruta que coincida con las frutas a la venta, retorna string vacio si se ingresó como pedido.
    let nombreFruta = prompt(`
    -PAPA     p.unitario -> 10$
    -CEBOLLA     p.unitario -> 20$
    -NARANJA     p.unitario -> 15$
    -MANZANA     p.unitario -> 10$
    -MANDARINA   p.unitairo -> 15$
    -TOMATE      p.unitairo -> 10$
    -FRUTILLA    p.unitario -> 8$
    -LECHUGA     p.unitario -> 30$
    \nIngrese un nombre correspondiente de la fruta/verdura que desea comprar (  pulse enter para salir ) : `);
    while(nombreFruta != ''){
        nombreFruta = nombreFruta.toUpperCase();
        if (nombreFruta == 'PAPA' || nombreFruta == 'CEBOLLA' || nombreFruta == 'NARANJA' || nombreFruta == 'MANZANA' || nombreFruta == 'MANDARINA' || nombreFruta == 'TOMATE' || nombreFruta == 'FRUTILLA' || nombreFruta == 'LECHUGA'){
            return nombreFruta;
        }else{
            nombreFruta = prompt(` ERROR al ingresar nombre de fruta/verdura
            -PAPA     p.unitario -> 10$
            -CEBOLLA     p.unitario -> 20$
            -NARANJA     p.unitario -> 15$
            -MANZANA     p.unitario -> 10$
            -MANDARINA   p.unitairo -> 15$
            -TOMATE      p.unitairo -> 10$
            -FRUTILLA    p.unitario -> 8$
            -LECHUGA     p.unitario -> 30$  
            \n Ha ingresado un nombre incorrecto, ingrese nuevamente un nombre correspondiente de la fruta/verdura que desea comprar (pulse enter para salir) : `);
        }
    }
    return nombreFruta;
}

function obtenerNumero(){ // pide un numero asegurandose que sea tipo number y lo retorna.
    let numero = prompt("ingrese la cantidad de la fruta/verdura elegida que desea comprar: ");
    while (isNaN(Number(numero)) || numero <= 0){
        numero = prompt("Ha ingresado un numero no valido, ingrese nuevamente: ");
    }
    return numero;
}

function subtotal(fruta, cantidad){ //retorna el calculo del precio por cantidad de acuerdo a la fruta ingresada.
    switch(fruta){
        case "PAPA": case "TOMATE":
            return 10 * cantidad;
        case "CEBOLLA":
            return 20 * cantidad;
        case "NARANJA": case "MANDARINA":
            return 15 * cantidad;
        case "MANZANA":
            return 15 * cantidad;
        case "FRUTILLA":
            return 8 * cantidad;
        case "LECHUGA":
            return 30 * cantidad;
    }
}


alert('¡Bienvenido a la verduleria!');
let fruta = '';
let cantidad = 0;
let registro = ''
let total = 0;
let opcion = ''

do{
    opcion = parseInt(prompt('Ingrese una opcion:\n1-Añadir frutas/verduras a su compra\n2- Ver total a pagar\n3- Realizar una nueva compra\n4- Salir'));
    if (opcion === 1){
        nombreFruta = obtenerFruta();
        while(nombreFruta != ""){
            cantidad = obtenerNumero();
            total += subtotal(nombreFruta, cantidad);
            registro += `Compró -> cantidad: ${cantidad}, fruta/verdura: ${nombreFruta}\n`
            nombreFruta = obtenerFruta();
        }
    }
    else if(opcion === 2){
        alert(`Registro:\n${registro}\nEl total de su compra es de: $${total}`);
    }
    else if(opcion === 3){
        registro = "";
        total = 0;
    }
    else if (opcion === 4){
        alert('Gracias por su compra!');
        break
    }
    else{
        alert('valor ingresado invalido');
    }
}while(true);

