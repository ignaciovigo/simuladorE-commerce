import { comidas } from "./productos.js";
import { Carrito } from "./Carrito.js";

function pedirCantidad() {
  // pide un numero asegurandose que sea tipo number y lo retorna.
  let numero = prompt("Ingrese la cantidad de unidades que quiere añadir a su orden: ");
  while (isNaN(Number(numero)) || numero <= 0) {
    numero = prompt("Ha ingresado una cantidad no valida, ingrese nuevamente: ");
  }
  return numero;
}
function mostrarComidas(comidas) {
  //retorna un string con el nombre y precio de todas las hamburguesas y extras
  let texto = "";
  comidas.forEach((e) => (texto += ` ${e.id}-${e.nombre} -----> $${e.precio}\n`));
  return texto;
}
function addComida(orden) {
  //solicita el ingreso de la eleccion del id correspondiente a la comida que desea añadir al carrito hasta que el usuario ingrese cero.
  let numComida = 0;
  let cantidad = 0;
  do {
    numComida = parseInt(prompt(mostrarComidas(comidas) + "ingrese el numero correspondiente de lo que quiere añadir a su carrito ( 0 para salir ): "));
    if (isNaN(numComida)) alert("El valor otorgado no es un numero");
    if (numComida < 0 || numComida > comidas.length) alert("Ha ingresado un valor fuera de rango");
    if (numComida > 0 && numComida <= comidas.length) {
      let encontrar = comidas.find((e) => e.id === numComida);
      cantidad = pedirCantidad();
      orden.addProducto(encontrar, cantidad);
    }
  } while (numComida !== 0);
}

let orden = new Carrito();
let opcion = 0;
do {
  opcion = parseInt(prompt("1-Añadir una comida a su orden\n2- Ver total a pagar\n3- Realizar una nueva orden \n4- Salir"));
  if (opcion > 0 && opcion <= 4) {
    if (opcion === 1) addComida(orden);
    if (opcion === 2) alert(orden.mostrarCarrito());
    if (opcion === 3) orden = new Carrito();
    if (opcion === 4) alert("Muchas gracias por comprar en SmashBurger!");
  } else {
    alert("Ha ingresado un valor no permitido, intente nuevamente.");
  }
} while (opcion !== 4);
