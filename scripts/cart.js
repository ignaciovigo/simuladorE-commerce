export class Carrito {
  constructor() {
    this._productos = [];
  }
  get getTotal() {
    let total = this._productos.reduce((total, e) => total + e.precio, 0);
    return total;
  }
  get getCantProductos() {
    return this._productos.length;
  }
  addProducto(producto, cantidad = 1) {
    for (let i = 0; i < cantidad; ++i) {
      this._productos.push(producto);
    }
  }
  mostrarCarrito() {
    let resumen = "";
    this._productos.forEach((e) => {
      resumen += `${e.nombre} -----> $${e.precio.toFixed(2)} \n`;
    });
    return `
    ---------CARRITO---------
        nombre  |  precio
    ${resumen}
    ---------TOTAL--------
    ------------- $${this.getTotal.toFixed(2)}`;
  }
}
