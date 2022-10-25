import { productos } from "./productos.js";
import { Carrito } from "./Carrito.js";
// -----Funciones-----
function pintarSiTotalVacio() {
  if (carrito1.getTotal == 0) {
    $pedido.innerHTML = `
    <div class="card bg-negroOscuro p-4">
      <img src="./img/index.svg" class="card-img" alt="foto que indica que el pedido esta vacio">
      <div class="card-img-overlay d-flex justify-content-center align-items-center">
        <p class="fs-5 ff-first text-crema m-0 text-center">Su pedido se encuentra vacio</p>
      </div>
    </div>`;
    $total.textContent = `$${0}`;
  } else {
    return `$${carrito1.getTotal}`;
  }
}

function modificarTemplate(templateProductos, pdcto) {
  //recibe el contenido templateProductos y un objeto producto luego modificamos el template asignando valores con los disintos atributos del objeto.
  $templateProductos.querySelector("img").setAttribute("src", pdcto.imagen);
  $templateProductos.querySelector("h5").textContent = pdcto.nombre;
  $templateProductos.querySelectorAll("p")[0].textContent = pdcto.descripcion;
  $templateProductos.querySelectorAll("p")[1].textContent = `$${pdcto.precio}`;
  $templateProductos.querySelector("button").setAttribute("data-btn", `${pdcto.id}`);
}

function evalNum(e) {
  if (/^[1-9]([0-9]+)?$/gm.test(e.target.value)) {
    if (e.target.value <= 99) return e.target.value;
    if (e.target.value > 99) return (e.target.value = 99);
  } else {
    if (e.target.value === "" || e.target.value === "0") return (e.target.value = 1);
  }
}

// -----variables----
const carrito1 = new Carrito(),
  $pedido = document.getElementById("carritoCard"),
  $total = document.getElementById("Total");
pintarSiTotalVacio();

//renderizado de productos
const $contenedorHamburguesas = document.getElementById("hamburguesas"),
  $contenedorExtras = document.getElementById("extras"),
  $contenedorBebidas = document.getElementById("bebidas"),
  $templateProductos = document.getElementById("templateProductos").content,
  $fragmentoHamburguesas = document.createDocumentFragment(),
  $fragmentoExtras = document.createDocumentFragment(),
  $fragmentoBebidas = document.createDocumentFragment();

productos.forEach((e) => {
  if (e.id < 200) {
    modificarTemplate($templateProductos, e);
    const $templateHamburguesas = $templateProductos.cloneNode(true);
    $fragmentoHamburguesas.appendChild($templateHamburguesas);
  }
  if (e.id > 200 && e.id < 300) {
    modificarTemplate($templateProductos, e);
    const $templateExtras = $templateProductos.cloneNode(true);
    $fragmentoExtras.appendChild($templateExtras);
  }
  if (e.id > 300) {
    modificarTemplate($templateProductos, e);
    const $templateBebidas = $templateProductos.cloneNode(true);
    $fragmentoBebidas.appendChild($templateBebidas);
  }
});
$contenedorHamburguesas.appendChild($fragmentoHamburguesas);
$contenedorExtras.appendChild($fragmentoExtras);
$contenedorBebidas.appendChild($fragmentoBebidas);

// ----Eventos-----
// para cada input number y cada boton de añadir al pedido
document.addEventListener("input", (evento) => {
  if (evento.target.matches("#columna_2 input")) {
    evalNum(evento);
  }
});

document.addEventListener("click", (evento) => {
  if (evento.target.matches("#columna_2 button")) {
    let $cantidadIngresada = evento.target.previousElementSibling.value;
    carrito1.addPedido(
      productos.find((pdcto) => pdcto.id == evento.target.dataset.btn),
      $cantidadIngresada
    );
    evento.target.previousElementSibling.value = 1;
    $pedido.innerHTML = carrito1.mostrarCarritoHTML();
    $total.textContent = `$${carrito1.getTotal}`;
  }
  if (evento.target.matches("#carritoCard .btn-remover")) {
    carrito1.delPedido(evento.target.dataset.btn);
    $pedido.innerHTML = carrito1.mostrarCarritoHTML();
    $total.textContent = pintarSiTotalVacio();
  }
  if (evento.target.matches("#columna_3 button") || evento.target.matches("#columna_3 button i")) {
    carrito1.clearPedido();
    $total.textContent = pintarSiTotalVacio();
  }
});
