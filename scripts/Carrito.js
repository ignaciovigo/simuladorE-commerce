export class Carrito {
  /** Esta clase se encarga de instanciar y administrar un objeto carrito el cual posee un array como atributo.
   * Como acciones principales añade, elimina objetos producto del array o vacia completamente el array.
   * Otro metodo fundamental es mostrarCarritoHTML() que retorna un string con codigo html con datos obtenidos de
   * cada objeto producto al recorrer el array que luego se utilizarán para pintar los objetos del carrito en el DOM.
   */
  constructor() {
    this._productos = [];
  }
  get productos() {
    return this._productos;
  }
  set productos(new_productos) {
    this._productos = new_productos;
  }
  get cantidadPedidos() {
    return this._productos.length;
  }
  get getTotal() {
    return this._productos.reduce((total, e) => total + e.precio * e.cantidad, 0).toFixed(2);
  }
  addPedido(producto) {
    let indice = this._productos.findIndex((elemento) => elemento.id === producto.id);
    if (indice !== -1) this._productos[indice].cantidad += producto.cantidad;
    if (indice === -1) {
      this._productos.push(producto);
    }
  }
  delPedido(id_producto) {
    let removerIndice = this._productos.findIndex((e) => e.id == id_producto);
    if (this._productos[removerIndice].cantidad != 0) {
      this._productos[removerIndice].cantidad--;
      if (this._productos[removerIndice].cantidad == 0) this._productos.splice(removerIndice, 1);
    }
  }
  clearPedido() {
    this._productos.length = 0;
  }
  mostrarCarritoHTML() {
    let resumen = "";
    this._productos.forEach((e) => {
      resumen += `
                  <li class="list-group-item bg-negro rounded itemlistPedido d-flex justify-content-between align-items-center p-2">
                    <p class="ff-first text-amarillo m-0 d-flex justify-content-between w-100 pe-2">${e.nombre} x${e.cantidad}</i><span class="ff-first text-crema">$${e.cantidad * e.precio}</span></p>
                    <button class="btn btn-danger btn-remover" data-btn="${e.id}">
                      <i class="bi bi-x pe-none"></i>
                    </button>
                  </li>`;
    });
    return resumen;
  }
  String() {
    let resumen = "";
    this._productos.forEach((e) => {
      resumen += `[${e.nombre} x ${e.cantidad} | precio: ${e.cantidad * e.precio}]`;
    });
    return resumen;
  }
}
