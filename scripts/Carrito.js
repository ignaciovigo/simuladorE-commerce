export class Carrito {
  constructor() {
    this._productos = [];
  }
  get cantidadPedidos() {
    return this._productos.length;
  }
  get getTotal() {
    return this._productos.reduce((total, e) => total + e.precio * e.cantidad, 0).toFixed(2);
  }
  addPedido(producto, cant) {
    let indice = this._productos.findIndex((elemento) => elemento.id === producto.id);
    if (indice !== -1) this._productos[indice].cantidad += Number(cant);
    if (indice === -1) {
      let obj = { id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: Number(cant) };
      this._productos.push(obj);
    }
  }
  delPedido(id_producto) {
    let removerIndice = this._productos.findIndex((e) => e.id == id_producto);
    this._productos.splice(removerIndice, 1);
  }
  clearPedido() {
    this._productos.length = 0;
  }
  obtenerIds(){
    let ids = this._productos.map(e => e.id);
    return ids
  }
  mostrarCarritoHTML() {
    let resumen = "";
    this._productos.forEach((e) => {
      resumen += `
                  <li class="list-group-item bg-negro rounded itemlistPedido d-flex justify-content-between align-items-end">
                    <p class="ff-first text-uppercase text-amarillo m-0">${e.nombre} X${e.cantidad}</p>
                    <button class="btn btn-danger btn-remover" data-btn="${e.id}">
                      <i class="bi bi-trash btn-remover" data-btn="${e.id}"></i>
                    </button>
                  </li>`;
    });
    return resumen;
  }
}